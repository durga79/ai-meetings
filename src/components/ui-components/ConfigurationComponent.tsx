"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ConfigurationPageComponentProps, ConfigurationItem, UIKEY } from "@/types";
import { REQUIRED_CONNECTORS, OPTIONAL_CONNECTORS } from "@/config/required-connectors";
import { ChevronRight } from "lucide-react";

const getDefaultIcon = (category: string): string => {
    const iconMap: Record<string, string> = {
        mail: "📧",
        recall_ai: "🤖",
    };
    return iconMap[category.toLowerCase()] || "⚙️";
};

export default function ConfigurationPageComponent({
    props,
    className,
    openConnectorConfiguration,
    configuredCategories,
    connectorMetadataMap,
    setUIKey,
    setProps,
}: ConfigurationPageComponentProps) {
    const title = props?.title || "Complete Setup";
    const subtitle = props?.subtitle || "Connect required services to continue";

    // Use props if provided, otherwise use shared config
    const requiredItems = props?.requiredItems || REQUIRED_CONNECTORS;
    const optionalItems = props?.optionalItems || OPTIONAL_CONNECTORS;

    // Check if all required connectors are configured
    const allRequiredConfigured = requiredItems.length > 0 && requiredItems.every(
        (item) => configuredCategories?.has(item.category.toLowerCase()) ?? false
    );

    const getEnrichedItem = (item: ConfigurationItem): ConfigurationItem => {
        const metadata = connectorMetadataMap?.get(item.category.toLowerCase());
        if (!metadata) return item;
        return {
            ...item,
            name: item.name || metadata.name,
            description: item.description || metadata.description,
            logo: item.logo || metadata.logo,
        };
    };

    const isConfigured = (category: string): boolean => {
        return configuredCategories?.has(category.toLowerCase()) ?? false;
    };

    const handleConnect = (category: string) => {
        openConnectorConfiguration?.(category);
    };

    return (
        <div className={cn("flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-8", className)}>
            <div className="w-full p-6 bg-surface-container-default rounded-xl border border-stroke-default">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100">
                        <span className="text-lg">⚙️</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold text-text-inverse-default">{title}</h2>
                            <span className="px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded">
                                Active
                            </span>
                        </div>
                        <p className="text-sm text-text-inverse-subtlest mt-0.5">{subtitle}</p>
                    </div>
                </div>

                {requiredItems.length > 0 && (
                    <div className="mb-6">
                        <p className="text-xs font-medium text-red-500 uppercase tracking-wide mb-3">Required</p>
                        <div className="space-y-3">
                            {requiredItems.map((item) => (
                                <ConfigurationItemCard
                                    key={item.category}
                                    item={getEnrichedItem(item)}
                                    onConnect={handleConnect}
                                    isRequired={true}
                                    isConfigured={isConfigured(item.category)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {optionalItems.length > 0 && (
                    <div>
                        <p className="text-xs font-medium text-text-inverse-subtlest uppercase tracking-wide mb-3">Optional</p>
                        <div className="space-y-3">
                            {optionalItems.map((item) => (
                                <ConfigurationItemCard
                                    key={item.category}
                                    item={getEnrichedItem(item)}
                                    onConnect={handleConnect}
                                    isRequired={false}
                                    isConfigured={isConfigured(item.category)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Next Button - appears when all required connectors are configured */}
                {allRequiredConfigured && (
                    <div className="mt-6 pt-4 border-t border-stroke-default flex justify-end">
                        <button
                            type="button"
                            onClick={() => {
                                // Set props to indicate configuration is complete
                                setProps?.({ hasCompletedConfiguration: true });
                                setUIKey?.(UIKEY.HOME);
                            }}
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-surface-interactive-brand text-surface-inverse text-sm font-medium shadow-sm hover:opacity-90 transition"
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * Individual configuration item card
 */
interface ConfigurationItemCardProps {
    item: ConfigurationItem;
    onConnect: (category: string) => void;
    isRequired: boolean;
    isConfigured?: boolean;
}

function ConfigurationItemCard({ item, onConnect, isRequired, isConfigured }: ConfigurationItemCardProps) {
    // Priority: icon > logo > default icon
    const icon = item.icon || (item.logo ? (
        <img src={item.logo} alt={item.name || item.category} className="w-5 h-5 object-contain" />
    ) : (
        <span className="text-base">{getDefaultIcon(item.category)}</span>
    ));

    // Use item values (already enriched by getEnrichedItem)
    const displayName = item.name || item.category;
    const displayDescription = item.description || `Connect ${item.category}`;

    return (
        <div className={cn(
            "flex items-center gap-4 p-4 rounded-xl border transition-all duration-200",
            isConfigured
                ? "bg-green-50/50 border-green-200"
                : isRequired
                    ? "bg-blue-50/50 border-blue-100 hover:border-blue-200"
                    : "bg-surface-container-default-lighter border-stroke-default hover:border-stroke-soft"
        )}>
            {/* Icon */}
            <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg",
                isConfigured
                    ? "bg-white"
                    : isRequired ? "bg-white" : "bg-surface-container-default"
            )}>
                {icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-text-inverse-default">
                        {displayName}
                    </h3>
                    {isConfigured && (
                        <span className="px-1.5 py-0 text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 rounded">
                            Connected
                        </span>
                    )}
                </div>
                <p className="text-xs text-text-inverse-subtlest mt-0.5 truncate">
                    {displayDescription}
                </p>
            </div>

            {/* Connect/Connected Button */}
            {isConfigured ? (
                <button
                    type="button"
                    onClick={() => onConnect(item.category)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 transition-colors"
                >
                    ✓ Connected
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => onConnect(item.category)}
                    className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                        isRequired
                            ? "bg-blue-600 hover:bg-blue-700 text-white px-4"
                            : "border border-stroke-soft hover:border-stroke-default text-text-inverse-subtle hover:text-text-inverse-default"
                    )}
                >
                    Connect{isRequired && " →"}
                </button>
            )}
        </div>
    );
}