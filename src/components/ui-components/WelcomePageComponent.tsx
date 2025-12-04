"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MicrofrontendComponentProps, UIKEY } from "@/types";

/**
 * WelcomePageComponent - Template for UIKEY.WELCOME_PAGE
 * 
 * This component is displayed as the onboarding/getting started page for new users.
 * Customize this to show welcome message, setup steps, and agent-specific onboarding content.
 * 
 * Props received from host (via GenerativeWelcomePage wrapper):
 * - data: Any data passed from the host
 * - props: Component-specific props
 * - setUIKey: Function to navigate to different screens
 * - setProps: Function to pass props to the next screen
 * - handleMessageSubmit: Function to send messages to chat
 */
export default function WelcomePageComponent({
    data,
    props,
    className,
    setUIKey,
    setProps,
    handleMessageSubmit,
}: MicrofrontendComponentProps) {
    // Navigation helper
    const navigateTo = (uiKey: UIKEY, navigationProps?: Record<string, any>) => {
        setUIKey?.(uiKey);
        if (navigationProps) {
            setProps?.(navigationProps);
        }
    };

    // Getting started steps for this agent
    const gettingStartedSteps = [
        {
            id: "configure",
            step: 1,
            title: "Configure Your Agent",
            description: "Set up integrations and connect your tools",
            onClick: () => navigateTo(UIKEY.CONFIGURATION_PAGE),
        },
        {
            id: "explore",
            step: 2,
            title: "Explore Process Flows",
            description: "Browse available workflows and automations",
            onClick: () => navigateTo(UIKEY.PROCESSFLOW_LIST),
        },
        {
            id: "data",
            step: 3,
            title: "Manage Your Data",
            description: "View and organize your data tables",
            onClick: () => navigateTo(UIKEY.SHOW_TABLE_PAGE),
        },
    ];

    return (
        <div className={cn("flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-12 space-y-12", className)}>
            {/* Header Section */}
            <header className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-interactive-brand/10 flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-surface-interactive-brand"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-text-inverse-default tracking-tight">
                    Welcome to Your Agent
                </h1>
                <p className="text-base text-text-inverse-subtlest max-w-md mx-auto">
                    Let's get you set up. Follow the steps below to start automating your workflows.
                </p>
            </header>

            {/* Getting Started Steps */}
            <div className="w-full p-6 bg-surface-container-default rounded-xl border border-stroke-default">
                <h2 className="text-lg font-semibold text-text-inverse-default mb-6">
                    Getting Started
                </h2>

                <div className="space-y-3">
                    {gettingStartedSteps.map((item) => (
                        <button
                            key={item.id}
                            onClick={item.onClick}
                            className="flex flex-row w-full bg-surface-container-default-lighter items-center gap-4 p-4 rounded-lg hover:border-surface-interactive-brand border border-transparent transition-colors text-left"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-interactive-brand/10 flex items-center justify-center">
                                <span className="text-sm font-semibold text-surface-interactive-brand">
                                    {item.step}
                                </span>
                            </div>
                            <div className="flex-1">
                                <span className="text-sm font-medium text-text-inverse-default">
                                    {item.title}
                                </span>
                                <p className="text-xs text-text-inverse-subtlest mt-0.5">
                                    {item.description}
                                </p>
                            </div>
                            <svg
                                className="w-5 h-5 text-text-inverse-subtle"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    ))}
                </div>

                {/* Skip to Home */}
                <div className="mt-8 pt-6 flex items-center justify-between">
                    <button
                        onClick={() => navigateTo(UIKEY.CONFIGURATION_PAGE)}
                        className="text-sm text-surface-interactive-brand hover:underline"
                    >
                        Get Started
                    </button>         
                    <button
                        onClick={() => navigateTo(UIKEY.HOME)}
                        className="text-sm text-surface-interactive-brand hover:underline"
                    >
                        Skip to Home →
                    </button>
                </div>
            </div>

              
        </div>
    );
}
