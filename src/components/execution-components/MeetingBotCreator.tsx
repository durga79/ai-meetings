"use client";

import React from "react";
import { ExecutionComponentProps } from "@/types";
import { CheckCircle2, Video, Clock, FileText, ExternalLink, Mic, Zap, PlayCircle, ChevronRight } from "lucide-react";

const MeetingBotCreator = ({
    logs,
    isLoading,
    isFetching,
    handleMessageSubmit,
    setUIKey,
}: ExecutionComponentProps) => {
    const isBusy = isLoading || isFetching;

    // Extract data from execution context
    const executionContext = (logs as any)?.execution_context || {};
    const contextValues = Object.values(executionContext);

    // Find the Bot Creator agent context
    const botCreatorContext = (contextValues.find(
        (c: any) => (c as any).agent_title === "Bot Creator" || (c as any).agent_role === "Bot Creator"
    ) || contextValues[0] || {}) as any;

    // Extract output data
    const outputData = botCreatorContext?.output_data || {};
    const meetingUrl = outputData?.meeting_url || {};
    const recordingConfig = outputData?.recording_config || {};

    // Details
    const assistantId = outputData?.id || "";
    const platform = meetingUrl?.platform?.replace(/_/g, " ") || "Unknown";
    const meetingId = meetingUrl?.meeting_id || "";
    const joinAt = outputData?.join_at ? new Date(outputData.join_at).toLocaleString() : "";

    // Recording config
    const transcriptEnabled = recordingConfig?.transcript?.provider?.recallai_streaming ? true : false;
    const retentionType = recordingConfig?.retention?.type || "forever";
    const videoLayout = recordingConfig?.video_mixed_layout || "speaker_view";

    // Status from logs
    const status = (logs as any)?.status || botCreatorContext?.status || "pending";
    const isCompleted = status === "completed";

    // Generate meeting URL for external link
    const getMeetingLink = () => {
        if (platform.toLowerCase().includes("google")) {
            return `https://meet.google.com/${meetingId}`;
        } else if (platform.toLowerCase().includes("zoom")) {
            return `https://zoom.us/j/${meetingId}`;
        }
        return null;
    };

    const meetingLink = getMeetingLink();

    // Loading or waiting for data - show beautiful waiting state
    if (isBusy || (!outputData?.id && !isCompleted)) {
        return (
            <div className="w-full flex justify-center">
                <div className="max-w-md w-full">
                    {/* Minimal elegant loading card */}
                    <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-[hsl(var(--stroke-soft))] overflow-hidden">
                        {/* Animated header bar */}
                        <div className="h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]" />
                        
                        <div className="px-8 py-10">
                            {/* Animated Icon */}
                            <div className="flex justify-center mb-8">
                                <div className="relative">
                                    {/* Outer glow ring */}
                                    <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping" style={{ animationDuration: '2s' }} />
                                    {/* Middle ring */}
                                    <div className="absolute -inset-2 rounded-full border-2 border-purple-300/30 animate-pulse" />
                                    {/* Icon container */}
                                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Status Text */}
                            <div className="text-center mb-8">
                                <h2 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-2">
                                    Setting up Wexa&apos;s AI Assistant
                                </h2>
                                <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                    This will only take a moment
                                </p>
                            </div>

                            {/* Animated dots loader */}
                            <div className="flex justify-center gap-1.5 mb-8">
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>

                            {/* What's happening - simple icons */}
                            <div className="flex justify-center gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                        <Video className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <span className="text-xs text-[hsl(var(--text-inverse-subtlest))]">Record</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                        <Mic className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <span className="text-xs text-[hsl(var(--text-inverse-subtlest))]">Transcribe</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <span className="text-xs text-[hsl(var(--text-inverse-subtlest))]">Notes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Success state - assistant has been added
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-md w-full">
                <div className="bg-[hsl(var(--surface-container-default))] rounded-3xl shadow-lg border border-[hsl(var(--stroke-soft))] overflow-hidden">
                    {/* Success header */}
                    <div className="h-1.5 bg-gradient-to-r from-green-400 to-emerald-500" />
                    
                    <div className="px-6 py-6">
                        {/* Success icon and message */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-[hsl(var(--text-inverse-default))]">
                                    Added successfully
                                </h2>
                                <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
                                    Wexa&apos;s AI Assistant will join your meeting
                                </p>
                            </div>
                        </div>

                        {/* Meeting info card */}
                        <div className="rounded-2xl bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] p-4 mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center">
                                        <Video className="h-5 w-5 text-[hsl(var(--surface-inverse))]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[hsl(var(--text-inverse-default))] capitalize">
                                            {platform}
                                        </p>
                                        <p className="text-xs text-[hsl(var(--text-inverse-subtle))]">
                                            {meetingId}
                                        </p>
                                    </div>
                                </div>
                                {meetingLink && (
                                    <a
                                        href={meetingLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="h-8 w-8 rounded-lg bg-[hsl(var(--surface-container-default))] border border-[hsl(var(--stroke-soft))] flex items-center justify-center hover:bg-[hsl(var(--surface-interactive-subtle))] transition-colors"
                                    >
                                        <ExternalLink className="h-4 w-4 text-[hsl(var(--text-inverse-subtle))]" />
                                    </a>
                                )}
                            </div>

                            {joinAt && (
                                <div className="flex items-center gap-2 text-xs text-[hsl(var(--text-inverse-subtlest))] pt-3 border-t border-[hsl(var(--stroke-soft))]">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span>Joining at {joinAt}</span>
                                </div>
                            )}
                        </div>

                        {/* Features enabled */}
                        <div className="flex gap-2">
                            <div className="flex-1 rounded-xl bg-purple-50 px-3 py-2.5 text-center">
                                <Video className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                <p className="text-[11px] font-medium text-purple-700">Recording</p>
                                <p className="text-[10px] text-purple-500 capitalize">{videoLayout.replace(/_/g, " ")}</p>
                            </div>
                            <div className="flex-1 rounded-xl bg-purple-50 px-3 py-2.5 text-center">
                                <Mic className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                <p className="text-[11px] font-medium text-purple-700">Transcript</p>
                                <p className="text-[10px] text-purple-500">{transcriptEnabled ? "Enabled" : "Disabled"}</p>
                            </div>
                            <div className="flex-1 rounded-xl bg-purple-50 px-3 py-2.5 text-center">
                                <FileText className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                <p className="text-[11px] font-medium text-purple-700">Retention</p>
                                <p className="text-[10px] text-purple-500 capitalize">{retentionType}</p>
                            </div>
                        </div>

                        {/* View Recording Button */}
                        {assistantId && (
                            <button
                                type="button"
                                onClick={() => {
                                    // Send chat message to trigger the Bot output Retriever flow
                                    handleMessageSubmit?.(`Get the recording and transcript for bot ID: ${assistantId}`);
                                }}
                                className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                            >
                                <PlayCircle className="w-4 h-4" />
                                View Recording & Transcript
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        )}

                        {/* ID - subtle footer */}
                        {assistantId && (
                            <p className="text-[10px] text-[hsl(var(--text-inverse-subtlest))] text-center mt-3 font-mono">
                                Bot ID: {assistantId.slice(0, 8)}...{assistantId.slice(-4)}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingBotCreator;
