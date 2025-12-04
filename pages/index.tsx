import React, { useState, useRef, useEffect } from "react";
import { UI_COMPONENT_MAP } from "@/components/UIComponentMap";
import { EXECUTION_COMPONENT_MAP } from "@/components/ExecutionComponentMap";
import MainComponent from "@/components/MainComponent";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import WelcomeScreen from "@/components/WelcomeScreen";
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
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Execution component state
    const [showLogsDialog, setShowLogsDialog] = useState(false);
    const [customLogs, setCustomLogs] = useState<string>("");
    const [executionIsLoading, setExecutionIsLoading] = useState(false);
    const [executionIsFetching, setExecutionIsFetching] = useState(false);
    const [parsedLogs, setParsedLogs] = useState<any>(null);

    const allUIKeys = Object.values(UIKEY);
    const allExecutionKeys = Object.keys(EXECUTION_COMPONENT_MAP);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleLogoClick = () => {
        // Reset everything to initial state
        setMessages([]);
        setSelectedUIKey(UIKEY.HOME);
        setShowDropdown(false);
        setActiveTab("ui");
        setUiProps({});
    };

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
                const logsData = parsedLogs || getMockExecutionLogs(actionId);
                return (
                    <div className="h-full flex flex-col">
                        {/* Execution Controls Bar */}
                        <div className="p-3 border-b border-stroke-soft bg-surface-container-default-lighter flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wider">Execution: {actionId}</span>
                                <div className="flex items-center gap-2">
                                    <label className="flex items-center gap-1.5 text-xs text-text-inverse-subtle">
                                        <input
                                            type="checkbox"
                                            checked={executionIsLoading}
                                            onChange={(e) => setExecutionIsLoading(e.target.checked)}
                                            className="w-3.5 h-3.5 rounded border-stroke-soft accent-surface-interactive-brand"
                                        />
                                        isLoading
                                    </label>
                                    <label className="flex items-center gap-1.5 text-xs text-text-inverse-subtle">
                                        <input
                                            type="checkbox"
                                            checked={executionIsFetching}
                                            onChange={(e) => setExecutionIsFetching(e.target.checked)}
                                            className="w-3.5 h-3.5 rounded border-stroke-soft accent-surface-interactive-brand"
                                        />
                                        isFetching
                                    </label>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowLogsDialog(true)}
                                className="px-3 py-1.5 text-xs font-medium bg-surface-interactive-brand text-white rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors flex items-center gap-1.5"
                            >
                                <span>📝</span> Edit Logs
                            </button>
                        </div>
                        {/* Component */}
                        <div className="flex-1 overflow-auto">
                            <Component
                                logs={logsData}
                                isLoading={executionIsLoading}
                                isFetching={executionIsFetching}
                                setUIKey={handleSetUIKey}
                                handleMessageSubmit={handleMessageSubmit}
                            />
                        </div>
                    </div>
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
                <button 
                    onClick={handleLogoClick}
                    className="mb-8 transition-transform hover:scale-105 active:scale-95"
                    title="Reset and go to home"
                >
                    <Logo size="sm" />
                </button>

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
                    {messages.length === 0 ? (
                        <WelcomeScreen />
                    ) : (
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
                    )}
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

            {/* Logs Dialog */}
            {showLogsDialog && (
                <ExecutionLogsDialog
                    isOpen={showLogsDialog}
                    onClose={() => setShowLogsDialog(false)}
                    logsJson={customLogs}
                    onLogsChange={setCustomLogs}
                    onApply={(logs) => {
                        try {
                            const parsed = JSON.parse(logs);
                            setParsedLogs(parsed);
                            setShowLogsDialog(false);
                            addMessage("assistant", "Custom logs applied to execution component");
                        } catch (e) {
                            alert("Invalid JSON format. Please check your logs data.");
                        }
                    }}
                    onReset={() => {
                        setCustomLogs("");
                        setParsedLogs(null);
                        setShowLogsDialog(false);
                        addMessage("assistant", "Logs reset to default mock data");
                    }}
                    defaultLogs={getMockExecutionLogs(selectedUIKey.replace("execution:", ""))}
                />
            )}
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

// Execution Logs Dialog Component
interface ExecutionLogsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    logsJson: string;
    onLogsChange: (logs: string) => void;
    onApply: (logs: string) => void;
    onReset: () => void;
    defaultLogs: any;
}

