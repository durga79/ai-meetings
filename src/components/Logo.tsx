"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    showText?: boolean;
}

const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
};

const textSizeMap = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-2xl",
};

/**
 * Logo Component for Coworker Studio
 * 
 * Displays the Coworker Studio logo with optional text
 * 
 * @param size - Size variant: sm, md, lg, xl
 * @param className - Additional CSS classes
 * @param showText - Whether to show "Coworker Studio" text next to logo
 */
export default function Logo({ size = "md", className, showText = false }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className={cn(
                "rounded-xl bg-gradient-to-br from-brand-purple-600 to-accent-pink-600 flex items-center justify-center shadow-md shadow-brand-purple-950/40 flex-shrink-0",
                sizeMap[size]
            )}>
                <img 
                    src="/coworker-studio-logo.png" 
                    alt="Coworker Studio Logo" 
                    className="w-full h-full object-contain p-1.5"
                />
            </div>
            {showText && (
                <span className={cn(
                    "font-bold bg-gradient-to-r from-brand-purple-600 to-accent-pink-600 bg-clip-text text-transparent",
                    textSizeMap[size]
                )}>
                    Coworker Studio
                </span>
            )}
        </div>
    );
}
