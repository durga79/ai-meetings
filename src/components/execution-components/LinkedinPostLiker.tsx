import React from 'react'
import { ExecutionComponentProps } from '@/types'

const LinkedinPostLiker = ({
  logs,
  isLoading,
  isFetching,
}: ExecutionComponentProps) => {

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
  
  const isBusy = isLoading || isFetching

  const firstKey = logs && logs.execution_context
    ? Object.keys(logs.execution_context)[0]
    : undefined

  const post = firstKey
    ? logs?.execution_context?.[firstKey]?.output_data?.posts
    : undefined

  

  const author = post?.author
  const attachments = post?.attachments || []
  const repostContent = post?.repost_content

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 border-4 border-[hsl(var(--stroke-soft))] rounded-full" />
              <div className="absolute inset-0 border-4 border-[hsl(var(--surface-interactive-brand))] rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-[hsl(var(--text-subtle))] font-medium text-sm sm:text-base">
              Loading LinkedIn post...
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-8 text-center">
          <div className="text-[hsl(var(--text-subtlest))] text-4xl sm:text-5xl mb-3 sm:mb-4">📭</div>
          <h3 className="text-lg sm:text-xl font-semibold text-[hsl(var(--text-default))] mb-1 sm:mb-2">
            No Post Available
          </h3>
          <p className="text-[hsl(var(--text-subtle))] text-sm sm:text-base">
            No execution data found for this LinkedIn post.
          </p>
        </div>
      </div>
    )
  }

  const handleAddComment = () => {
    // Intentionally left as a no-op placeholder; wiring to parent handler can be added separately.
    console.log('Add comment action triggered')
  }

  const handleAddLike = () => {
    console.log('Add like action triggered')
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-md border border-[hsl(var(--stroke-soft))] overflow-hidden">
        <div className="px-4 sm:px-6 pt-4 pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-[hsl(var(--surface-interactive-brand-raised))] to-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-white font-semibold text-base sm:text-lg shadow-md">
                  {author?.name ? author.name.charAt(0).toUpperCase() : 'U'}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {author?.name && (
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-[hsl(var(--text-default))] hover:text-[hsl(var(--text-link))] cursor-pointer hover:underline truncate">
                      {author.name}
                    </span>
                    {author.is_company && (
                      <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-[hsl(var(--surface-interactive-subtle))] text-[hsl(var(--text-subtle))] uppercase tracking-wide">
                        Company
                      </span>
                    )}
                  </div>
                )}

                {author?.headline && (
                  <p className="text-[11px] sm:text-xs text-[hsl(var(--text-subtle))] truncate">
                    {author.headline}
                  </p>
                )}

                <p className="text-[11px] sm:text-xs text-[hsl(var(--text-subtle))] mt-1 flex items-center space-x-1">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[hsl(var(--stroke-soft))] text-[hsl(var(--text-subtle))] text-[10px]">
                    in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-3">
          <p className="text-sm text-[hsl(var(--text-default))] whitespace-pre-wrap leading-relaxed">
            {post.text}
          </p>
        </div>

        {repostContent && (
          <div className="px-4 sm:px-6 pb-3">
            <div className="border border-[hsl(var(--stroke-soft))] rounded-lg overflow-hidden bg-[hsl(var(--surface-container-low))]">
              <div className="px-3 sm:px-4 pt-3 pb-2 border-b border-[hsl(var(--stroke-subtle))] flex items-start space-x-2">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--surface-interactive-default))] flex items-center justify-center text-white text-xs font-semibold">
                  {repostContent.author?.name
                    ? repostContent.author.name.charAt(0).toUpperCase()
                    : 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  {repostContent.author?.name && (
                    <p className="text-xs font-semibold text-[hsl(var(--text-default))] truncate">
                      {repostContent.author.name}
                    </p>
                  )}
                  <p className="text-[11px] text-[hsl(var(--text-subtle))] flex items-center space-x-1">
                    <span>{repostContent.date}</span>
                  </p>
                </div>
              </div>
              <div className="px-3 sm:px-4 py-3">
                <p className="text-xs sm:text-sm text-[hsl(var(--text-default))] whitespace-pre-wrap leading-relaxed line-clamp-6">
                  {repostContent.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {attachments.length > 0 && (
          <div className="px-4 sm:px-6 pb-3">
            <div className="grid gap-1">
              {attachments.map((attachment: any, index: number) => (
                attachment.type === 'img' ? (
                  <img
                    key={index}
                    className="w-full max-h-[460px] object-cover rounded-lg bg-black/5"
                    src={attachment.url}
                    alt="Post attachment"
                  />
                ) : null
              ))}
            </div>
          </div>
        )}

        <div className="px-4 sm:px-6 py-2 border-t border-[hsl(var(--stroke-soft))]">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[hsl(var(--text-subtle))]">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-[hsl(var(--surface-interactive-brand))] border-2 border-[hsl(var(--surface-container-default))] flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.999 14.667a.667.667 0 01-.472-.195l-4.8-4.8a3.333 3.333 0 114.714-4.714l.558.559.558-.559a3.333 3.333 0 114.714 4.714l-4.8 4.8a.667.667 0 01-.472.195z" />
                  </svg>
                </div>
              </div>
              <span className="ml-1 hover:text-[hsl(var(--text-link))] cursor-pointer hover:underline">
                {post.reaction_counter && post.reaction_counter > 0
                  ? `${post.reaction_counter} reactions`
                  : 'Be the first to react'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="hover:text-[hsl(var(--text-link))] cursor-pointer hover:underline">
                {post.comment_counter} {post.comment_counter === 1 ? 'comment' : 'comments'}
              </span>
              <span className="hover:text-[hsl(var(--text-link))] cursor-pointer hover:underline">
                {post.repost_counter} {post.repost_counter === 1 ? 'repost' : 'reposts'}
              </span>
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-4 py-1 border-t border-[hsl(var(--stroke-subtle))] bg-[hsl(var(--surface-container-low))]">
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            <button
              type="button"
              onClick={handleAddLike}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-2 sm:py-2.5 rounded-md hover:bg-[hsl(var(--surface-interactive-subtle))] text-[hsl(var(--text-subtle))] text-xs sm:text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>Like</span>
            </button>

            <button
              type="button"
              onClick={handleAddComment}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-2 sm:py-2.5 rounded-md hover:bg-[hsl(var(--surface-interactive-subtle))] text-[hsl(var(--text-subtle))] text-xs sm:text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkedinPostLiker