"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { InsertTableRowComponentProps, Columns } from "@/types";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

/**
 * InsertTableRowComponent - Template for UIKEY.INSERT_TABLE_ROW
 * 
 * Form to insert new rows into a table.
 * Supports multiple rows at once with expand/collapse functionality.
 * 
 * Props received from host (via GenerativeInsertTableRow wrapper):
 * - tableName: Name of the table
 * - tableId: ID of the table
 * - columns: Array of column definitions
 * - isLoadingTableData: Loading state for table data
 * - isTableDataError: Error state
 * - isCreatingRecords: Loading state for record creation
 * - onCreateRecords: Callback to create records
 */
export default function InsertTableRowComponent({
    tableName,
    tableId,
    columns,
    isLoadingTableData,
    isTableDataError,
    isCreatingRecords,
    onCreateRecords,
    onSubmit,
}: InsertTableRowComponentProps) {
    const [rows, setRows] = useState<Record<string, any>[]>([{}]);
    const [collapsedRows, setCollapsedRows] = useState<Record<number, boolean>>({});

    // Filter out system columns
    const editableColumns = columns.filter(
        col => col.column_id !== "_id" && 
               col.column_id !== "row_id" && 
               col.column_id !== "coworker_user_id"
    );

    const addRow = () => {
        setRows([...rows, {}]);
    };

    const removeRow = (index: number) => {
        if (rows.length > 1) {
            setRows(rows.filter((_, i) => i !== index));
        }
    };

    const updateRow = (index: number, columnId: string, value: any) => {
        const newRows = [...rows];
        newRows[index] = { ...newRows[index], [columnId]: value };
        setRows(newRows);
    };

    const toggleCollapse = (index: number) => {
        setCollapsedRows(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (onSubmit) {
            await onSubmit({ columnForm: rows });
        } else {
            await onCreateRecords({ records: rows, tableId });
        }
        
        // Reset form
        setRows([{}]);
    };

    // Loading state
    if (isLoadingTableData) {
        return (
            <div className="flex flex-col items-center w-full px-6 py-12">
                <div className="w-full max-w-6xl bg-surface-container-default rounded-xl p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/4" />
                        <div className="h-64 bg-surface-container-default-lighter rounded" />
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (isTableDataError) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-96 bg-surface-container-default rounded-xl border border-stroke-default">
                <p className="text-semantic-error-surface font-medium">
                    Failed to load table schema
                </p>
            </div>
        );
    }

    // Empty columns state
    if (editableColumns.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-96 bg-surface-container-default rounded-xl border border-stroke-default">
                <p className="text-text-inverse-default font-medium">
                    No columns available
                </p>
                <p className="text-text-inverse-subtle text-sm mt-1">
                    Please create columns before adding rows
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full px-6 py-12">
            <div className="w-full max-w-6xl bg-surface-container-default rounded-xl shadow-lg">
                {/* Header */}
                <div className="px-6 py-4 border-b border-stroke-default flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-text-inverse-default">
                            Add New Rows - {tableName}
                        </h2>
                        <p className="text-sm text-text-inverse-subtlest">
                            Add multiple rows to your table
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={addRow}
                        className="px-3 py-1.5 bg-surface-container-default-lighter text-text-inverse-default rounded-lg flex items-center gap-2 hover:bg-surface-container-raised transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add Row
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="max-h-[500px] overflow-y-auto px-6 py-6">
                        <div className="space-y-4">
                            {rows.map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="p-4 rounded-lg bg-surface-container-default-lighter border border-stroke-default"
                                >
                                    {/* Row Header */}
                                    <div className="flex items-center justify-between pb-3 border-b border-stroke-default">
                                        <h3 className="text-base font-semibold text-text-inverse-default">
                                            Row {rowIndex + 1}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                disabled={rows.length === 1}
                                                onClick={() => removeRow(rowIndex)}
                                                className="p-2 rounded-full border border-stroke-default hover:bg-surface-container-default disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <Trash2 className="w-3.5 h-3.5 text-semantic-error-surface" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => toggleCollapse(rowIndex)}
                                                className="p-2 rounded-full border border-stroke-default hover:bg-surface-container-default"
                                            >
                                                {collapsedRows[rowIndex] ? (
                                                    <ChevronDown className="w-3.5 h-3.5 text-text-inverse-subtlest" />
                                                ) : (
                                                    <ChevronUp className="w-3.5 h-3.5 text-text-inverse-subtlest" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Row Fields */}
                                    {!collapsedRows[rowIndex] && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
                                            {editableColumns.map((column) => (
                                                <div key={column.column_id}>
                                                    <label className="block text-sm font-medium text-text-inverse-default mb-1">
                                                        {column.column_name}
                                                    </label>
                                                    <FieldInput
                                                        column={column}
                                                        value={row[column.column_id] ?? ""}
                                                        onChange={(value) => updateRow(rowIndex, column.column_id, value)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-stroke-default flex justify-end">
                        <button
                            type="submit"
                            disabled={isCreatingRecords}
                            className="px-6 py-2 bg-surface-interactive-brand text-primary-foreground rounded-lg hover:bg-surface-interactive-brand-pressed disabled:opacity-50 transition-colors"
                        >
                            {isCreatingRecords ? "Saving..." : "Save Rows"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Field input component based on column type
function FieldInput({
    column,
    value,
    onChange,
}: {
    column: Columns;
    value: any;
    onChange: (value: any) => void;
}) {
    const baseClass = "w-full px-3 py-2 rounded-md bg-input-container border border-input-stroke text-text-inverse-default placeholder:text-text-inverse-subtlest focus:outline-none focus:border-surface-interactive-brand";

    switch (column.column_type.toLowerCase()) {
        case "number":
            return (
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    placeholder={`Enter ${column.column_name}`}
                    className={baseClass}
                />
            );
        case "boolean":
            return (
                <select
                    value={String(value)}
                    onChange={(e) => onChange(e.target.value === "true")}
                    className={baseClass}
                >
                    <option value="">Select...</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            );
        default:
            return (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`Enter ${column.column_name}`}
                    className={cn(baseClass, "min-h-[40px] resize-none")}
                    rows={1}
                />
            );
    }
}
