"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ConfigurationPageComponentProps, ConfigurationItem, UIKEY } from "@/types";
import { ExternalLink, Linkedin } from "lucide-react";

const getDefaultIcon = (category: string): string => {
    const iconMap: Record<string, string> = {
        linkedin: "📊",
        apollo: "🚀",
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

    const requiredItems = props?.requiredItems || [{ category: "linkedin" }];
    const optionalItems = props?.optionalItems || [{ category: "apollo" }];

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

    const handleNext = () => {
        // Mark configuration as completed for HomeComponent
        setProps?.({
            ...(props || {}),
            hasCompletedConfiguration: true,
        });
        // Navigate back to Home where capabilities are shown
        setUIKey?.(UIKEY.HOME);
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-6 py-8",
                className
            )}
        >
            <div className="w-full rounded-3xl border-2 border-surface-interactive-brand/40 bg-surface-container-default shadow-sm">
                <div className="border-b border-stroke-default px-6 py-5 flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-surface-interactive-brand text-surface-inverse shadow-sm">
                        <span className="text-lg">⚙️</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-base font-semibold text-text-inverse-default truncate">
                                {title}
                            </h2>
                            <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-accent-lime-50 text-accent-lime-600 border border-accent-lime-400">
                                Active
                            </span>
                        </div>
                        <p className="text-xs text-text-inverse-subtlest mt-0.5 truncate">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="px-6 py-5 space-y-6">
                    {requiredItems.length > 0 && (
                        <div>
                            <p className="text-xs font-semibold text-semantic-error-text bg-semantic-error-surface/10 inline-flex px-2 py-0.5 rounded-full mb-3">
                                Required
                            </p>
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
                            <p className="text-xs font-semibold text-text-inverse-subtle inline-flex px-2 py-0.5 rounded-full bg-surface-container-default-lighter mb-3">
                                Optional
                            </p>
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
                </div>

                {/* Next button to proceed to main capabilities page */}
                <div className="px-6 pb-5 pt-1 flex justify-end">
                    <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-surface-interactive-brand text-surface-inverse text-sm font-medium shadow-sm hover:opacity-90 transition"
                    >
                        Next
                    </button>
                </div>
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
    // Priority: explicit icon > logo > LinkedIn icon (for linkedin) > default emoji
    const icon =
        item.icon ? (
            item.icon
        ) : item.logo ? (
            <img
                src={item.logo}
                alt={item.name || item.category}
                className="w-5 h-5 object-contain"
            />
        ) : item.category.toLowerCase() === "linkedin" ? (
            <Linkedin className="w-5 h-5 text-[#0A66C2]" />
        ) : (
            <span className="text-base">{getDefaultIcon(item.category)}</span>
        );

    // Use item values (already enriched by getEnrichedItem)
    const displayName = item.name || item.category;
    const displayDescription = item.description || `Connect ${item.category}`;

    return (
        <div
            className={cn(
                "flex items-center gap-4 p-4 rounded-2xl border bg-surface-container-default shadow-sm",
                isConfigured
                    ? "border-accent-lime-400/60"
                    : "border-stroke-soft hover:border-stroke-subtle transition-colors"
            )}
        >
            {/* Icon */}
            <div
                className={cn(
                    "flex items-center justify-center w-11 h-11 rounded-2xl bg-surface-container-default-lighter",
                    isConfigured && "bg-accent-lime-50"
                )}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-text-inverse-default truncate">
                        {displayName}
                    </h3>
                    {isConfigured && (
                        <span className="px-1.5 py-0 text-[10px] font-medium bg-accent-lime-50 text-accent-lime-600 border border-accent-lime-400 rounded">
                            Connected
                        </span>
                    )}
                </div>
                <p className="text-xs text-text-inverse-subtle mt-0.5 truncate">
                    {displayDescription}
                </p>
            </div>

            {/* Connect/Connected Button */}
            {isConfigured ? (
                <button
                    type="button"
                    onClick={() => onConnect(item.category)}
                    className="px-4 py-1.5 rounded-lg text-xs font-medium bg-surface-container-default-lighter border border-stroke-soft text-text-inverse-subtle hover:border-stroke-subtle hover:text-text-inverse-default transition-colors"
                >
                    Manage
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => onConnect(item.category)}
                    className={cn(
                        "px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1",
                        isRequired
                            ? "bg-black text-white hover:bg-neutral-900"
                            : "border border-stroke-soft text-text-inverse-subtle bg-surface-container-default hover:border-stroke-subtle hover:text-text-inverse-default"
                    )}
                >
                    <span>Connect</span>
                    {isRequired && <ExternalLink className="w-3.5 h-3.5" />}
                </button>
            )}
        </div>
    );
}