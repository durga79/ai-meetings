"use client";

import React, { useState, useRef } from "react";
import { ExecutionComponentProps } from "@/types";
import {
    Video,
    FileText,
    Clock,
    CheckCircle2,
    AlertCircle,
    Play,
    Pause,
    Download,
    User,
    Maximize2,
    Volume2,
    VolumeX,
    Loader2,
    Calendar,
    Timer,
    Users,
    Sparkles,
    Mail,
    ChevronRight,
} from "lucide-react";
import { generateMeetingNotes, sendMeetingNotesEmail, type MeetingNotesResponse } from "../../lib/api";

// Simple markdown to HTML converter
const markdownToHtml = (markdown: string): string => {
    if (!markdown) return "";
    
    let html = markdown
        // Escape HTML first
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        // Headers
        .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-4 mb-2">$1</h2>')
        .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-4 mb-2">$1</h1>')
        // Bold and italic
        .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Lists
        .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
        .replace(/^\d+\. (.+)$/gm, '<li class="ml-4">$1</li>')
        // Line breaks
        .replace(/\n\n/g, '</p><p class="mt-2">')
        .replace(/\n/g, '<br/>');
    
    // Wrap in paragraph if not already
    if (!html.startsWith('<')) {
        html = `<p class="mt-2">${html}</p>`;
    }
    
    return html;
};

// Recall.ai transcript format types
interface RecallTimestamp {
    relative: number;
    absolute: string;
}

interface RecallWord {
    text: string;
    start_timestamp: RecallTimestamp | number;
    end_timestamp: RecallTimestamp | number;
}

interface RecallParticipant {
    id: number;
    name: string;
    is_host?: boolean;
    platform?: string;
    email?: string | null;
    extra_data?: any;
}

interface RecallTranscriptSegment {
    participant: RecallParticipant;
    words: RecallWord[];
}

interface ParsedTranscriptEntry {
    speakerId: number;
    speakerName: string;
    isHost: boolean;
    text: string;
    startTime: number;
    endTime: number;
}

interface SpeakerInfo {
    id: number;
    name: string;
    isHost: boolean;
}

interface StatusChange {
    code: string;
    message: string | null;
    created_at: string;
    sub_code: string | null;
}

