/**
 * Microfrontend Types
 * 
 * These types define the contracts between the host (coworker-web) and this microfrontend.
 * They should match the types expected by the host application.
 */

// =============================================================================
// UIKEY Enum - Maps to DEFAULT_COMPONENT_MAP in host
// =============================================================================

export enum UIKEY {
    HOME = "home",
    PROCESSFLOW_LIST = "processflows_list_page",
    SHOW_TABLE_PAGE = "tables_list_page",
    TABLE_COMPONENT = "table_component_page",
    INSERT_TABLE_ROW = "table_insert_row_page",
    CREATE_TABLE = "table_create_page",
    EXECUTION_HISTORY = "executions_history_page",
    EXECUTION_DATA = "execution_data_page",
    PROCESSFLOW_INPUT_FORM = "processflow_input_form_page",
    EXECUTION_CHAIN = "execution_chain_page",
}

// =============================================================================
// Base Microfrontend Props - Passed to all components from host
// =============================================================================

/**
 * Props passed to all microfrontend components by the host
 */
export interface MicrofrontendComponentProps {
    /** Data from the host application */
    data?: Record<string, any>;
    /** Props specific to the component */
    props?: Record<string, any>;
    /** CSS class name for styling */
    className?: string;
    /** The aiKey identifying this agent/microfrontend */
    aiKey?: string;
    /** Current UI key (which screen is being displayed) */
    uiKey?: string;
    /** Function to navigate to a different UI key */
    setUIKey?: (key: string) => void;
    /** Function to set component props */
    setProps?: (props: Record<string, any>) => void;
    /** Function to go back to previous screen */
    goBack?: () => void;
    /** Whether back navigation is available */
    canGoBack?: boolean;
    /** Function to send a message to the chat */
    handleMessageSubmit?: (message: string) => void;
}

// =============================================================================
// Execution Component Props - For ExecutionChainWrapper components
// =============================================================================

/**
 * Props for components rendered in ExecutionChainWrapper
 * These components display details of individual action executions
 */
export interface ExecutionComponentProps {
    /** Execution logs containing status, agents, context, etc. */
    logs: LogsOutput;
    /** Whether the logs are currently loading */
    isLoading: boolean;
    /** Whether the logs are being refetched */
    isFetching: boolean;
}

// =============================================================================
// Home Component Props
// =============================================================================

export interface HomeComponentProps extends MicrofrontendComponentProps {
    /** Any home-specific data */
    ui_data?: Record<string, any>;
}

// =============================================================================
// Execution History Component Props
// =============================================================================

export type ExecutionStatus =
    | "ready"
    | "paused"
    | "failed"
    | "running"
    | "scheduled"
    | "completed"
    | "cancelled"
    | "in_preview"
    | "input_required"
    | "anomaly_detected"
    | "waiting_for_human";

export interface History {
    _id: string;
    goal: string;
    projectID: string;
    created_at: number;
    agentflow_id: string;
    execution_id: string;
    agentflow_name: string;
    status: ExecutionStatus;
    schedule?: number;
}

export interface ExecutionHistoryComponentProps {
    executions: History[];
    isLoading: boolean;
    onExecutionClick: (execution: History) => void;
    className?: string;
}

// =============================================================================
// Process Flow List Component Props
// =============================================================================

export interface ProcessFlowCardProps {
    _id: string;
    image?: string;
    name: string;
    role: string;
    description: string;
}

export interface ProcessFlowListComponentProps {
    props?: {
        success?: boolean;
        data?: {
            agentflows?: ProcessFlowCardProps[];
            total_count?: number;
            page?: number;
            limit?: number;
        };
        message?: string;
    };
    className?: string;
    data?: Record<string, any>;
    onRun?: (processFlowId: string) => void;
}

// =============================================================================
// Tables List Component Props
// =============================================================================

export interface TableItem {
    _id: string;
    table_name: string;
}

export interface TablesListComponentProps {
    props?: {
        tables?: TableItem[];
        total_count?: number;
    };
    className?: string;
    data?: Record<string, any>;
    onNavigate: (tableId: string, tableName: string) => void;
    onCreateTable: () => void;
    onSearch: (searchTerm: string) => void;
}

// =============================================================================
// Table Component Props
// =============================================================================

export interface Columns {
    column_name: string;
    column_type: string;
    column_id: string;
    default_value?: any;
    array_type?: string;
    object_fields?: { key: string; keyType: string; default_value: any }[];
}

export interface Table {
    _id: string;
    projectID: string;
    table_name: string;
    connector_id: string;
    columns?: Columns[];
    last_row_id?: number;
}

export interface TableRecord {
    _id: string;
    [key: string]: any;
}

export interface RecordsResponse {
    total_count: number;
    records: TableRecord[];
    meta_data: Table;
}

export interface AddColumnData {
    column_name: string;
    column_type: string;
    column_id: string;
    array_type?: string;
    object_fields?: { key: string; keyType: string }[];
    default_value?: any;
}

