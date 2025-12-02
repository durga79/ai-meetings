"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HomeComponentProps, UIKEY } from "@/types";

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

    // Quick actions for this agent
    const quickActions = [
        {
            id: "processflows",
            title: "View Process Flows",
            description: "Browse and run your automated workflows",
            onClick: () => navigateTo(UIKEY.PROCESSFLOW_LIST),
        },
        {
            id: "tables",
            title: "Manage Tables",
            description: "View and edit your data tables",
            onClick: () => navigateTo(UIKEY.SHOW_TABLE_PAGE),
        },
        {
            id: "history",
            title: "Execution History",
            description: "Review past workflow executions",
            onClick: () => navigateTo(UIKEY.EXECUTION_HISTORY),
        },
    ];

    return (
        <div className={cn("flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-12 space-y-12", className)}>
            {/* Header Section */}
            <header className="text-center space-y-3">
                <h1 className="text-4xl font-bold text-text-inverse-default tracking-tight">
                    Welcome to Your Agent
                </h1>
                <p className="text-base text-text-inverse-subtlest">
                    Choose an action below or ask me anything
                </p>
            </header>

            {/* Quick Actions Card */}
            <div className="w-full p-6 bg-surface-container-default rounded-xl border border-stroke-default">
                <p className="text-text-inverse-default text-sm leading-relaxed mb-8">
                    I can help you manage your workflows, data, and automations.
                    Select an option below to get started.
                </p>

                <div className="grid grid-cols-1 gap-3">
                    {quickActions.map((action) => (
                        <button
                            key={action.id}
                            onClick={action.onClick}
                            className="flex flex-row w-full bg-surface-container-default-lighter items-center gap-3 p-4 rounded-lg hover:border-surface-interactive-brand border border-transparent transition-colors text-left"
                        >
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-surface-interactive-brand" />
                            <div>
                                <span className="text-sm font-medium text-text-inverse-default">
                                    {action.title}
                                </span>
                                <p className="text-xs text-text-inverse-subtlest mt-0.5">
                                    {action.description}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Chat prompt example */}
                <div className="mt-8 pt-6 border-t border-stroke-default">
                    <p className="text-xs text-text-inverse-subtlest mb-3">
                        Or ask me directly:
                    </p>
                    <button
                        onClick={() => handleMessageSubmit?.("What can you help me with?")}
                        className="text-sm text-surface-interactive-brand hover:underline"
                    >
                        "What can you help me with?"
                    </button>
                </div>
            </div>

            {/* Debug Info (remove in production) */}
            {data && Object.keys(data).length > 0 && (
                <details className="w-full">
                    <summary className="text-sm text-text-inverse-subtle hover:text-text-inverse-default cursor-pointer">
                        View Debug Info
                    </summary>
                    <div className="mt-2 p-4 rounded-lg bg-surface-container-default-lighter border border-stroke-default">
                        <pre className="text-xs font-mono text-text-inverse-default overflow-auto max-h-64">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                </details>
            )}
        </div>
    );
}
