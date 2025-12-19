/**
 * UI Component Map
 * 
 * This file maps UIKEY values to custom components.
 * These components override the DEFAULT_COMPONENT_MAP in the host application.
 * 
 * The host loads this via the `uiComponentMapPath` in the registry:
 * ```typescript
 * "my-agent": {
 *     // ...
 *     uiComponentMapPath: "./UIComponentMap",
 * }
 * ```
 * 
 * Then in your microfrontend's next.config.js, expose it:
 * ```javascript
 * exposes: {
 *     "./UIComponentMap": "./src/components/UIComponentMap",
 * }
 * ```
 * 
 * Available UIKEY values:
 * - "home" - Home/landing page
 * - "executions_history_page" - List of past executions
 * - "processflows_list_page" - List of process flows
 * - "table_component_page" - Single table view with data grid
 * - "tables_list_page" - List of all tables
 * - "table_insert_row_page" - Form to insert new rows
 * - "table_create_page" - Form to create new table
 * - "processflow_input_form_page" - Form to run a process flow
 * - "execution_data_page" - Detailed execution view
 */

import { UIKEY } from "@/types";
import { REQUIRED_CONNECTORS, OPTIONAL_CONNECTORS } from "@/config/required-connectors";

// Import all UI components
import HomeComponent from "./ui-components/HomeComponent";
import ProcessFlowListComponent from "./ui-components/ProcessFlowListComponent";
import TablesListComponent from "./ui-components/TablesListComponent";
import TableComponent from "./ui-components/TableComponent";
import InsertTableRowComponent from "./ui-components/InsertTableRowComponent";
import CreateTableComponent from "./ui-components/CreateTableComponent";
import ProcessFlowInputFormComponent from "./ui-components/ProcessFlowInputFormComponent";
import ExecutionDataComponent from "./ui-components/ExecutionDataComponent";
import ConfigurationComponent from "./ui-components/ConfigurationComponent";
import WelcomePageComponent from "./ui-components/WelcomePageComponent";
import { ExecutionHistoryComponent, } from "./ui-components";

/**
 * UI_COMPONENT_MAP
 * 
 * Maps UIKEY to custom components.
 * Only include UIKEYs that you want to override.
 * If a UIKEY is not in this map, the host will use the default component.
 * 
 * Comment out or remove any components you don't need to override.
 */
export const UI_COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
    // Home page - customize your agent's landing page
    [UIKEY.HOME]: HomeComponent,
    
    // Execution history - list of past workflow runs
    [UIKEY.EXECUTION_HISTORY]: ExecutionHistoryComponent,
    
    // Process flow list - browse available workflows
    [UIKEY.PROCESSFLOW_LIST]: ProcessFlowListComponent,
    
    // Table component - view and edit table data
    [UIKEY.TABLE_COMPONENT]: TableComponent,
    
    // Tables list - browse all tables
    [UIKEY.SHOW_TABLE_PAGE]: TablesListComponent,
    
    // Insert table row - form to add new rows
    [UIKEY.INSERT_TABLE_ROW]: InsertTableRowComponent,
    
    // Create table - form to create new table
    [UIKEY.CREATE_TABLE]: CreateTableComponent,
    
    // Process flow input form - configure and run workflow
    [UIKEY.PROCESSFLOW_INPUT_FORM]: ProcessFlowInputFormComponent,
    
    // Execution data - detailed view of a single execution
    [UIKEY.EXECUTION_DATA]: ExecutionDataComponent,

    // Configuration page - agent configuration
    [UIKEY.CONFIGURATION_PAGE]: ConfigurationComponent,

    // Welcome page - onboarding/getting started
    [UIKEY.WELCOME_PAGE]: WelcomePageComponent,
};

/**
 * AGENT_CONFIG
 * 
 * Configuration for the agent including required connectors.
 * This is loaded by the host wrapper to determine:
 * - Which connectors are required before the agent can be used
 * - Whether to auto-redirect from Welcome to Home when all are configured
 */
export const AGENT_CONFIG = {
    requiredConnectors: REQUIRED_CONNECTORS,
    optionalConnectors: OPTIONAL_CONNECTORS,
};

export default UI_COMPONENT_MAP;