function ExecutionLogsDialog({
    isOpen,
    onClose,
    logsJson,
    onLogsChange,
    onApply,
    onReset,
    defaultLogs,
}: ExecutionLogsDialogProps) {
    const [localLogs, setLocalLogs] = useState(logsJson || JSON.stringify(defaultLogs, null, 2));
    const [jsonError, setJsonError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen && !logsJson) {
            setLocalLogs(JSON.stringify(defaultLogs, null, 2));
        }
    }, [isOpen, defaultLogs, logsJson]);

    const handleLogsChange = (value: string) => {
        setLocalLogs(value);
        onLogsChange(value);
        // Validate JSON
        try {
            JSON.parse(value);
            setJsonError(null);
        } catch (e) {
            setJsonError("Invalid JSON format");
        }
    };

    const handleApply = () => {
        if (!jsonError) {
            onApply(localLogs);
        }
    };

    const handleLoadDefault = () => {
        const defaultJson = JSON.stringify(defaultLogs, null, 2);
        setLocalLogs(defaultJson);
        onLogsChange(defaultJson);
        setJsonError(null);
    };

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(localLogs);
            const formatted = JSON.stringify(parsed, null, 2);
            setLocalLogs(formatted);
            onLogsChange(formatted);
            setJsonError(null);
        } catch (e) {
            // Keep current value if invalid
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Dialog */}
            <div className="relative w-full max-w-4xl max-h-[95vh] min-h-[65vh] mx-4 bg-surface-container-default rounded-2xl shadow-2xl border border-stroke-soft flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-stroke-soft flex items-center justify-between bg-surface-container-default-lighter">
                    <div>
                        <h2 className="text-lg font-semibold text-text-inverse-default">Edit Execution Logs</h2>
                        <p className="text-xs text-text-inverse-subtlest mt-0.5">Customize the logs data passed to the execution component</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-text-inverse-subtle hover:text-text-inverse-default hover:bg-surface-container-raised transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 overflow-hidden flex flex-col gap-4">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleLoadDefault}
                            className="px-3 py-1.5 text-xs font-medium bg-surface-container-default-lighter text-text-inverse-subtle rounded-lg border border-stroke-soft hover:bg-surface-container-raised hover:text-text-inverse-default transition-colors"
                        >
                            Load Default
                        </button>
                        <button
                            onClick={handleFormat}
                            className="px-3 py-1.5 text-xs font-medium bg-surface-container-default-lighter text-text-inverse-subtle rounded-lg border border-stroke-soft hover:bg-surface-container-raised hover:text-text-inverse-default transition-colors"
                        >
                            Format JSON
                        </button>
                        {jsonError && (
                            <span className="text-xs text-semantic-error-surface ml-2">{jsonError}</span>
                        )}
                    </div>

                    {/* JSON Editor */}
                    <div className="flex-1 min-h-[48vh] overflow-hidden rounded-lg border border-stroke-soft">
                        <textarea
                            value={localLogs}
                            onChange={(e) => handleLogsChange(e.target.value)}
                            className="w-full h-full min-h-[46vh] p-4 bg-surface-container-sunken text-text-inverse-default font-mono text-xs resize-none focus:outline-none focus:ring-2 focus:ring-surface-interactive-brand/50"
                            placeholder="Enter JSON logs data..."
                            spellCheck={false}
                        />
                    </div>

                    {/* Help Text */}
                    <div className="text-xs text-text-inverse-subtlest bg-surface-container-default-lighter p-3 rounded-lg">
                        <strong className="text-text-inverse-subtle">Tip:</strong> The logs object should match the expected structure for your execution component. 
                        Common fields include: <code className="bg-surface-container-raised px-1 rounded">status</code>, 
                        <code className="bg-surface-container-raised px-1 rounded">goal</code>, 
                        <code className="bg-surface-container-raised px-1 rounded">agentflow</code>, 
                        <code className="bg-surface-container-raised px-1 rounded">execution_context</code>.
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-stroke-soft flex items-center justify-between bg-surface-container-default-lighter">
                    <button
                        onClick={onReset}
                        className="px-4 py-2 text-sm font-medium text-text-inverse-subtle hover:text-text-inverse-default transition-colors"
                    >
                        Reset to Default
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium bg-surface-container-default-lighter text-text-inverse-default rounded-lg border border-stroke-soft hover:bg-surface-container-raised transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleApply}
                            disabled={!!jsonError}
                            className="px-4 py-2 text-sm font-medium bg-surface-interactive-brand text-white rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Apply Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
