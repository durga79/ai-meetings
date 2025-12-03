"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ProcessFlowListComponentProps, ProcessFlowCardProps } from "@/types";
import { Play, Workflow } from "lucide-react";

/**
 * ProcessFlowListComponent - Template for UIKEY.PROCESSFLOW_LIST
 * 
 * Displays a list of available process flows (workflows) that users can run.
 * 
 * Props received from host (via GenerativeProcessFlowList wrapper):
 * - props.data.agentflows: Array of ProcessFlowCardProps
 * - props.data.total_count: Total number of process flows
 * - onRun: Callback when user clicks to run a process flow
 */
export default function ProcessFlowListComponent({
    props,
    data,
    className,
    onRun,
}: ProcessFlowListComponentProps) {
    const agentflows = props?.data?.agentflows || [];
    const isLoading = !props || !props?.data;
    const isEmpty = agentflows.length === 0;

    // Loading state
    if (isLoading) {
        return (
            <div className={cn("flex flex-col items-center w-full px-6 py-12", className)}>
                <div className="w-full max-w-4xl bg-surface-container-default rounded-lg p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                        <div className="h-4 bg-surface-container-default-lighter rounded w-1/3" />
                        <div className="space-y-3 mt-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-20 bg-surface-container-default-lighter rounded" />
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
                        Process Flows
                    </h2>
                    <p className="text-sm text-text-inverse-subtle mt-1">
                        View and manage your process flows
                    </p>
                </div>

                {/* Content */}
                {isEmpty ? (
                    <div className="h-96 flex flex-col items-center justify-center">
                        <Workflow className="w-12 h-12 text-text-inverse-subtlest mb-4" />
                        <p className="text-text-inverse-default font-medium">
                            No process flows found
                        </p>
                        <p className="text-text-inverse-subtle text-sm mt-1">
                            Create a process flow to get started
                        </p>
                    </div>
                ) : (
                    <div className="max-h-[500px] overflow-y-auto">
                        <div className="p-4 space-y-2">
                            {agentflows.map((agentflow) => (
                                <ProcessFlowItem
                                    key={agentflow._id}
                                    processflow={agentflow}
                                    onClick={() => onRun?.(agentflow._id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Sub-component for each process flow item
function ProcessFlowItem({
    processflow,
    onClick,
}: {
    processflow: ProcessFlowCardProps;
    onClick: () => void;
}) {
    return (
        <div className="p-4 bg-surface-container-default-lighter rounded-lg border border-stroke-default hover:border-surface-interactive-brand transition-colors">
            <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        {processflow.image ? (
                            <img
                                src={processflow.image}
                                alt={processflow.name}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-surface-interactive-brand/10 flex items-center justify-center">
                                <Workflow className="w-4 h-4 text-surface-interactive-brand" />
                            </div>
                        )}
                        <span className="text-sm font-medium text-text-inverse-default">
                            {processflow.name}
                        </span>
                    </div>
                    <p className="text-xs text-text-inverse-subtle mt-1 ml-10">
                        {processflow.role}
                    </p>
                    {processflow.description && (
                        <p className="text-xs text-text-inverse-subtlest mt-2 ml-10 line-clamp-2">
                            {processflow.description}
                        </p>
                    )}
                </div>
                <button
                    onClick={onClick}
                    className="ml-4 px-3 py-1.5 bg-surface-interactive-brand text-primary-foreground text-sm rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors flex items-center gap-1"
                >
                    <Play className="w-3 h-3" />
                    Run
                </button>
            </div>
        </div>
    );
}
