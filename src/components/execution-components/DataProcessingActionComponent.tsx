"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExecutionComponentProps } from "@/types";
import { Database, Check, X, Loader, ArrowRight } from "lucide-react";

/**
 * DataProcessingActionComponent - Example for data processing actions
 * 
 * This is an example of a specialized component for data processing actions.
 * It shows how to extract and display specific data from execution logs.
 */
export default function DataProcessingActionComponent({
    logs,
    isLoading,
    isFetching,
}: ExecutionComponentProps) {
    if (isLoading) {
        return (
            <div className="rounded-lg border border-stroke-default bg-surface-container-default p-4 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-surface-container-default-lighter rounded-full" />
                    <div className="flex-1">
                        <div className="h-4 bg-surface-container-default-lighter rounded w-1/3 mb-2" />
                        <div className="h-3 bg-surface-container-default-lighter rounded w-1/2" />
                    </div>
                </div>
                <div className="h-32 bg-surface-container-default-lighter rounded" />
            </div>
        );
    }

    const status = logs?.status || "pending";
    const agentflow = logs?.agentflow;
    
    // Extract relevant data from execution context
    const executionContext = logs?.execution_context || {};
    const agents = Object.values(executionContext);
    const lastAgent = agents[agents.length - 1];
    const outputData = lastAgent?.output_data;

    return (
        <div className="rounded-lg border border-stroke-default bg-surface-container-default overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3 border-b border-stroke-default">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    status === "completed" ? "bg-semantic-success-surface/10" :
                    status === "running" ? "bg-surface-interactive-brand/10" :
                    status === "failed" ? "bg-semantic-error-surface/10" :
                    "bg-text-inverse-subtlest/10"
                )}>
                    <Database className={cn(
                        "w-5 h-5",
                        status === "completed" ? "text-semantic-success-surface" :
                        status === "running" ? "text-surface-interactive-brand" :
                        status === "failed" ? "text-semantic-error-surface" :
                        "text-text-inverse-subtlest"
                    )} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-text-inverse-default">
                            Data Processing
                        </span>
                        {isFetching && (
                            <Loader className="w-3 h-3 text-surface-interactive-brand animate-spin" />
                        )}
                    </div>
                    <p className="text-xs text-text-inverse-subtlest">
                        {agentflow?.name || "Processing data..."}
                    </p>
                </div>
                <StatusIndicator status={status} />
            </div>

            {/* Progress/Steps */}
            {agents.length > 0 && (
                <div className="px-4 py-3 border-b border-stroke-default">
                    <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-3">
                        Processing Steps
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                        {agents.map((agent, index) => (
                            <React.Fragment key={index}>
                                <StepBadge
                                    name={agent.agent_title}
                                    status={agent.status}
                                />
                                {index < agents.length - 1 && (
                                    <ArrowRight className="w-3 h-3 text-text-inverse-subtlest" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}

            {/* Output Preview */}
            {outputData && (
                <div className="px-4 py-3">
                    <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-2">
                        Output
                    </p>
                    <div className="bg-surface-container-default-lighter rounded-lg p-3 max-h-48 overflow-auto">
                        <pre className="text-xs text-text-inverse-subtle whitespace-pre-wrap">
                            {typeof outputData === "string" 
                                ? outputData 
                                : JSON.stringify(outputData, null, 2)}
                        </pre>
                    </div>
                </div>
            )}

            {/* Error Display */}
            {lastAgent?.error && (
                <div className="px-4 py-3 bg-semantic-error-surface/5 border-t border-semantic-error-surface/20">
                    <p className="text-xs font-medium text-semantic-error-surface mb-1">
                        Error
                    </p>
                    <p className="text-sm text-semantic-error-surface">
                        {lastAgent.error}
                    </p>
                </div>
            )}
        </div>
    );
}

// Status indicator component
function StatusIndicator({ status }: { status: string }) {
    const iconClass = "w-4 h-4";

    switch (status) {
        case "completed":
            return (
                <div className="flex items-center gap-1.5 text-semantic-success-surface">
                    <Check className={iconClass} />
                    <span className="text-xs font-medium">Complete</span>
                </div>
            );
        case "failed":
        case "error":
            return (
                <div className="flex items-center gap-1.5 text-semantic-error-surface">
                    <X className={iconClass} />
                    <span className="text-xs font-medium">Failed</span>
                </div>
            );
        case "running":
            return (
                <div className="flex items-center gap-1.5 text-surface-interactive-brand">
                    <Loader className={cn(iconClass, "animate-spin")} />
                    <span className="text-xs font-medium">Running</span>
                </div>
            );
        default:
            return (
                <span className="text-xs text-text-inverse-subtlest">Pending</span>
            );
    }
}

// Step badge component
function StepBadge({ name, status }: { name: string; status?: string }) {
    return (
        <div className={cn(
            "px-2 py-1 rounded text-xs flex items-center gap-1",
            status === "completed" ? "bg-semantic-success-surface/10 text-semantic-success-surface" :
            status === "running" ? "bg-surface-interactive-brand/10 text-surface-interactive-brand" :
            status === "failed" ? "bg-semantic-error-surface/10 text-semantic-error-surface" :
            "bg-text-inverse-subtlest/10 text-text-inverse-subtlest"
        )}>
            {status === "completed" && <Check className="w-3 h-3" />}
            {status === "running" && <Loader className="w-3 h-3 animate-spin" />}
            {status === "failed" && <X className="w-3 h-3" />}
            <span className="truncate max-w-[100px]">{name}</span>
        </div>
    );
}
