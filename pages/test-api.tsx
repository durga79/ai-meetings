/**
 * API Test Page
 * 
 * Access this page at: http://localhost:3004/test-api
 * Use this to test your Coworker Service API endpoints
 */

import React, { useState } from "react";
import { generateMeetingNotes, sendMeetingNotesEmail, type MeetingNotesRequest, type MeetingNotesResponse } from "../src/lib/api";

export default function TestApiPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<MeetingNotesResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
    };

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

    const handleTestGenerateNotes = async () => {
        setIsLoading(true);
        setError(null);
        setResponse(null);
        setLogs([]);

        addLog("🚀 Starting API test...");
        addLog(`📍 API URL: ${process.env.NEXT_PUBLIC_COWORKER_APIS_URL || "http://localhost:3005"}`);
        addLog("📤 Sending request to /api/meeting-notes/generate");

        try {
            const result = await generateMeetingNotes(sampleRequest);
            
            if (result.success) {
                addLog("✅ API call successful!");
                addLog(`📋 Got summary (${result.data?.summary?.length || 0} chars)`);
                addLog(`📒 Got MOM (${result.data?.mom?.length || 0} chars)`);
                addLog(`✅ Got ${result.data?.action_items_parsed?.length || 0} action items`);
                setResponse(result);
            } else {
                addLog(`❌ API returned error: ${result.error}`);
                setError(result.error || "Unknown error");
            }
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "Unknown error";
            addLog(`❌ Exception: ${errorMsg}`);
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTestSendEmail = async () => {
        if (!response?.data) {
            setError("Please generate notes first");
            return;
        }

        setIsLoading(true);
        addLog("📧 Testing send email API...");

        try {
            const result = await sendMeetingNotesEmail({
                to: ["test@example.com"],
                subject: "Test Meeting Notes",
                summary: response.data.summary,
                mom: response.data.mom,
                action_items: response.data.action_items,
                meeting_title: "Test Meeting",
                meeting_date: new Date().toLocaleDateString(),
            });

            if (result.success) {
                addLog(`✅ Email sent! Tracking ID: ${result.tracking_id}`);
            } else {
                addLog(`❌ Email failed: ${result.error}`);
            }
        } catch (err) {
            addLog(`❌ Exception: ${err instanceof Error ? err.message : "Unknown error"}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">🧪 API Test Page</h1>
                <p className="text-gray-400 mb-8">Test your Coworker Service Meeting Notes API</p>

                {/* API URL Info */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400">API Base URL:</p>
                    <code className="text-green-400">{process.env.NEXT_PUBLIC_COWORKER_APIS_URL || "http://localhost:3005"}</code>
                </div>

                {/* Test Buttons */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={handleTestGenerateNotes}
                        disabled={isLoading}
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 rounded-lg font-semibold transition-colors"
                    >
                        {isLoading ? "Testing..." : "🚀 Test Generate Notes"}
                    </button>
                    <button
                        onClick={handleTestSendEmail}
                        disabled={isLoading || !response?.data}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg font-semibold transition-colors"
                    >
                        📧 Test Send Email
                    </button>
                </div>

                {/* Request Preview */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">📤 Sample Request</h2>
                    <div className="bg-gray-800 rounded-lg p-4 overflow-auto max-h-60">
                        <pre className="text-xs text-gray-300">{JSON.stringify(sampleRequest, null, 2)}</pre>
                    </div>
                </div>

                {/* Logs */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">📋 Logs</h2>
                    <div className="bg-gray-800 rounded-lg p-4 min-h-32 max-h-48 overflow-auto">
                        {logs.length === 0 ? (
                            <p className="text-gray-500">Click "Test Generate Notes" to start...</p>
                        ) : (
                            logs.map((log, i) => (
                                <p key={i} className="text-sm font-mono text-gray-300">{log}</p>
                            ))
                        )}
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-6 bg-red-900/50 border border-red-500 rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-red-400 mb-2">❌ Error</h2>
                        <p className="text-red-300">{error}</p>
                    </div>
                )}

                {/* Response Preview */}
                {response?.data && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-green-400">✅ Summary</h2>
                            <div 
                                className="bg-gray-800 rounded-lg p-4 prose prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: response.data.summary }}
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-blue-400">📒 Minutes of Meeting</h2>
                            <div 
                                className="bg-gray-800 rounded-lg p-4 prose prose-invert max-w-none max-h-96 overflow-auto"
                                dangerouslySetInnerHTML={{ __html: response.data.mom }}
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-yellow-400">✅ Action Items</h2>
                            <div className="bg-gray-800 rounded-lg p-4">
                                {response.data.action_items_parsed?.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                                        <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">{i + 1}</span>
                                        <div>
                                            <p className="text-white">{item.task}</p>
                                            <p className="text-sm text-gray-400">
                                                <span className="text-purple-400">{item.owner}</span> • 
                                                <span className="text-orange-400 ml-1">{item.deadline}</span>
                                            </p>
                                        </div>
                                    </div>
                                )) || <p className="text-gray-500">No action items</p>}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">📦 Raw Response</h2>
                            <div className="bg-gray-800 rounded-lg p-4 overflow-auto max-h-60">
                                <pre className="text-xs text-gray-300">{JSON.stringify(response, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