const BotOutputRetriever = ({
    logs,
    isLoading,
    isFetching,
    handleMessageSubmit,
    setUIKey,
}: ExecutionComponentProps) => {
    const [activeTab, setActiveTab] = useState<"recording" | "transcript" | "notes">("recording");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Meeting Notes State
    const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
    const [meetingNotes, setMeetingNotes] = useState<MeetingNotesResponse["data"] | null>(null);
    const [notesError, setNotesError] = useState<string | null>(null);

    // Email Modal State
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState<string | null>(null);

    const isBusy = isLoading || isFetching;

    const executionContext = (logs as any)?.execution_context || {};
    const contextValues = Object.values(executionContext);

    const botRetrieverContext = (contextValues.find(
        (c: any) =>
            (c as any).agent_title === "Bot Details Retriever" ||
            (c as any).agent_role === "Bot Details Retriever"
    ) || contextValues[0] || {}) as any;

    const outputData = botRetrieverContext?.output_data || {};
    const status = botRetrieverContext?.status || (logs as any)?.status || "pending";
    const isCompleted = status === "completed";
    const hasError = botRetrieverContext?.error;

    const botId = outputData?.id || "";
    const botName = outputData?.bot_name || "Wexa's Meeting Assistant";
    const meetingUrl = outputData?.meeting_url || {};
    const platform = meetingUrl?.platform?.replace(/_/g, " ") || "Unknown";
    const meetingId = meetingUrl?.meeting_id || "";
    const joinAt = outputData?.join_at ? new Date(outputData.join_at) : null;

    const statusChanges: StatusChange[] = outputData?.status_changes || [];
    const latestStatus = statusChanges.length > 0 ? statusChanges[statusChanges.length - 1] : null;
    const isDone = latestStatus?.code === "done";
    const isRecordingDone = statusChanges.some((s) => s.code === "recording_done");
    const isMeetingEnded = statusChanges.some((s) => s.code === "call_ended");

    const recordings = outputData?.recordings || [];
    const firstRecording = recordings[0] || {};
    const mediaShortcuts = firstRecording?.media_shortcuts || {};

    const videoMixed = mediaShortcuts?.video_mixed || {};
    const videoUrl = videoMixed?.data?.download_url || "";
    const videoStatus = videoMixed?.status?.code || "";
    const isVideoReady = videoStatus === "done" && videoUrl;

    const transcript = mediaShortcuts?.transcript || {};
    const transcriptUrl = transcript?.data?.download_url || "";
    const transcriptStatus = transcript?.status?.code || "";
    const isTranscriptReady = transcriptStatus === "done" && transcriptUrl;

    const recordingStarted = firstRecording?.started_at ? new Date(firstRecording.started_at) : null;
    const recordingEnded = firstRecording?.completed_at ? new Date(firstRecording.completed_at) : null;

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const formatDuration = (start: Date | null, end: Date | null) => {
        if (!start || !end) return "";
        const diffMs = end.getTime() - start.getTime();
        const mins = Math.floor(diffMs / 60000);
        return `${mins} min`;
    };

    const formatDateTime = (date: Date | null) => {
        if (!date) return "";
        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const openFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    // Generate Meeting Notes from Transcript
    const handleGenerateNotes = async (transcriptText: string, participants?: string[]) => {
        setIsGeneratingNotes(true);
        setNotesError(null);

        try {
            const response = await generateMeetingNotes({
                // Transcript text (speaker: message format)
                transcript: transcriptText,
                // Recording URL from Recall.ai
                recording_url: videoUrl || undefined,
                // Transcript JSON URL from Recall.ai
                transcript_url: transcriptUrl || undefined,
                // Bot ID
                bot_id: botId,
                // Meeting metadata
                meeting_title: `Meeting on ${platform}`,
                meeting_date: recordingStarted?.toLocaleDateString() || new Date().toLocaleDateString(),
                meeting_duration: formatDuration(recordingStarted, recordingEnded) || undefined,
                platform: platform,
                // Participants list
                participants: participants,
            });

            if (response.success && response.data) {
                setMeetingNotes(response.data);
                setActiveTab("notes");
            } else {
                throw new Error(response.error || "Failed to generate meeting notes");
            }
        } catch (error) {
            setNotesError(error instanceof Error ? error.message : "Failed to generate notes");
        } finally {
            setIsGeneratingNotes(false);
        }
    };

    // Send Meeting Notes via Email
    const handleSendEmail = async () => {
        if (!emailInput.trim() || !meetingNotes) return;

        setIsSendingEmail(true);
        setEmailError(null);

        try {
            const emailAddresses = emailInput
                .split(/[,;]/)
                .map(email => email.trim())
                .filter(email => email.length > 0);

            if (emailAddresses.length === 0) {
                throw new Error("Please enter at least one valid email address");
            }

            const response = await sendMeetingNotesEmail({
                to: emailAddresses,
                subject: `Meeting Summary - ${meetingNotes.meeting_details?.title || platform} - ${meetingNotes.meeting_details?.date || recordingStarted?.toLocaleDateString()}`,
                summary: meetingNotes.summary,
                mom: meetingNotes.mom,
                action_items: meetingNotes.action_items,
                meeting_title: meetingNotes.meeting_details?.title,
                meeting_date: meetingNotes.meeting_details?.date,
            });

            if (response.success) {
                setEmailSent(true);
                setShowEmailModal(false);
                setEmailInput("");
            } else {
                throw new Error(response.error || "Failed to send email");
            }
        } catch (error) {
            setEmailError(error instanceof Error ? error.message : "Failed to send email");
        } finally {
            setIsSendingEmail(false);
        }
    };

    if (isBusy) {
        return (
            <div className="w-full flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-[hsl(var(--stroke-soft))] overflow-hidden">
                        <div className="h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]" />
                        <div className="px-8 py-10">
                            <div className="flex justify-center mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping" style={{ animationDuration: "2s" }} />
                                    <div className="absolute -inset-2 rounded-full border-2 border-purple-300/30 animate-pulse" />
                                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                        <Video className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-8">
                                <h2 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                    Fetching Recording Details
                                </h2>
                                <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                    Retrieving your meeting data...
                                </p>
                            </div>
                            <div className="flex justify-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="w-full flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-red-200 overflow-hidden">
                        <div className="h-1.5 bg-gradient-to-r from-red-400 to-red-500" />
                        <div className="px-8 py-10 text-center">
                            <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <h2 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                Unable to Retrieve Data
                            </h2>
                            <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                {typeof hasError === "string" ? hasError : "An error occurred while fetching the recording details."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const isRecordingProcessing = firstRecording?.status?.code === "processing";
    const isMeetingInProgress = (!isMeetingEnded && !isRecordingDone && !isDone) || isRecordingProcessing;

    if (isMeetingInProgress && !isVideoReady && !isTranscriptReady) {
        return (
            <div className="w-full flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-amber-200 overflow-hidden">
                        <div className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-400" />
                        <div className="px-8 py-10">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-amber-300/30 animate-pulse" />
                                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-6">
                                <h2 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                    {isRecordingProcessing && isMeetingEnded 
                                        ? "Processing Recording" 
                                        : "Meeting In Progress"}
                                </h2>
                                <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                    {isRecordingProcessing && isMeetingEnded 
                                        ? "Your recording is being processed. This may take a few moments."
                                        : "Recording and transcript will be available once the meeting ends."}
                                </p>
                            </div>
                            {meetingId && (
                                <div className="bg-amber-50 rounded-xl p-4 text-center">
                                    <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-1">Meeting ID</p>
                                    <p className="text-sm text-amber-900 font-mono">{meetingId}</p>
                                    {platform && (
                                        <p className="text-xs text-amber-600 capitalize mt-1">{platform}</p>
                                    )}
                                </div>
                            )}
                            {latestStatus && (
                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-700">
                                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="capitalize">{latestStatus.code.replace(/_/g, " ")}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!isVideoReady && !isTranscriptReady) {
        return (
            <div className="w-full flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-blue-200 overflow-hidden">
                        <div className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-500" />
                        <div className="px-8 py-10">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-blue-300/30 animate-pulse" />
                                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                                        <Timer className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-6">
                                <h2 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                    Processing Recording
                                </h2>
                                <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                    Your recording and transcript are being processed. This may take a few moments.
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-4">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-blue-700">
                                        <Video className="h-4 w-4" />
                                        <span>Video</span>
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${videoStatus === "done" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                                        {videoStatus || "Processing"}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-3">
                                    <div className="flex items-center gap-2 text-blue-700">
                                        <FileText className="h-4 w-4" />
                                        <span>Transcript</span>
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${transcriptStatus === "done" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                                        {transcriptStatus || "Processing"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-2xl w-full">
                <div className="bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-xl border border-[hsl(var(--stroke-default))] overflow-hidden">
                    {/* Success Header */}
                    <div className="bg-gradient-to-r from-[hsl(var(--accent-lime-600))] to-[hsl(var(--accent-sage-600))] px-6 py-5">
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                <CheckCircle2 className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg font-bold text-white">
                                    Meeting Recording Ready
                                </h2>
                                <p className="text-sm text-white/80 truncate">
                                    {platform} • {meetingId}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Meeting Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-[hsl(var(--surface-container-raised))] rounded-xl p-4 text-center border border-[hsl(var(--stroke-soft))]">
                                <Calendar className="w-5 h-5 text-[hsl(var(--brand-purple-300))] mx-auto mb-2" />
                                <p className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] uppercase tracking-wider font-medium mb-1">Date</p>
                                <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))]">
                                    {recordingStarted ? formatDateTime(recordingStarted) : "-"}
                                </p>
                            </div>
                            <div className="bg-[hsl(var(--surface-container-raised))] rounded-xl p-4 text-center border border-[hsl(var(--stroke-soft))]">
                                <Timer className="w-5 h-5 text-[hsl(var(--brand-purple-300))] mx-auto mb-2" />
                                <p className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] uppercase tracking-wider font-medium mb-1">Duration</p>
                                <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))]">
                                    {formatDuration(recordingStarted, recordingEnded) || "-"}
                                </p>
                            </div>
                            <div className="bg-[hsl(var(--surface-container-raised))] rounded-xl p-4 text-center border border-[hsl(var(--stroke-soft))]">
                                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-lime-400))] mx-auto mb-2" />
                                <p className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] uppercase tracking-wider font-medium mb-1">Status</p>
                                <p className="text-sm font-semibold text-[hsl(var(--accent-lime-400))]">Completed</p>
                            </div>
                        </div>

                        {/* Tab Buttons - Clear Button Styling */}
                        <div className="flex gap-3 mb-6">
                            <button
                                type="button"
                                onClick={() => setActiveTab("recording")}
                                disabled={!isVideoReady}
                                className={`flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-xl text-sm font-bold transition-all duration-200 border-2 shadow-md ${
                                    activeTab === "recording"
                                        ? "bg-[hsl(var(--brand-purple-600))] text-white border-[hsl(var(--brand-purple-600))] shadow-[hsl(var(--brand-purple-600))]/30"
                                        : "bg-[hsl(var(--surface-container-raised))] text-[hsl(var(--text-inverse-default))] border-[hsl(var(--stroke-soft))] hover:border-[hsl(var(--brand-purple-600))] hover:bg-[hsl(var(--surface-container-purple))]"
                                } ${!isVideoReady ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                                    activeTab === "recording" 
                                        ? "bg-white/20" 
                                        : "bg-[hsl(var(--brand-purple-950))]"
                                }`}>
                                    <Video className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-2">
                                        <span>Recording</span>
                                        {isVideoReady && (
                                            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-lime-400))] animate-pulse" />
                                        )}
                                    </div>
                                    <span className={`text-xs font-normal ${activeTab === "recording" ? "text-white/70" : "text-[hsl(var(--text-inverse-subtlest))]"}`}>
                                        {isVideoReady ? "Click to watch" : "Processing..."}
                                    </span>
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("transcript")}
                                disabled={!isTranscriptReady}
                                className={`flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-xl text-sm font-bold transition-all duration-200 border-2 shadow-md ${
                                    activeTab === "transcript"
                                        ? "bg-[hsl(var(--brand-purple-600))] text-white border-[hsl(var(--brand-purple-600))] shadow-[hsl(var(--brand-purple-600))]/30"
                                        : "bg-[hsl(var(--surface-container-raised))] text-[hsl(var(--text-inverse-default))] border-[hsl(var(--stroke-soft))] hover:border-[hsl(var(--brand-purple-600))] hover:bg-[hsl(var(--surface-container-purple))]"
                                } ${!isTranscriptReady ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                                    activeTab === "transcript" 
                                        ? "bg-white/20" 
                                        : "bg-[hsl(var(--brand-purple-950))]"
                                }`}>
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-2">
                                        <span>Transcript</span>
                                        {isTranscriptReady && (
                                            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-lime-400))] animate-pulse" />
                                        )}
                                    </div>
                                    <span className={`text-xs font-normal ${activeTab === "transcript" ? "text-white/70" : "text-[hsl(var(--text-inverse-subtlest))]"}`}>
                                        {isTranscriptReady ? "Click to read" : "Processing..."}
                                    </span>
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("notes")}
                                disabled={!isTranscriptReady && !meetingNotes}
                                className={`flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-xl text-sm font-bold transition-all duration-200 border-2 shadow-md ${
                                    activeTab === "notes"
                                        ? "bg-gradient-to-r from-[hsl(var(--accent-lime-500))] to-[hsl(var(--accent-sage-600))] text-white border-transparent shadow-[hsl(var(--accent-lime-500))]/30"
                                        : "bg-[hsl(var(--surface-container-raised))] text-[hsl(var(--text-inverse-default))] border-[hsl(var(--stroke-soft))] hover:border-[hsl(var(--accent-lime-500))] hover:bg-[hsl(var(--surface-container-active))]"
                                } ${(!isTranscriptReady && !meetingNotes) ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                                    activeTab === "notes" 
                                        ? "bg-white/20" 
                                        : "bg-[hsl(var(--accent-sage-950))]"
                                }`}>
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-2">
                                        <span>AI Notes</span>
                                        {meetingNotes && (
                                            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-lime-400))] animate-pulse" />
                                        )}
                                    </div>
                                    <span className={`text-xs font-normal ${activeTab === "notes" ? "text-white/70" : "text-[hsl(var(--text-inverse-subtlest))]"}`}>
                                        {meetingNotes ? "View summary" : isGeneratingNotes ? "Generating..." : "Generate"}
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Content Area */}
                        {activeTab === "recording" && isVideoReady && (
                            <div className="rounded-xl overflow-hidden bg-black border border-[hsl(var(--stroke-default))]">
                                <div className="relative aspect-video">
                                    <video
                                        ref={videoRef}
                                        src={videoUrl}
                                        className="w-full h-full object-contain"
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        onEnded={() => setIsPlaying(false)}
                                        playsInline
                                    />
                                    {!isPlaying && (
                                        <button
                                            type="button"
                                            onClick={handlePlayPause}
                                            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
                                        >
                                            <div className="h-20 w-20 rounded-full bg-[hsl(var(--brand-purple-600))] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-[hsl(var(--brand-purple-600))]/40">
                                                <Play className="w-8 h-8 text-white ml-1" />
                                            </div>
                                        </button>
                                    )}
                                </div>
                                {/* Video Controls */}
                                <div className="bg-[hsl(var(--surface-container-default))] px-4 py-3 border-t border-[hsl(var(--stroke-default))]">
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePlayPause}
                                            className="h-10 w-10 rounded-lg bg-[hsl(var(--brand-purple-600))] hover:bg-[hsl(var(--brand-purple-800))] flex items-center justify-center transition-colors shadow-md"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-5 h-5 text-white" />
                                            ) : (
                                                <Play className="w-5 h-5 text-white ml-0.5" />
                                            )}
                                        </button>
                                        <div className="flex-1 flex items-center gap-3">
                                            <span className="text-xs text-[hsl(var(--text-inverse-subtle))] font-mono w-12">{formatTime(currentTime)}</span>
                                            <input
                                                type="range"
                                                min={0}
                                                max={duration || 100}
                                                value={currentTime}
                                                onChange={handleSeek}
                                                className="flex-1 h-2 bg-[hsl(var(--stroke-soft))] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--brand-purple-600))] [&::-webkit-slider-thumb]:shadow-md"
                                            />
                                            <span className="text-xs text-[hsl(var(--text-inverse-subtle))] font-mono w-12 text-right">{formatTime(duration)}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={toggleMute}
                                            className="h-10 w-10 rounded-lg bg-[hsl(var(--surface-container-raised))] hover:bg-[hsl(var(--surface-container-purple))] flex items-center justify-center transition-colors border border-[hsl(var(--stroke-soft))]"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5 text-[hsl(var(--text-inverse-subtle))]" />
                                            ) : (
                                                <Volume2 className="w-5 h-5 text-[hsl(var(--text-inverse-default))]" />
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={openFullscreen}
                                            className="h-10 w-10 rounded-lg bg-[hsl(var(--surface-container-raised))] hover:bg-[hsl(var(--surface-container-purple))] flex items-center justify-center transition-colors border border-[hsl(var(--stroke-soft))]"
                                        >
                                            <Maximize2 className="w-5 h-5 text-[hsl(var(--text-inverse-default))]" />
                                        </button>
                                        <a
                                            href={videoUrl}
                                            download
                                            target="_blank"
                                            rel="noreferrer"
                                            className="h-10 w-10 rounded-lg bg-[hsl(var(--accent-lime-600))] hover:bg-[hsl(var(--accent-lime-500))] flex items-center justify-center transition-colors shadow-md"
                                        >
                                            <Download className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "transcript" && isTranscriptReady && (
                            <TranscriptViewer 
                                transcriptUrl={transcriptUrl} 
                                onGenerateNotes={handleGenerateNotes}
                                isGeneratingNotes={isGeneratingNotes}
                            />
                        )}

                        {/* Notes Tab Content */}
                        {activeTab === "notes" && (
                            <div className="space-y-4">
                                {/* Not generated yet - show generate button */}
                                {!meetingNotes && !isGeneratingNotes && (
                                    <div className="text-center py-12 px-6">
                                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-lime-500))] to-[hsl(var(--accent-sage-600))] flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                            Generate AI Meeting Notes
                                        </h3>
                                        <p className="text-sm text-[hsl(var(--text-inverse-subtle))] mb-6 max-w-sm mx-auto">
                                            Our AI will analyze the transcript and create a summary, minutes of meeting, and action items.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                // We need to get the transcript text - will be passed from TranscriptViewer
                                                setActiveTab("transcript");
                                            }}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-lime-500))] to-[hsl(var(--accent-sage-600))] text-white font-semibold hover:from-[hsl(var(--accent-lime-600))] hover:to-[hsl(var(--accent-sage-600))] transition-all shadow-lg hover:shadow-xl"
                                        >
                                            <Sparkles className="w-5 h-5" />
                                            Generate from Transcript
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}

                                {/* Generating loading state */}
                                {isGeneratingNotes && (
                                    <div className="text-center py-12 px-6">
                                        <div className="relative mx-auto mb-6 w-16 h-16">
                                            <div className="absolute inset-0 rounded-full bg-[hsl(var(--accent-lime-400))]/20 animate-ping" />
                                            <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[hsl(var(--accent-lime-500))] to-[hsl(var(--accent-sage-600))] flex items-center justify-center">
                                                <Loader2 className="w-8 h-8 text-white animate-spin" />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                            Generating Meeting Notes
                                        </h3>
                                        <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                            AI is analyzing the transcript...
                                        </p>
                                    </div>
                                )}

                                {/* Error state */}
                                {notesError && (
                                    <div className="text-center py-8 px-6">
                                        <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                            <AlertCircle className="w-7 h-7 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                            Failed to Generate Notes
                                        </h3>
                                        <p className="text-sm text-[hsl(var(--semantic-error-surface))] mb-4">
                                            {notesError}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setNotesError(null);
                                                setActiveTab("transcript");
                                            }}
                                            className="text-sm text-[hsl(var(--brand-purple-600))] hover:underline"
                                        >
                                            Try again from transcript
                                        </button>
                                    </div>
                                )}

                                {/* Meeting Notes Content */}
                                {meetingNotes && !isGeneratingNotes && (
                                    <div className="space-y-4">
                                        {/* Quick Stats */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-base font-semibold text-[hsl(var(--text-inverse-default))]">
                                                    {meetingNotes.meeting_details?.title || "Meeting Notes"}
                                                </h3>
                                                <p className="text-xs text-[hsl(var(--text-inverse-subtle))]">
                                                    {meetingNotes.meeting_details?.date} • {meetingNotes.meeting_details?.duration}
                                                </p>
                                            </div>
                                            {emailSent ? (
                                                <div className="flex items-center gap-1.5 text-[hsl(var(--accent-lime-600))]">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span className="text-xs font-medium">Email Sent</span>
                                                </div>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setShowEmailModal(true)}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[hsl(var(--brand-purple-600))] to-[hsl(var(--brand-purple-800))] text-white text-sm font-medium hover:from-[hsl(var(--brand-purple-800))] hover:to-[hsl(var(--brand-purple-950))] transition-all shadow-md"
                                                >
                                                    <Mail className="w-4 h-4" />
                                                    Send Email
                                                </button>
                                            )}
                                        </div>

                                        {/* Summary Section */}
                                        <div className="bg-[hsl(var(--surface-container-default-lighter))] rounded-xl p-4 border border-[hsl(var(--stroke-soft))]">
                                            <h4 className="text-sm font-semibold text-[hsl(var(--brand-purple-600))] mb-2 flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                Summary
                                            </h4>
                                            <div 
                                                className="text-sm text-[hsl(var(--text-inverse-default))] prose prose-sm max-w-none meeting-notes-content [&_strong]:text-[hsl(var(--brand-purple-300))] [&_em]:text-[hsl(var(--text-inverse-subtle))] [&_h3]:text-[hsl(var(--text-inverse-default))] [&_li]:list-disc"
                                                dangerouslySetInnerHTML={{ __html: markdownToHtml(meetingNotes.summary || "") }}
                                            />
                                        </div>

                                        {/* MOM Section */}
                                        <div className="bg-[hsl(var(--surface-container-default-lighter))] rounded-xl p-4 border border-[hsl(var(--stroke-soft))]">
                                            <h4 className="text-sm font-semibold text-[hsl(var(--brand-purple-600))] mb-2 flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                Minutes of Meeting
                                            </h4>
                                            <div 
                                                className="text-sm text-[hsl(var(--text-inverse-default))] prose prose-sm max-w-none meeting-notes-content [&_strong]:text-[hsl(var(--brand-purple-300))] [&_em]:text-[hsl(var(--text-inverse-subtle))] [&_h3]:text-[hsl(var(--text-inverse-default))] [&_li]:list-disc"
                                                dangerouslySetInnerHTML={{ __html: markdownToHtml(meetingNotes.mom || "") }}
                                            />
                                        </div>

                                        {/* Action Items Section */}
                                        <div className="bg-[hsl(var(--surface-container-default-lighter))] rounded-xl p-4 border border-[hsl(var(--stroke-soft))]">
                                            <h4 className="text-sm font-semibold text-[hsl(var(--brand-purple-600))] mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Action Items
                                            </h4>
                                            <div 
                                                className="text-sm text-[hsl(var(--text-inverse-default))] prose prose-sm max-w-none meeting-notes-content [&_strong]:text-[hsl(var(--brand-purple-300))] [&_em]:text-[hsl(var(--text-inverse-subtle))] [&_h3]:text-[hsl(var(--text-inverse-default))] [&_li]:list-disc"
                                                dangerouslySetInnerHTML={{ __html: markdownToHtml(meetingNotes.action_items || "") }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {botId && (
                        <div className="px-6 py-3 border-t border-[hsl(var(--stroke-soft))] bg-[hsl(var(--surface-container-default-lighter))]">
                            <p className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] text-center font-mono">
                                Session ID: {botId.slice(0, 8)}...{botId.slice(-4)}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                        <div className="px-6 py-4 border-b border-[hsl(var(--stroke-soft))] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-[hsl(var(--brand-purple-100))] flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[hsl(var(--brand-purple-600))]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[hsl(var(--text-inverse-default))]">Send Meeting Notes</h3>
                                    <p className="text-xs text-[hsl(var(--text-inverse-subtle))]">Share with your team</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowEmailModal(false);
                                    setEmailError(null);
                                }}
                                className="h-8 w-8 rounded-lg hover:bg-[hsl(var(--surface-container-active))] flex items-center justify-center transition-colors text-[hsl(var(--text-inverse-subtle))]"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-6">
                            <label className="block text-sm font-medium text-[hsl(var(--text-inverse-default))] mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                placeholder="colleague@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--stroke-soft))] bg-[hsl(var(--surface-container-default-lighter))] text-[hsl(var(--text-inverse-default))] placeholder:text-[hsl(var(--text-inverse-subtlest))] focus:outline-none focus:border-[hsl(var(--brand-purple-600))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-300))]/20"
                            />
                            <p className="text-xs text-[hsl(var(--text-inverse-subtlest))] mt-2">
                                Separate multiple emails with commas
                            </p>

                            {emailError && (
                                <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-sm text-red-400">{emailError}</p>
                                </div>
                            )}

                            <div className="mt-6 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowEmailModal(false);
                                        setEmailError(null);
                                    }}
                                    className="flex-1 px-4 py-2.5 rounded-xl border border-[hsl(var(--stroke-soft))] text-[hsl(var(--text-inverse-default))] text-sm font-medium hover:bg-[hsl(var(--surface-container-active))] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSendEmail}
                                    disabled={!emailInput.trim() || isSendingEmail}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-purple-600))] to-[hsl(var(--brand-purple-800))] text-white text-sm font-medium hover:from-[hsl(var(--brand-purple-800))] hover:to-[hsl(var(--brand-purple-950))] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSendingEmail ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="w-4 h-4" />
                                            Send
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

