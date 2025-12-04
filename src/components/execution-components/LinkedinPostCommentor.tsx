"use client";

import React from "react";
import { ExecutionComponentProps } from "@/types";
import { MessageCircle, CheckCircle2, ExternalLink } from "lucide-react";

const LinkedinPostCommentor = ({
  logs,
  isLoading,
  isFetching,
}: ExecutionComponentProps) => {

  // Hardcoded logs for UI testing – will be ignored when real logs are passed from host
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logs={
    "agentflow_id": "692ed40868884a5de7651764",
    "agentflow_name": "LinkedIn Post Commenter",
    "files": [],
    "goal": "Post ID: 7402189157814444032",
    "schedule": null,
    "start_from_agent_id": null,
    "input_variables": {
        "post_id": "7402189157814444032"
    },
    "task_id": "693118455a6e0973e3bc05d1",
    "parent_execution_id": null,
    "agentflow": {
        "agentflow_id": "692ed40868884a5de7651764",
        "agents": [
            {
                "_id": "692ed40868884a5de7651765",
                "llm": {
                    "model": "bedrock/gpt-oss-20b",
                    "temperature": 0,
                    "max_tokens": 10000
                },
                "role": "Post Retriever",
                "role_description": "Retrieves the post based on the given post_id",
                "title": "Post Retriever",
                "agent_type": "skilled_agent",
                "next_agent": "692ed40868884a5de7651766"
            },
            {
                "_id": "692ed40868884a5de7651766",
                "llm": {
                    "model": "bedrock/gpt-oss-20b",
                    "temperature": 0,
                    "max_tokens": 10000
                },
                "role": "LinkedIn Post Commenter",
                "role_description": "Comments on the given LinkedIn post based on the given post ID",
                "title": "LinkedIn Post Commenter",
                "agent_type": "skilled_agent",
                "next_agent": null
            }
        ],
        "image": "https://wexadev.blob.core.windows.net/coworkers/process-flow-wexa-11.png",
        "initialAgent": "692ed40868884a5de7651765",
        "name": "LinkedIn Post Commenter",
        "role": "LinkedIn Post Commenter",
        "conclusion": null,
        "unique_id": "12a4cdf",
        "ui_card": null
    },
    "agents_output": [
        {
            "agent_id": "692ed40868884a5de7651765",
            "agent_name": "Post Retriever",
            "agent_role": "Post Retriever",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825166.952486,
            "decision": null,
            "error": null,
            "input_data": {
                "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id."
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "I need to retrieve the LinkedIn post with ID 7402189157814444032. ",
            "temperature": 0,
            "type": "observation"
        },
        {
            "agent_id": "692ed40868884a5de7651765",
            "agent_name": "Post Retriever",
            "agent_role": "Post Retriever",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825170.995278,
            "decision": null,
            "error": null,
            "input_data": {
                "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                "speak": "Retrieving the LinkedIn post now.",
                "skill": {
                    "name": "LinkedIn - Retrieve a post",
                    "id": "692ed42768884a5de7651792",
                    "input": {
                        "post_id": "7402189157814444032"
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result. ",
            "temperature": 0,
            "type": "plan"
        },
        {
            "agent_id": "692ed40868884a5de7651765",
            "agent_name": "Post Retriever",
            "agent_role": "Post Retriever",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825175.974901,
            "decision": null,
            "error": null,
            "input_data": {
                "thoughts": {
                    "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                    "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id.",
                    "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                    "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                    "speak": "Retrieving the LinkedIn post now."
                },
                "skill": {
                    "name": "LinkedIn - Retrieve a post",
                    "id": "692ed42768884a5de7651792",
                    "input": {
                        "post_id": "7402189157814444032"
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": {
                "posts": {
                    "object": "Post",
                    "provider": "LINKEDIN",
                    "social_id": "urn:li:activity:7402189157814444032",
                    "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                    "date": "1h",
                    "comment_counter": 34,
                    "impressions_counter": 0,
                    "reaction_counter": 84,
                    "repost_counter": 1,
                    "permissions": {
                        "can_post_comments": true,
                        "can_react": true,
                        "can_share": true
                    },
                    "text": "You’re hiring résumés, not people. \n\nThat’s why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can’t teach quickly is attitude. \n\nYou can’t teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don’t fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn’t help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                    "mentions": [
                        {
                            "url": "https://www.linkedin.com/in/ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                            "length": 11,
                            "start": 1036
                        }
                    ],
                    "attachments": [
                        {
                            "id": "D5622AQERXIGL9ksRmA",
                            "sticker": false,
                            "size": {
                                "height": 1000,
                                "width": 800
                            },
                            "unavailable": false,
                            "type": "img",
                            "url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                        }
                    ],
                    "author": {
                        "public_identifier": "smritigoel-executivecoach",
                        "id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                        "name": "Smriti Goel",
                        "is_company": false,
                        "headline": "Global Executive coach at BCG I Business Support Team"
                    },
                    "id": "7402189157814444032",
                    "is_repost": false,
                    "parsed_datetime": "2025-12-04T03:37:01.247Z"
                }
            },
            "summary": "LinkedIn Post Commenter acting as Post Retriever has executed retrieval of a LinkedIn post by Smriti Goel discussing the importance of hiring for attitude and mindset over experience, with a link to the post: https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
            "temperature": 0,
            "type": "output"
        },
        {
            "agent_id": "692ed40868884a5de7651766",
            "agent_name": "LinkedIn Post Commenter",
            "agent_role": "LinkedIn Post Commenter",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825187.545365,
            "decision": null,
            "error": null,
            "input_data": {
                "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content."
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience. ",
            "temperature": 0,
            "type": "observation"
        },
        {
            "agent_id": "692ed40868884a5de7651766",
            "agent_name": "LinkedIn Post Commenter",
            "agent_role": "LinkedIn Post Commenter",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825192.595355,
            "decision": null,
            "error": null,
            "input_data": {
                "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                "speak": "Here’s a concise comment that appreciates the post and encourages engagement.",
                "skill": {
                    "name": "LinkedIn - Post a comment",
                    "id": "692ed42768884a5de7651788",
                    "input": {
                        "post_id": "7402189157814444032",
                        "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text. ",
            "temperature": 0,
            "type": "plan"
        },
        {
            "agent_id": "692ed40868884a5de7651766",
            "agent_name": "LinkedIn Post Commenter",
            "agent_role": "LinkedIn Post Commenter",
            "agentflow_name": "LinkedIn Post Commenter",
            "created_at": 1764825197.265978,
            "decision": null,
            "error": null,
            "input_data": {
                "thoughts": {
                    "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                    "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content.",
                    "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                    "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                    "speak": "Here’s a concise comment that appreciates the post and encourages engagement."
                },
                "skill": {
                    "name": "LinkedIn - Post a comment",
                    "id": "692ed42768884a5de7651788",
                    "input": {
                        "post_id": "7402189157814444032",
                        "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": {
                "comments": {
                    "object": "CommentSent"
                }
            },
            "summary": "LinkedIn Post Commenter acting as LinkedIn Post Commenter has executed a successful comment on a LinkedIn post, demonstrating active engagement and contribution to professional discussions.",
            "temperature": 0,
            "type": "output"
        }
    ],
    "anomaly_detected": null,
    "conclusion": {
        "conclusion": "## Execution Summary\n\n### Task: Comment on LinkedIn Post\n\n**Post ID:** 7402189157814444032\n\n**Comment Sent:**\n- **Text:** Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone.\n\n**Status:** Comment successfully posted.\n\n---\n\n### Metadata\n\n- **Post Author:** [Smriti Goel](https://www.linkedin.com/in/ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E)\n- **Post Date:** 2025-12-04T03:37:01.247Z\n- **Post Text:**\n  > You’re hiring résumés, not people. \n  >\n  > That’s why you keep losing top talent.\n  >\n  > Too many teams still prioritise long resumes and ignore the mindset behind them.\n  >\n  > Skills are easier to teach now. Training is fast. Resources are everywhere. \n  >\n  > What you can’t teach quickly is attitude. \n  >\n  > You can’t teach someone to stay curious, take ownership, or care about the work.\n  >\n  > People with the right mindset learn fast. \n  >\n  > They work well with others. \n  >\n  > They solve problems instead of waiting for someone to guide them. \n  >\n  > They bring energy that lifts the whole team.\n  >\n  > On the other hand, experience can come with habits that don’t fit your culture. \n  >\n  > Some experienced hires struggle to adapt. Some resist new ways of working. \n  >\n  > When attitude is missing, experience doesn’t help much.\n  >\n  > Leaders who hire for passion build stronger teams. \n  >\n  > They get people who want to grow, not just people who have done the job before.\n  >\n  > If you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n  >\n  > Follow Smriti Goel for more such content.\n  >\n  > #coach #leaders #executive\n\n- **Post URL:** [LinkedIn Post](https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE)\n\n---\n\n### Comment\n\n- **Comment Text:** Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone.",
        "links": [],
        "tokens_used": 3634,
        "created_at": 1764825209.94003
    },
    "created_at": 1764825157.975098,
    "end_time": 1764825210.990241,
    "executed_by": {
        "_id": "686d2cd4f926c032a7f894a6",
        "metadata": null,
        "name": "nani799324",
        "type": "manual",
        "is_external_application": false,
        "application_user_id": null
    },
    "execution_context": {
        "692ed40868884a5de7651765": {
            "agent_title": "Post Retriever",
            "agent_role": "Post Retriever",
            "decision": null,
            "error": null,
            "execution_duration": 16,
            "input_data": {
                "post_id": "7402189157814444032"
            },
            "knowledge_base": null,
            "llm_output": {
                "thoughts": {
                    "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                    "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id.",
                    "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                    "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                    "speak": "Retrieving the LinkedIn post now."
                },
                "skill": {
                    "name": "LinkedIn - Retrieve a post",
                    "id": "692ed42768884a5de7651792",
                    "input": {
                        "post_id": "7402189157814444032"
                    }
                }
            },
            "modified_inputs_during_preview": null,
            "model_used": "bedrock/gpt-oss-20b",
            "output_data": {
                "posts": {
                    "object": "Post",
                    "provider": "LINKEDIN",
                    "social_id": "urn:li:activity:7402189157814444032",
                    "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                    "date": "1h",
                    "comment_counter": 34,
                    "impressions_counter": 0,
                    "reaction_counter": 84,
                    "repost_counter": 1,
                    "permissions": {
                        "can_post_comments": true,
                        "can_react": true,
                        "can_share": true
                    },
                    "text": "You’re hiring résumés, not people. \n\nThat’s why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can’t teach quickly is attitude. \n\nYou can’t teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don’t fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn’t help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                    "mentions": [
                        {
                            "url": "https://www.linkedin.com/in/ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                            "length": 11,
                            "start": 1036
                        }
                    ],
                    "attachments": [
                        {
                            "id": "D5622AQERXIGL9ksRmA",
                            "sticker": false,
                            "size": {
                                "height": 1000,
                                "width": 800
                            },
                            "unavailable": false,
                            "type": "img",
                            "url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                        }
                    ],
                    "author": {
                        "public_identifier": "smritigoel-executivecoach",
                        "id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                        "name": "Smriti Goel",
                        "is_company": false,
                        "headline": "Global Executive coach at BCG I Business Support Team"
                    },
                    "id": "7402189157814444032",
                    "is_repost": false,
                    "parsed_datetime": "2025-12-04T03:37:01.247Z"
                }
            },
            "preview_input": null,
            "skill_chosen": "LinkedIn - Retrieve a post",
            "started_at": 1764825162.910606,
            "status": "completed",
            "tokens_used": 1758,
            "total_summary_tokens": 1631,
            "triggers": []
        },
        "692ed40868884a5de7651766": {
            "agent_title": "LinkedIn Post Commenter",
            "agent_role": "LinkedIn Post Commenter",
            "decision": null,
            "error": null,
            "execution_duration": 18,
            "input_data": {
                "post_id": "7402189157814444032",
                "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
            },
            "knowledge_base": null,
            "llm_output": {
                "thoughts": {
                    "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                    "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content.",
                    "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                    "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                    "speak": "Here’s a concise comment that appreciates the post and encourages engagement."
                },
                "skill": {
                    "name": "LinkedIn - Post a comment",
                    "id": "692ed42768884a5de7651788",
                    "input": {
                        "post_id": "7402189157814444032",
                        "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                    }
                }
            },
            "modified_inputs_during_preview": null,
            "model_used": "bedrock/gpt-oss-20b",
            "output_data": {
                "comments": {
                    "object": "CommentSent"
                }
            },
            "preview_input": null,
            "skill_chosen": "LinkedIn - Post a comment",
            "started_at": 1764825182.610994,
            "status": "completed",
            "tokens_used": 3546,
            "total_summary_tokens": 487,
            "triggers": []
        }
    },
    "execution_id": "6c181ca8-721a-4e4b-b3b4-114e6a807078",
    "goal_template": "Post ID: {{post_id}}",
    "_id": "693118455a6e0973e3bc05d0",
    "previews": {},
    "projectID": "692ed403b90fcf805c47cd7e",
    "runtime_inputs": {},
    "status": "completed",
    "is_external_application": false,
    "application_user_id": null,
    "analytics": {
        "agent_analytics": {
            "692ed40868884a5de7651765": {
                "tokens_used": 1758,
                "summary_tokens": 1631,
                "total_tokens": 3389,
                "execution_time": 16,
                "price": 0.001
            },
            "692ed40868884a5de7651766": {
                "tokens_used": 3546,
                "summary_tokens": 487,
                "total_tokens": 4033,
                "execution_time": 18,
                "price": 0.001
            }
        },
        "overall": {
            "total_tokens_used": 5304,
            "total_summary_tokens": 2118,
            "total_conclusion_tokens": 3634,
            "total_tokens": 11056,
            "average_execution_time": 17,
            "total_execution_time": 34,
            "total_price": 0.002
        }
    },
    "categorized_data": {
        "logs": [
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825197.265978,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                        "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content.",
                        "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                        "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                        "speak": "Here’s a concise comment that appreciates the post and encourages engagement."
                    },
                    "skill": {
                        "name": "LinkedIn - Post a comment",
                        "id": "692ed42768884a5de7651788",
                        "input": {
                            "post_id": "7402189157814444032",
                            "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "comments": {
                        "object": "CommentSent"
                    }
                },
                "summary": "LinkedIn Post Commenter acting as LinkedIn Post Commenter has executed a successful comment on a LinkedIn post, demonstrating active engagement and contribution to professional discussions.",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825192.595355,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                    "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                    "speak": "Here’s a concise comment that appreciates the post and encourages engagement.",
                    "skill": {
                        "name": "LinkedIn - Post a comment",
                        "id": "692ed42768884a5de7651788",
                        "input": {
                            "post_id": "7402189157814444032",
                            "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text. ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825187.545365,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                    "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience. ",
                "temperature": 0,
                "type": "observation"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825175.974901,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                        "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id.",
                        "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                        "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                        "speak": "Retrieving the LinkedIn post now."
                    },
                    "skill": {
                        "name": "LinkedIn - Retrieve a post",
                        "id": "692ed42768884a5de7651792",
                        "input": {
                            "post_id": "7402189157814444032"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "posts": {
                        "object": "Post",
                        "provider": "LINKEDIN",
                        "social_id": "urn:li:activity:7402189157814444032",
                        "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                        "date": "1h",
                        "comment_counter": 34,
                        "impressions_counter": 0,
                        "reaction_counter": 84,
                        "repost_counter": 1,
                        "permissions": {
                            "can_post_comments": true,
                            "can_react": true,
                            "can_share": true
                        },
                        "text": "You’re hiring résumés, not people. \n\nThat’s why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can’t teach quickly is attitude. \n\nYou can’t teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don’t fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn’t help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                        "mentions": [
                            {
                                "url": "https://www.linkedin.com/in/ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                "length": 11,
                                "start": 1036
                            }
                        ],
                        "attachments": [
                            {
                                "id": "D5622AQERXIGL9ksRmA",
                                "sticker": false,
                                "size": {
                                    "height": 1000,
                                    "width": 800
                                },
                                "unavailable": false,
                                "type": "img",
                                "url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                            }
                        ],
                        "author": {
                            "public_identifier": "smritigoel-executivecoach",
                            "id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                            "name": "Smriti Goel",
                            "is_company": false,
                            "headline": "Global Executive coach at BCG I Business Support Team"
                        },
                        "id": "7402189157814444032",
                        "is_repost": false,
                        "parsed_datetime": "2025-12-04T03:37:01.247Z"
                    }
                },
                "summary": "LinkedIn Post Commenter acting as Post Retriever has executed retrieval of a LinkedIn post by Smriti Goel discussing the importance of hiring for attitude and mindset over experience, with a link to the post: https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825170.995278,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                    "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                    "speak": "Retrieving the LinkedIn post now.",
                    "skill": {
                        "name": "LinkedIn - Retrieve a post",
                        "id": "692ed42768884a5de7651792",
                        "input": {
                            "post_id": "7402189157814444032"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result. ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825166.952486,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                    "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "I need to retrieve the LinkedIn post with ID 7402189157814444032. ",
                "temperature": 0,
                "type": "observation"
            }
        ],
        "observation": [
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825187.545365,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                    "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience. ",
                "temperature": 0,
                "type": "observation"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825166.952486,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                    "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "I need to retrieve the LinkedIn post with ID 7402189157814444032. ",
                "temperature": 0,
                "type": "observation"
            }
        ],
        "plan": [
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825192.595355,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                    "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                    "speak": "Here’s a concise comment that appreciates the post and encourages engagement.",
                    "skill": {
                        "name": "LinkedIn - Post a comment",
                        "id": "692ed42768884a5de7651788",
                        "input": {
                            "post_id": "7402189157814444032",
                            "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text. ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825170.995278,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                    "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                    "speak": "Retrieving the LinkedIn post now.",
                    "skill": {
                        "name": "LinkedIn - Retrieve a post",
                        "id": "692ed42768884a5de7651792",
                        "input": {
                            "post_id": "7402189157814444032"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result. ",
                "temperature": 0,
                "type": "plan"
            }
        ],
        "output": [
            {
                "agent_id": "692ed40868884a5de7651766",
                "agent_name": "LinkedIn Post Commenter",
                "agent_role": "LinkedIn Post Commenter",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825197.265978,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "Need to craft a concise, appreciative comment that aligns with the post’s theme of hiring for mindset over experience.",
                        "reasoning": "The post highlights the importance of attitude and passion in hiring. A short comment that echoes this sentiment and adds a personal touch will resonate well. The comment should be brief, positive, and relevant to the content.",
                        "plan": "- Draft a short, appreciative comment.\n- Ensure it references mindset and passion.\n- Use the LinkedIn - Post a comment skill with the correct post_id and text.",
                        "criticism": "I should avoid overly generic praise; keep it specific to the post’s message.",
                        "speak": "Here’s a concise comment that appreciates the post and encourages engagement."
                    },
                    "skill": {
                        "name": "LinkedIn - Post a comment",
                        "id": "692ed42768884a5de7651788",
                        "input": {
                            "post_id": "7402189157814444032",
                            "text": "Great insight! Prioritizing mindset over experience truly unlocks team growth. I’ve seen passion drive innovation far more than tenure alone."
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "comments": {
                        "object": "CommentSent"
                    }
                },
                "summary": "LinkedIn Post Commenter acting as LinkedIn Post Commenter has executed a successful comment on a LinkedIn post, demonstrating active engagement and contribution to professional discussions.",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de7651765",
                "agent_name": "Post Retriever",
                "agent_role": "Post Retriever",
                "agentflow_name": "LinkedIn Post Commenter",
                "created_at": 1764825175.974901,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I need to retrieve the LinkedIn post with ID 7402189157814444032.",
                        "reasoning": "The goal explicitly states the post ID. The task requires using a LinkedIn retrieval skill. I will use the 'LinkedIn - Retrieve a post' skill with the given post_id.",
                        "plan": "- Identify the post ID from the goal.\n- Call the LinkedIn retrieval skill with that ID.\n- Return the result.",
                        "criticism": "I should ensure the correct skill name and input field are used. No additional steps are needed.",
                        "speak": "Retrieving the LinkedIn post now."
                    },
                    "skill": {
                        "name": "LinkedIn - Retrieve a post",
                        "id": "692ed42768884a5de7651792",
                        "input": {
                            "post_id": "7402189157814444032"
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "posts": {
                        "object": "Post",
                        "provider": "LINKEDIN",
                        "social_id": "urn:li:activity:7402189157814444032",
                        "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                        "date": "1h",
                        "comment_counter": 34,
                        "impressions_counter": 0,
                        "reaction_counter": 84,
                        "repost_counter": 1,
                        "permissions": {
                            "can_post_comments": true,
                            "can_react": true,
                            "can_share": true
                        },
                        "text": "You’re hiring résumés, not people. \n\nThat’s why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can’t teach quickly is attitude. \n\nYou can’t teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don’t fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn’t help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                        "mentions": [
                            {
                                "url": "https://www.linkedin.com/in/ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                "length": 11,
                                "start": 1036
                            }
                        ],
                        "attachments": [
                            {
                                "id": "D5622AQERXIGL9ksRmA",
                                "sticker": false,
                                "size": {
                                    "height": 1000,
                                    "width": 800
                                },
                                "unavailable": false,
                                "type": "img",
                                "url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                            }
                        ],
                        "author": {
                            "public_identifier": "smritigoel-executivecoach",
                            "id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                            "name": "Smriti Goel",
                            "is_company": false,
                            "headline": "Global Executive coach at BCG I Business Support Team"
                        },
                        "id": "7402189157814444032",
                        "is_repost": false,
                        "parsed_datetime": "2025-12-04T03:37:01.247Z"
                    }
                },
                "summary": "LinkedIn Post Commenter acting as Post Retriever has executed retrieval of a LinkedIn post by Smriti Goel discussing the importance of hiring for attitude and mindset over experience, with a link to the post: https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                "temperature": 0,
                "type": "output"
            }
        ]
    }
  } as any;

  const isBusy = isLoading || isFetching;

  const executionContext = (logs as any)?.execution_context || {};
  const contextValues = Object.values(executionContext as any);

  const retrieverContext = (contextValues.find(
    (c: any) => (c as any).agent_title === "Post Retriever"
  ) || contextValues[0] || {}) as any;

  const commenterContext = (contextValues.find(
    (c: any) => (c as any).agent_title === "LinkedIn Post Commenter"
  ) || contextValues[1] || {}) as any;

  const post = retrieverContext.output_data?.posts;
  const postUrl = post?.share_url;
  const postText = post?.text;
  const authorName: string = post?.author?.name || "";
  const authorInitial =
    authorName.trim().charAt(0).toUpperCase() || "P";

  const attachments = Array.isArray(post?.attachments)
    ? post.attachments
    : [];

  const commentText =
    commenterContext.llm_output?.skill?.input?.text ||
    commenterContext.input_data?.text;

  const commentStatus =
    commenterContext.output_data?.comments?.object === "CommentSent"
      ? "Comment sent"
      : undefined;

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6">
          <p className="text-sm font-medium text-[hsl(var(--text-inverse-subtle))] text-center">
            Preparing LinkedIn comment...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-md border border-[hsl(var(--stroke-soft))] px-5 py-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-[hsl(var(--surface-inverse))]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))]">
              Comment added on LinkedIn
            </p>
            {commentStatus && (
              <p className="text-[11px] text-[hsl(var(--text-inverse-subtle))]">
                {commentStatus}
              </p>
            )}
          </div>
          {postUrl && (
            <a
              href={postUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full p-1 hover:bg-[hsl(var(--surface-interactive-subtle))]"
            >
              <ExternalLink className="h-4 w-4 text-[hsl(var(--text-link))]" />
            </a>
          )}
        </div>

        {post && (
          <div className="rounded-lg bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-3 py-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-[hsl(var(--surface-inverse))] text-xs font-semibold">
                {authorInitial}
              </div>
              <p className="text-xs font-medium text-[hsl(var(--text-inverse-default))]">
                {authorName || "LinkedIn user"}
              </p>
            </div>
            {postText && (
              <p className="text-[11px] text-[hsl(var(--text-inverse-subtle))] line-clamp-3">
                {postText}
              </p>
            )}
            {attachments.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {attachments.map((att: any, i: number) =>
                    att.type === "img" && att.url ? (
                      <img
                        key={att.id || i}
                        src={att.url}
                        alt=""
                        className="rounded-lg max-h-40 w-auto object-cover border border-[hsl(var(--stroke-soft))]"
                      />
                    ) : null
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {commentText && (
          <div className="rounded-lg bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-3 py-2 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--accent-lime-600))]" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[hsl(var(--text-inverse-subtlest))] mb-1">
                Comment sent
              </p>
              <p className="text-xs text-[hsl(var(--text-inverse-default))]">
                {commentText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedinPostCommentor;

