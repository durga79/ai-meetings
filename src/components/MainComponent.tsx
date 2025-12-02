"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MicrofrontendComponentProps, UIKEY } from "@/types";

/**
 * MainComponent - Entry point for fullscreen microfrontends
 * 
 * This component is loaded when:
 * - displayMode is "fullscreen" in the registry
 * - The host renders RemoteMicrofrontend with this aiKey
 * 
 * For embedded mode with UI_COMPONENT_MAP, the host will load
 * individual components from UIComponentMap instead.
 * 
 * @example Registry configuration:
 * ```typescript
 * "my-agent": {
 *     aiKey: "my-agent",
 *     scope: "myAgent",
 *     baseUrl: "http://localhost:3004",
 *     displayMode: "fullscreen",  // <-- Uses MainComponent
 *     mainComponent: "./MainComponent",
 *     enabled: true,
 * }
 * ```
 */
export default function MainComponent({
    data,
    props,
    className,
    aiKey,
    uiKey,
    setUIKey,
    setProps,
    goBack,
    canGoBack,
    handleMessageSubmit,
}: MicrofrontendComponentProps) {
    // Example: Navigate to a specific UI
    const handleNavigate = (targetUiKey: UIKEY) => {
        setUIKey?.(targetUiKey);
        setProps?.({});
    };

    // Example: Send a message to the chat
    const handleSendMessage = (message: string) => {
        handleMessageSubmit?.(message);
    };

    return (
        <div className={cn("h-full w-full flex flex-col", className)}>
            {/* Header */}
            <header className="p-6 border-b border-stroke-default bg-surface-container-default">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-text-inverse-default">
                            Microfrontend Template
                        </h1>
                        <p className="text-sm text-text-inverse-subtle mt-1">
                            This is the main component for fullscreen mode
                        </p>
                    </div>
                    {canGoBack && (
                        <button
                            onClick={goBack}
                            className="px-4 py-2 text-sm bg-surface-container-default-lighter text-text-inverse-default rounded-lg hover:bg-surface-inverse-fade transition-colors"
                        >
                            Go Back
                        </button>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <InfoCard
                        title="AI Key"
                        value={aiKey || "Not provided"}
                    />
                    <InfoCard
                        title="UI Key"
                        value={uiKey || "Not provided"}
                    />
                    <InfoCard
                        title="Can Go Back"
                        value={canGoBack ? "Yes" : "No"}
                    />
                </div>

                {/* Quick Actions */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-text-inverse-default mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <ActionButton
                            label="Go to Home"
                            onClick={() => handleNavigate(UIKEY.HOME)}
                        />
                        <ActionButton
                            label="View Process Flows"
                            onClick={() => handleNavigate(UIKEY.PROCESSFLOW_LIST)}
                        />
                        <ActionButton
                            label="View Tables"
                            onClick={() => handleNavigate(UIKEY.SHOW_TABLE_PAGE)}
                        />
                        <ActionButton
                            label="Execution History"
                            onClick={() => handleNavigate(UIKEY.EXECUTION_HISTORY)}
                        />
                    </div>
                </section>

                {/* Send Message Example */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-text-inverse-default mb-4">
                        Chat Integration
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleSendMessage("Show me my process flows")}
                            className="px-4 py-2 bg-surface-interactive-brand text-white rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors"
                        >
                            Ask: "Show me my process flows"
                        </button>
                    </div>
                </section>

                {/* Debug: Show received data */}
                {(data || props) && (
                    <section>
                        <h2 className="text-lg font-semibold text-text-inverse-default mb-4">
                            Received Data (Debug)
                        </h2>
                        <div className="bg-surface-container-default-lighter p-4 rounded-lg border border-stroke-default">
                            <pre className="text-xs font-mono text-text-inverse-subtle overflow-auto">
                                {JSON.stringify({ data, props }, null, 2)}
                            </pre>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

// Helper Components

function InfoCard({ title, value }: { title: string; value: string }) {
    return (
        <div className="p-4 bg-surface-container-default-lighter rounded-lg border border-stroke-default">
            <p className="text-xs text-text-inverse-subtlest uppercase tracking-wide mb-1">
                {title}
            </p>
            <p className="text-sm font-medium text-text-inverse-default truncate">
                {value}
            </p>
        </div>
    );
}

function ActionButton({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="p-3 text-sm text-text-inverse-default bg-surface-container-default-lighter rounded-lg border border-stroke-default hover:border-surface-interactive-brand transition-colors text-left"
        >
            {label}
        </button>
    );
}
