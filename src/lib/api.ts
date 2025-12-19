/**
 * API Service for Coworker Backend
 * 
 * This file contains all API calls to the Coworker Service.
 * The base URL is configured via NEXT_PUBLIC_COWORKER_APIS_URL environment variable.
 */

// Base URL for Coworker APIs
const COWORKER_API_BASE_URL = process.env.NEXT_PUBLIC_COWORKER_APIS_URL || "http://localhost:3005";

/**
 * Test the Meeting Notes API with sample data
 * Run this in browser console: await window.testMeetingNotesAPI()
 */
export async function testMeetingNotesAPI(): Promise<void> {
    console.log("🚀 Testing Meeting Notes API...");
    console.log("📍 API URL:", COWORKER_API_BASE_URL);

    const sampleRequest: MeetingNotesRequest = {
        transcript: `Durga Prasad: Hi everyone, let's start with the agenda. Today we'll review the AI meeting bot progress and finalize the next sprint goals.

Vamsi Krishna: The recording and transcription pipeline is stable now. We're successfully capturing Google Meet sessions and generating transcripts within two minutes after the meeting.

Ananya Sharma: From the UI side, we've completed the dashboard for viewing summaries, MOM, and action items. The downloadable transcript link is also integrated.

Rahul Verma: The summarization model is performing well. We can generate meeting summaries, MOM, and To-Do items separately to avoid redundancy.

Durga Prasad: Good. Let's make sure summaries are concise and actionable. Also, notifications should be sent via email automatically.`,
        
        recording_url: "https://example.com/recordings/test-meeting.mp4",
        transcript_url: "https://example.com/transcripts/test-meeting.json",
        bot_id: "test-bot-id-12345",
        meeting_title: "AI Product Sync - Weekly Review",
        meeting_date: new Date().toLocaleDateString(),
        meeting_duration: "42 min",
        platform: "google_meet",
        participants: ["Durga Prasad", "Vamsi Krishna", "Ananya Sharma", "Rahul Verma"],
    };

    console.log("📤 Sending request:", JSON.stringify(sampleRequest, null, 2));

    try {
        const response = await generateMeetingNotes(sampleRequest);
        
        if (response.success) {
            console.log(" API call successful!");
            console.log(" Response:", response);
            console.log(" Summary:", response.data?.summary?.substring(0, 200) + "...");
            console.log("MOM:", response.data?.mom?.substring(0, 200) + "...");
            console.log("Action Items:", response.data?.action_items_parsed);
        } else {
            console.error(" API call failed:", response.error);
        }
    } catch (error) {
        console.error(" Error:", error);
    }
}

// Expose test function to window for easy browser console testing
if (typeof window !== "undefined") {
    (window as any).testMeetingNotesAPI = testMeetingNotesAPI;
}

/**
 * 
 * Types for Meeting Notes API
 */
export interface MeetingNotesRequest {
    /** The raw transcript text (speaker: message format) */
    transcript: string;
    /** URL to the meeting recording video */
    recording_url?: string;
    /** URL to the transcript JSON file */
    transcript_url?: string;
    /** Bot ID from Recall.ai */
    bot_id?: string;
    /** Meeting title */
    meeting_title?: string;
    /** Meeting date */
    meeting_date?: string;
    /** Meeting duration in minutes */
    meeting_duration?: string;
    /** Platform (google_meet, zoom, teams) */
    platform?: string;
    /** List of participant names */
    participants?: string[];
}

export interface ActionItem {
    task: string;
    owner: string;
    deadline: string;
}

export interface MeetingNotesResponse {
    success: boolean;
    data?: {
        summary: string;           // Markdown/text formatted summary
        mom: string;               // Markdown/text formatted Minutes of Meeting
        action_items: string;      // Markdown/text formatted action items
        action_items_parsed?: ActionItem[];  // Parsed action items array (optional)
        html?: string;             // Complete HTML email template
        recording_url?: string;    // Recording URL passed through
        transcript_url?: string;   // Transcript URL passed through
        meeting_details?: {
            title: string;
            date: string;
            duration?: string;
            attendees: string[];
        };
    };
    error?: string;
}

// Alternative response format (direct from backend without wrapper)
export interface MeetingNotesDirectResponse {
    summary: string;
    mom: string;
    action_items: string;
    html?: string;
    recording_url?: string;
    transcript_url?: string;
    error?: string;
}

export interface SendEmailRequest {
    to: string[];                 // Array of email addresses
    subject: string;
    summary: string;              // HTML formatted
    mom: string;                  // HTML formatted
    action_items: string;         // HTML formatted
    meeting_title?: string;
    meeting_date?: string;
}

export interface SendEmailResponse {
    success: boolean;
    tracking_id?: string;
    provider_id?: string;
    error?: string;
}

/**
 * Generate Meeting Notes from Transcript
 * 
 * Sends transcript to the Coworker Service which uses LLM to generate:
 * - Summary
 * - Minutes of Meeting (MOM)
 * - Action Items
 * 
 * @param request - The transcript and optional metadata
 * @returns Generated meeting notes
 */
