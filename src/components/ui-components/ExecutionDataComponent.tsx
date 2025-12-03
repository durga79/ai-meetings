"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ExecutionDataComponentProps, Agent, AgentExecutionContext } from "@/types";
import { Check, X, Loader, Clock, ChevronDown, ChevronUp } from "lucide-react";

/**
 * ExecutionDataComponent - Template for UIKEY.EXECUTION_DATA
 * 
 * Displays detailed execution logs for a single workflow run.
 * Shows each agent's execution status, thoughts, and outputs.
 * 
 * Props received from host (via GenerativeExecutionData wrapper):
 * - logs: LogsOutput with execution details
 * - coworker: AgentFlow definition
 * - loadingCoworker: Loading state for coworker data
 */
export default function ExecutionDataComponent({
    logs,
    coworker,
    loadingCoworker,
}: ExecutionDataComponentProps) {
    const [expandedAgents, setExpandedAgents] = useState<Record<string, boolean>>({});

    // Get agents in execution order
    const agents = getOrderedAgents(logs);

    // Loading state
    if (loadingCoworker || !logs) {
        return (
            <div className="flex flex-col items-center w-full px-6 py-12">
                <div className="w-full max-w-4xl bg-surface-container-default rounded-lg p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                        <div className="space-y-3 mt-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-24 bg-surface-container-default-lighter rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const toggleAgent = (agentId: string) => {
        setExpandedAgents(prev => ({ ...prev, [agentId]: !prev[agentId] }));
    };

    return (
        <div className="flex flex-col items-center w-full px-6 py-12">
            <div className="w-full max-w-4xl bg-surface-container-default rounded-lg shadow-lg">
                {/* Header */}
                <div className="p-6 border-b border-stroke-default">
                    <div className="flex items-start gap-4">
                        <StatusIcon status={logs.status} size="lg" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-text-inverse-default">
                                {logs.agentflow?.name || "Execution Details"}
                            </h2>
                            <p className="text-sm text-text-inverse-subtle mt-1">
                                {logs.goal}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-text-inverse-subtlest">
                                <span>Status: <StatusBadge status={logs.status} /></span>
                                <span>Started: {formatDate(logs.created_at)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agents Flow */}
                <div className="p-6">
                    <h3 className="text-sm font-medium text-text-inverse-subtlest uppercase tracking-wide mb-4">
                        Execution Flow
                    </h3>
                    
                    {Object.keys(agents).length === 0 ? (
                        <div className="text-center py-8">
                            <Clock className="w-8 h-8 text-text-inverse-subtlest mx-auto mb-2" />
                            <p className="text-text-inverse-subtle">
                                Waiting for execution to start...
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {Object.entries(agents).map(([agentId, { agent, executionContext }]) => (
                                <AgentCard
                                    key={agentId}
                                    agent={agent}
                                    context={executionContext}
                                    isExpanded={expandedAgents[agentId] ?? false}
                                    onToggle={() => toggleAgent(agentId)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Agent card component
function AgentCard({
    agent,
    context,
    isExpanded,
    onToggle,
}: {
    agent: Agent;
    context?: AgentExecutionContext;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    const status = context?.status || "pending";

    return (
        <div className="bg-surface-container-default-lighter rounded-lg border border-stroke-default overflow-hidden">
            {/* Agent Header */}
            <button
                onClick={onToggle}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-surface-container-raised transition-colors"
            >
                <div className="flex items-center gap-3">
                    <StatusIcon status={status} />
                    <div className="text-left">
                        <span className="text-sm font-medium text-text-inverse-default">
                            {agent.title}
                        </span>
                        <p className="text-xs text-text-inverse-subtlest">
                            {agent.agent_type === "decider_agent" ? "Decider" : "Agent"}
                        </p>
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

            {/* Agent Details */}
            {isExpanded && context && (
                <div className="px-4 py-3 border-t border-stroke-default space-y-4">
                    {/* Thoughts */}
                    {context.llm_output?.thoughts && (
                        <div>
                            <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-2">
                                Thoughts
                            </p>
                            <div className="text-sm text-text-inverse-default space-y-2">
                                {context.llm_output.thoughts.reasoning && (
                                    <p><span className="text-text-inverse-subtlest">Reasoning:</span> {context.llm_output.thoughts.reasoning}</p>
                                )}
                                {context.llm_output.thoughts.plan && (
                                    <p><span className="text-text-inverse-subtlest">Plan:</span> {context.llm_output.thoughts.plan}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Skill */}
                    {context.llm_output?.skill && (
                        <div>
                            <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-2">
                                Skill Used
                            </p>
                            <p className="text-sm text-text-inverse-default">
                                {context.llm_output.skill.skill_name}
                            </p>
                        </div>
                    )}

                    {/* Decision */}
                    {context.decision && (
                        <div>
                            <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-2">
                                Decision
                            </p>
                            <p className="text-sm text-surface-interactive-brand font-medium">
                                {context.decision}
                            </p>
                        </div>
                    )}

                    {/* Error */}
                    {context.error && (
                        <div className="p-3 bg-semantic-error-surface/10 rounded-lg">
                            <p className="text-xs font-medium text-semantic-error-surface uppercase tracking-wide mb-1">
                                Error
                            </p>
                            <p className="text-sm text-semantic-error-surface">
                                {context.error}
                            </p>
                        </div>
                    )}

                    {/* Output Data */}
                    {context.output_data && Object.keys(context.output_data).length > 0 && (
                        <div>
                            <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-2">
                                Output
                            </p>
                            <pre className="text-xs text-text-inverse-subtle bg-surface-container-default p-2 rounded overflow-auto max-h-32">
                                {JSON.stringify(context.output_data, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Status icon component
function StatusIcon({ status, size = "sm" }: { status?: string; size?: "sm" | "lg" }) {
    const sizeClass = size === "lg" ? "w-10 h-10" : "w-5 h-5";
    const iconClass = size === "lg" ? "w-5 h-5" : "w-3 h-3";

    const wrapperClass = cn(
        "rounded-full flex items-center justify-center",
        sizeClass
    );

    switch (status) {
        case "completed":
            return (
                <div className={cn(wrapperClass, "bg-semantic-success-surface")}>
                    <Check className={cn(iconClass, "text-primary-foreground")} strokeWidth={3} />
                </div>
            );
        case "failed":
        case "error":
            return (
                <div className={cn(wrapperClass, "bg-semantic-error-surface")}>
                    <X className={cn(iconClass, "text-primary-foreground")} strokeWidth={3} />
                </div>
            );
        case "running":
            return (
                <div className={cn(wrapperClass, "bg-surface-interactive-brand")}>
                    <Loader className={cn(iconClass, "text-primary-foreground animate-spin")} />
                </div>
            );
        default:
            return (
                <div className={cn(wrapperClass, "bg-text-inverse-subtlest/30")}>
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

// Helper to get agents in execution order
function getOrderedAgents(logs?: ExecutionDataComponentProps["logs"]): Record<string, {
    agent: Agent;
    executionContext?: AgentExecutionContext;
}> {
    if (!logs?.agentflow) return {};

    const executionContext = logs?.execution_context ?? {};
    const agentMap: Record<string, Agent> = {};

    logs.agentflow.agents.forEach((agent) => {
        agentMap[agent._id] = agent;
    });

    const initialAgent = logs.agentflow.initialAgent;
    if (!initialAgent) return {};

    const agents: Record<string, {
        agent: Agent;
        executionContext?: AgentExecutionContext;
    }> = {};
    
    let currentAgent: Agent | undefined = agentMap[initialAgent];

    while (currentAgent) {
        agents[currentAgent._id] = {
            agent: currentAgent,
            executionContext: executionContext[currentAgent._id],
        };

        if (currentAgent.agent_type === "decider_agent") {
            const context: AgentExecutionContext | undefined = executionContext[currentAgent._id];
            if (context?.decision && currentAgent.next_agents) {
                const nextAgentId: string | null | undefined = currentAgent.next_agents[context.decision];
                currentAgent = nextAgentId ? agentMap[nextAgentId] : undefined;
            } else {
                currentAgent = undefined;
            }
        } else {
            const nextAgentId: string | null | undefined = currentAgent.next_agent;
            currentAgent = nextAgentId ? agentMap[nextAgentId] : undefined;
        }
    }

    return agents;
}

// Date formatter
function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
