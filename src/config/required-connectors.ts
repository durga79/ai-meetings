/**
 * Required Connectors Configuration
 * 
 * This file defines the required and optional connectors for the agent.
 * Used by both WelcomePageComponent and ConfigurationComponent.
 * 
 * Modify this file to customize which connectors your agent requires.
 */

import { ConfigurationItem } from "@/types";

/**
 * Required connectors that must be configured before the agent can be used.
 * The wrapper will auto-redirect to Home when all required connectors are configured.
 */
export const REQUIRED_CONNECTORS: ConfigurationItem[] = [
    {
        category: "linkedin",
        // name, description, logo will be fetched from API
    },
    {
        category: "apollo",
        // name, description, logo will be fetched from API
    },
];

/**
 * Optional connectors that enhance the agent but are not required.
 */
export const OPTIONAL_CONNECTORS: ConfigurationItem[] = [
    // Add optional connectors here
    // {
    //     category: "slack",
    // },
];

/**
 * Get all required connector categories as lowercase strings.
 * Used for checking if all required connectors are configured.
 */
export function getRequiredCategories(): string[] {
    return REQUIRED_CONNECTORS.map(item => item.category.toLowerCase());
}

/**
 * Check if all required connectors are configured.
 * @param configuredCategories - Set of configured category names (lowercase)
 * @returns true if all required connectors are configured
 */
export function areAllRequiredConnectorsConfigured(
    configuredCategories: Set<string> | undefined
): boolean {
    if (!configuredCategories || configuredCategories.size === 0) {
        return REQUIRED_CONNECTORS.length === 0;
    }
    
    return REQUIRED_CONNECTORS.every(item => 
        configuredCategories.has(item.category.toLowerCase())
    );
}