export type ModalValue = "insert" | "edit" | "delete" | undefined;

export interface TableComponentProps {
    // Table metadata
    tableName: string;
    tableId: string;
    projectId?: string;
    // Data
    tableData?: RecordsResponse;
    columnData?: Table;
    visibleColumns: string[];
    totalCount: number;
    // Pagination
    currentPage: number;
    onPageChange: (page: number) => void;
    // Sorting
    sorting: { sort: number; sort_key: string };
    onSortingChange: React.Dispatch<React.SetStateAction<{ sort: number; sort_key: string }>>;
    // Selection
    selectedRows: ReadonlySet<string>;
    onSelectedRowsChange: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>;
    // Search
    searchValue: string;
    onSearchChange: (value: string) => void;
    // Modal state
    modalOpen?: ModalValue;
    onModalOpenChange: React.Dispatch<React.SetStateAction<ModalValue | undefined>>;
    // Loading states
    isLoadingTableData: boolean;
    isFetchingTableData: boolean;
    isTableDataError: boolean;
    isInitialLoading: boolean;
    isRefetchingTableData: boolean;
    isCreatingRecords: boolean;
    isAddingColumn: boolean;
    // Actions
    onAddRow: () => void;
    onCreateRow?: () => void;
    onRefetchTableData: () => void;
    onAddColumn: (data: AddColumnData[]) => Promise<any>;
    onCreateRecords: (data: { records: any; tableId: string }) => Promise<any>;
}

// =============================================================================
// Insert Table Row Component Props
// =============================================================================

export interface InsertTableRowComponentProps {
    tableName: string;
    tableId: string;
    columns: Columns[];
    isLoadingTableData: boolean;
    isTableDataError: boolean;
    isCreatingRecords: boolean;
    onCreateRecords: (data: { records: any; tableId: string }) => Promise<any>;
    onSubmit?: (data: any) => Promise<void>;
}

// =============================================================================
// Create Table Component Props
// =============================================================================

export interface CreateTableComponentProps {
    projectId: string;
    isCreating: boolean;
    onCreateTable: (tableName: string) => Promise<any>;
}

// =============================================================================
// Process Flow Input Form Component Props
// =============================================================================

export interface UIFormElements {
    id: string;
    title: string;
    required: boolean;
    description?: string;
    is_advanced_setting: boolean;
    step?: number;
    decision_id?: string;
    type: string;
    value: any;
    options?: string[];
    label?: string;
    table_id?: string;
    column_type?: string;
    time_scope?: string;
    common_param?: string;
    limit?: string;
    decisions?: { decision_id: string; title: string; description?: string }[];
}

export interface FormStep {
    label?: string;
    description?: string;
}

export interface AgentFlow {
    _id: string;
    name: string;
    role: string;
    description: string;
    image?: string;
    projectID: string;
    createdAt: string;
    isActive: boolean;
    isDeleted: boolean;
    default_goal: string;
    type: "master" | "associate";
    initialAgent?: string | null;
    goal_structure?: {
        template: string;
        form_elements: UIFormElements[];
        form_steps?: FormStep[];
    };
}

export interface ProcessFlowInputFormComponentProps {
    processFlow: AgentFlow;
    availableProcessFlows: AgentFlow[];
    isSubmitting?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    onExecute: (data: { goal: string; input_variables: Record<string, any> }) => void;
}

// =============================================================================
// Execution Data Component Props
// =============================================================================

export interface Agent {
    _id: string;
    title: string;
    role: string;
    llm: {
        model: string;
        max_tokens: number;
        temperature: number;
    };
    role_description: string;
    agent_type: "skilled_agent" | "decider_agent";
    next_agent?: string | null;
    decisions?: string[];
    next_agents?: Record<string, string | null | undefined>;
}

export interface AgentExecutionContext {
    stage: string;
    agent_title: string;
    llm_output: {
        skill: {
            skill_name: string;
            input: Record<string, any>;
        } | null;
        thoughts: {
            plan: string | null;
            text: string | null;
            speak: string | null;
            reasoning: string | null;
            criticism: string | null;
        } | null;
    } | null;
    error: string | null;
    price: number | null;
    status: string;
    decision: string | null;
    started_at: number | null;
    input_data?: Record<string, any>;
    output_data?: Record<string, any>;
    knowledge_base?: {
        question: string;
        answer: string;
    };
}

export interface LogsOutput {
    status: string;
    goal: string;
    created_at: number;
    agentflow?: {
        name: string;
        image: string;
        agents: Agent[];
        agentflow_id: string;
        initialAgent?: string | null;
        unique_id?: string;
        ui_card?: string;
    };
    execution_context?: Record<string, AgentExecutionContext>;
}

export interface ExecutionDataComponentProps {
    logs?: LogsOutput;
    coworker?: AgentFlow;
    loadingCoworker?: boolean;
}
