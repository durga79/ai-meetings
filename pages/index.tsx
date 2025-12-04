import React, { useState, useRef, useEffect } from "react";
import { UI_COMPONENT_MAP } from "@/components/UIComponentMap";
import { EXECUTION_COMPONENT_MAP } from "@/components/ExecutionComponentMap";
import MainComponent from "@/components/MainComponent";
import ThemeToggle from "@/components/ThemeToggle";
import { UIKEY } from "@/types";

interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

type SidebarTab = "ui" | "execution" | "main";

export default function DevPage() {
    const [selectedUIKey, setSelectedUIKey] = useState<string>(UIKEY.HOME);
    const [uiProps, setUiProps] = useState<Record<string, any>>({});
    const [activeTab, setActiveTab] = useState<SidebarTab>("ui");
    const [showDropdown, setShowDropdown] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            role: "assistant",
            content: "Welcome! Select a component type from the sidebar to get started.",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const allUIKeys = Object.values(UIKEY);
    const allExecutionKeys = Object.keys(EXECUTION_COMPONENT_MAP);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleTabClick = (tab: SidebarTab) => {
        setActiveTab(tab);
        if (tab === "main") {
            setSelectedUIKey("main");
            setShowDropdown(false);
            addMessage("assistant", "Showing Main Component");
        } else {
            setShowDropdown(true);
        }
    };

    const handleComponentSelect = (key: string, isExecution = false) => {
        if (isExecution) {
            setSelectedUIKey(`execution:${key}`);
            addMessage("assistant", `Showing execution: ${key}`);
        } else {
            setSelectedUIKey(key);
            addMessage("assistant", `Showing: ${key}`);
        }
        setShowDropdown(false);
    };

    const addMessage = (role: "user" | "assistant", content: string) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), role, content, timestamp: new Date() },
        ]);
    };

    const handleMessageSubmit = (message: string) => {
        if (!message.trim()) return;
        addMessage("user", message);
        setTimeout(() => {
            addMessage("assistant", `Received: "${message}"`);
        }, 500);
    };

    const handleSetUIKey = (key: string) => {
        setSelectedUIKey(key);
        addMessage("assistant", `setUIKey → ${key}`);
    };

    const handleSetProps = (props: Record<string, any>) => {
        setUiProps(props);
    };

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            handleMessageSubmit(inputValue);
            setInputValue("");
        }
    };

    const renderComponent = () => {
        if (selectedUIKey === "main") {
            return (
                <MainComponent
                    aiKey="dev-preview"
                    uiKey="main"
                    setUIKey={handleSetUIKey}
                    setProps={handleSetProps}
                    handleMessageSubmit={handleMessageSubmit}
                />
            );
        }

        if (selectedUIKey.startsWith("execution:")) {
            const actionId = selectedUIKey.replace("execution:", "");
            const Component = EXECUTION_COMPONENT_MAP[actionId];
            if (Component) {
                return (
                    <Component
                        logs={getMockExecutionLogs(actionId)}
                        isLoading={false}
                        isFetching={false}
                        setUIKey={handleSetUIKey}
                        handleMessageSubmit={handleMessageSubmit}
                    />
                );
            }
            return <EmptyState text="Component not found" />;
        }

        const Component = UI_COMPONENT_MAP[selectedUIKey];
        if (Component) {
            return (
                <Component
                    {...getMockProps(selectedUIKey)}
                    setUIKey={handleSetUIKey}
                    setProps={handleSetProps}
                    handleMessageSubmit={handleMessageSubmit}
                />
            );
        }
        return <EmptyState text="Select a component" />;
    };

    const getDropdownItems = () => {
        if (activeTab === "ui") return allUIKeys;
        if (activeTab === "execution") return allExecutionKeys;
        return [];
    };

    return (
        <div className="h-screen flex bg-background text-text-inverse-default overflow-hidden">
            {/* Icon Sidebar */}
            <div className="w-14 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple-600 to-accent-pink-600 flex items-center justify-center mb-8 shadow-md shadow-brand-purple-950/40">
                    <span className="text-white text-sm font-bold">⚡</span>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                    <SidebarIcon
                        icon="🎨"
                        label="UI"
                        active={activeTab === "ui"}
                        onClick={() => handleTabClick("ui")}
                    />
                    <SidebarIcon
                        icon="⚙️"
                        label="Exec"
                        active={activeTab === "execution"}
                        onClick={() => handleTabClick("execution")}
                    />
                    <SidebarIcon
                        icon="🏠"
                        label="Main"
                        active={activeTab === "main"}
                        onClick={() => handleTabClick("main")}
                    />
                </div>

                <div className="mt-auto flex flex-col items-center gap-3">
                    <ThemeToggle className="h-9 w-9 rounded-xl border border-stroke-soft bg-surface-container-default text-text-inverse-default hover:bg-surface-container-default-lighter" />
                </div>
            </div>

            {/* Chat Panel - 1/3 */}
            <div className="w-1/3 flex flex-col bg-surface-container-default border-r border-stroke-soft">
                {/* Dropdown */}
                {showDropdown && (
                    <div className="border-b border-stroke-soft bg-surface-container-default shadow-md shadow-decoration/40">
                        <div className="p-3">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wider">
                                    {activeTab === "ui" ? "UI Components" : "Execution Components"}
                                </span>
                                <button
                                    onClick={() => setShowDropdown(false)}
                                    className="text-text-inverse-subtle hover:text-text-inverse-default transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pt-1">
                                {getDropdownItems().map((key) => {
                                    const isSelected = activeTab === "execution"
                                        ? selectedUIKey === `execution:${key}`
                                        : selectedUIKey === key;
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => handleComponentSelect(key, activeTab === "execution")}
                                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                                isSelected
                                                    ? "bg-gradient-to-r from-surface-interactive-brand to-accent-pink-600 text-white shadow-md shadow-brand-purple-950/40"
                                                    : "bg-surface-container-default-lighter text-text-inverse-subtle hover:bg-surface-container-raised hover:text-text-inverse-default border border-stroke-soft hover:border-surface-interactive-brand/40"
                                            }`}
                                        >
                                            {key}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm shadow-sm ${
                                        msg.role === "user"
                                            ? "bg-gradient-to-r from-surface-interactive-brand to-accent-pink-600 text-white rounded-br-md"
                                            : "bg-surface-container-default-lighter text-text-inverse-default rounded-bl-md border border-stroke-soft"
                                    }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-stroke-soft">
                    <form onSubmit={handleInputSubmit}>
                        <div className="relative">
                            <div className="flex items-center gap-2 bg-input-container rounded-xl px-4 py-3 border border-input-stroke focus-within:border-surface-interactive-brand transition-colors">
                                <button type="button" className="text-text-inverse-subtle hover:text-text-inverse-default transition-colors">
                                    <span className="text-lg">+</span>
                                </button>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask anything, create anything..."
                                    className="flex-1 bg-transparent text-sm text-text-inverse-default placeholder:text-text-inverse-subtlest focus:outline-none"
                                />
                                <button type="button" className="text-text-inverse-subtle hover:text-text-inverse-default transition-colors">
                                    <span className="text-sm">📎</span>
                                </button>
                                <button
                                    type="submit"
                                    className="w-8 h-8 rounded-lg bg-gradient-to-r from-surface-interactive-brand to-accent-pink-600 flex items-center justify-center hover:opacity-90 transition-opacity"
                                >
                                    <span className="text-white text-xs">▶</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Component Preview - 2/3 */}
            <div className="w-2/3 overflow-y-auto bg-surface-container-default">
                {renderComponent()}
            </div>
        </div>
    );
}

function SidebarIcon({
    icon,
    label,
    active,
    onClick,
}: {
    icon: string;
    label: string;
    active?: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                active
                    ? "bg-gradient-to-br from-surface-interactive-brand/20 to-accent-pink-600/20 text-text-inverse-default"
                    : "text-text-inverse-subtle hover:text-text-inverse-default hover:bg-surface-container-default"
            }`}
        >
            {active && (
                <div className="absolute left-0 w-0.5 h-5 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-r" />
            )}
            <span className="text-base">{icon}</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-surface-container-default text-text-inverse-default border border-stroke-soft rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-md">
                {label}
            </div>
        </button>
    );
}

function EmptyState({ text }: { text: string }) {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-default-lighter border border-stroke-soft flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                </div>
                <p className="text-text-inverse-subtlest text-sm">{text}</p>
            </div>
        </div>
    );
}

function getMockProps(uiKey: string): Record<string, any> {
    const baseMockProps = { className: "", data: {}, props: {} };

    switch (uiKey) {
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
            };
        case UIKEY.SHOW_TABLE_PAGE:
            return {
                ...baseMockProps,
                props: {
                    tables: [
                        { _id: "1", table_name: "users" },
                        { _id: "2", table_name: "orders" },
                    ],
                },
            };
        default:
            return baseMockProps;
    }
}

function getMockExecutionLogs(actionId: string) {
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
            agent_1: {
                stage: "completed",
                agent_title: "Sample Agent",
                status: "completed",
                decision: null,
                error: null,
                started_at: Date.now(),
                llm_output: {
                    skill: { skill_name: "sample_skill", input: {} },
                    thoughts: { reasoning: "Processing data", plan: "Execute task", text: null, speak: null, criticism: null },
                },
                price: null,
                output_data: { result: "success" },
            },
        },
    };
}
