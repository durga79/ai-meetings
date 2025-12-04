"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExecutionComponentProps, UIKEY } from "@/types";
import { Check, X, Loader, Clock, ChevronDown, ChevronUp } from "lucide-react";

/**
 * SampleActionComponent - Template for Execution Chain components
 * 
 * These components are rendered inside ExecutionChainWrapper for specific actions.
 * Each action in a workflow can have its own custom component.
 * 
 * Props:
 * - logs: Execution logs containing status, agents, context
 * - isLoading: Whether logs are being loaded
 * - isFetching: Whether logs are being refetched
 * - setUIKey: Function to navigate to different screens
 * - handleMessageSubmit: Function to send messages to chat
 * 
 * Usage:
 * 1. Create a component that accepts ExecutionComponentProps
 * 2. Add it to ExecutionComponentMap with the action's unique_id
 * 3. The host will automatically use it when that action executes
 */
export default function SampleActionComponent({
    logs,
    isLoading,
    isFetching,
    setUIKey,
    handleMessageSubmit,
}: ExecutionComponentProps) {
    const [isExpanded, setIsExpanded] = React.useState(true);

    // Navigation helper
    const navigateTo = (uiKey: UIKEY) => {
        setUIKey?.(uiKey);
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="rounded-lg border border-stroke-default bg-surface-container-default p-4 animate-pulse">
                <div className="h-4 bg-surface-container-default-lighter rounded w-1/4 mb-2" />
                <div className="h-20 bg-surface-container-default-lighter rounded" />
            </div>
        );
    }

    const status = logs?.status || "pending";
    const agentflow = logs?.agentflow;

    return (
        <div className="rounded-lg border border-stroke-default bg-surface-container-default overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-surface-container-default-lighter transition-colors"
            >
                <div className="flex items-center gap-3">
                    <StatusIcon status={status} />
                    <div className="text-left">
                        <span className="text-sm font-medium text-text-inverse-default">
                            {agentflow?.name || "Action Execution"}
                        </span>
                        {isFetching && (
                            <span className="ml-2 text-xs text-surface-interactive-brand">
                                Updating...
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <StatusBadge status={status} />
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-text-inverse-subtlest" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-text-inverse-subtlest" />
                    )}
                </div>
            </button>

            {/* Content */}
            {isExpanded && (
                <div className="px-4 py-3 border-t border-stroke-default">
                    {/* Goal */}
                    {logs?.goal && (
                        <div className="mb-4">
                            <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-1">
                                Goal
                            </p>
                            <p className="text-sm text-text-inverse-default">
                                {logs.goal}
                            </p>
                        </div>
                    )}

                    {/* Custom content for your action */}
                    <div className="bg-surface-container-default-lighter rounded-lg p-4">
                        <p className="text-xs text-text-inverse-subtlest mb-2">
                            Customize this component to display action-specific information:
                        </p>
                        <ul className="text-xs text-text-inverse-subtle space-y-1">
                            <li>• Display action inputs and outputs</li>
                            <li>• Show progress for long-running actions</li>
                            <li>• Provide interactive elements for user input</li>
                            <li>• Display rich media (images, charts, etc.)</li>
                        </ul>
                        
                        {/* Example: Navigation and messaging */}
                        <div className="mt-4 pt-4 border-t border-stroke-default flex gap-2">
                            <button
                                onClick={() => navigateTo(UIKEY.HOME)}
                                className="text-xs text-surface-interactive-brand hover:underline"
                            >
                                Go to Home
                            </button>
                            <span className="text-text-inverse-subtlest">•</span>
                            <button
                                onClick={() => handleMessageSubmit?.("Tell me more about this execution")}
                                className="text-xs text-surface-interactive-brand hover:underline"
                            >
                                Ask about execution
                            </button>
                        </div>
                    </div>

                    {/* Execution Context (debug) */}
                    {logs?.execution_context && Object.keys(logs.execution_context).length > 0 && (
                        <details className="mt-4">
                            <summary className="text-xs text-text-inverse-subtlest cursor-pointer hover:text-text-inverse-subtle">
                                View execution context
                            </summary>
                            <pre className="mt-2 text-xs text-text-inverse-subtle bg-surface-container-default-lighter p-2 rounded overflow-auto max-h-48">
                                {JSON.stringify(logs.execution_context, null, 2)}
                            </pre>
                        </details>
                    )}
                </div>
            )}
        </div>
    );
}

// Status icon component
function StatusIcon({ status }: { status: string }) {
    const baseClass = "w-5 h-5 rounded-full flex items-center justify-center";
    const iconClass = "w-3 h-3";

    switch (status) {
        case "completed":
            return (
                <div className={cn(baseClass, "bg-semantic-success-surface")}>
                    <Check className={cn(iconClass, "text-primary-foreground")} strokeWidth={3} />
                </div>
            );
        case "failed":
        case "error":
            return (
                <div className={cn(baseClass, "bg-semantic-error-surface")}>
                    <X className={cn(iconClass, "text-primary-foreground")} strokeWidth={3} />
                </div>
            );
        case "running":
            return (
                <div className={cn(baseClass, "bg-surface-interactive-brand")}>
                    <Loader className={cn(iconClass, "text-primary-foreground animate-spin")} />
                </div>
            );
        default:
            return (
                <div className={cn(baseClass, "bg-text-inverse-subtlest/30")}>
                    <Clock className={cn(iconClass, "text-text-inverse-subtlest")} />
                </div>
            );
    }
}

// Status badge component
function StatusBadge({ status }: { status: string }) {
    const baseClass = "px-2 py-0.5 text-xs rounded-full font-medium";
    
    const statusConfig: Record<string, string> = {
        completed: "bg-semantic-success-surface/10 text-semantic-success-surface",
        failed: "bg-semantic-error-surface/10 text-semantic-error-surface",
        error: "bg-semantic-error-surface/10 text-semantic-error-surface",
        running: "bg-surface-interactive-brand/10 text-surface-interactive-brand",
        pending: "bg-text-inverse-subtlest/10 text-text-inverse-subtlest",
    };

    return (
        <span className={cn(baseClass, statusConfig[status] || statusConfig.pending)}>
            {status}
        </span>
    );
}
