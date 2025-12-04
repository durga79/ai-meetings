"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export type ThemeToggleProps = {
    className?: string;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const effectiveTheme = mounted ? theme : "light";

    const handleToggle = React.useCallback(() => {
        const nextTheme = effectiveTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    }, [effectiveTheme, setTheme]);

    return (
        <button
            type="button"
            onClick={handleToggle}
            className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-stroke-soft bg-surface-container-default text-text-inverse-default hover:bg-surface-container-default-lighter transition-colors",
                className,
            )}
            aria-label="Toggle theme"
        >
            {effectiveTheme === "dark" ? (
                <Moon className="h-4 w-4" />
            ) : (
                <Sun className="h-4 w-4" />
            )}
        </button>
    );
};

export default ThemeToggle;
