import React, { useState } from "react";
import MainComponent from "@/components/MainComponent";
import { UI_COMPONENT_MAP } from "@/components/UIComponentMap";
import { EXECUTION_COMPONENT_MAP } from "@/components/ExecutionComponentMap";
import { UIKEY } from "@/types";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Development Index Page
 * 
 * This page is for standalone development and testing.
 * It allows you to preview and test your components
 * without needing to run the host application.
 * 
 * When deployed as a microfrontend, this page is not used.
 * The host application loads components directly via Module Federation.
 */
export default function DevPage() {
    const [currentView, setCurrentView] = useState<"main" | "ui" | "execution">("main");
    const [selectedComponent, setSelectedComponent] = useState<string>("");

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Dev Toolbar */}
            <div className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-lg font-semibold">
                        Microfrontend Template - Dev Mode
                    </h1>
                    <div className="flex items-center gap-2">
                        <ViewButton
                            active={currentView === "main"}
                            onClick={() => setCurrentView("main")}
                        >
                            Main Component
                        </ViewButton>
                        <ViewButton
                            active={currentView === "ui"}
                            onClick={() => setCurrentView("ui")}
                        >
                            UI Components
                        </ViewButton>
                        <ViewButton
                            active={currentView === "execution"}
                            onClick={() => setCurrentView("execution")}
                        >
                            Execution Components
                        </ViewButton>
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto p-4">
                {currentView === "main" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Main Component Preview</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            This is the main component used for fullscreen mode.
                        </p>
                        <div className="border border-gray-700 rounded-lg overflow-hidden h-[600px]">
                            <MainComponent
                                aiKey="dev-preview"
                                uiKey="home"
                                setUIKey={(key) => console.log("setUIKey:", key)}
                                setProps={(props) => console.log("setProps:", props)}
                                handleMessageSubmit={(msg) => console.log("Message:", msg)}
                            />
                        </div>
                    </div>
                )}

                {currentView === "ui" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">UI Components Preview</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            These components override the host&apos;s DEFAULT_COMPONENT_MAP.
                        </p>
                        
                        {/* Component Selector */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {Object.keys(UI_COMPONENT_MAP).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedComponent(key)}
                                    className={`px-3 py-1.5 rounded text-sm ${
                                        selectedComponent === key
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        {/* Selected Component Preview */}
                        {selectedComponent && UI_COMPONENT_MAP[selectedComponent] && (
                            <div className="border border-gray-700 rounded-lg overflow-hidden min-h-[500px]">
                                {React.createElement(UI_COMPONENT_MAP[selectedComponent], getMockProps(selectedComponent))}
                            </div>
                        )}

                        {!selectedComponent && (
                            <div className="text-center py-12 text-gray-500">
                                Select a component to preview
                            </div>
                        )}
                    </div>
                )}

                {currentView === "execution" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Execution Components Preview</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            These components are used in ExecutionChainWrapper for specific actions.
                        </p>
                        
                        {/* Component List */}
                        <div className="space-y-4">
                            {Object.entries(EXECUTION_COMPONENT_MAP).map(([key, Component]) => (
                                <div key={key}>
                                    <h3 className="text-sm font-medium text-gray-400 mb-2">
                                        Action: {key}
                                    </h3>
                                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                                        <Component
                                            logs={getMockExecutionLogs(key)}
                                            isLoading={false}
                                            isFetching={false}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Info Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-400">
                    <div>
                        <strong>RemoteEntry URL:</strong>{" "}
                        <code className="bg-gray-700 px-1 rounded">
                            http://localhost:3004/_next/static/chunks/remoteEntry.js
                        </code>
                    </div>
                    <div>
                        <strong>Components:</strong> {Object.keys(UI_COMPONENT_MAP).length} UI,{" "}
                        {Object.keys(EXECUTION_COMPONENT_MAP).length} Execution
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper components
function ViewButton({ 
    active, 
    onClick, 
    children 
}: { 
    active: boolean; 
    onClick: () => void; 
    children: React.ReactNode 
}) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded text-sm ${
                active
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
        >
            {children}
        </button>
    );
}

// Mock props generator for different components
function getMockProps(uiKey: string): Record<string, any> {
    const baseMockProps = {
        className: "",
        setUIKey: (key: string) => console.log("setUIKey:", key),
        setProps: (props: any) => console.log("setProps:", props),
        handleMessageSubmit: (msg: string) => console.log("Message:", msg),
    };

    switch (uiKey) {
        case UIKEY.HOME:
            return { ...baseMockProps, data: {}, props: {} };
            
        case UIKEY.EXECUTION_HISTORY:
            return {
                ...baseMockProps,
                executions: [
                    { _id: "1", goal: "Test execution 1", agentflow_name: "Test Flow", status: "completed", created_at: Date.now() },
                    { _id: "2", goal: "Test execution 2", agentflow_name: "Another Flow", status: "running", created_at: Date.now() - 3600000 },
                ],
                isLoading: false,
                onExecutionClick: (exec: any) => console.log("Clicked:", exec),
            };
            
        case UIKEY.PROCESSFLOW_LIST:
            return {
                ...baseMockProps,
                props: {
                    data: {
                        agentflows: [
                            { _id: "1", name: "Sample Flow 1", role: "Data Processing", description: "Process data automatically" },
                            { _id: "2", name: "Sample Flow 2", role: "Notifications", description: "Send notifications to users" },
                        ],
                    },
                },
                onRun: (id: string) => console.log("Run:", id),
            };
            
        case UIKEY.SHOW_TABLE_PAGE:
            return {
                ...baseMockProps,
                props: {
                    tables: [
                        { _id: "1", table_name: "users" },
                        { _id: "2", table_name: "orders" },
                        { _id: "3", table_name: "products" },
                    ],
                },
                onNavigate: (id: string, name: string) => console.log("Navigate:", id, name),
                onCreateTable: () => console.log("Create table"),
                onSearch: (term: string) => console.log("Search:", term),
            };
            
        default:
            return baseMockProps;
    }
}

// Mock execution logs generator
function getMockExecutionLogs(actionId: string) {
    // For LinkedIn Post Liker we just pass an empty logs object to
    // verify that the custom execution UI is wired correctly.
    if (actionId === "12a4cdz") {
        return {} as any;
    }

    return {
        status: "completed",
        goal: `Execute ${actionId}`,
        created_at: Date.now(),
        agentflow: {
            name: actionId,
            unique_id: actionId,
            agents: [],
            agentflow_id: "mock_id",
            image: "",
        },
        execution_context: {
            "agent_1": {
                stage: "completed",
                agent_title: "Sample Agent",
                status: "completed",
                decision: null,
                error: null,
                started_at: Date.now(),
                llm_output: {
                    skill: { skill_name: "sample_skill", input: {} },
                    thoughts: {
                        reasoning: "Processing data",
                        plan: "Execute task",
                        text: null,
                        speak: null,
                        criticism: null,
                    },
                },
                price: null,
                output_data: { result: "success" },
            },
        },
    };
}
