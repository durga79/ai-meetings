"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HomeComponentProps, UIKEY } from "@/types";
import {
    ChevronRight,
    Video,
    Mic,
    FileText,
    Sparkles,
    Zap,
} from "lucide-react";

/**
 * HomeComponent - Template for UIKEY.HOME
 * 
 * This component is displayed as the landing/home page for the agent.
 * Customize this to show welcome message, quick actions, and agent-specific content.
 */
export default function HomeComponent({
    data,
    props,
    className,
    setUIKey,
    setProps,
    handleMessageSubmit,
    configuredCategories,
}: HomeComponentProps) {
    // Check if required connectors are configured (mail and recall_ai)
    const requiredConnectorsConfigured = 
        configuredCategories?.has("mail") && configuredCategories?.has("recall_ai");

    // Whether the user has already completed configuration (from host or props)
    const hasCompletedConfiguration =
        Boolean(props?.hasCompletedConfiguration ?? data?.hasCompletedConfiguration ?? requiredConnectorsConfigured);

    // Handle adding Wexa's AI Assistant to meeting
    const handleAddAssistant = () => {
        handleMessageSubmit?.("I want to add Wexa's AI Assistant to record and transcribe my meeting. Please ask me for the meeting URL.");
        setUIKey?.("execution:12bavcx" as UIKEY);
    };

    // First-time greeting card: shown before configuration is completed
    if (!hasCompletedConfiguration) {
        return (
            <div
                className={cn(
                    "flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-8",
                    className
                )}
            >
                <div className="w-full rounded-3xl border-2 border-surface-interactive-brand/60 bg-surface-container-default shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-5 border-b border-surface-interactive-brand/20 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-surface-interactive-brand flex items-center justify-center text-surface-inverse shadow-sm">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h2 className="text-sm font-semibold text-text-inverse-default truncate">
                                    Meet Wexa&apos;s AI Assistant
                                </h2>
                                <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-accent-lime-50 text-accent-lime-600 border border-accent-lime-400">
                                    Active
                                </span>
                            </div>
                            <p className="text-xs text-text-inverse-subtlest mt-0.5 truncate">
                                Let&apos;s get you set up
                            </p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-5 space-y-5">
                        <div className="space-y-1">
                            <p className="text-sm text-text-inverse-subtle">
                                Hi! I&apos;m{" "}
                                <span className="font-semibold">Wexa&apos;s AI Assistant</span>. I help you
                                record, transcribe, and capture notes from your meetings automatically.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-[11px] font-semibold tracking-[0.08em] text-text-inverse-subtlest uppercase">
                                What I can do
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3 opacity-60">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <Video className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        Join your meetings and record video automatically
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3 opacity-60">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <Mic className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        Generate accurate transcripts with speaker identification
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3 opacity-60">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <FileText className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        Create meeting notes and action items automatically
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs text-text-inverse-subtlest text-center pt-2">
                                Complete setup to unlock these features
                            </p>
                        </div>
                    </div>

                    {/* Get started CTA */}
                    <div className="px-6 pb-5 pt-1 flex justify-end">
                        <button
                            type="button"
                            onClick={() => setUIKey?.(UIKEY.CONFIGURATION_PAGE)}
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-surface-interactive-brand text-surface-inverse text-sm font-medium shadow-sm hover:opacity-90 transition"
                        >
                            Get started
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Post-configuration: Main action card
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center h-full w-full max-w-2xl mx-auto px-6 py-8",
                className
            )}
        >
            {/* Hero Card - Add Wexa's AI Assistant to Meeting */}
            <div 
                onClick={handleAddAssistant}
                className="w-full cursor-pointer group"
            >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                    </div>

                    {/* Content */}
                    <div className="relative px-8 py-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl font-bold text-white">
                                            Add Wexa to Your Meeting
                                        </h2>
                                        <Sparkles className="w-5 h-5 text-yellow-300" />
                                    </div>
                                    <p className="text-purple-200 text-sm mt-0.5">
                                        AI-Powered Assistant
                                    </p>
                                </div>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-purple-100 text-base mb-8 max-w-md">
                            Let Wexa&apos;s AI Assistant join your meeting to record, transcribe, and capture notes automatically. Just paste your meeting URL.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 text-center hover:bg-white/15 transition-colors">
                                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                                    <Video className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">Recording</p>
                                <p className="text-purple-200 text-xs mt-0.5">HD video capture</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 text-center hover:bg-white/15 transition-colors">
                                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                                    <Mic className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">Transcription</p>
                                <p className="text-purple-200 text-xs mt-0.5">Speaker labels</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 text-center hover:bg-white/15 transition-colors">
                                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">Notes</p>
                                <p className="text-purple-200 text-xs mt-0.5">Action items</p>
                            </div>
                        </div>

                        {/* Supported platforms */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-purple-200 text-xs mb-3">Supports</p>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                    <span className="text-sm">🎥</span>
                                    <span className="text-white text-xs font-medium">Google Meet</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                    <span className="text-sm">📹</span>
                                    <span className="text-white text-xs font-medium">Zoom</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                    <span className="text-sm">💼</span>
                                    <span className="text-white text-xs font-medium">Teams</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle hint */}
            <p className="text-center text-text-inverse-subtlest text-xs mt-4">
                Click the card above to get started
            </p>
        </div>
    );
}
