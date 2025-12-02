"use client";

import React, { useState, ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { TablesListComponentProps, TableItem } from "@/types";
import { Table, Plus, Search, ExternalLink } from "lucide-react";

/**
 * TablesListComponent - Template for UIKEY.SHOW_TABLE_PAGE
 * 
 * Displays a list of database tables with search and create functionality.
 * 
 * Props received from host (via GenerativeTableList wrapper):
 * - props.tables: Array of TableItem objects
 * - props.total_count: Total number of tables
 * - onNavigate: Callback when user clicks a table
 * - onCreateTable: Callback when user clicks create table
 * - onSearch: Callback when user searches
 */
export default function TablesListComponent({
    props,
    data,
    className,
    onNavigate,
    onCreateTable,
    onSearch,
}: TablesListComponentProps) {
    const tables = props?.tables ?? [];
    const [search, setSearch] = useState("");

    const isLoading = !props || !props?.tables;
    const isEmpty = tables.length === 0;

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.trimStart();
        setSearch(searchTerm);
        onSearch(searchTerm);
    };

    // Loading state
    if (isLoading) {
        return (
            <div className={cn("flex flex-col min-h-0 items-center w-full px-6 py-12", className)}>
                <div className="w-full max-w-4xl bg-surface-container-default rounded-lg p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                        <div className="h-4 bg-surface-container-default-lighter rounded w-1/3" />
                        <div className="h-10 bg-surface-container-default-lighter rounded w-full mt-4" />
                        <div className="space-y-3 mt-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-14 bg-surface-container-default-lighter rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col min-h-0 items-center w-full px-6 py-12", className)}>
            <div className="w-full max-w-4xl bg-surface-container-default rounded-lg shadow-lg">
                {/* Header */}
                <div className="p-6 border-b border-stroke-default">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-text-inverse-default">
                                Tables
                            </h2>
                            <p className="text-sm text-text-inverse-subtle mt-1">
                                View and manage your database tables
                            </p>
                        </div>
                        {(tables.length > 0 || search) && (
                            <button
                                onClick={onCreateTable}
                                className="px-4 py-2 bg-surface-interactive-brand text-white rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                New Table
                            </button>
                        )}
                    </div>

                    {/* Search Bar */}
                    {(tables.length > 0 || search) && (
                        <div className="mt-4 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-inverse-subtlest" />
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                placeholder="Search tables..."
                                className="w-full pl-10 pr-4 h-10 rounded-lg border border-stroke-default bg-input-container text-text-inverse-default placeholder:text-text-inverse-subtlest focus:outline-none focus:border-surface-interactive-brand"
                            />
                        </div>
                    )}
                </div>

                {/* Content */}
                {isEmpty ? (
                    <div className="h-96 flex flex-col items-center justify-center">
                        <Table className="w-12 h-12 text-text-inverse-subtlest mb-4" />
                        <p className="text-text-inverse-default font-medium">
                            No tables found
                        </p>
                        <p className="text-text-inverse-subtle text-sm mt-1">
                            {search ? "Try adjusting your search terms" : "Create your first table to get started"}
                        </p>
                        {!search && (
                            <button
                                onClick={onCreateTable}
                                className="mt-4 px-4 py-2 bg-surface-interactive-brand text-white rounded-lg hover:bg-surface-interactive-brand-pressed transition-colors"
                            >
                                Create Table
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="max-h-96 overflow-y-auto">
                        {/* Table Header */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-stroke-default">
                            <span className="text-xs text-text-inverse-subtlest uppercase tracking-wide flex-1">
                                Name
                            </span>
                            <span className="text-xs text-text-inverse-subtlest uppercase tracking-wide w-24 text-right">
                                Actions
                            </span>
                        </div>
                        
                        {/* Table Items */}
                        <div className="p-4 space-y-2">
                            {tables.map((table) => (
                                <TableListItem
                                    key={table._id}
                                    table={table}
                                    onClick={() => onNavigate(table._id, table.table_name)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Sub-component for each table item
function TableListItem({
    table,
    onClick,
}: {
    table: TableItem;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-4 bg-surface-container-default-lighter rounded-lg border border-stroke-default hover:border-surface-interactive-brand transition-colors text-left"
        >
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-surface-interactive-brand/10 flex items-center justify-center">
                    <Table className="w-4 h-4 text-surface-interactive-brand" />
                </div>
                <span className="text-sm font-medium text-text-inverse-default">
                    {table.table_name}
                </span>
            </div>
            <ExternalLink className="w-4 h-4 text-text-inverse-subtlest" />
        </button>
    );
}