export async function generateMeetingNotes(
    request: MeetingNotesRequest
): Promise<MeetingNotesResponse> {
    try {
        const response = await fetch(`${COWORKER_API_BASE_URL}/api/meeting-notes/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Check if response has error field (backend error)
        if (result.error) {
            return {
                success: false,
                error: result.error,
            };
        }

        // Backend returns data directly (not wrapped in { success, data })
        // So we wrap it in our expected format
        if (result.summary && result.mom) {
            return {
                success: true,
                data: {
                    summary: result.summary,
                    mom: result.mom,
                    action_items: result.action_items || "",
                    html: result.html,
                    recording_url: result.recording_url,
                    transcript_url: result.transcript_url,
                },
            };
        }

        // If already in expected format
        return result;
    } catch (error) {
        console.error("Error generating meeting notes:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to generate meeting notes",
        };
    }
}

/**
 * Send Meeting Notes via Email
 * 
 * Sends the generated meeting notes to specified email addresses.
 * 
 * @param request - Email details with summary, MOM, and action items
 * @returns Email sending result
 */
export async function sendMeetingNotesEmail(
    request: SendEmailRequest
): Promise<SendEmailResponse> {
    try {
        const response = await fetch(`${COWORKER_API_BASE_URL}/api/meeting-notes/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to send email",
        };
    }
}

/**
 * API Endpoints Summary for Backend Implementation
 * 
 * The Coworker Service (Events Service) needs to implement these endpoints:
 * 
 * ============================================================================
 * 1. POST /api/meeting-notes/generate
 * ============================================================================
 * 
 * Request Body:
 * {
 *     "transcript": "Durga Prasad: Hi everyone, let's start...\n\nVamsi Krishna: The pipeline is stable...",
 *     "recording_url": "https://us-west-2.recall.ai/api/v1/recordings/.../video_mixed.mp4",
 *     "transcript_url": "https://us-west-2.recall.ai/api/v1/recordings/.../diarized-processed.json",
 *     "bot_id": "4f81be8a-6363-4b54-ad46-d3c3539fd395",
 *     "meeting_title": "Meeting on google meet",
 *     "meeting_date": "12/17/2025",
 *     "meeting_duration": "42 min",
 *     "platform": "google meet",
 *     "participants": ["Durga Prasad", "Vamsi Krishna"]
 * }
 * 
 * What the backend should do:
 * 1. Parse the transcript
 * 2. Call LLM (Claude/GPT) with prompts to generate:
 *    - Summary: Concise meeting overview
 *    - MOM: Detailed minutes with discussion points, decisions
 *    - Action Items: Tasks with owners and deadlines
 * 3. Return formatted HTML responses
 * 
 * Response:
 * {
 *     "success": true,
 *     "data": {
 *         "summary": "<h3>Meeting Summary</h3><p>Weekly sync to review AI meeting bot...</p>",
 *         "mom": "<h3>Minutes of Meeting</h3><h4>Meeting Details</h4>...",
 *         "action_items": "<h3>Action Items</h3><ul><li>...</li></ul>",
 *         "action_items_parsed": [
 *             { "task": "Finalize email workflow", "owner": "Rahul", "deadline": "20 Dec 2025" }
 *         ],
 *         "meeting_details": {
 *             "title": "AI Product Sync",
 *             "date": "17 Dec 2025",
 *             "duration": "42 minutes",
 *             "attendees": ["Durga Prasad", "Vamsi Krishna", "Ananya Sharma"]
 *         }
 *     }
 * }
 * 
 * ============================================================================
 * 2. POST /api/meeting-notes/send-email
 * ============================================================================
 * 
 * Request Body:
 * {
 *     "to": ["colleague@company.com", "team@company.com"],
 *     "subject": "Meeting Summary - AI Product Sync - 17 Dec 2025",
 *     "summary": "<h3>Meeting Summary</h3>...",
 *     "mom": "<h3>Minutes of Meeting</h3>...",
 *     "action_items": "<h3>Action Items</h3>...",
 *     "meeting_title": "AI Product Sync",
 *     "meeting_date": "17 Dec 2025"
 * }
 * 
 * What the backend should do:
 * 1. Compose HTML email body combining summary, MOM, action items
 * 2. Send email via configured mail service (Gmail, Outlook, etc.)
 * 3. Return tracking info
 * 
 * Response:
 * {
 *     "success": true,
 *     "tracking_id": "wRVLaUFfQ1GOr-hqcha7lg",
 *     "provider_id": "19b31558ae52a685"
 * }
 * 
 * ============================================================================
 * LLM Prompts (Example for Backend)
 * ============================================================================
 * 
 * SUMMARY PROMPT:
 * ```
 * You are a meeting summarizer. Given the following transcript, create a concise summary.
 * 
 * Transcript:
 * {transcript}
 * 
 * Generate a summary in HTML format with:
 * - One-line overview
 * - Key discussion points (bullet list)
 * - Decisions made
 * - Next steps (high-level)
 * 
 * Output format: HTML with <h3>, <h4>, <ul>, <li>, <p> tags
 * ```
 * 
 * MOM PROMPT:
 * ```
 * You are a meeting minutes generator. Given the following transcript, create detailed MOM.
 * 
 * Transcript:
 * {transcript}
 * 
 * Generate Minutes of Meeting in HTML format with:
 * - Meeting Details (title, date, attendees, agenda)
 * - Meeting Summary
 * - Discussion Details by topic
 * - Decisions
 * - Action Items with owner and deadline
 * - Open Issues
 * 
 * Output format: HTML with proper heading hierarchy
 * ```
 * 
 * ACTION ITEMS PROMPT:
 * ```
 * You are an action item extractor. Given the following transcript, extract action items.
 * 
 * Transcript:
 * {transcript}
 * 
 * Extract ONLY explicitly stated action items with:
 * - Task description
 * - Owner (who is responsible)
 * - Deadline (if mentioned)
 * 
 * If no deadline mentioned, use "TBD"
 * If no owner mentioned, use "Unassigned"
 * 
 * Output as JSON array:
 * [{ "task": "...", "owner": "...", "deadline": "..." }]
 * ```
 */

export default {
    generateMeetingNotes,
    sendMeetingNotesEmail,
};

