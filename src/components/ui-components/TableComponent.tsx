"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TableComponentProps } from "@/types";
import { Plus, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * TableComponent - Template for UIKEY.TABLE_COMPONENT
 * 
 * Displays a single table with data grid, pagination, sorting, and CRUD operations.
 * This is a complex component with many props for full table management.
 * 
 * Props received from host (via GenerativeTableComponent wrapper):
 * - tableName, tableId, projectId: Table identification
 * - tableData: RecordsResponse with records and metadata
 * - columnData: Table schema with columns
 * - Pagination: currentPage, onPageChange, totalCount
 * - Sorting: sorting, onSortingChange
 * - Selection: selectedRows, onSelectedRowsChange
 * - Search: searchValue, onSearchChange
 * - Modal: modalOpen, onModalOpenChange
 * - Loading states: isLoadingTableData, isFetchingTableData, etc.
 * - Actions: onAddRow, onCreateRow, onRefetchTableData, onAddColumn, onCreateRecords
 */
export default function TableComponent({
    tableName,
    tableId,
    projectId,
    tableData,
    columnData,
    visibleColumns,
    totalCount,
    currentPage,
    onPageChange,
    sorting,
    onSortingChange,
    selectedRows,
    onSelectedRowsChange,
    searchValue,
    onSearchChange,
    modalOpen,
    onModalOpenChange,
    isLoadingTableData,
    isFetchingTableData,
    isTableDataError,
    isInitialLoading,
    isRefetchingTableData,
    isCreatingRecords,
    isAddingColumn,
    onAddRow,
    onCreateRow,
    onRefetchTableData,
    onAddColumn,
    onCreateRecords,
}: TableComponentProps) {
    const records = tableData?.records ?? [];
    const columns = columnData?.columns ?? [];
    const displayColumns = columns.filter(col => 
        col.column_id !== "_id" && 
        col.column_id !== "row_id" && 
        col.column_id !== "coworker_user_id"
    );

    // Loading state
    if (isLoadingTableData || isInitialLoading) {
        return (
            <div className="flex flex-col p-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                    <div className="h-64 bg-surface-container-default-lighter rounded" />
                </div>
            </div>
        );
    }

    // Error state
    if (isTableDataError) {
        return (
            <div className="flex flex-col items-center justify-center p-8">
                <p className="text-semantic-error-surface font-medium">
                    Failed to load table data
                </p>
                <button
                    onClick={onRefetchTableData}
                    className="mt-4 px-4 py-2 bg-surface-interactive-brand text-primary-foreground rounded-lg"
                >
                    Retry
                </button>
            </div>
        );
    }

    // Empty columns state
    if (displayColumns.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8">
                <p className="text-text-inverse-default font-medium">No columns defined</p>
                <p className="text-text-inverse-subtle text-sm mt-1">
                    Add columns to start using this table
                </p>
                <button
                    onClick={() => onAddColumn([{
                        column_name: "New Column",
                        column_type: "String",
                        column_id: `col_${Date.now()}`,
                    }])}
                    disabled={isAddingColumn}
                    className="mt-4 px-4 py-2 bg-surface-interactive-brand text-primary-foreground rounded-lg disabled:opacity-50"
                >
                    {isAddingColumn ? "Adding..." : "Add Column"}
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-text-inverse-default">
                    {tableName}
                </h1>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onRefetchTableData}
                        disabled={isFetchingTableData}
                        className="p-2 rounded-lg border border-stroke-default hover:bg-surface-container-default-lighter disabled:opacity-50"
                    >
                        <RefreshCw className={cn("w-4 h-4 text-text-inverse-subtle", isFetchingTableData && "animate-spin")} />
                    </button>
                </div>
            </div>

            {/* Data Grid */}
            <div className="overflow-x-auto border border-stroke-default rounded-lg">
                <table className="w-full">
                    <thead className="bg-surface-container-default-lighter">
                        <tr>
                            {displayColumns.map((column) => (
                                <th
                                    key={column.column_id}
                                    className="px-4 py-3 text-left text-xs font-medium text-text-inverse-subtlest uppercase tracking-wider cursor-pointer hover:bg-surface-container-raised"
                                    onClick={() => {
                                        onSortingChange({
                                            sort_key: column.column_id,
                                            sort: sorting.sort_key === column.column_id ? -sorting.sort : 1,
                                        });
                                    }}
                                >
                                    <div className="flex items-center gap-1">
                                        {column.column_name}
                                        {sorting.sort_key === column.column_id && (
                                            <span className="text-surface-interactive-brand">
                                                {sorting.sort === 1 ? "↑" : "↓"}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stroke-default">
                        {records.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={displayColumns.length}
                                    className="px-4 py-12 text-center text-text-inverse-subtle"
                                >
                                    No records found
                                </td>
                            </tr>
                        ) : (
                            records.map((record) => (
                                <tr
                                    key={record._id}
                                    className={cn(
                                        "hover:bg-surface-container-default-lighter",
                                        selectedRows.has(record._id) && "bg-surface-interactive-brand/10"
                                    )}
                                    onClick={() => {
                                        const newSelected = new Set(selectedRows);
                                        if (newSelected.has(record._id)) {
                                            newSelected.delete(record._id);
                                        } else {
                                            newSelected.add(record._id);
                                        }
                                        onSelectedRowsChange(newSelected);
                                    }}
                                >
                                    {displayColumns.map((column) => (
                                        <td
                                            key={`${record._id}-${column.column_id}`}
                                            className="px-4 py-3 text-sm text-text-inverse-default"
                                        >
                                            {formatCellValue(record[column.column_id])}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onCreateRow || onAddRow}
                        className="px-4 py-2 bg-surface-interactive-brand text-primary-foreground rounded-lg flex items-center gap-2 hover:bg-surface-interactive-brand-pressed"
                    >
                        <Plus className="w-4 h-4" />
                        Add Row
                    </button>
                    {totalCount > 0 && (
                        <p className="text-sm text-text-inverse-subtle">
                            {selectedRows.size > 0
                                ? `${selectedRows.size} row(s) selected`
                                : `${totalCount} total rows`}
                        </p>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className="p-2 rounded border border-stroke-default disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-container-default-lighter"
                    >
                        <ChevronLeft className="w-4 h-4 text-text-inverse-subtle" />
                    </button>
                    <span className="text-sm text-text-inverse-subtle px-2">
                        Page {currentPage}
                    </span>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={records.length < 50}
                        className="p-2 rounded border border-stroke-default disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-container-default-lighter"
                    >
                        <ChevronRight className="w-4 h-4 text-text-inverse-subtle" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// Helper to format cell values
function formatCellValue(value: any): string {
    if (value === null || value === undefined) return "-";
    if (typeof value === "object") return JSON.stringify(value);
    if (typeof value === "boolean") return value ? "Yes" : "No";
    return String(value);
}
