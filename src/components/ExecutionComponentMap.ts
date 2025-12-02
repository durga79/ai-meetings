/**
 * Execution Component Map
 * 
 * This file maps ACTION_UNIQUE_ID values to custom components.
 * These components are rendered inside ExecutionChainWrapper when
 * a specific action is executed.
 * 
 * The host loads this via the `executionComponentMapPath` in the registry:
 * ```typescript
 * "my-agent": {
 *     // ...
 *     executionComponentMapPath: "./ExecutionComponentMap",
 * }
 * ```
 * 
 * Then in your microfrontend's next.config.js, expose it:
 * ```javascript
 * exposes: {
 *     "./ExecutionComponentMap": "./src/components/ExecutionComponentMap",
 * }
 * ```
 * 
 * How it works:
 * 1. When a workflow runs, each step has an `agentflow.unique_id`
 * 2. The host's ExecutionChainWrapper checks this map for a matching component
 * 3. If found, it renders your custom component
 * 4. If not found, it shows a default "No component found" message
 * 
 * Props passed to components:
 * - logs: LogsOutput - execution logs with status, agents, context
 * - isLoading: boolean - whether logs are being loaded
 * - isFetching: boolean - whether logs are being refetched
 */

// Import execution components
import SampleActionComponent from "./execution-components/SampleActionComponent";
import DataProcessingActionComponent from "./execution-components/DataProcessingActionComponent";
import LinkedinPostRetriever from "./execution-components/LinkedinPostRetriever";

/**
 * EXECUTION_COMPONENT_MAP
 * 
 * Maps ACTION_UNIQUE_ID to custom components.
 * 
 * The key is the `unique_id` of the agentflow/action.
 * You can find this in:
 * - The agentflow definition
 * - logs.agentflow.unique_id in execution logs
 * 
 * Example unique_ids:
 * - "sample_action_v1"
 * - "data_processing_action"
 * - "email_sender_action"
 * - "slack_notification_action"
 */
export const EXECUTION_COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
    "12c2bbz": LinkedinPostRetriever    ,
    
    
    // Add your custom action components here:
    // "your_action_unique_id": YourActionComponent,
    // "another_action_id": AnotherActionComponent,
    
    // You can also use patterns for similar actions:
    // "email_action_v1": EmailActionComponent,
    // "email_action_v2": EmailActionComponent, // Same component, different version
};

export default EXECUTION_COMPONENT_MAP;