interface SpeakerData {
    id: number;
    name: string;
    isHost: boolean;
}

interface TranscriptViewerProps {
    transcriptUrl: string;
    onGenerateNotes?: (transcriptText: string, participants?: string[]) => void;
    isGeneratingNotes?: boolean;
}

const TranscriptViewer = ({ transcriptUrl, onGenerateNotes, isGeneratingNotes }: TranscriptViewerProps) => {
    const [transcriptEntries, setTranscriptEntries] = useState<ParsedTranscriptEntry[]>([]);
    const [isLoadingTranscript, setIsLoadingTranscript] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [speakers, setSpeakers] = useState<SpeakerData[]>([]);
    const [rawTranscriptText, setRawTranscriptText] = useState<string>("");

    const getTimestampValue = (timestamp: any): number => {
        if (timestamp === undefined || timestamp === null) return 0;
        if (typeof timestamp === "number") return timestamp;
        if (typeof timestamp === "object" && timestamp.relative !== undefined) {
            return timestamp.relative;
        }
        return 0;
    };

    const getDisplayName = (name: string): string => {
        if (name.includes("_")) {
            return name.split("_").pop() || name;
        }
        return name;
    };

    const getInitials = (name: string): string => {
        const displayName = getDisplayName(name);
        const parts = displayName.trim().split(/\s+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return displayName.slice(0, 2).toUpperCase();
    };

    React.useEffect(() => {
        const fetchTranscript = async () => {
            try {
                setIsLoadingTranscript(true);
                const response = await fetch(transcriptUrl);
                if (!response.ok) {
                    throw new Error("Failed to fetch transcript");
                }
                const data = await response.json();
                
                const entries: ParsedTranscriptEntry[] = [];
                const speakersMap = new Map<number, SpeakerData>();

                if (Array.isArray(data)) {
                    data.forEach((segment: any) => {
                        const participant = segment.participant;
                        if (!participant) return;

                        const speakerId = participant.id || 0;
                        const speakerName = participant.name || `Speaker ${speakerId}`;
                        const isHost = participant.is_host || false;

                        if (!speakersMap.has(speakerId)) {
                            speakersMap.set(speakerId, { id: speakerId, name: speakerName, isHost });
                        }

                        const words = segment.words;
                        if (words && Array.isArray(words) && words.length > 0) {
                            const text = words.map((w: any) => w.text).join(" ");
                            const startTime = getTimestampValue(words[0]?.start_timestamp);
                            const endTime = getTimestampValue(words[words.length - 1]?.end_timestamp);
                            
                            entries.push({
                                speakerId,
                                speakerName,
                                isHost,
                                text: text.trim(),
                                startTime,
                                endTime,
                            });
                        }
                    });
                }

                const sortedSpeakers = Array.from(speakersMap.values()).sort((a, b) => {
                    if (a.isHost && !b.isHost) return -1;
                    if (!a.isHost && b.isHost) return 1;
                    return a.id - b.id;
                });

                setTranscriptEntries(entries);
                setSpeakers(sortedSpeakers);
                
                // Create raw text version for LLM processing
                const textForLLM = entries.map(entry => 
                    `${entry.speakerName}: ${entry.text}`
                ).join("\n\n");
                setRawTranscriptText(textForLLM);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load transcript");
            } finally {
                setIsLoadingTranscript(false);
            }
        };

        fetchTranscript();
    }, [transcriptUrl]);

    const formatTimestamp = (seconds: number): string => {
        if (isNaN(seconds) || seconds < 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const getSpeakerColor = (speakerId: number) => {
        const colors = [
            { bg: "bg-[hsl(var(--brand-purple-950))]", text: "text-[hsl(var(--brand-purple-300))]", avatar: "bg-[hsl(var(--brand-purple-600))]" },
            { bg: "bg-[hsl(var(--accent-sage-950))]", text: "text-[hsl(var(--accent-sage-400))]", avatar: "bg-[hsl(var(--accent-sage-600))]" },
            { bg: "bg-[hsl(var(--accent-orange-950))]", text: "text-[hsl(var(--accent-orange-400))]", avatar: "bg-[hsl(var(--accent-orange-600))]" },
            { bg: "bg-[hsl(var(--accent-pink-950))]", text: "text-[hsl(var(--accent-pink-400))]", avatar: "bg-[hsl(var(--accent-pink-600))]" },
        ];
        return colors[speakerId % colors.length];
    };

    const getTotalDuration = (): string => {
        if (transcriptEntries.length === 0) return "0:00";
        const lastEntry = transcriptEntries[transcriptEntries.length - 1];
        return formatTimestamp(lastEntry.endTime);
    };

    if (isLoadingTranscript) {
        return (
            <div className="rounded-2xl bg-[hsl(var(--surface-container-default))] border border-[hsl(var(--stroke-default))] p-8 text-center">
                <Loader2 className="w-8 h-8 text-[hsl(var(--brand-purple-600))] animate-spin mx-auto mb-4" />
                <p className="text-sm font-medium text-[hsl(var(--text-inverse-default))]">Loading transcript...</p>
                <p className="text-xs text-[hsl(var(--text-inverse-subtlest))] mt-1">Parsing speaker data</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl bg-[hsl(var(--accent-orange-950))] border border-[hsl(var(--accent-orange-600))] p-6 text-center">
                <AlertCircle className="w-8 h-8 text-[hsl(var(--accent-orange-400))] mx-auto mb-3" />
                <p className="text-sm font-medium text-[hsl(var(--accent-orange-300))]">{error}</p>
                <a
                    href={transcriptUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-[hsl(var(--text-inverse-default))] bg-[hsl(var(--surface-container-raised))] px-4 py-2 rounded-lg border border-[hsl(var(--stroke-soft))]"
                >
                    <Download className="w-4 h-4" />
                    Download Raw File
                </a>
            </div>
        );
    }

    if (!transcriptEntries || transcriptEntries.length === 0) {
        return (
            <div className="rounded-2xl bg-[hsl(var(--surface-container-default))] border border-[hsl(var(--stroke-default))] p-8 text-center">
                <FileText className="w-10 h-10 text-[hsl(var(--text-inverse-subtlest))] mx-auto mb-3" />
                <p className="text-sm font-medium text-[hsl(var(--text-inverse-subtle))]">No transcript content available</p>
                <a
                    href={transcriptUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-[hsl(var(--brand-purple-300))] bg-[hsl(var(--surface-container-raised))] px-4 py-2 rounded-lg border border-[hsl(var(--stroke-soft))]"
                >
                    <Download className="w-4 h-4" />
                    Download Raw File
                </a>
            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-[hsl(var(--surface-container-default))] border border-[hsl(var(--stroke-default))] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[hsl(var(--stroke-soft))] bg-[hsl(var(--surface-container-purple))]">
                <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-[hsl(var(--brand-purple-600))] flex items-center justify-center shadow-lg">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-[hsl(var(--text-inverse-default))]">Meeting Transcript</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-[hsl(var(--brand-purple-300))] font-medium">{transcriptEntries.length} segments</span>
                            <span className="text-[hsl(var(--text-inverse-subtlest))]">•</span>
                            <span className="text-xs text-[hsl(var(--text-inverse-subtlest))]">{getTotalDuration()} total</span>
                        </div>
                    </div>
                </div>
                <a
                    href={transcriptUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--brand-purple-300))] hover:text-[hsl(var(--brand-purple-100))] bg-[hsl(var(--surface-container-raised))] px-4 py-2.5 rounded-xl border border-[hsl(var(--stroke-soft))] hover:border-[hsl(var(--brand-purple-600))] transition-all"
                >
                    <Download className="w-4 h-4" />
                    Export
                </a>
            </div>

            {/* Participants */}
            {speakers.length > 0 && (
                <div className="px-5 py-4 border-b border-[hsl(var(--stroke-soft))] bg-[hsl(var(--surface-container-default-lighter))]">
                    <p className="text-xs text-[hsl(var(--text-inverse-subtlest))] mb-3 uppercase tracking-wider font-bold">
                        Participants ({speakers.length})
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {speakers.map((speaker) => {
                            const colors = getSpeakerColor(speaker.id);
                            return (
                                <div
                                    key={speaker.id}
                                    className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl ${colors.bg} border border-[hsl(var(--stroke-soft))]`}
                                >
                                    <div className={`w-9 h-9 rounded-lg ${colors.avatar} flex items-center justify-center shadow-md`}>
                                        <span className="text-xs font-bold text-white">
                                            {getInitials(speaker.name)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-sm font-bold ${colors.text}`}>
                                            {getDisplayName(speaker.name)}
                                        </span>
                                        {speaker.isHost && (
                                            <span className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] font-medium uppercase tracking-wide">Meeting Host</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Transcript Content */}
            <div className="max-h-[450px] overflow-y-auto">
                <div className="p-5">
                    {transcriptEntries.map((entry, index) => {
                        const colors = getSpeakerColor(entry.speakerId);
                        const prevEntry = index > 0 ? transcriptEntries[index - 1] : null;
                        const showSpeakerHeader = !prevEntry || prevEntry.speakerId !== entry.speakerId;
                        
                        return (
                            <div key={index} className={showSpeakerHeader ? "mt-6 first:mt-0" : "mt-3"}>
                                {showSpeakerHeader && (
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-xl ${colors.avatar} flex items-center justify-center shadow-md`}>
                                            <span className="text-sm font-bold text-white">
                                                {getInitials(entry.speakerName)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-sm font-bold ${colors.text}`}>
                                                    {getDisplayName(entry.speakerName)}
                                                </span>
                                                {entry.isHost && (
                                                    <span className="text-[10px] bg-[hsl(var(--brand-purple-950))] text-[hsl(var(--brand-purple-300))] px-2 py-0.5 rounded-md font-bold uppercase border border-[hsl(var(--brand-purple-800))]">
                                                        Host
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-[hsl(var(--text-inverse-subtlest))] font-medium">
                                                {formatTimestamp(entry.startTime)}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="ml-[52px] flex items-start gap-3">
                                    <span className="text-[11px] text-[hsl(var(--text-inverse-subtlest))] font-mono bg-[hsl(var(--surface-container-raised))] px-2.5 py-1 rounded-md flex-shrink-0 min-w-[52px] text-center font-medium border border-[hsl(var(--stroke-soft))]">
                                        {formatTimestamp(entry.startTime)}
                                    </span>
                                    <p className="text-sm text-[hsl(var(--text-inverse-default))] leading-relaxed flex-1">
                                        {entry.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer with Generate Notes Button */}
            <div className="px-5 py-4 border-t border-[hsl(var(--stroke-soft))] bg-[hsl(var(--surface-container-default-lighter))]">
                <div className="flex items-center justify-between">
                    <p className="text-[11px] text-[hsl(var(--text-inverse-subtlest))]">
                        Powered by <span className="font-semibold text-[hsl(var(--brand-purple-300))]">Wexa AI</span> & <span className="font-semibold text-[hsl(var(--text-inverse-subtle))]">Recall.ai</span>
                    </p>
                    {onGenerateNotes && rawTranscriptText && (
                        <button
                            type="button"
                            onClick={() => onGenerateNotes(rawTranscriptText, speakers.map(s => s.name))}
                            disabled={isGeneratingNotes}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-lime-500))] to-[hsl(var(--accent-sage-600))] text-white text-sm font-semibold hover:from-[hsl(var(--accent-lime-600))] hover:to-[hsl(var(--accent-sage-600))] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isGeneratingNotes ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4" />
                                    Generate AI Notes
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BotOutputRetriever;

