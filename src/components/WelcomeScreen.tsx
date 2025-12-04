"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { UIKEY } from "@/types";

interface WelcomeScreenProps {
    className?: string;
}

/**
 * WelcomeScreen Component
 * 
 * Displays a welcome message when the chat is empty
 * Shows the Coworker Studio logo and a friendly greeting
 */
export default function WelcomeScreen({ className }: WelcomeScreenProps) {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center h-full w-full px-6 py-12",
            className
        )}>
            <div className="flex flex-col items-center space-y-6 max-w-md text-center">
                {/* Logo */}
                <div className="animate-fade-in">
                    <Logo size="xl" showText={false} />
                </div>

                {/* Welcome Text */}
                <div className="space-y-3 animate-fade-in animation-delay-100">
                    <h1 className="text-3xl font-bold text-text-inverse-default tracking-tight">
                        Welcome to Coworker Studio
                    </h1>
                    <p className="text-base text-text-inverse-subtle leading-relaxed">
                        Create UI components for your coworkers
                    </p>
                </div>
            </div>
        </div>
    );
}
