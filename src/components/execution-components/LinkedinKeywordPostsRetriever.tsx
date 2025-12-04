"use client";

import React from "react";
import { ExecutionComponentProps } from "@/types";
import { ExternalLink, ThumbsUp, MessageCircle } from "lucide-react";

const LinkedinKeywordPostsRetriever = ({
  logs,
  isLoading,
  isFetching,
  handleMessageSubmit,
}: ExecutionComponentProps) => {
  // Hardcoded logs for UI testing – will be ignored when real logs are passed from host
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (logs as any) = {
    "agentflow_id": "692ed40868884a5de7651769",
    "agentflow_name": "Retrieve Posts Based on Keywords",
    "files": [],
    "goal": "Keywords: hiring",
    "schedule": null,
    "start_from_agent_id": null,
    "input_variables": {
        "keywords": "hiring"
    },
    "task_id": "693108a85a6e0973e3bc05cd",
    "parent_execution_id": null,
    "agentflow": {
        "agentflow_id": "692ed40868884a5de7651769",
        "agents": [
            {
                "_id": "692ed40868884a5de765176a",
                "llm": {
                    "model": "bedrock/gpt-oss-20b",
                    "temperature": 0,
                    "max_tokens": 10000
                },
                "role": "Posts Searcher",
                "role_description": "Searchs for relevant posts on Linkedin",
                "title": "Posts Searcher",
                "agent_type": "skilled_agent",
                "next_agent": "692ed40868884a5de765176b"
            },
            {
                "_id": "692ed40868884a5de765176b",
                "llm": {
                    "model": "bedrock/gpt-oss-20b",
                    "temperature": 0,
                    "max_tokens": 10000
                },
                "role": "JSON Cleanser Agent",
                "role_description": "I will use the output of the posts and cleans them to only have relevant data with relevant names",
                "title": "JSON Cleanser Agent",
                "agent_type": "skilled_agent",
                "next_agent": null
            }
        ],
        "image": "https://wexadev.blob.core.windows.net/coworkers/process-flow-wexa-11.png",
        "initialAgent": "692ed40868884a5de765176a",
        "name": "Retrieve Posts Based on Keywords",
        "role": "Retrieve Poster Based on Keywords",
        "conclusion": null,
        "unique_id": "12a4cdc",
        "ui_card": null
    },
    "agents_output": [
        {
            "agent_id": "692ed40868884a5de765176a",
            "agent_name": "Posts Searcher",
            "agent_role": "Posts Searcher",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821170.463605,
            "decision": null,
            "error": null,
            "input_data": {
                "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content."
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day. ",
            "temperature": 0,
            "type": "observation"
        },
        {
            "agent_id": "692ed40868884a5de765176a",
            "agent_name": "Posts Searcher",
            "agent_role": "Posts Searcher",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821174.515255,
            "decision": null,
            "error": null,
            "input_data": {
                "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                "speak": "Searching for recent LinkedIn posts about hiring.",
                "skill": {
                    "name": "LinkedIn - Search posts",
                    "id": "692ed42868884a5de76517b0",
                    "input": {
                        "api": "classic",
                        "category": "posts",
                        "keywords": "hiring",
                        "sort_by": "date",
                        "date_posted": "past_day",
                        "limit": 10
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": null,
            "summary": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts ",
            "temperature": 0,
            "type": "plan"
        },
        {
            "agent_id": "692ed40868884a5de765176a",
            "agent_name": "Posts Searcher",
            "agent_role": "Posts Searcher",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821179.385286,
            "decision": null,
            "error": null,
            "input_data": {
                "thoughts": {
                    "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                    "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content.",
                    "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                    "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                    "speak": "Searching for recent LinkedIn posts about hiring."
                },
                "skill": {
                    "name": "LinkedIn - Search posts",
                    "id": "692ed42868884a5de76517b0",
                    "input": {
                        "api": "classic",
                        "category": "posts",
                        "keywords": "hiring",
                        "sort_by": "date",
                        "date_posted": "past_day",
                        "limit": 10
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/gpt-oss-20b",
            "output_data": {
                "searched_posts": {
                    "object": "LinkedinSearch",
                    "items": [
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402191238143119360",
                            "share_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "21m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "So true",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "gerald-joseph-s",
                                "id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                "name": "Gerald Joseph S",
                                "is_company": false,
                                "headline": "Business Development| 20+ Yrs Experience in Elevating Partnerships, Assessing Client Needs, & Navigating Territories | Driven 3X Revenue Growth via Market Research Excellence."
                            },
                            "id": "7402191238143119360",
                            "is_repost": true,
                            "repost_id": "7402191238143119360",
                            "parsed_datetime": "2025-12-04T03:45:17.236Z",
                            "repost_content": {
                                "id": "7402054946336202752",
                                "date": "9h",
                                "parsed_datetime": "2025-12-03T18:43:42.737Z",
                                "text": "Your next best hire might be the person who was laid off. The person with the lengthy gap. The person who is struggling to find work. Don’t discount the imperfect resume, especially in a market like this. Unemployed does not mean unqualified, unfit, unskilled, or unmotivated.",
                                "author": {
                                    "public_identifier": "lindseyherman",
                                    "id": "ACoAAALfrscBWZo0UBczTPZgCVctKQuo8bBXKjo",
                                    "name": "Lindsey Herman",
                                    "is_company": false
                                }
                            }
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402191171290341376",
                            "share_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "21m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "“We’re stuck on this. Should we hire a marketing manager, or keep working with an agency?”\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn’t looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can’t replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn’t “Which one is better?”\n\nIt was “What structure gives us the best mix of skills, speed and stability for where we are right now?”\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I’m curious to hear what structure has worked best for you and why.",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "wilsoncraig",
                                "id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                "name": "Craig Wilson",
                                "is_company": false,
                                "headline": "Founder, Sticky Digital & Rapid Growth Marketing. I do smart Digital Marketing for SMEs & Law Firms. SEO | Google Ads | Strategy | Law Firm Growth Specialist"
                            },
                            "id": "7402191171290341376",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:45:01.297Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402189157814444032",
                            "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "29m",
                            "comment_counter": 20,
                            "impressions_counter": 0,
                            "reaction_counter": 40,
                            "repost_counter": 0,
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
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402189152185933824",
                            "share_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "29m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQEmXSFXpOcRGQ",
                                    "sticker": false,
                                    "size": {
                                        "height": 720,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                }
                            ],
                            "author": {
                                "public_identifier": "shreya-sharma-2a17a838a",
                                "id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                "name": "Shreya Sharma",
                                "is_company": false,
                                "headline": "Helping students earn digitally | Business Developer | Guiding youth to explore growth & digital opportunities | Passionate about innovation & success"
                            },
                            "id": "7402189152185933824",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:36:59.905Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188653843968002",
                            "share_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "31m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\nclick here of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\n🛑 CLICK HERE -  https://wa.link/mwh5q6🛑",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQE9TiLWn079Ow",
                                    "sticker": false,
                                    "size": {
                                        "height": 721,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                }
                            ],
                            "author": {
                                "public_identifier": "riya-saha-b8a335393",
                                "id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                "name": "Riya Saha",
                                "is_company": false,
                                "headline": "Work from home job’s hirings at Job’s hirings online s"
                            },
                            "id": "7402188653843968002",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:35:01.091Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188457714094080",
                            "share_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 6,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "It’s disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet’s build a culture where communication doesn’t stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQGp4oFTgQO1Rg",
                                    "sticker": false,
                                    "size": {
                                        "height": 600,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                }
                            ],
                            "author": {
                                "public_identifier": "raghutelkar",
                                "id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                "name": "Raghavendra Telkar",
                                "is_company": false,
                                "headline": "Frontend Engineering Technical Lead | React.js, Next.js, TypeScript, Redux Toolkit, React Hooks, ES6, MERN, Microfrontend, Python, AI Agents, UX Design | Web Development"
                            },
                            "id": "7402188457714094080",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:34:14.330Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188352277381120",
                            "share_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQFbNJIIHwo4HQ",
                                    "sticker": false,
                                    "size": {
                                        "height": 480,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                }
                            ],
                            "author": {
                                "public_identifier": "iristansingapore",
                                "id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                "name": "Iris Tan",
                                "is_company": false,
                                "headline": "Director, Business Search (Investments, M&A, Buyouts, Stock Loans & Debt Financing) - Interested in business and projects that are fund raising, looking for new investors, loans or partners"
                            },
                            "id": "7402188352277381120",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:49.192Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:ugcPost:7402188292244570112",
                            "share_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQFqCTVt5wJ_wA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                },
                                {
                                    "id": "D5622AQFtUonLWPWikA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                },
                                {
                                    "id": "D5622AQGnQhYxvlN2Nw",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                },
                                {
                                    "id": "D5622AQHQ-b1uCAnwBg",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                },
                                {
                                    "id": "D5622AQHw8VEqvnVpDA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                }
                            ],
                            "author": {
                                "public_identifier": "bangchak-corporation",
                                "id": "11853765",
                                "name": "Bangchak Corporation Public Company Limited",
                                "is_company": true
                            },
                            "id": "7402188293049872384",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:35.071Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:ugcPost:7402187733718507521",
                            "share_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "34m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Check us out! Best professional decision I evermade!",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "dean-ables-rcdd-8a487729",
                                "id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                "name": "Dean Ables, RCDD",
                                "is_company": false,
                                "headline": "RCDD at Aptitude Intelligent Integration, helping bring together people, places, and technology—leveraging my insight and experience of over 30 years in the technology integration industry."
                            },
                            "id": "7402187733718507521",
                            "is_repost": true,
                            "repost_id": "7402187734213464064",
                            "parsed_datetime": "2025-12-04T03:31:21.716Z",
                            "repost_content": {
                                "id": "7393981077138153472",
                                "date": "3w",
                                "parsed_datetime": "2025-11-11T12:01:02.315Z",
                                "text": "Such a wonderful place to work.",
                            "author": {
                                "public_identifier": "cale-coggins-151504224",
                                "id": "ACoAADhQ180BTk6hYVUg_sm3aFTQnLX6-9zYX4k",
                                "name": "Cale Coggins",
                                "is_company": false
                            }
                        }
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402187694564646912",
                            "share_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "35m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "henry-murau-8590431a5",
                                "id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                "name": "Henry Murau",
                                "is_company": false,
                                "headline": "Political Science Graduate | LLB3 | Freelance Tokpisin Translator on Upwork"
                            },
                            "id": "7402187694564646912",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:31:12.381Z"
                        }
                    ],
                    "config": {
                        "params": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    },
                    "paging": {
                        "start": 0,
                        "page_count": 10,
                        "total_count": 219
                    },
                    "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                }
            },
            "summary": "Retrieve Posts Based on Keywords acting as Posts Searcher has executed a search on LinkedIn and found two posts. The first post by Gerald Joseph S is a repost of Lindsey Herman's post about considering imperfect resumes for hiring. The second post by Wilson Craig discusses hiring a marketing manager. Both posts were shared recently.",
            "temperature": 0,
            "type": "output"
        },
        {
            "agent_id": "692ed40868884a5de765176b",
            "agent_name": "JSON Cleanser Agent",
            "agent_role": "JSON Cleanser Agent",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821391.937373,
            "decision": null,
            "error": null,
            "input_data": {
                "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed."
            },
            "max_tokens": 10000,
            "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
            "output_data": null,
            "summary": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post. ",
            "temperature": 0,
            "type": "observation"
        },
        {
            "agent_id": "692ed40868884a5de765176b",
            "agent_name": "JSON Cleanser Agent",
            "agent_role": "JSON Cleanser Agent",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821512.482881,
            "decision": null,
            "error": null,
            "input_data": {
                "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor.",
                "skill": {
                    "name": "Content creator - Content creation",
                    "id": "692ed40868884a5de7651761",
                    "input": {
                        "content": {
                            "items": [
                                {
                                    "post_id": "7402191238143119360",
                                    "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "So true",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                    "author": {
                                        "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                        "author_name": "Gerald Joseph S",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402191171290341376",
                                    "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                    "author": {
                                        "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                        "author_name": "Craig Wilson",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402189157814444032",
                                    "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                    "author": {
                                        "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                        "author_name": "Smriti Goel",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQERXIGL9ksRmA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402189152185933824",
                                    "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                    "author": {
                                        "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                        "author_name": "Shreya Sharma",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188653843968002",
                                    "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                    "author": {
                                        "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                        "author_name": "Riya Saha",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQE9TiLWn079Ow",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188457714094080",
                                    "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                    "author": {
                                        "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                        "author_name": "Raghavendra Telkar",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188352277381120",
                                    "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                    "author": {
                                        "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                        "author_name": "Iris Tan",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188293049872384",
                                    "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                    "author": {
                                        "author_id": "11853765",
                                        "author_name": "Bangchak Corporation Public Company Limited",
                                        "is_company": true
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                        },
                                        {
                                            "attachement_id": "D5622AQFtUonLWPWikA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                        },
                                        {
                                            "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                        },
                                        {
                                            "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                        },
                                        {
                                            "attachement_id": "D5622AQHw8VEqvnVpDA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402187733718507521",
                                    "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Check us out! Best professional decision I evermade!",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                    "author": {
                                        "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                        "author_name": "Dean Ables, RCDD",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402187694564646912",
                                    "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                    "author": {
                                        "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                        "author_name": "Henry Murau",
                                        "is_company": false
                                    },
                                    "attachments": []
                                }
                            ],
                            "config": {
                                "params": {
                                    "api": "classic",
                                    "category": "posts",
                                    "keywords": "hiring",
                                    "sort_by": "date",
                                    "date_posted": "past_day",
                                    "limit": 10
                                }
                            },
                            "paging": {
                                "start": 0,
                                "page_count": 10,
                                "total_count": 219
                            },
                            "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                        }
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
            "output_data": null,
            "summary": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON ",
            "temperature": 0,
            "type": "plan"
        },
        {
            "agent_id": "692ed40868884a5de765176b",
            "agent_name": "JSON Cleanser Agent",
            "agent_role": "JSON Cleanser Agent",
            "agentflow_name": "Retrieve Posts Based on Keywords",
            "created_at": 1764821515.241305,
            "decision": null,
            "error": null,
            "input_data": {
                "thoughts": {
                    "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                    "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed.",
                    "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                    "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                    "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor."
                },
                "skill": {
                    "name": "Content creator - Content creation",
                    "id": "692ed40868884a5de7651761",
                    "input": {
                        "content": {
                            "items": [
                                {
                                    "post_id": "7402191238143119360",
                                    "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "So true",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                    "author": {
                                        "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                        "author_name": "Gerald Joseph S",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402191171290341376",
                                    "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                    "author": {
                                        "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                        "author_name": "Craig Wilson",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402189157814444032",
                                    "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                    "author": {
                                        "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                        "author_name": "Smriti Goel",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQERXIGL9ksRmA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402189152185933824",
                                    "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                    "author": {
                                        "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                        "author_name": "Shreya Sharma",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188653843968002",
                                    "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                    "author": {
                                        "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                        "author_name": "Riya Saha",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQE9TiLWn079Ow",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188457714094080",
                                    "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                    "author": {
                                        "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                        "author_name": "Raghavendra Telkar",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188352277381120",
                                    "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                    "author": {
                                        "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                        "author_name": "Iris Tan",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188293049872384",
                                    "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                    "author": {
                                        "author_id": "11853765",
                                        "author_name": "Bangchak Corporation Public Company Limited",
                                        "is_company": true
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                        },
                                        {
                                            "attachement_id": "D5622AQFtUonLWPWikA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                        },
                                        {
                                            "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                        },
                                        {
                                            "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                        },
                                        {
                                            "attachement_id": "D5622AQHw8VEqvnVpDA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402187733718507521",
                                    "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Check us out! Best professional decision I evermade!",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                    "author": {
                                        "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                        "author_name": "Dean Ables, RCDD",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402187694564646912",
                                    "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                    "author": {
                                        "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                        "author_name": "Henry Murau",
                                        "is_company": false
                                    },
                                    "attachments": []
                                }
                            ],
                            "config": {
                                "params": {
                                    "api": "classic",
                                    "category": "posts",
                                    "keywords": "hiring",
                                    "sort_by": "date",
                                    "date_posted": "past_day",
                                    "limit": 10
                                }
                            },
                            "paging": {
                                "start": 0,
                                "page_count": 10,
                                "total_count": 219
                            },
                            "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                        }
                    }
                }
            },
            "max_tokens": 10000,
            "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
            "output_data": {
                "content": {
                    "items": [
                        {
                            "post_id": "7402191238143119360",
                            "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "So true",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:45:17.236Z",
                            "author": {
                                "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                "author_name": "Gerald Joseph S",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402191171290341376",
                            "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:45:01.297Z",
                            "author": {
                                "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                "author_name": "Craig Wilson",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402189157814444032",
                            "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:37:01.247Z",
                            "author": {
                                "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                "author_name": "Smriti Goel",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQERXIGL9ksRmA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                }
                            ]
                        },
                        {
                            "post_id": "7402189152185933824",
                            "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:36:59.905Z",
                            "author": {
                                "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                "author_name": "Shreya Sharma",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188653843968002",
                            "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:35:01.091Z",
                            "author": {
                                "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                "author_name": "Riya Saha",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQE9TiLWn079Ow",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188457714094080",
                            "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:34:14.330Z",
                            "author": {
                                "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                "author_name": "Raghavendra Telkar",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188352277381120",
                            "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:49.192Z",
                            "author": {
                                "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                "author_name": "Iris Tan",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188293049872384",
                            "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:35.071Z",
                            "author": {
                                "author_id": "11853765",
                                "author_name": "Bangchak Corporation Public Company Limited",
                                "is_company": true
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                },
                                {
                                    "attachement_id": "D5622AQFtUonLWPWikA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                },
                                {
                                    "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                },
                                {
                                    "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                },
                                {
                                    "attachement_id": "D5622AQHw8VEqvnVpDA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                }
                            ]
                        },
                        {
                            "post_id": "7402187733718507521",
                            "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Check us out! Best professional decision I evermade!",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:31:21.716Z",
                            "author": {
                                "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                "author_name": "Dean Ables, RCDD",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402187694564646912",
                            "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:31:12.381Z",
                            "author": {
                                "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                "author_name": "Henry Murau",
                                "is_company": false
                            },
                            "attachments": []
                        }
                    ],
                    "config": {
                        "params": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    },
                    "paging": {
                        "start": 0,
                        "page_count": 10,
                        "total_count": 219
                    },
                    "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                },
                "executed_by": "686d2cd4f926c032a7f894a6",
                "execution_id": "8f1e0604-3eea-489a-9fe3-baa1788c05d1",
                "is_user_specific_task": false
            },
            "summary": "Retrieve Posts Based on Keywords acting as JSON Cleanser Agent has executed the retrieval of two LinkedIn posts. The first post by Gerald Joseph S contains a repost with the text 'So true'. The second post by Wilson Craig discusses the decision between hiring a marketing manager or continuing with an agency, highlighting the pros and cons of each option.",
            "temperature": 0,
            "type": "output"
        }
    ],
    "anomaly_detected": null,
    "conclusion": null,
    "created_at": 1764821160.623706,
    "end_time": null,
    "executed_by": {
        "_id": "686d2cd4f926c032a7f894a6",
        "metadata": null,
        "name": "nani799324",
        "type": "manual",
        "is_external_application": false,
        "application_user_id": null
    },
    "execution_context": {
        "692ed40868884a5de765176a": {
            "agent_title": "Posts Searcher",
            "agent_role": "Posts Searcher",
            "decision": null,
            "error": null,
            "execution_duration": 17,
            "input_data": {
                "api": "classic",
                "category": "posts",
                "keywords": "hiring",
                "sort_by": "date",
                "date_posted": "past_day",
                "limit": 10
            },
            "knowledge_base": null,
            "llm_output": {
                "thoughts": {
                    "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                    "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content.",
                    "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                    "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                    "speak": "Searching for recent LinkedIn posts about hiring."
                },
                "skill": {
                    "name": "LinkedIn - Search posts",
                    "id": "692ed42868884a5de76517b0",
                    "input": {
                        "api": "classic",
                        "category": "posts",
                        "keywords": "hiring",
                        "sort_by": "date",
                        "date_posted": "past_day",
                        "limit": 10
                    }
                }
            },
            "modified_inputs_during_preview": null,
            "model_used": "bedrock/gpt-oss-20b",
            "output_data": {
                "searched_posts": {
                    "object": "LinkedinSearch",
                    "items": [
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402191238143119360",
                            "share_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "21m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "So true",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "gerald-joseph-s",
                                "id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                "name": "Gerald Joseph S",
                                "is_company": false,
                                "headline": "Business Development| 20+ Yrs Experience in Elevating Partnerships, Assessing Client Needs, & Navigating Territories | Driven 3X Revenue Growth via Market Research Excellence."
                            },
                            "id": "7402191238143119360",
                            "is_repost": true,
                            "repost_id": "7402191238143119360",
                            "parsed_datetime": "2025-12-04T03:45:17.236Z",
                            "repost_content": {
                                "id": "7402054946336202752",
                                "date": "9h",
                                "parsed_datetime": "2025-12-03T18:43:42.737Z",
                                "text": "Your next best hire might be the person who was laid off. The person with the lengthy gap. The person who is struggling to find work. Don’t discount the imperfect resume, especially in a market like this. Unemployed does not mean unqualified, unfit, unskilled, or unmotivated.",
                                "author": {
                                    "public_identifier": "lindseyherman",
                                    "id": "ACoAAALfrscBWZo0UBczTPZgCVctKQuo8bBXKjo",
                                    "name": "Lindsey Herman",
                                    "is_company": false
                                }
                            }
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402191171290341376",
                            "share_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "21m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "“We’re stuck on this. Should we hire a marketing manager, or keep working with an agency?”\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn’t looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can’t replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn’t “Which one is better?”\n\nIt was “What structure gives us the best mix of skills, speed and stability for where we are right now?”\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I’m curious to hear what structure has worked best for you and why.",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "wilsoncraig",
                                "id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                "name": "Craig Wilson",
                                "is_company": false,
                                "headline": "Founder, Sticky Digital & Rapid Growth Marketing. I do smart Digital Marketing for SMEs & Law Firms. SEO | Google Ads | Strategy | Law Firm Growth Specialist"
                            },
                            "id": "7402191171290341376",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:45:01.297Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402189157814444032",
                            "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "29m",
                            "comment_counter": 20,
                            "impressions_counter": 0,
                            "reaction_counter": 40,
                            "repost_counter": 0,
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
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402189152185933824",
                            "share_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "29m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQEmXSFXpOcRGQ",
                                    "sticker": false,
                                    "size": {
                                        "height": 720,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                }
                            ],
                            "author": {
                                "public_identifier": "shreya-sharma-2a17a838a",
                                "id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                "name": "Shreya Sharma",
                                "is_company": false,
                                "headline": "Helping students earn digitally | Business Developer | Guiding youth to explore growth & digital opportunities | Passionate about innovation & success"
                            },
                            "id": "7402189152185933824",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:36:59.905Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188653843968002",
                            "share_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "31m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\nclick here of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\n🛑 CLICK HERE -  https://wa.link/mwh5q6🛑",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQE9TiLWn079Ow",
                                    "sticker": false,
                                    "size": {
                                        "height": 721,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                }
                            ],
                            "author": {
                                "public_identifier": "riya-saha-b8a335393",
                                "id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                "name": "Riya Saha",
                                "is_company": false,
                                "headline": "Work from home job’s hirings at Job’s hirings online s"
                            },
                            "id": "7402188653843968002",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:35:01.091Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188457714094080",
                            "share_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 6,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "It’s disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet’s build a culture where communication doesn’t stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQGp4oFTgQO1Rg",
                                    "sticker": false,
                                    "size": {
                                        "height": 600,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                }
                            ],
                            "author": {
                                "public_identifier": "raghutelkar",
                                "id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                "name": "Raghavendra Telkar",
                                "is_company": false,
                                "headline": "Frontend Engineering Technical Lead | React.js, Next.js, TypeScript, Redux Toolkit, React Hooks, ES6, MERN, Microfrontend, Python, AI Agents, UX Design | Web Development"
                            },
                            "id": "7402188457714094080",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:34:14.330Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402188352277381120",
                            "share_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQFbNJIIHwo4HQ",
                                    "sticker": false,
                                    "size": {
                                        "height": 480,
                                        "width": 480
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                }
                            ],
                            "author": {
                                "public_identifier": "iristansingapore",
                                "id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                "name": "Iris Tan",
                                "is_company": false,
                                "headline": "Director, Business Search (Investments, M&A, Buyouts, Stock Loans & Debt Financing) - Interested in business and projects that are fund raising, looking for new investors, loans or partners"
                            },
                            "id": "7402188352277381120",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:49.192Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:ugcPost:7402188292244570112",
                            "share_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "32m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                            "mentions": [],
                            "attachments": [
                                {
                                    "id": "D5622AQFqCTVt5wJ_wA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                },
                                {
                                    "id": "D5622AQFtUonLWPWikA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                },
                                {
                                    "id": "D5622AQGnQhYxvlN2Nw",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                },
                                {
                                    "id": "D5622AQHQ-b1uCAnwBg",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                },
                                {
                                    "id": "D5622AQHw8VEqvnVpDA",
                                    "sticker": false,
                                    "size": {
                                        "height": 450,
                                        "width": 800
                                    },
                                    "unavailable": false,
                                    "type": "img",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                }
                            ],
                            "author": {
                                "public_identifier": "bangchak-corporation",
                                "id": "11853765",
                                "name": "Bangchak Corporation Public Company Limited",
                                "is_company": true
                            },
                            "id": "7402188293049872384",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:35.071Z"
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:ugcPost:7402187733718507521",
                            "share_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "34m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 0,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Check us out! Best professional decision I evermade!",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "dean-ables-rcdd-8a487729",
                                "id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                "name": "Dean Ables, RCDD",
                                "is_company": false,
                                "headline": "RCDD at Aptitude Intelligent Integration, helping bring together people, places, and technology—leveraging my insight and experience of over 30 years in the technology integration industry."
                            },
                            "id": "7402187733718507521",
                            "is_repost": true,
                            "repost_id": "7402187734213464064",
                            "parsed_datetime": "2025-12-04T03:31:21.716Z",
                            "repost_content": {
                                "id": "7393981077138153472",
                                "date": "3w",
                                "parsed_datetime": "2025-11-11T12:01:02.315Z",
                                "text": "Such a wonderful place to work.",
                                "author": {
                                    "public_identifier": "cale-coggins-151504224",
                                    "id": "ACoAADhQ180BTk6hYVUg_sm3aFTQnLX6-9zYX4k",
                                    "name": "Cale Coggins",
                                    "is_company": false
                                }
                            }
                        },
                        {
                            "type": "POST",
                            "provider": "LINKEDIN",
                            "social_id": "urn:li:activity:7402187694564646912",
                            "share_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "date": "35m",
                            "comment_counter": 0,
                            "impressions_counter": 0,
                            "reaction_counter": 1,
                            "repost_counter": 0,
                            "permissions": {
                                "can_post_comments": true,
                                "can_react": true,
                                "can_share": true
                            },
                            "text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                            "mentions": [],
                            "attachments": [],
                            "author": {
                                "public_identifier": "henry-murau-8590431a5",
                                "id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                "name": "Henry Murau",
                                "is_company": false,
                                "headline": "Political Science Graduate | LLB3 | Freelance Tokpisin Translator on Upwork"
                            },
                            "id": "7402187694564646912",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:31:12.381Z"
                        }
                    ],
                    "config": {
                        "params": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    },
                    "paging": {
                        "start": 0,
                        "page_count": 10,
                        "total_count": 219
                    },
                    "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                }
            },
            "preview_input": null,
            "skill_chosen": "LinkedIn - Search posts",
            "started_at": 1764821165.522648,
            "status": "completed",
            "tokens_used": 2455,
            "total_summary_tokens": 1757,
            "triggers": []
        },
        "692ed40868884a5de765176b": {
            "agent_title": "JSON Cleanser Agent",
            "agent_role": "JSON Cleanser Agent",
            "decision": null,
            "error": null,
            "execution_duration": 248,
            "input_data": {
                "content": {
                    "items": [
                        {
                            "post_id": "7402191238143119360",
                            "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "So true",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:45:17.236Z",
                            "author": {
                                "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                "author_name": "Gerald Joseph S",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402191171290341376",
                            "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:45:01.297Z",
                            "author": {
                                "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                "author_name": "Craig Wilson",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402189157814444032",
                            "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:37:01.247Z",
                            "author": {
                                "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                "author_name": "Smriti Goel",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQERXIGL9ksRmA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                }
                            ]
                        },
                        {
                            "post_id": "7402189152185933824",
                            "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:36:59.905Z",
                            "author": {
                                "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                "author_name": "Shreya Sharma",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188653843968002",
                            "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:35:01.091Z",
                            "author": {
                                "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                "author_name": "Riya Saha",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQE9TiLWn079Ow",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188457714094080",
                            "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:34:14.330Z",
                            "author": {
                                "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                "author_name": "Raghavendra Telkar",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188352277381120",
                            "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:49.192Z",
                            "author": {
                                "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                "author_name": "Iris Tan",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188293049872384",
                            "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:35.071Z",
                            "author": {
                                "author_id": "11853765",
                                "author_name": "Bangchak Corporation Public Company Limited",
                                "is_company": true
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                },
                                {
                                    "attachement_id": "D5622AQFtUonLWPWikA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                },
                                {
                                    "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                },
                                {
                                    "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                },
                                {
                                    "attachement_id": "D5622AQHw8VEqvnVpDA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                }
                            ]
                        },
                        {
                            "post_id": "7402187733718507521",
                            "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Check us out! Best professional decision I evermade!",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:31:21.716Z",
                            "author": {
                                "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                "author_name": "Dean Ables, RCDD",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402187694564646912",
                            "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:31:12.381Z",
                            "author": {
                                "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                "author_name": "Henry Murau",
                                "is_company": false
                            },
                            "attachments": []
                        }
                    ],
                    "config": {
                        "params": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    },
                    "paging": {
                        "start": 0,
                        "page_count": 10,
                        "total_count": 219
                    },
                    "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                }
            },
            "knowledge_base": null,
            "llm_output": {
                "thoughts": {
                    "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                    "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed.",
                    "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                    "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                    "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor."
                },
                "skill": {
                    "name": "Content creator - Content creation",
                    "id": "692ed40868884a5de7651761",
                    "input": {
                        "content": {
                            "items": [
                                {
                                    "post_id": "7402191238143119360",
                                    "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "So true",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                    "author": {
                                        "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                        "author_name": "Gerald Joseph S",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402191171290341376",
                                    "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                    "author": {
                                        "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                        "author_name": "Craig Wilson",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402189157814444032",
                                    "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                    "author": {
                                        "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                        "author_name": "Smriti Goel",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQERXIGL9ksRmA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402189152185933824",
                                    "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                    "author": {
                                        "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                        "author_name": "Shreya Sharma",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188653843968002",
                                    "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                    "author": {
                                        "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                        "author_name": "Riya Saha",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQE9TiLWn079Ow",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188457714094080",
                                    "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                    "author": {
                                        "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                        "author_name": "Raghavendra Telkar",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188352277381120",
                                    "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                    "author": {
                                        "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                        "author_name": "Iris Tan",
                                        "is_company": false
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402188293049872384",
                                    "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                    "author": {
                                        "author_id": "11853765",
                                        "author_name": "Bangchak Corporation Public Company Limited",
                                        "is_company": true
                                    },
                                    "attachments": [
                                        {
                                            "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                        },
                                        {
                                            "attachement_id": "D5622AQFtUonLWPWikA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                        },
                                        {
                                            "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                        },
                                        {
                                            "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                        },
                                        {
                                            "attachement_id": "D5622AQHw8VEqvnVpDA",
                                            "attachement_type": "img",
                                            "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                        }
                                    ]
                                },
                                {
                                    "post_id": "7402187733718507521",
                                    "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Check us out! Best professional decision I evermade!",
                                    "is_repost": true,
                                    "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                    "author": {
                                        "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                        "author_name": "Dean Ables, RCDD",
                                        "is_company": false
                                    },
                                    "attachments": []
                                },
                                {
                                    "post_id": "7402187694564646912",
                                    "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                    "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                    "is_repost": false,
                                    "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                    "author": {
                                        "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                        "author_name": "Henry Murau",
                                        "is_company": false
                                    },
                                    "attachments": []
                                }
                            ],
                            "config": {
                                "params": {
                                    "api": "classic",
                                    "category": "posts",
                                    "keywords": "hiring",
                                    "sort_by": "date",
                                    "date_posted": "past_day",
                                    "limit": 10
                                }
                            },
                            "paging": {
                                "start": 0,
                                "page_count": 10,
                                "total_count": 219
                            },
                            "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                        }
                    }
                }
            },
            "modified_inputs_during_preview": null,
            "model_used": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
            "output_data": {
                "content": {
                    "items": [
                        {
                            "post_id": "7402191238143119360",
                            "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "So true",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:45:17.236Z",
                            "author": {
                                "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                "author_name": "Gerald Joseph S",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402191171290341376",
                            "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:45:01.297Z",
                            "author": {
                                "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                "author_name": "Craig Wilson",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402189157814444032",
                            "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:37:01.247Z",
                            "author": {
                                "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                "author_name": "Smriti Goel",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQERXIGL9ksRmA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                }
                            ]
                        },
                        {
                            "post_id": "7402189152185933824",
                            "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:36:59.905Z",
                            "author": {
                                "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                "author_name": "Shreya Sharma",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188653843968002",
                            "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:35:01.091Z",
                            "author": {
                                "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                "author_name": "Riya Saha",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQE9TiLWn079Ow",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188457714094080",
                            "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:34:14.330Z",
                            "author": {
                                "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                "author_name": "Raghavendra Telkar",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188352277381120",
                            "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:49.192Z",
                            "author": {
                                "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                "author_name": "Iris Tan",
                                "is_company": false
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                }
                            ]
                        },
                        {
                            "post_id": "7402188293049872384",
                            "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:33:35.071Z",
                            "author": {
                                "author_id": "11853765",
                                "author_name": "Bangchak Corporation Public Company Limited",
                                "is_company": true
                            },
                            "attachments": [
                                {
                                    "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                },
                                {
                                    "attachement_id": "D5622AQFtUonLWPWikA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                },
                                {
                                    "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                },
                                {
                                    "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                },
                                {
                                    "attachement_id": "D5622AQHw8VEqvnVpDA",
                                    "attachement_type": "img",
                                    "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                }
                            ]
                        },
                        {
                            "post_id": "7402187733718507521",
                            "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Check us out! Best professional decision I evermade!",
                            "is_repost": true,
                            "parsed_datetime": "2025-12-04T03:31:21.716Z",
                            "author": {
                                "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                "author_name": "Dean Ables, RCDD",
                                "is_company": false
                            },
                            "attachments": []
                        },
                        {
                            "post_id": "7402187694564646912",
                            "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                            "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                            "is_repost": false,
                            "parsed_datetime": "2025-12-04T03:31:12.381Z",
                            "author": {
                                "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                "author_name": "Henry Murau",
                                "is_company": false
                            },
                            "attachments": []
                        }
                    ],
                    "config": {
                        "params": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    },
                    "paging": {
                        "start": 0,
                        "page_count": 10,
                        "total_count": 219
                    },
                    "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                },
                "executed_by": "686d2cd4f926c032a7f894a6",
                "execution_id": "8f1e0604-3eea-489a-9fe3-baa1788c05d1",
                "is_user_specific_task": false
            },
            "preview_input": null,
            "skill_chosen": "Content creator - Content creation",
            "started_at": 1764821272.281314,
            "status": "completed",
            "tokens_used": 29684,
            "total_summary_tokens": 1541,
            "triggers": []
        }
    },
    "execution_id": "8f1e0604-3eea-489a-9fe3-baa1788c05d1",
    "goal_template": "Keywords: {{keywords}}",
    "_id": "693108a85a6e0973e3bc05cc",
    "previews": {},
    "projectID": "692ed403b90fcf805c47cd7e",
    "runtime_inputs": {},
    "status": "running",
    "is_external_application": false,
    "application_user_id": null,
    "analytics": {
        "agent_analytics": {
            "692ed40868884a5de765176a": {
                "tokens_used": 2455,
                "summary_tokens": 1757,
                "total_tokens": 4212,
                "execution_time": 17,
                "price": 0.001
            },
            "692ed40868884a5de765176b": {
                "tokens_used": 29684,
                "summary_tokens": 1541,
                "total_tokens": 31225,
                "execution_time": 248,
                "price": 0.012
            }
        },
        "overall": {
            "total_tokens_used": 32139,
            "total_summary_tokens": 3298,
            "total_conclusion_tokens": 0,
            "total_tokens": 35437,
            "average_execution_time": 132.5,
            "total_execution_time": 265,
            "total_price": 0.013
        }
    },
    "categorized_data": {
        "logs": [
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821515.241305,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                        "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed.",
                        "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                        "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                        "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor."
                    },
                    "skill": {
                        "name": "Content creator - Content creation",
                        "id": "692ed40868884a5de7651761",
                        "input": {
                            "content": {
                                "items": [
                                    {
                                        "post_id": "7402191238143119360",
                                        "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "So true",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                        "author": {
                                            "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                            "author_name": "Gerald Joseph S",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402191171290341376",
                                        "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                        "author": {
                                            "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                            "author_name": "Craig Wilson",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402189157814444032",
                                        "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                        "author": {
                                            "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                            "author_name": "Smriti Goel",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQERXIGL9ksRmA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402189152185933824",
                                        "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                        "author": {
                                            "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                            "author_name": "Shreya Sharma",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188653843968002",
                                        "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                        "author": {
                                            "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                            "author_name": "Riya Saha",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQE9TiLWn079Ow",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188457714094080",
                                        "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                        "author": {
                                            "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                            "author_name": "Raghavendra Telkar",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188352277381120",
                                        "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                        "author": {
                                            "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                            "author_name": "Iris Tan",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188293049872384",
                                        "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                        "author": {
                                            "author_id": "11853765",
                                            "author_name": "Bangchak Corporation Public Company Limited",
                                            "is_company": true
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                            },
                                            {
                                                "attachement_id": "D5622AQFtUonLWPWikA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                            },
                                            {
                                                "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                            },
                                            {
                                                "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                            },
                                            {
                                                "attachement_id": "D5622AQHw8VEqvnVpDA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402187733718507521",
                                        "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Check us out! Best professional decision I evermade!",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                        "author": {
                                            "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                            "author_name": "Dean Ables, RCDD",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402187694564646912",
                                        "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                        "author": {
                                            "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                            "author_name": "Henry Murau",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    }
                                ],
                                "config": {
                                    "params": {
                                        "api": "classic",
                                        "category": "posts",
                                        "keywords": "hiring",
                                        "sort_by": "date",
                                        "date_posted": "past_day",
                                        "limit": 10
                                    }
                                },
                                "paging": {
                                    "start": 0,
                                    "page_count": 10,
                                    "total_count": 219
                                },
                                "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                            }
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": {
                    "content": {
                        "items": [
                            {
                                "post_id": "7402191238143119360",
                                "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "So true",
                                "is_repost": true,
                                "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                "author": {
                                    "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                    "author_name": "Gerald Joseph S",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402191171290341376",
                                "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                "author": {
                                    "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                    "author_name": "Craig Wilson",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402189157814444032",
                                "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                "author": {
                                    "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                    "author_name": "Smriti Goel",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQERXIGL9ksRmA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402189152185933824",
                                "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                "author": {
                                    "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                    "author_name": "Shreya Sharma",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188653843968002",
                                "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                "author": {
                                    "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                    "author_name": "Riya Saha",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQE9TiLWn079Ow",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188457714094080",
                                "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                "author": {
                                    "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                    "author_name": "Raghavendra Telkar",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188352277381120",
                                "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                "author": {
                                    "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                    "author_name": "Iris Tan",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188293049872384",
                                "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                "author": {
                                    "author_id": "11853765",
                                    "author_name": "Bangchak Corporation Public Company Limited",
                                    "is_company": true
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                    },
                                    {
                                        "attachement_id": "D5622AQFtUonLWPWikA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                    },
                                    {
                                        "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                    },
                                    {
                                        "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                    },
                                    {
                                        "attachement_id": "D5622AQHw8VEqvnVpDA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402187733718507521",
                                "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Check us out! Best professional decision I evermade!",
                                "is_repost": true,
                                "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                "author": {
                                    "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                    "author_name": "Dean Ables, RCDD",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402187694564646912",
                                "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                "author": {
                                    "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                    "author_name": "Henry Murau",
                                    "is_company": false
                                },
                                "attachments": []
                            }
                        ],
                        "config": {
                            "params": {
                                "api": "classic",
                                "category": "posts",
                                "keywords": "hiring",
                                "sort_by": "date",
                                "date_posted": "past_day",
                                "limit": 10
                            }
                        },
                        "paging": {
                            "start": 0,
                            "page_count": 10,
                            "total_count": 219
                        },
                        "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                    },
                    "executed_by": "686d2cd4f926c032a7f894a6",
                    "execution_id": "8f1e0604-3eea-489a-9fe3-baa1788c05d1",
                    "is_user_specific_task": false
                },
                "summary": "Retrieve Posts Based on Keywords acting as JSON Cleanser Agent has executed the retrieval of two LinkedIn posts. The first post by Gerald Joseph S contains a repost with the text 'So true'. The second post by Wilson Craig discusses the decision between hiring a marketing manager or continuing with an agency, highlighting the pros and cons of each option.",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821512.482881,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                    "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                    "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor.",
                    "skill": {
                        "name": "Content creator - Content creation",
                        "id": "692ed40868884a5de7651761",
                        "input": {
                            "content": {
                                "items": [
                                    {
                                        "post_id": "7402191238143119360",
                                        "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "So true",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                        "author": {
                                            "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                            "author_name": "Gerald Joseph S",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402191171290341376",
                                        "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                        "author": {
                                            "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                            "author_name": "Craig Wilson",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402189157814444032",
                                        "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                        "author": {
                                            "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                            "author_name": "Smriti Goel",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQERXIGL9ksRmA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402189152185933824",
                                        "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                        "author": {
                                            "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                            "author_name": "Shreya Sharma",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188653843968002",
                                        "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                        "author": {
                                            "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                            "author_name": "Riya Saha",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQE9TiLWn079Ow",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188457714094080",
                                        "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                        "author": {
                                            "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                            "author_name": "Raghavendra Telkar",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188352277381120",
                                        "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                        "author": {
                                            "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                            "author_name": "Iris Tan",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188293049872384",
                                        "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                        "author": {
                                            "author_id": "11853765",
                                            "author_name": "Bangchak Corporation Public Company Limited",
                                            "is_company": true
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                            },
                                            {
                                                "attachement_id": "D5622AQFtUonLWPWikA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                            },
                                            {
                                                "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                            },
                                            {
                                                "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                            },
                                            {
                                                "attachement_id": "D5622AQHw8VEqvnVpDA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402187733718507521",
                                        "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Check us out! Best professional decision I evermade!",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                        "author": {
                                            "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                            "author_name": "Dean Ables, RCDD",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402187694564646912",
                                        "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                        "author": {
                                            "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                            "author_name": "Henry Murau",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    }
                                ],
                                "config": {
                                    "params": {
                                        "api": "classic",
                                        "category": "posts",
                                        "keywords": "hiring",
                                        "sort_by": "date",
                                        "date_posted": "past_day",
                                        "limit": 10
                                    }
                                },
                                "paging": {
                                    "start": 0,
                                    "page_count": 10,
                                    "total_count": 219
                                },
                                "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                            }
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": null,
                "summary": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821391.937373,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                    "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed."
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": null,
                "summary": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post. ",
                "temperature": 0,
                "type": "observation"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821179.385286,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                        "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content.",
                        "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                        "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                        "speak": "Searching for recent LinkedIn posts about hiring."
                    },
                    "skill": {
                        "name": "LinkedIn - Search posts",
                        "id": "692ed42868884a5de76517b0",
                        "input": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "searched_posts": {
                        "object": "LinkedinSearch",
                        "items": [
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402191238143119360",
                                "share_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "21m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "So true",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "gerald-joseph-s",
                                    "id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                    "name": "Gerald Joseph S",
                                    "is_company": false,
                                    "headline": "Business Development| 20+ Yrs Experience in Elevating Partnerships, Assessing Client Needs, & Navigating Territories | Driven 3X Revenue Growth via Market Research Excellence."
                                },
                                "id": "7402191238143119360",
                                "is_repost": true,
                                "repost_id": "7402191238143119360",
                                "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                "repost_content": {
                                    "id": "7402054946336202752",
                                    "date": "9h",
                                    "parsed_datetime": "2025-12-03T18:43:42.737Z",
                                    "text": "Your next best hire might be the person who was laid off. The person with the lengthy gap. The person who is struggling to find work. Don’t discount the imperfect resume, especially in a market like this. Unemployed does not mean unqualified, unfit, unskilled, or unmotivated.",
                                    "author": {
                                        "public_identifier": "lindseyherman",
                                        "id": "ACoAAALfrscBWZo0UBczTPZgCVctKQuo8bBXKjo",
                                        "name": "Lindsey Herman",
                                        "is_company": false
                                    }
                                }
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402191171290341376",
                                "share_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "21m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "“We’re stuck on this. Should we hire a marketing manager, or keep working with an agency?”\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn’t looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can’t replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn’t “Which one is better?”\n\nIt was “What structure gives us the best mix of skills, speed and stability for where we are right now?”\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I’m curious to hear what structure has worked best for you and why.",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "wilsoncraig",
                                    "id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                    "name": "Craig Wilson",
                                    "is_company": false,
                                    "headline": "Founder, Sticky Digital & Rapid Growth Marketing. I do smart Digital Marketing for SMEs & Law Firms. SEO | Google Ads | Strategy | Law Firm Growth Specialist"
                                },
                                "id": "7402191171290341376",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:45:01.297Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402189157814444032",
                                "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "29m",
                                "comment_counter": 20,
                                "impressions_counter": 0,
                                "reaction_counter": 40,
                                "repost_counter": 0,
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
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402189152185933824",
                                "share_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "29m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQEmXSFXpOcRGQ",
                                        "sticker": false,
                                        "size": {
                                            "height": 720,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "shreya-sharma-2a17a838a",
                                    "id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                    "name": "Shreya Sharma",
                                    "is_company": false,
                                    "headline": "Helping students earn digitally | Business Developer | Guiding youth to explore growth & digital opportunities | Passionate about innovation & success"
                                },
                                "id": "7402189152185933824",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:36:59.905Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188653843968002",
                                "share_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "31m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\nclick here of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\n🛑 CLICK HERE -  https://wa.link/mwh5q6🛑",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQE9TiLWn079Ow",
                                        "sticker": false,
                                        "size": {
                                            "height": 721,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "riya-saha-b8a335393",
                                    "id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                    "name": "Riya Saha",
                                    "is_company": false,
                                    "headline": "Work from home job’s hirings at Job’s hirings online s"
                                },
                                "id": "7402188653843968002",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:35:01.091Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188457714094080",
                                "share_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 6,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "It’s disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet’s build a culture where communication doesn’t stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQGp4oFTgQO1Rg",
                                        "sticker": false,
                                        "size": {
                                            "height": 600,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "raghutelkar",
                                    "id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                    "name": "Raghavendra Telkar",
                                    "is_company": false,
                                    "headline": "Frontend Engineering Technical Lead | React.js, Next.js, TypeScript, Redux Toolkit, React Hooks, ES6, MERN, Microfrontend, Python, AI Agents, UX Design | Web Development"
                                },
                                "id": "7402188457714094080",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:34:14.330Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188352277381120",
                                "share_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQFbNJIIHwo4HQ",
                                        "sticker": false,
                                        "size": {
                                            "height": 480,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "iristansingapore",
                                    "id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                    "name": "Iris Tan",
                                    "is_company": false,
                                    "headline": "Director, Business Search (Investments, M&A, Buyouts, Stock Loans & Debt Financing) - Interested in business and projects that are fund raising, looking for new investors, loans or partners"
                                },
                                "id": "7402188352277381120",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:49.192Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:ugcPost:7402188292244570112",
                                "share_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQFqCTVt5wJ_wA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                    },
                                    {
                                        "id": "D5622AQFtUonLWPWikA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                    },
                                    {
                                        "id": "D5622AQGnQhYxvlN2Nw",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                    },
                                    {
                                        "id": "D5622AQHQ-b1uCAnwBg",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                    },
                                    {
                                        "id": "D5622AQHw8VEqvnVpDA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "bangchak-corporation",
                                    "id": "11853765",
                                    "name": "Bangchak Corporation Public Company Limited",
                                    "is_company": true
                                },
                                "id": "7402188293049872384",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:35.071Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:ugcPost:7402187733718507521",
                                "share_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "34m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Check us out! Best professional decision I evermade!",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "dean-ables-rcdd-8a487729",
                                    "id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                    "name": "Dean Ables, RCDD",
                                    "is_company": false,
                                    "headline": "RCDD at Aptitude Intelligent Integration, helping bring together people, places, and technology—leveraging my insight and experience of over 30 years in the technology integration industry."
                                },
                                "id": "7402187733718507521",
                                "is_repost": true,
                                "repost_id": "7402187734213464064",
                                "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                "repost_content": {
                                    "id": "7393981077138153472",
                                    "date": "3w",
                                    "parsed_datetime": "2025-11-11T12:01:02.315Z",
                                    "text": "Such a wonderful place to work.",
                                    "author": {
                                        "public_identifier": "cale-coggins-151504224",
                                        "id": "ACoAADhQ180BTk6hYVUg_sm3aFTQnLX6-9zYX4k",
                                        "name": "Cale Coggins",
                                        "is_company": false
                                    }
                                }
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402187694564646912",
                                "share_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "35m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "henry-murau-8590431a5",
                                    "id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                    "name": "Henry Murau",
                                    "is_company": false,
                                    "headline": "Political Science Graduate | LLB3 | Freelance Tokpisin Translator on Upwork"
                                },
                                "id": "7402187694564646912",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:31:12.381Z"
                            }
                        ],
                        "config": {
                            "params": {
                                "api": "classic",
                                "category": "posts",
                                "keywords": "hiring",
                                "sort_by": "date",
                                "date_posted": "past_day",
                                "limit": 10
                            }
                        },
                        "paging": {
                            "start": 0,
                            "page_count": 10,
                            "total_count": 219
                        },
                        "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                    }
                },
                "summary": "Retrieve Posts Based on Keywords acting as Posts Searcher has executed a search on LinkedIn and found two posts. The first post by Gerald Joseph S is a repost of Lindsey Herman's post about considering imperfect resumes for hiring. The second post by Wilson Craig discusses hiring a marketing manager. Both posts were shared recently.",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821174.515255,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                    "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                    "speak": "Searching for recent LinkedIn posts about hiring.",
                    "skill": {
                        "name": "LinkedIn - Search posts",
                        "id": "692ed42868884a5de76517b0",
                        "input": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821170.463605,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                    "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day. ",
                "temperature": 0,
                "type": "observation"
            }
        ],
        "observation": [
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821391.937373,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                    "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed."
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": null,
                "summary": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post. ",
                "temperature": 0,
                "type": "observation"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821170.463605,
                "decision": null,
                "error": null,
                "input_data": {
                    "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                    "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content."
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day. ",
                "temperature": 0,
                "type": "observation"
            }
        ],
        "plan": [
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821512.482881,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                    "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                    "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor.",
                    "skill": {
                        "name": "Content creator - Content creation",
                        "id": "692ed40868884a5de7651761",
                        "input": {
                            "content": {
                                "items": [
                                    {
                                        "post_id": "7402191238143119360",
                                        "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "So true",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                        "author": {
                                            "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                            "author_name": "Gerald Joseph S",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402191171290341376",
                                        "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                        "author": {
                                            "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                            "author_name": "Craig Wilson",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402189157814444032",
                                        "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                        "author": {
                                            "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                            "author_name": "Smriti Goel",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQERXIGL9ksRmA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402189152185933824",
                                        "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                        "author": {
                                            "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                            "author_name": "Shreya Sharma",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188653843968002",
                                        "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                        "author": {
                                            "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                            "author_name": "Riya Saha",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQE9TiLWn079Ow",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188457714094080",
                                        "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                        "author": {
                                            "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                            "author_name": "Raghavendra Telkar",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188352277381120",
                                        "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                        "author": {
                                            "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                            "author_name": "Iris Tan",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188293049872384",
                                        "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                        "author": {
                                            "author_id": "11853765",
                                            "author_name": "Bangchak Corporation Public Company Limited",
                                            "is_company": true
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                            },
                                            {
                                                "attachement_id": "D5622AQFtUonLWPWikA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                            },
                                            {
                                                "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                            },
                                            {
                                                "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                            },
                                            {
                                                "attachement_id": "D5622AQHw8VEqvnVpDA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402187733718507521",
                                        "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Check us out! Best professional decision I evermade!",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                        "author": {
                                            "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                            "author_name": "Dean Ables, RCDD",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402187694564646912",
                                        "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                        "author": {
                                            "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                            "author_name": "Henry Murau",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    }
                                ],
                                "config": {
                                    "params": {
                                        "api": "classic",
                                        "category": "posts",
                                        "keywords": "hiring",
                                        "sort_by": "date",
                                        "date_posted": "past_day",
                                        "limit": 10
                                    }
                                },
                                "paging": {
                                    "start": 0,
                                    "page_count": 10,
                                    "total_count": 219
                                },
                                "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                            }
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": null,
                "summary": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON ",
                "temperature": 0,
                "type": "plan"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821174.515255,
                "decision": null,
                "error": null,
                "input_data": {
                    "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                    "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                    "speak": "Searching for recent LinkedIn posts about hiring.",
                    "skill": {
                        "name": "LinkedIn - Search posts",
                        "id": "692ed42868884a5de76517b0",
                        "input": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": null,
                "summary": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts ",
                "temperature": 0,
                "type": "plan"
            }
        ],
        "output": [
            {
                "agent_id": "692ed40868884a5de765176b",
                "agent_name": "JSON Cleanser Agent",
                "agent_role": "JSON Cleanser Agent",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821515.241305,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I need to transform the LinkedIn search response into a clean JSON object with specific fields for each post.",
                        "reasoning": "The input contains LinkedIn posts with various fields. I need to extract only the relevant fields as specified in the task and create a new JSON structure. I'll need to handle missing fields by setting them to null and ensure attachments are properly processed.",
                        "plan": "- Extract required fields from each post\n- Format author information\n- Process attachments\n- Handle missing fields\n- Maintain config, paging, and cursor as they are\n- Return the cleaned JSON",
                        "criticism": "I need to be careful about handling missing fields and ensuring the structure is consistent across all posts. I should also make sure I'm not adding any explanatory text to the output.",
                        "speak": "I'll transform the LinkedIn search response into a clean JSON with only the relevant fields while maintaining the original structure of config, paging, and cursor."
                    },
                    "skill": {
                        "name": "Content creator - Content creation",
                        "id": "692ed40868884a5de7651761",
                        "input": {
                            "content": {
                                "items": [
                                    {
                                        "post_id": "7402191238143119360",
                                        "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "So true",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                        "author": {
                                            "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                            "author_name": "Gerald Joseph S",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402191171290341376",
                                        "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                        "author": {
                                            "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                            "author_name": "Craig Wilson",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402189157814444032",
                                        "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                        "author": {
                                            "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                            "author_name": "Smriti Goel",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQERXIGL9ksRmA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402189152185933824",
                                        "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                        "author": {
                                            "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                            "author_name": "Shreya Sharma",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188653843968002",
                                        "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                        "author": {
                                            "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                            "author_name": "Riya Saha",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQE9TiLWn079Ow",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188457714094080",
                                        "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                        "author": {
                                            "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                            "author_name": "Raghavendra Telkar",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188352277381120",
                                        "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                        "author": {
                                            "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                            "author_name": "Iris Tan",
                                            "is_company": false
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402188293049872384",
                                        "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                        "author": {
                                            "author_id": "11853765",
                                            "author_name": "Bangchak Corporation Public Company Limited",
                                            "is_company": true
                                        },
                                        "attachments": [
                                            {
                                                "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                            },
                                            {
                                                "attachement_id": "D5622AQFtUonLWPWikA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                            },
                                            {
                                                "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                            },
                                            {
                                                "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                            },
                                            {
                                                "attachement_id": "D5622AQHw8VEqvnVpDA",
                                                "attachement_type": "img",
                                                "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                            }
                                        ]
                                    },
                                    {
                                        "post_id": "7402187733718507521",
                                        "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Check us out! Best professional decision I evermade!",
                                        "is_repost": true,
                                        "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                        "author": {
                                            "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                            "author_name": "Dean Ables, RCDD",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    },
                                    {
                                        "post_id": "7402187694564646912",
                                        "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                        "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                        "is_repost": false,
                                        "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                        "author": {
                                            "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                            "author_name": "Henry Murau",
                                            "is_company": false
                                        },
                                        "attachments": []
                                    }
                                ],
                                "config": {
                                    "params": {
                                        "api": "classic",
                                        "category": "posts",
                                        "keywords": "hiring",
                                        "sort_by": "date",
                                        "date_posted": "past_day",
                                        "limit": 10
                                    }
                                },
                                "paging": {
                                    "start": 0,
                                    "page_count": 10,
                                    "total_count": 219
                                },
                                "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                            }
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
                "output_data": {
                    "content": {
                        "items": [
                            {
                                "post_id": "7402191238143119360",
                                "post_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "So true",
                                "is_repost": true,
                                "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                "author": {
                                    "author_id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                    "author_name": "Gerald Joseph S",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402191171290341376",
                                "post_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "\"We're stuck on this. Should we hire a marketing manager, or keep working with an agency?\"\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn't looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can't replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn't \"Which one is better?\"\n\nIt was \"What structure gives us the best mix of skills, speed and stability for where we are right now?\"\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I'm curious to hear what structure has worked best for you and why.",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:45:01.297Z",
                                "author": {
                                    "author_id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                    "author_name": "Craig Wilson",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402189157814444032",
                                "post_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "You're hiring résumés, not people. \n\nThat's why you keep losing top talent.\n\nToo many teams still prioritise long resumes and ignore the mindset behind them.\n\nSkills are easier to teach now. Training is fast. Resources are everywhere. \n\nWhat you can't teach quickly is attitude. \n\nYou can't teach someone to stay curious, take ownership, or care about the work.\n\nPeople with the right mindset learn fast. \n\nThey work well with others. \n\nThey solve problems instead of waiting for someone to guide them. \n\nThey bring energy that lifts the whole team.\n\nOn the other hand, experience can come with habits that don't fit your culture. \n\nSome experienced hires struggle to adapt. Some resist new ways of working. \n\nWhen attitude is missing, experience doesn't help much.\n\nLeaders who hire for passion build stronger teams. \n\nThey get people who want to grow, not just people who have done the job before.\n\nIf you had to choose, would you pick the more experienced candidate or the more driven one and what would guide your decision?\n\nFollow Smriti Goel for more such content.\n\n#coach #leaders #executive",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:37:01.247Z",
                                "author": {
                                    "author_id": "ACoAAASWHkcBnzwlUOsLc0NkeYbshicKTEJgg9E",
                                    "author_name": "Smriti Goel",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQERXIGL9ksRmA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQERXIGL9ksRmA/feedshare-shrink_800/B56ZrnbzHiLAAg-/0/1764819420329?e=1766620800&v=beta&t=etvoH-ZiOykRsT0F8i2UV-4BFFdCN-HRvRhNxl6Vu4M"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402189152185933824",
                                "post_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:36:59.905Z",
                                "author": {
                                    "author_id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                    "author_name": "Shreya Sharma",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQEmXSFXpOcRGQ",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188653843968002",
                                "post_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:35:01.091Z",
                                "author": {
                                    "author_id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                    "author_name": "Riya Saha",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQE9TiLWn079Ow",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188457714094080",
                                "post_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "It's disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet's build a culture where communication doesn't stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:34:14.330Z",
                                "author": {
                                    "author_id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                    "author_name": "Raghavendra Telkar",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQGp4oFTgQO1Rg",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188352277381120",
                                "post_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:49.192Z",
                                "author": {
                                    "author_id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                    "author_name": "Iris Tan",
                                    "is_company": false
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQFbNJIIHwo4HQ",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402188293049872384",
                                "post_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:35.071Z",
                                "author": {
                                    "author_id": "11853765",
                                    "author_name": "Bangchak Corporation Public Company Limited",
                                    "is_company": true
                                },
                                "attachments": [
                                    {
                                        "attachement_id": "D5622AQFqCTVt5wJ_wA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                    },
                                    {
                                        "attachement_id": "D5622AQFtUonLWPWikA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                    },
                                    {
                                        "attachement_id": "D5622AQGnQhYxvlN2Nw",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                    },
                                    {
                                        "attachement_id": "D5622AQHQ-b1uCAnwBg",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                    },
                                    {
                                        "attachement_id": "D5622AQHw8VEqvnVpDA",
                                        "attachement_type": "img",
                                        "attachement_url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                    }
                                ]
                            },
                            {
                                "post_id": "7402187733718507521",
                                "post_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Check us out! Best professional decision I evermade!",
                                "is_repost": true,
                                "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                "author": {
                                    "author_id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                    "author_name": "Dean Ables, RCDD",
                                    "is_company": false
                                },
                                "attachments": []
                            },
                            {
                                "post_id": "7402187694564646912",
                                "post_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "post_content_text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:31:12.381Z",
                                "author": {
                                    "author_id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                    "author_name": "Henry Murau",
                                    "is_company": false
                                },
                                "attachments": []
                            }
                        ],
                        "config": {
                            "params": {
                                "api": "classic",
                                "category": "posts",
                                "keywords": "hiring",
                                "sort_by": "date",
                                "date_posted": "past_day",
                                "limit": 10
                            }
                        },
                        "paging": {
                            "start": 0,
                            "page_count": 10,
                            "total_count": 219
                        },
                        "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                    },
                    "executed_by": "686d2cd4f926c032a7f894a6",
                    "execution_id": "8f1e0604-3eea-489a-9fe3-baa1788c05d1",
                    "is_user_specific_task": false
                },
                "summary": "Retrieve Posts Based on Keywords acting as JSON Cleanser Agent has executed the retrieval of two LinkedIn posts. The first post by Gerald Joseph S contains a repost with the text 'So true'. The second post by Wilson Craig discusses the decision between hiring a marketing manager or continuing with an agency, highlighting the pros and cons of each option.",
                "temperature": 0,
                "type": "output"
            },
            {
                "agent_id": "692ed40868884a5de765176a",
                "agent_name": "Posts Searcher",
                "agent_role": "Posts Searcher",
                "agentflow_name": "Retrieve Posts Based on Keywords",
                "created_at": 1764821179.385286,
                "decision": null,
                "error": null,
                "input_data": {
                    "thoughts": {
                        "text": "I will search LinkedIn posts for the keyword \"hiring\" posted within the past day.",
                        "reasoning": "The goal is to find recent posts about hiring. Using the LinkedIn - Search posts skill with a date filter of \"past_day\" and sorting by date ensures we retrieve the most recent relevant content.",
                        "plan": "- Use LinkedIn - Search posts skill\n- Set category to posts\n- Provide keyword \"hiring\"\n- Filter by date_posted \"past_day\"\n- Sort by date for recency\n- Return up to 10 posts",
                        "criticism": "I should confirm that the date_posted parameter accepts the value \"past_day\" and that the API defaults are correctly set. I will also ensure the limit is reasonable to avoid unnecessary data.",
                        "speak": "Searching for recent LinkedIn posts about hiring."
                    },
                    "skill": {
                        "name": "LinkedIn - Search posts",
                        "id": "692ed42868884a5de76517b0",
                        "input": {
                            "api": "classic",
                            "category": "posts",
                            "keywords": "hiring",
                            "sort_by": "date",
                            "date_posted": "past_day",
                            "limit": 10
                        }
                    }
                },
                "max_tokens": 10000,
                "model": "bedrock/gpt-oss-20b",
                "output_data": {
                    "searched_posts": {
                        "object": "LinkedinSearch",
                        "items": [
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402191238143119360",
                                "share_url": "https://www.linkedin.com/posts/gerald-joseph-s_your-next-best-hire-might-be-the-person-who-activity-7402191238143119360-FOJ3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "21m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "So true",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "gerald-joseph-s",
                                    "id": "ACoAAC-4JZUBVi3YuR7502lI4W1_SRxta3orXBY",
                                    "name": "Gerald Joseph S",
                                    "is_company": false,
                                    "headline": "Business Development| 20+ Yrs Experience in Elevating Partnerships, Assessing Client Needs, & Navigating Territories | Driven 3X Revenue Growth via Market Research Excellence."
                                },
                                "id": "7402191238143119360",
                                "is_repost": true,
                                "repost_id": "7402191238143119360",
                                "parsed_datetime": "2025-12-04T03:45:17.236Z",
                                "repost_content": {
                                    "id": "7402054946336202752",
                                    "date": "9h",
                                    "parsed_datetime": "2025-12-03T18:43:42.737Z",
                                    "text": "Your next best hire might be the person who was laid off. The person with the lengthy gap. The person who is struggling to find work. Don’t discount the imperfect resume, especially in a market like this. Unemployed does not mean unqualified, unfit, unskilled, or unmotivated.",
                                    "author": {
                                        "public_identifier": "lindseyherman",
                                        "id": "ACoAAALfrscBWZo0UBczTPZgCVctKQuo8bBXKjo",
                                        "name": "Lindsey Herman",
                                        "is_company": false
                                    }
                                }
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402191171290341376",
                                "share_url": "https://www.linkedin.com/posts/wilsoncraig_the-120k-marketing-question-hire-a-manager-activity-7402191171290341376-_T78?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "21m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "“We’re stuck on this. Should we hire a marketing manager, or keep working with an agency?”\n\nA director from a professional services firm said this to me during a strategy call.\n\nHe wasn’t looking for a sales pitch. He wanted an honest answer.\n\nSo instead of steering him toward the agency option, we stepped back and looked at the bigger picture.\n\nFirst, we explored what an in-house hire would bring:\n• Someone close to the team every day\n• Help with coordination and internal projects\n• The ability to move fast on simple tasks\n\nThen we looked at the challenges:\n• One person rarely has deep skills in SEO, ads, content, design and strategy\n• The full cost goes far beyond the salary\n• If they leave, the firm goes backwards fast\n\nThen we explored the agency side:\n• Access to a wide set of specialist skills\n• Consistent delivery and accountability\n• No need to train or manage marketers internally\n\nWe also looked at the gaps:\n• Agencies can’t replace internal knowledge\n• They still need direction and partnership from the firm\n• Not all agencies are created equal\n\nAfter we talked it through, something became clear.\n\nThe real question wasn’t “Which one is better?”\n\nIt was “What structure gives us the best mix of skills, speed and stability for where we are right now?”\n\nFor this firm, the answer was a blend.\n\nA part-time internal marketer focused on coordination and brand.\nAn agency focused on the heavy lifting—SEO, ads, content, and strategy.\n\nTogether, they covered all the bases at a lower cost than a full senior hire.\n\nThis conversation reminded me that the right choice is always contextual. \n\nThere is no one-size-fits-all.\nThere is only what fits your stage of growth, the skills you need, and the outcomes you want.\n\nYou can explore the pros & cons further here --> https://lnkd.in/gqGuCzQH\n\nWhere do you sit on the in-house versus agency question? I’m curious to hear what structure has worked best for you and why.",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "wilsoncraig",
                                    "id": "ACoAAAGcWsQBL8adqhnj-Zj9iDLLERcQtlsLylI",
                                    "name": "Craig Wilson",
                                    "is_company": false,
                                    "headline": "Founder, Sticky Digital & Rapid Growth Marketing. I do smart Digital Marketing for SMEs & Law Firms. SEO | Google Ads | Strategy | Law Firm Growth Specialist"
                                },
                                "id": "7402191171290341376",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:45:01.297Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402189157814444032",
                                "share_url": "https://www.linkedin.com/posts/smritigoel-executivecoach_coach-leaders-executive-activity-7402189157814444032-gj3v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "29m",
                                "comment_counter": 20,
                                "impressions_counter": 0,
                                "reaction_counter": 40,
                                "repost_counter": 0,
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
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402189152185933824",
                                "share_url": "https://www.linkedin.com/posts/shreya-sharma-2a17a838a_workfromhome-remotejob-jobsearch-activity-7402189152185933824-tMS4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "29m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Hiring Fresher's (Only For Indian's) can bring fresh energy, new perspectives, and a long-term investment in talent. While they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nNote - Hindi Language Is Mandatory\n\nFreshersJobs #WorkFromHome #RemoteJob #JobSearch #JobsInDelhi #JobsInNoida #JobsinGurgaon #JobsInNorthIndia #WorkFromHomelndia #JobsInUP #JobsInBihar #JobsInMP #JobsInRajasthan #JobsinPunja\n#JobsInHaryana\n#jobsingujrat\n#jobsinmaharashtra\n#jobsinUdaipur\n#jobsinkohlapur\n#Fresher #jobsinindore",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQEmXSFXpOcRGQ",
                                        "sticker": false,
                                        "size": {
                                            "height": 720,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQEmXSFXpOcRGQ/feedshare-shrink_480/B56ZrnbyxgMAAY-/0/1764819418051?e=1766620800&v=beta&t=zY8uXukeJSTgOPu8UauwgKZs_1vuXx0jroucze6zB68"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "shreya-sharma-2a17a838a",
                                    "id": "ACoAAF_elZkBEige9XXNPI8hkpVZiYcEKaXNDss",
                                    "name": "Shreya Sharma",
                                    "is_company": false,
                                    "headline": "Helping students earn digitally | Business Developer | Guiding youth to explore growth & digital opportunities | Passionate about innovation & success"
                                },
                                "id": "7402189152185933824",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:36:59.905Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188653843968002",
                                "share_url": "https://www.linkedin.com/posts/riya-saha-b8a335393_hiring-partime-fulltime-activity-7402188653843968002-LQ3f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "31m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Hiring freshers can bring fresh energy, new perspectives, and a long-term investment in talent.\n\nWhile they may lack direct experience, fresh graduates often come with a strong academic foundation, a willingness to learn, and a high level of adaptability. They are eager to prove themselves and can quickly adapt to company culture, bringing innovative ideas and enthusiasm to the workplace.\n\nBy hiring freshers, companies can mold and shape talent to meet their specific needs, building a workforce that is loyal and aligned with the company's values and goals.\n\nAdditionally, freshers are often more cost-effective in terms of salary and can grow within the organization, reducing recruitment costs in the long run. Investing in young talent also helps create a diverse and dynamic team, ensuring that businesses stay ahead of industry trends by fostering a culture of learning and continuous improvement.\n\nUltimately, hiring freshers is an opportunity for organizations to invest in the future, building a sustainable and motivated workforce that can drive long-term success.\n\nIf u Have Commented On My Post check Your Dm and Wait For official team call 100 Don't Reply unknown people on Linkdin someone might text you from comments Be Aware.... of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\nclick here of fake people !!!!!!!\n\nhashtag #hiring\n\nhashtag #partime\n\nhashtag #fulltime\n\nhashtag #working\n\nhashtag #onlineworking\n\nhashtag #hiring hashtag #now\n\nhashtag #partime\n\nhashtag #oportunity\n\nhashtag #workfromhome\n\nhashtag #workfromoffice\n\nhashtag #delhi\n\nhashtag #noida\n\nhashtag #linkdin hashtag #india\n\n🛑 CLICK HERE -  https://wa.link/mwh5q6🛑",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQE9TiLWn079Ow",
                                        "sticker": false,
                                        "size": {
                                            "height": 721,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQE9TiLWn079Ow/feedshare-shrink_480/B56Zrk.OgsLwAc-/0/1764778111477?e=1766620800&v=beta&t=pM6_pRlfSk_ZIJUCDT7IqZdp9JZGOTkk9dV3EZAUJRQ"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "riya-saha-b8a335393",
                                    "id": "ACoAAGCw71oBq7T87ONerB6CxXCWt0tMQdI57q8",
                                    "name": "Riya Saha",
                                    "is_company": false,
                                    "headline": "Work from home job’s hirings at Job’s hirings online s"
                                },
                                "id": "7402188653843968002",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:35:01.091Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188457714094080",
                                "share_url": "https://www.linkedin.com/posts/raghutelkar_hiring-recruitment-candidateexperience-activity-7402188457714094080-r_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 6,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "It’s disheartening when candidates invest hours—sometimes days—going through 3–4 rounds of interviews, giving their best, only to be met with silence afterward.\n\nA simple feedback email, or even a short note, can make a world of difference. It provides closure, helps candidates learn, and shows that their time and effort were respected.\n\nHRs and hiring teams - candidates prepare, research, and align their schedules for these discussions with lot of anxiety, nervous and hope. If we talk about empathy and people - first culture, this is where it truly counts.\n\nLet’s build a culture where communication doesn’t stop when the interview ends. A small habit that can create a lasting impact on employer brand and candidate experience.\n\n#Hiring #Recruitment #CandidateExperience #HR #JobSearch #CareerGrowth #PeopleFirst #RespectTime #Leadership #HiringPractices",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQGp4oFTgQO1Rg",
                                        "sticker": false,
                                        "size": {
                                            "height": 600,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQGp4oFTgQO1Rg/feedshare-shrink_800/B56ZrnbLTXK4Ag-/0/1764819252772?e=1766620800&v=beta&t=xJoI7ZyzbK0Tmi2B2VP2kjD2hFfQZdPERf611qEtkug"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "raghutelkar",
                                    "id": "ACoAAAM67_IBtkIXRJ2NL0AxEW41zsbyhddfd_c",
                                    "name": "Raghavendra Telkar",
                                    "is_company": false,
                                    "headline": "Frontend Engineering Technical Lead | React.js, Next.js, TypeScript, Redux Toolkit, React Hooks, ES6, MERN, Microfrontend, Python, AI Agents, UX Design | Web Development"
                                },
                                "id": "7402188457714094080",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:34:14.330Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402188352277381120",
                                "share_url": "https://www.linkedin.com/posts/iristansingapore_the-one-sentence-rule-why-clarity-beats-experience-activity-7402188352277381120-aqBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "THE ONE-SENTENCE RULE\nWhy clarity beats experience — and how one sentence can determine whether you get shortlisted or skipped. If you or someone you know is job-searching or considering a career move, this report would be useful.\n👉 Get immediate access…..: https://payhip.com/b/mVTvA",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQFbNJIIHwo4HQ",
                                        "sticker": false,
                                        "size": {
                                            "height": 480,
                                            "width": 480
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFbNJIIHwo4HQ/feedshare-shrink_480/B56ZrnbE23L4AY-/0/1764819228081?e=1766620800&v=beta&t=mGuiHDJ8x5zil2MVYkixCINJQBq7M0TIALbjkeLOzvk"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "iristansingapore",
                                    "id": "ACoAABr8WqoBw1AjzSwLnUVmyh4NPVugTlDMgLw",
                                    "name": "Iris Tan",
                                    "is_company": false,
                                    "headline": "Director, Business Search (Investments, M&A, Buyouts, Stock Loans & Debt Financing) - Interested in business and projects that are fund raising, looking for new investors, loans or partners"
                                },
                                "id": "7402188352277381120",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:49.192Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:ugcPost:7402188292244570112",
                                "share_url": "https://www.linkedin.com/posts/bangchak-corporation_bangchak-bangchakcareer-bangchakcareerroadshow2025-activity-7402188293049872384-ZyU_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "32m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "🚗 Bangchak Career Roadshow 2025 ครั้งสุดท้ายของปีนี้ เราเดินทางไปที่ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ \n.\nเมื่อวันที่ 2 ธันวาคม 2568 ที่ผ่านมา ทีมงาน Bangchak Career พร้อมตัวแทนพี่จากสายงาน IT ด้าน Cybersecurity ได้มาร่วมแชร์ประสบการณ์การทำงานในบริษัทฯ พร้อมแนะนำตำแหน่งงานทางด้าน IT ให้แก่น้องๆ ภาควิชาวิศวกรรมคอมพิวเตอร์ ให้เป็นที่รู้จักมากขึ้น อีกทั้งยังเปิดโอกาสให้ได้ถาม-ตอบ อีกด้วย✨\n.\nทีมงาน Bangchak Career ขอขอบคุณภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มอบโอกาสให้พวกเราได้เข้าไปพบน้อง ๆ เพื่อประชาสัมพันธ์บริษัทฯ และตำแหน่งงานด้าน IT ในครั้งนี้นะคะ💚\n\nแล้วพบกันใหม่ในกิจกรรมจาก Bangchak Career  รอติดตามได้เลยค่ะ🥰\n.\n#Bangchak #BangchakCareer #BangchakCareerRoadshow2025",
                                "mentions": [],
                                "attachments": [
                                    {
                                        "id": "D5622AQFqCTVt5wJ_wA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFqCTVt5wJ_wA/feedshare-shrink_800/B56ZrnbBTYLIAg-/0/1764819213035?e=1766620800&v=beta&t=qQeHPq50nxlc7bCSwxLV-ZkEqt5Pw9k7zJPMxEM4VDo"
                                    },
                                    {
                                        "id": "D5622AQFtUonLWPWikA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQFtUonLWPWikA/feedshare-shrink_800/B56ZrnbBT4HAAg-/0/1764819213108?e=1766620800&v=beta&t=_JBhDBo8X_bajaanKkPg5gBE_z07fQqSa0gPR1r-jno"
                                    },
                                    {
                                        "id": "D5622AQGnQhYxvlN2Nw",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQGnQhYxvlN2Nw/feedshare-shrink_800/B56ZrnbBUSHAAk-/0/1764819213059?e=1766620800&v=beta&t=ghzcM_l0G2eG0vFpMDSb_ogeZrXs8Lfeg8ML9hNCLjs"
                                    },
                                    {
                                        "id": "D5622AQHQ-b1uCAnwBg",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQHQ-b1uCAnwBg/feedshare-shrink_800/B56ZrnbBT4LoAg-/0/1764819212911?e=1766620800&v=beta&t=BfvSx-9OHiLPpbt3vNiK0rVh3cJpFXuSwS9wXCZ7_NA"
                                    },
                                    {
                                        "id": "D5622AQHw8VEqvnVpDA",
                                        "sticker": false,
                                        "size": {
                                            "height": 450,
                                            "width": 800
                                        },
                                        "unavailable": false,
                                        "type": "img",
                                        "url": "https://media.licdn.com/dms/image/v2/D5622AQHw8VEqvnVpDA/feedshare-shrink_800/B56ZrnbBTHK4Ag-/0/1764819213072?e=1766620800&v=beta&t=NSFPcTN3wR-xSw9fLfyZG6CJ8eHgiScyEgg14IhDX4Q"
                                    }
                                ],
                                "author": {
                                    "public_identifier": "bangchak-corporation",
                                    "id": "11853765",
                                    "name": "Bangchak Corporation Public Company Limited",
                                    "is_company": true
                                },
                                "id": "7402188293049872384",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:33:35.071Z"
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:ugcPost:7402187733718507521",
                                "share_url": "https://www.linkedin.com/posts/dean-ables-rcdd-8a487729_hiring-technologyintegrationjobs-aecjobs-activity-7402187734213464064-_03W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "34m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 0,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Check us out! Best professional decision I evermade!",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "dean-ables-rcdd-8a487729",
                                    "id": "ACoAAAYAWzwBTr1OWY9vNYsuBWnRNT3T3cnsXCw",
                                    "name": "Dean Ables, RCDD",
                                    "is_company": false,
                                    "headline": "RCDD at Aptitude Intelligent Integration, helping bring together people, places, and technology—leveraging my insight and experience of over 30 years in the technology integration industry."
                                },
                                "id": "7402187733718507521",
                                "is_repost": true,
                                "repost_id": "7402187734213464064",
                                "parsed_datetime": "2025-12-04T03:31:21.716Z",
                                "repost_content": {
                                    "id": "7393981077138153472",
                                    "date": "3w",
                                    "parsed_datetime": "2025-11-11T12:01:02.315Z",
                                    "text": "Such a wonderful place to work.",
                                    "author": {
                                        "public_identifier": "cale-coggins-151504224",
                                        "id": "ACoAADhQ180BTk6hYVUg_sm3aFTQnLX6-9zYX4k",
                                        "name": "Cale Coggins",
                                        "is_company": false
                                    }
                                }
                            },
                            {
                                "type": "POST",
                                "provider": "LINKEDIN",
                                "social_id": "urn:li:activity:7402187694564646912",
                                "share_url": "https://www.linkedin.com/posts/henry-murau-8590431a5_your-over-qualifications-and-experiences-activity-7402187694564646912-AYgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEvRq0sBq3tSc_pCyolV0ZoVNXbazgnVsxE",
                                "date": "35m",
                                "comment_counter": 0,
                                "impressions_counter": 0,
                                "reaction_counter": 1,
                                "repost_counter": 0,
                                "permissions": {
                                    "can_post_comments": true,
                                    "can_react": true,
                                    "can_share": true
                                },
                                "text": "Your over qualifications and experiences can take you places, but also it can be very intimidating to some recruiters. Work politics and position hungry individuals exists. \nUltimately becoming the very reason why you are not contracted or hired.",
                                "mentions": [],
                                "attachments": [],
                                "author": {
                                    "public_identifier": "henry-murau-8590431a5",
                                    "id": "ACoAAC_hrQUBrD0rteFPaX55QB5B9A3K3M14-HI",
                                    "name": "Henry Murau",
                                    "is_company": false,
                                    "headline": "Political Science Graduate | LLB3 | Freelance Tokpisin Translator on Upwork"
                                },
                                "id": "7402187694564646912",
                                "is_repost": false,
                                "parsed_datetime": "2025-12-04T03:31:12.381Z"
                            }
                        ],
                        "config": {
                            "params": {
                                "api": "classic",
                                "category": "posts",
                                "keywords": "hiring",
                                "sort_by": "date",
                                "date_posted": "past_day",
                                "limit": 10
                            }
                        },
                        "paging": {
                            "start": 0,
                            "page_count": 10,
                            "total_count": 219
                        },
                        "cursor": "eyJhY2NvdW50X2lkIjoib2JPOWVDU2ZSbEtYY0dmQ18xY29UZyIsImxpbWl0IjoxMCwic3RhcnQiOjEwLCJwYXJhbXMiOnsiYXBpIjoiY2xhc3NpYyIsImNhdGVnb3J5IjoicG9zdHMiLCJrZXl3b3JkcyI6ImhpcmluZyIsInNvcnRfYnkiOiJkYXRlIiwiZGF0ZV9wb3N0ZWQiOiJwYXN0X2RheSIsImxpbWl0IjoxMH19"
                    }
                },
                "summary": "Retrieve Posts Based on Keywords acting as Posts Searcher has executed a search on LinkedIn and found two posts. The first post by Gerald Joseph S is a repost of Lindsey Herman's post about considering imperfect resumes for hiring. The second post by Wilson Craig discusses hiring a marketing manager. Both posts were shared recently.",
                "temperature": 0,
                "type": "output"
            }
        ]
    }
}


  const isBusy = isLoading || isFetching;

  const contextKey =
    logs && (logs as any).execution_context
      ? Object.keys((logs as any).execution_context)[0]
      : undefined;

  const context = contextKey
    ? (logs as any)?.execution_context?.[contextKey]
    : undefined;

  const keyword =
    (logs as any)?.input_variables?.keyword ??
    (logs as any)?.input_variables?.keywords ??
    "";

  const searchedPosts =
    context?.output_data?.searched_posts?.items ??
    context?.output_data?.searched_posts ??
    [];

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border-4 border-[hsl(var(--stroke-soft))] rounded-full" />
              <div className="absolute inset-0 border-4 border-[hsl(var(--surface-interactive-brand))] rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-[hsl(var(--text-inverse-subtle))] font-medium text-sm">
              Fetching LinkedIn posts...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!searchedPosts || searchedPosts.length === 0) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6 text-center">
          <div className="text-[hsl(var(--text-inverse-subtlest))] text-4xl mb-3">
            🔍
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-1">
            No posts found
          </h3>
          <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
            {keyword
              ? `No LinkedIn posts were found for "${keyword}".`
              : "No LinkedIn posts were found for the given search."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-md border border-[hsl(var(--stroke-soft))] px-5 py-5 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-white text-lg">
              #
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))] truncate">
                LinkedIn posts for{" "}
                {keyword ? `"${keyword}"` : "your search keywords"}
              </p>
              <p className="mt-0.5 text-[11px] text-[hsl(var(--text-inverse-subtle))] truncate">
                Showing {searchedPosts.length}{" "}
                {searchedPosts.length === 1 ? "result" : "results"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
          {searchedPosts.map((item: any, index: number) => {
            const description =
              item.description ||
              item.snippet ||
              item.text ||
              item.content ||
              "";

            const url = item.share_url || item.url || item.link;

            const reactions =
              item.reactions_count ??
              item.reactions ??
              item.likes ??
              undefined;

            const comments =
              item.comments_count ??
              item.comments ??
              item.comment_count ??
              undefined;

            const attachments = Array.isArray(item.attachments)
              ? item.attachments
              : [];

            const authorName: string = item.author?.name || "";
            const initial =
              authorName.trim().charAt(0).toUpperCase() || "P";

            return (
              <div
                key={item.id || item.urn || index}
                className="rounded-xl bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-4 py-3 space-y-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-[hsl(var(--surface-inverse))] text-sm font-semibold">
                      {initial}
                    </div>
                    <p className="text-xs font-medium text-[hsl(var(--text-inverse-default))]">
                      {authorName || "LinkedIn user"}
                    </p>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full p-1 hover:bg-[hsl(var(--surface-interactive-subtle))]"
                    >
                      <ExternalLink className="h-4 w-4 text-[hsl(var(--text-link))]" />
                    </a>
                  )}
                </div>

                {description && (
                  <p className="text-xs text-[hsl(var(--text-inverse-subtle))]">
                    {description}
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

                <div className="flex items-center gap-3 pt-1 text-[11px] text-[hsl(var(--text-inverse-subtlest))]">
                  {reactions !== undefined && <span>👍 {reactions}</span>}
                  {comments !== undefined && <span>💬 {comments}</span>}
                </div>

                <div className="mt-3 border-t border-[hsl(var(--stroke-soft))] pt-3 flex items-center justify-between gap-6 text-sm text-[hsl(var(--text-inverse-subtle))] w-2/3 mx-auto">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[hsl(var(--surface-interactive-subtle))] hover:text-[hsl(var(--text-link))] transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[hsl(var(--surface-interactive-subtle))] hover:text-[hsl(var(--text-link))] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex gap-4">
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[hsl(var(--surface-interactive-secondary))] text-[hsl(var(--text-inverse-default))] text-sm font-semibold shadow-sm border border-[hsl(var(--stroke-soft))] hover:bg-[hsl(var(--surface-interactive-subtle))] transition-colors"
          >
            👍 Like all
          </button>
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[hsl(var(--surface-interactive-secondary))] text-[hsl(var(--text-link))] text-sm font-semibold shadow-sm border border-[hsl(var(--surface-interactive-brand))] hover:bg-[hsl(var(--surface-interactive-subtle))] transition-colors"
          >
            💬 Comment all
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedinKeywordPostsRetriever;

