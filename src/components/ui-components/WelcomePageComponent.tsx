"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { WelcomePageComponentProps, ConfigurationItem, UIKEY } from "@/types";
import { REQUIRED_CONNECTORS } from "@/config";


/**
 * WelcomePageComponent - Template for UIKEY.WELCOME_PAGE
 * 
 * This component is displayed as the onboarding/getting started page for new users.
 * It shows required connectors that need to be configured before using the agent.
 * 
 * Props received from host (via GenerativeWelcomePage wrapper):
 * - data: Any data passed from the host
 * - props: Component-specific props (requiredItems, optionalItems override defaults)
 * - setUIKey: Function to navigate to different screens
 * - setProps: Function to pass props to the next screen
 * - handleMessageSubmit: Function to send messages to chat
 * - openConnectorConfiguration: Function to open connector config sheet
 * - configuredCategories: Set of configured connector categories
 * - connectorMetadataMap: Map of connector metadata (logos, descriptions)
 * - allRequiredConfigured: Whether all required connectors are configured
 */
export default function WelcomePageComponent({
    props,
    className,
    setUIKey,
    setProps,
    openConnectorConfiguration,
    configuredCategories,
    connectorMetadataMap,
    allRequiredConfigured,
}: WelcomePageComponentProps) {
    // Navigation helper
    const navigateTo = (uiKey: UIKEY, navigationProps?: Record<string, any>) => {
        setUIKey?.(uiKey);
        if (navigationProps) {
            setProps?.(navigationProps);
        }
    };

    // Use props.requiredItems if provided, otherwise use shared config
    const requiredItems = props?.requiredItems || REQUIRED_CONNECTORS;

    const isConfigured = (category: string): boolean => {
        return configuredCategories?.has(category.toLowerCase()) ?? false;
    };

    const getEnrichedItem = (item: ConfigurationItem): ConfigurationItem => {
        const metadata = connectorMetadataMap?.get(item.category.toLowerCase());
        if (!metadata) return item;
        return {
            ...item,
            name: item.name || metadata.name,
            description: item.description || metadata.description,
            logo: item.logo || metadata.logo,
        };
    };

    const handleConnect = (category: string) => {
        openConnectorConfiguration?.(category);
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-12 space-y-12",
                className,
            )}
        >
            <div
                className={cn(
                    "w-full p-6 bg-surface-container-default rounded-xl border border-stroke-default",
                )}
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-100))]">
                            <svg
                                className="w-6 h-6 text-[hsl(var(--brand-purple-800))]"
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
                        <div>
                            <h1 className="text-lg sm:text-xl font-semibold text-[hsl(var(--text-inverse-default))]">
                                Meet AI Image
                            </h1>
                            <p className="text-xs sm:text-sm text-[hsl(var(--text-inverse-subtlest))]">
                                Let&apos;s get you set up
                            </p>
                        </div>
                    </div>
                    {allRequiredConfigured && (
                        <div className="inline-flex items-center rounded-full border border-[hsl(var(--brand-purple-300))] bg-[hsl(var(--brand-purple-100))] px-3 py-1 text-xs font-medium text-[hsl(var(--brand-purple-800))]">
                            Active
                        </div>
                    )}
                </div>

                {/* Intro copy */}
                <div className="mt-6 space-y-2">
                    <p className="text-sm sm:text-base text-[hsl(var(--text-inverse-default))]">
                        Hi! I&apos;m your <span className="font-medium">AI Image</span>.
                    </p>
                    <p className="text-sm sm:text-base text-[hsl(var(--text-inverse-subtle))] leading-relaxed">
                        I help you perform deep competitor research, extract meaningful insights, and generate
                        reports automatically.
                    </p>
                </div>

                {/* What I can do */}
                <div className="mt-6">
                    <p className="text-xs font-semibold tracking-wide text-[hsl(var(--text-inverse-subtlest))]">
                        WHAT I CAN DO
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                        <div className="flex flex-row w-full bg-surface-container-default-lighter items-center gap-3 p-4 rounded-lg hover:border-surface-interactive-brand border border-transparent transition-colors text-left">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-surface-container-default flex items-center justify-center">
                                🔍
                            </div>
                            <p className="text-sm text-[hsl(var(--text-inverse-default))]">
                                Perform deep competitor research across multiple sources
                            </p>
                        </div>

                        <div className="flex flex-row w-full bg-surface-container-default-lighter items-center gap-3 p-4 rounded-lg hover:border-surface-interactive-brand border border-transparent transition-colors text-left">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-surface-container-default flex items-center justify-center">
                                📊
                            </div>
                            <p className="text-sm text-[hsl(var(--text-inverse-default))]">
                                Generate automated insight reports on schedule
                            </p>
                        </div>

                        <div className="flex flex-row w-full bg-surface-container-default-lighter items-center gap-3 p-4 rounded-lg hover:border-surface-interactive-brand border border-transparent transition-colors text-left">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-surface-container-default flex items-center justify-center">
                                📅
                            </div>
                            <p className="text-sm text-[hsl(var(--text-inverse-default))]">
                                Track only new changes with delta analysis
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="mt-8 pt-6 border-t border-stroke-default flex items-center justify-between">
                    <button
                        onClick={() => navigateTo(UIKEY.HOME)}
                        className="text-sm text-text-inverse-subtle hover:text-text-inverse-default"
                    >
                        Skip for now
                    </button>
                    <button
                        onClick={() => navigateTo(UIKEY.CONFIGURATION_PAGE)}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium",
                            "bg-surface-interactive-default text-surface-inverse",
                            "hover:bg-surface-interactive-default-raised transition-colors",
                        )}
                    >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface-inverse text-surface-interactive-default text-xs">
                            →
                        </span>
                        <span>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
