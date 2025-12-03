"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExecutionHistoryComponentProps, History, ExecutionStatus } from "@/types";
import { Clock, CheckCircle, XCircle, Loader, AlertCircle } from "lucide-react";

/**
 * ExecutionHistoryComponent - Template for UIKEY.EXECUTION_HISTORY
 * 
 * Displays a list of past workflow executions with their status.
 * Users can click on an execution to view its details.
 * 
 * Props received from host (via GenerativeExecutionHistory wrapper):
 * - executions: Array of History objects
 * - isLoading: Whether data is being loaded
 * - onExecutionClick: Callback when user clicks an execution
 */
export default function ExecutionHistoryComponent({
    executions,
    isLoading,
    onExecutionClick,
    className,
}: ExecutionHistoryComponentProps) {
    const isEmpty = executions.length === 0;

    // Loading state
    if (isLoading) {
        return (
            <div className={cn("flex flex-col items-center w-full px-6 py-12", className)}>
                <div className="w-full max-w-4xl bg-surface-container-default rounded-lg p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                        <div className="h-4 bg-surface-container-default-lighter rounded w-1/3" />
                        <div className="space-y-3 mt-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-16 bg-surface-container-default-lighter rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col items-center w-full px-6 py-12", className)}>
            <div className="w-full max-w-4xl bg-surface-container-default rounded-lg shadow-lg">
                {/* Header */}
                <div className="p-6 border-b border-stroke-default">
                    <h2 className="text-2xl font-semibold text-text-inverse-default">
                        Execution History
                    </h2>
                    <p className="text-sm text-text-inverse-subtle mt-1">
                        View and manage your execution history
                    </p>
                </div>

                {/* Content */}
                {isEmpty ? (
                    <div className="h-96 flex flex-col items-center justify-center">
                        <Clock className="w-12 h-12 text-text-inverse-subtlest mb-4" />
                        <p className="text-text-inverse-default font-medium">
                            No executions yet
                        </p>
                        <p className="text-text-inverse-subtle text-sm mt-1">
                            Run a workflow to see it here
                        </p>
                    </div>
                ) : (
                    <div className="max-h-[500px] overflow-y-auto">
                        <div className="p-4 space-y-2">
                            {executions.map((execution) => (
                                <ExecutionListItem
                                    key={execution._id}
                                    execution={execution}
                                    onClick={() => onExecutionClick(execution)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Sub-component for each execution item
function ExecutionListItem({
    execution,
    onClick,
}: {
    execution: History;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="w-full p-4 bg-surface-container-default-lighter rounded-lg border border-stroke-soft hover:border-surface-interactive-brand transition-colors text-left"
        >
            <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <StatusIcon status={execution.status} />
                        <span className="text-sm font-medium text-text-inverse-default truncate">
                            {execution.agentflow_name}
                        </span>
                    </div>
                    <p className="text-xs text-text-inverse-subtlest mt-1 truncate">
                        {execution.goal}
                    </p>
                </div>
                <div className="text-right ml-4">
                    <StatusBadge status={execution.status} />
                    <p className="text-xs text-text-inverse-subtlest mt-1">
                        {formatDate(execution.created_at)}
                    </p>
                </div>
            </div>
        </button>
    );
}

// Status icon component
function StatusIcon({ status }: { status: ExecutionStatus }) {
    const iconClass = "w-4 h-4";
    
    switch (status) {
        case "completed":
            return <CheckCircle className={cn(iconClass, "text-semantic-success-surface")} />;
        case "failed":
            return <XCircle className={cn(iconClass, "text-semantic-error-surface")} />;
        case "running":
            return <Loader className={cn(iconClass, "text-surface-interactive-brand animate-spin")} />;
        case "scheduled":
        case "ready":
            return <Clock className={cn(iconClass, "text-text-inverse-subtlest")} />;
        default:
            return <AlertCircle className={cn(iconClass, "text-semantic-warning-surface")} />;
    }
}

// Status badge component
function StatusBadge({ status }: { status: ExecutionStatus }) {
    const baseClass = "px-2 py-0.5 text-xs rounded-full font-medium";
    
    const statusConfig: Record<string, string> = {
        completed: "bg-semantic-success-surface/10 text-semantic-success-surface",
        failed: "bg-semantic-error-surface/10 text-semantic-error-surface",
        running: "bg-surface-interactive-brand/10 text-surface-interactive-brand",
        scheduled: "bg-text-inverse-subtlest/10 text-text-inverse-subtlest",
        ready: "bg-text-inverse-subtlest/10 text-text-inverse-subtlest",
    };

    return (
        <span className={cn(baseClass, statusConfig[status] || statusConfig.ready)}>
            {status}
        </span>
    );
}

// Date formatter
function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
