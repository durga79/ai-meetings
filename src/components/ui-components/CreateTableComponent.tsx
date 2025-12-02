"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CreateTableComponentProps } from "@/types";
import { Plus } from "lucide-react";

/**
 * CreateTableComponent - Template for UIKEY.CREATE_TABLE
 * 
 * Simple form to create a new database table.
 * 
 * Props received from host (via GenerativeCreateTable wrapper):
 * - projectId: The project ID where table will be created
 * - isCreating: Loading state during table creation
 * - onCreateTable: Callback to create the table
 */
export default function CreateTableComponent({
    projectId,
    isCreating,
    onCreateTable,
}: CreateTableComponentProps) {
    const [tableName, setTableName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!tableName.trim()) {
            setError("Table name is required");
            return;
        }

        try {
            await onCreateTable(tableName.trim());
            setTableName("");
        } catch (err) {
            setError("Failed to create table. Please try again.");
        }
    };

    // Error state - missing project ID
    if (!projectId) {
        return (
            <div className="flex flex-col items-center justify-center w-full px-6 py-12">
                <div className="w-full max-w-md bg-surface-container-default rounded-xl border border-stroke-default p-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-semantic-error-surface/10 flex items-center justify-center mb-4">
                            <svg
                                className="w-8 h-8 text-semantic-error-surface"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p className="text-text-inverse-default font-semibold text-lg mb-1">
                            Missing Project ID
                        </p>
                        <p className="text-text-inverse-subtle text-sm">
                            Project ID is required to create a table.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center w-full px-6 py-12">
            <div className="w-full max-w-md bg-surface-container-default rounded-xl shadow-lg">
                {/* Header */}
                <div className="px-6 py-6 border-b border-stroke-default">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-interactive-brand/10 flex items-center justify-center">
                            <Plus className="w-6 h-6 text-surface-interactive-brand" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h2 className="text-lg font-semibold text-text-inverse-default">
                                Create Table
                            </h2>
                            <p className="text-sm text-text-inverse-subtle">
                                Create a new table to organize and store your data
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="px-6 py-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-text-inverse-default">
                                Table Name
                            </label>
                            <input
                                type="text"
                                value={tableName}
                                onChange={(e) => setTableName(e.target.value)}
                                placeholder="Enter table name"
                                className="w-full px-3 py-2 rounded-md bg-input-container border border-input-stroke text-text-inverse-default placeholder:text-text-inverse-subtlest focus:outline-none focus:border-surface-interactive-brand"
                            />
                            <p className="text-xs text-text-inverse-subtlest">
                                Provide a unique name for your table
                            </p>
                            {error && (
                                <p className="text-xs text-semantic-error-surface">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-stroke-default flex justify-end gap-3">
                        <button
                            type="button"
                            disabled={isCreating}
                            onClick={() => setTableName("")}
                            className="px-6 py-2 rounded-lg font-medium text-text-inverse-default border border-stroke-default hover:bg-surface-container-default-lighter disabled:opacity-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isCreating || !tableName.trim()}
                            className="px-6 py-2 bg-surface-interactive-brand text-white rounded-lg font-medium hover:bg-surface-interactive-brand-pressed disabled:opacity-50 transition-colors"
                        >
                            {isCreating ? "Creating..." : "Create Table"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
