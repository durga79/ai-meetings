"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HomeComponentProps, UIKEY } from "@/types";
import {
    Zap,
    ThumbsUp,
    MessageCircle,
    History,
    ChevronRight,
    Search,
    TrendingUp,
    CalendarClock,
} from "lucide-react";

/**
 * HomeComponent - Template for UIKEY.HOME
 * 
 * This component is displayed as the landing/home page for the agent.
 * Customize this to show welcome message, quick actions, and agent-specific content.
 * 
 * Props received from host (via GenerativeHome wrapper):
 * - data: Any data passed from the host
 * - props: Component-specific props
 * - setUIKey: Function to navigate to different screens
 * - setProps: Function to pass props to the next screen
 * - handleMessageSubmit: Function to send messages to chat
 */
export default function HomeComponent({
    data,
    props,
    className,
    setUIKey,
    setProps,
    handleMessageSubmit,
}: HomeComponentProps) {
    // Navigation helper
    const navigateTo = (uiKey: UIKEY, navigationProps?: Record<string, any>) => {
        setUIKey?.(uiKey);
        if (navigationProps) {
            setProps?.(navigationProps);
        }
    };

    // Whether the user has already completed configuration (from host)
    const hasCompletedConfiguration =
        Boolean(props?.hasCompletedConfiguration ?? data?.hasCompletedConfiguration);

    // Capability actions for this coworker (shown after configuration)
    const quickActions = [
        {
            id: "retrieve_by_keyword",
            title: "Retrieve Posts by Keyword",
            description: "Search and retrieve LinkedIn posts related to a keyword",
            icon: <ThumbsUp className="w-5 h-5 text-text-inverse-default" />,
            onClick: () => handleMessageSubmit?.("Retrieve LinkedIn posts by keyword"),
        },
        {
            id: "like_post",
            title: "Like a Post",
            description: "Like a specific LinkedIn post by URL or post ID",
            icon: <MessageCircle className="w-5 h-5 text-text-inverse-default" />,
            onClick: () => handleMessageSubmit?.("Like a LinkedIn post"),
        },
        {
            id: "comment_post",
            title: "Comment on a Post",
            description: "Comment on a specific LinkedIn post with AI-generated reply",
            icon: <MessageCircle className="w-5 h-5 text-text-inverse-default" />,
            onClick: () => handleMessageSubmit?.("Comment on a LinkedIn post"),
        },
        {
            id: "view_history",
            title: "View History",
            description: "See past engagement actions",
            icon: <History className="w-5 h-5 text-text-inverse-default" />,
            onClick: () => navigateTo(UIKEY.EXECUTION_HISTORY),
        },
    ];

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
                                    Meet LinkedIn AutoEngage
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
                                Hi! I&apos;m your{" "}
                                <span className="font-semibold">LinkedIn AutoEngage</span>. I help you
                                automatically engage with the right LinkedIn posts and keep your
                                profile active.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-[11px] font-semibold tracking-[0.08em] text-text-inverse-subtlest uppercase">
                                What I can do
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <Search className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        Automatically retrieve posts matching your keywords
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <TrendingUp className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        AI-powered commenting to boost engagement
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl bg-surface-container-default-lighter px-3 py-3">
                                    <div className="h-9 w-9 rounded-xl bg-surface-container-default flex items-center justify-center">
                                        <CalendarClock className="w-4 h-4 text-text-inverse-default" />
                                    </div>
                                    <p className="text-sm text-text-inverse-default">
                                        Schedule recurring engagement campaigns
                                    </p>
                                </div>
                            </div>
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

    // Post-configuration capabilities view
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-8",
                className
            )}
        >
            {/* Coworker Capabilities Card */}
            <div className="w-full rounded-3xl bg-surface-container-default shadow-sm border border-stroke-default overflow-hidden">
                {/* Header */}
                <div className="px-6 py-5 border-b border-stroke-default flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-surface-interactive-brand flex items-center justify-center text-surface-inverse shadow-sm">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-semibold text-text-inverse-default">
                            Coworker Capabilities
                        </h2>
                        <p className="text-xs text-text-inverse-subtlest mt-0.5 truncate">
                            Select an action or ask me anything in the chat
                        </p>
                    </div>
                </div>

                {/* Capability list */}
                <div className="px-4 py-3 space-y-2">
                    {quickActions.map((action) => (
                        <button
                            key={action.id}
                            type="button"
                            onClick={action.onClick}
                            className="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl bg-surface-container-default-lighter hover:bg-surface-interactive-subtle border border-transparent hover:border-stroke-soft text-left transition-colors"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="h-10 w-10 rounded-xl bg-surface-container-default flex items-center justify-center">
                                    {action.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-text-inverse-default truncate">
                                        {action.title}
                                    </p>
                                    <p className="text-xs text-text-inverse-subtle mt-0.5 truncate">
                                        {action.description}
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-text-inverse-subtlest flex-shrink-0" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
