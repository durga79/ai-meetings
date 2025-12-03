"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExecutionComponentProps } from "@/types";
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
}: ExecutionComponentProps) {
    const [isExpanded, setIsExpanded] = React.useState(true);

    // Loading state
    if (isLoading) {
        return (
            <div className="rounded-lg border border-stroke-default bg-surface-container-default p-4 animate-pulse">
                <div className="h-4 bg-surface-container-default-lighter rounded w-1/4 mb-2" />
                <div className="h-20 bg-surface-container-default-lighter rounded" />
            </div>
        );
    }

    logs={
        "agentflow_id": "692ed40868884a5de7651762",
        "agentflow_name": "LinkedIn Post Liker",
        "files": [],
        "goal": "Post ID : urn:li:activity:7313790146720538625",
        "schedule": null,
        "start_from_agent_id": null,
        "input_variables": {
            "post_id": "urn:li:activity:7313790146720538625"
        },
        "task_id": "692ed6cb68884a5de765180c",
        "parent_execution_id": null,
        "agentflow": {
            "agentflow_id": "692ed40868884a5de7651762",
            "agents": [
                {
                    "_id": "692ed40868884a5de7651763",
                    "llm": {
                        "model": "bedrock/gpt-oss-20b",
                        "temperature": 0,
                        "max_tokens": 10000
                    },
                    "role": "Post Liker",
                    "role_description": "Likes the given post",
                    "title": "Post Liker",
                    "agent_type": "skilled_agent",
                    "next_agent": null
                }
            ],
            "image": "https://wexadev.blob.core.windows.net/coworkers/process-flow-wexa-5.png",
            "initialAgent": "692ed40868884a5de7651763",
            "name": "LinkedIn Post Liker",
            "role": "LinkedIn Post Liker",
            "conclusion": null,
            "unique_id": null,
            "ui_card": null
        },
        "agents_output": [
            {
                "agent_id": "692ed40868884a5de7651763",
                "agent_name": "Post Liker",
                "agent_role": "Post Liker",
                "agentflow_name": "LinkedIn Post Liker",
                "created_at": 1764677336.925899,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I need to like the LinkedIn post with the given post ID.",
                    "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "I need to like the LinkedIn post with the given post ID. ",
                "temperature": 0,
                "type": "observation"
            },
            {
                "agent_id": "692ed40868884a5de7651763",
                "agent_name": "Post Liker",
                "agent_role": "Post Liker",
                "agentflow_name": "LinkedIn Post Liker",
                "created_at": 1764677341.164684,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                    "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                    "speak": "I will attempt to like the post using the provided post ID.",
                    "skill": {
                        "name": "LinkedIn - Post a reaction",
                        "id": "692ed42768884a5de765178a",
                        "input": {
                            "account_id": "your_account_id",
                            "post_id": "urn:li:activity:7313790146720538625",
                            "reaction_type": "like"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'. ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de7651763",
                "agent_name": "Post Liker",
                "agent_role": "Post Liker",
                "agentflow_name": "LinkedIn Post Liker",
                "created_at": 1764677345.640222,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I need to like the LinkedIn post with the given post ID.",
                        "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided.",
                        "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                        "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                        "speak": "I will attempt to like the post using the provided post ID."
                    },
                    "skill": {
                        "name": "LinkedIn - Post a reaction",
                        "id": "692ed42768884a5de765178a",
                        "input": {
                            "account_id": "your_account_id",
                            "post_id": "urn:li:activity:7313790146720538625",
                            "reaction_type": "like"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "reactions": {
                        "object": "ReactionAdded"
                    }
                },
                "summary": "LinkedIn Post Liker acting as Post Liker has executed a reaction addition to a post.",
                "temperature": 0,
                "type": "output"
            }
        ],
        "anomaly_detected": null,
        "conclusion": {
            "conclusion": "# Execution Summary\n\n## Task Overview\n\nThe task was to like a specific LinkedIn post with the ID `urn:li:activity:7313790146720538625`.\n\n## Execution Details\n\n- **Account ID**: `your_account_id`\n- **Post ID**: `urn:li:activity:7313790146720538625`\n- **Reaction Type**: `like`\n\n## Outcome\n\n- **Reactions**: \n  - `{'object': 'ReactionAdded'}`\n\n## Conclusion\n\nThe post with ID `urn:li:activity:7313790146720538625` has been successfully liked. The reaction has been recorded as `ReactionAdded`.\n\n___\n\n**Metadata:**\n\n- **Agent Title**: Post Liker\n- **Execution Date**: [Current Date]\n- **Status**: Completed",
            "links": [],
            "tokens_used": 1625,
            "created_at": 1764677355.448059
        },
        "created_at": 1764677323.932552,
        "end_time": 1764677356.355065,
        "executed_by": {
            "_id": "686d2cd4f926c032a7f894a6",
            "metadata": null,
            "name": "nani799324",
            "type": "manual",
            "is_external_application": false,
            "application_user_id": null
        },
        "execution_context": {
            "692ed40868884a5de7651763": {
                "agent_title": "Post Liker",
                "agent_role": "Post Liker",
                "decision": null,
                "error": null,
                "execution_duration": 17,
                "input_data": {
                    "account_id": "your_account_id",
                    "post_id": "urn:li:activity:7313790146720538625",
                    "reaction_type": "like"
                },
                "knowledge_base": null,
                "llm_output": {
                    "thoughts": {
                        "text": "I need to like the LinkedIn post with the given post ID.",
                        "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided.",
                        "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                        "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                        "speak": "I will attempt to like the post using the provided post ID."
                    },
                    "skill": {
                        "name": "LinkedIn - Post a reaction",
                        "id": "692ed42768884a5de765178a",
                        "input": {
                            "account_id": "your_account_id",
                            "post_id": "urn:li:activity:7313790146720538625",
                            "reaction_type": "like"
                        }
                    }
                },
                "modified_inputs_during_preview": null,
                "model_used": "bedrock/gpt-oss-20b",
                "output_data": {
                    "reactions": {
                        "object": "ReactionAdded"
                    }
                },
                "preview_input": null,
                "skill_chosen": "LinkedIn - Post a reaction",
                "started_at": 1764677330.369918,
                "status": "completed",
                "tokens_used": 2381,
                "total_summary_tokens": 468,
                "triggers": []
            }
        },
        "execution_id": "dbcdd121-4318-41e3-8c3f-a2f9192829fe",
        "goal_template": "Post ID : {{post_id}}",
        "_id": "692ed6cb68884a5de765180b",
        "previews": {},
        "projectID": "692ed403b90fcf805c47cd7e",
        "runtime_inputs": {},
        "status": "completed",
        "is_external_application": false,
        "application_user_id": null,
        "analytics": {
            "agent_analytics": {
                "692ed40868884a5de7651763": {
                    "tokens_used": 2381,
                    "summary_tokens": 468,
                    "total_tokens": 2849,
                    "execution_time": 17,
                    "price": 0.001
                }
            },
            "overall": {
                "total_tokens_used": 2381,
                "total_summary_tokens": 468,
                "total_conclusion_tokens": 1625,
                "total_tokens": 4474,
                "average_execution_time": 17,
                "total_execution_time": 17,
                "total_price": 0.001
            }
        },
        "categorized_data": {
            "logs": [
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677345.640222,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "thoughts": {
                            "text": "I need to like the LinkedIn post with the given post ID.",
                            "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided.",
                            "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                            "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                            "speak": "I will attempt to like the post using the provided post ID."
                        },
                        "skill": {
                            "name": "LinkedIn - Post a reaction",
                            "id": "692ed42768884a5de765178a",
                            "input": {
                                "account_id": "your_account_id",
                                "post_id": "urn:li:activity:7313790146720538625",
                                "reaction_type": "like"
                            }
                        }
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": {
                        "reactions": {
                            "object": "ReactionAdded"
                        }
                    },
                    "summary": "LinkedIn Post Liker acting as Post Liker has executed a reaction addition to a post.",
                    "temperature": 0,
                    "type": "output"
                },
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677341.164684,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                        "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                        "speak": "I will attempt to like the post using the provided post ID.",
                        "skill": {
                            "name": "LinkedIn - Post a reaction",
                            "id": "692ed42768884a5de765178a",
                            "input": {
                                "account_id": "your_account_id",
                                "post_id": "urn:li:activity:7313790146720538625",
                                "reaction_type": "like"
                            }
                        }
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": null,
                    "summary": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'. ",
                    "temperature": 0,
                    "type": "plan"
                },
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677336.925899,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "text": "I need to like the LinkedIn post with the given post ID.",
                        "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided."
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": null,
                    "summary": "I need to like the LinkedIn post with the given post ID. ",
                    "temperature": 0,
                    "type": "observation"
                }
            ],
            "observation": [
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677336.925899,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "text": "I need to like the LinkedIn post with the given post ID.",
                        "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided."
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": null,
                    "summary": "I need to like the LinkedIn post with the given post ID. ",
                    "temperature": 0,
                    "type": "observation"
                }
            ],
            "plan": [
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677341.164684,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                        "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                        "speak": "I will attempt to like the post using the provided post ID.",
                        "skill": {
                            "name": "LinkedIn - Post a reaction",
                            "id": "692ed42768884a5de765178a",
                            "input": {
                                "account_id": "your_account_id",
                                "post_id": "urn:li:activity:7313790146720538625",
                                "reaction_type": "like"
                            }
                        }
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": null,
                    "summary": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'. ",
                    "temperature": 0,
                    "type": "plan"
                }
            ],
            "output": [
                {
                    "agent_id": "692ed40868884a5de7651763",
                    "agent_name": "Post Liker",
                    "agent_role": "Post Liker",
                    "agentflow_name": "LinkedIn Post Liker",
                    "created_at": 1764677345.640222,
                    "decision": null,
                    "error": null,
                    "input_data": {
                        "thoughts": {
                            "text": "I need to like the LinkedIn post with the given post ID.",
                            "reasoning": "The goal specifies the post ID. To react, I must use the LinkedIn reaction skill, which requires an account ID, the post ID, and a reaction type. I will use a placeholder for the account ID as it is not provided.",
                            "plan": "- Identify the post ID from the goal.\n- Prepare the reaction input with a placeholder account ID.\n- Invoke the LinkedIn reaction skill with reaction_type 'like'.",
                            "criticism": "I lack the actual account ID, so the reaction may not be executed without valid credentials.",
                            "speak": "I will attempt to like the post using the provided post ID."
                        },
                        "skill": {
                            "name": "LinkedIn - Post a reaction",
                            "id": "692ed42768884a5de765178a",
                            "input": {
                                "account_id": "your_account_id",
                                "post_id": "urn:li:activity:7313790146720538625",
                                "reaction_type": "like"
                            }
                        }
                    },
                    "max_tokens": 10000,
                    "model": "bedrock/gpt-oss-20b",
                    "output_data": {
                        "reactions": {
                            "object": "ReactionAdded"
                        }
                    },
                    "summary": "LinkedIn Post Liker acting as Post Liker has executed a reaction addition to a post.",
                    "temperature": 0,
                    "type": "output"
                }
            ]
        }
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
                    <Check className={cn(iconClass, "text-white")} strokeWidth={3} />
                </div>
            );
        case "failed":
        case "error":
            return (
                <div className={cn(baseClass, "bg-semantic-error-surface")}>
                    <X className={cn(iconClass, "text-white")} strokeWidth={3} />
                </div>
            );
        case "running":
            return (
                <div className={cn(baseClass, "bg-surface-interactive-brand")}>
                    <Loader className={cn(iconClass, "text-white animate-spin")} />
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
