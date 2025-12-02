"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ProcessFlowInputFormComponentProps, UIFormElements } from "@/types";
import { Play } from "lucide-react";

/**
 * ProcessFlowInputFormComponent - Template for UIKEY.PROCESSFLOW_INPUT_FORM
 * 
 * Form to configure and execute a process flow.
 * Handles dynamic form elements based on the process flow's goal_structure.
 * 
 * Props received from host (via GenerativeProcessFlowInputForm wrapper):
 * - processFlow: The AgentFlow object with form structure
 * - availableProcessFlows: Other available process flows
 * - isSubmitting: Loading state during execution
 * - isLoading: Loading state for form data
 * - isError: Error state
 * - onExecute: Callback to execute the process flow
 */
export default function ProcessFlowInputFormComponent({
    processFlow,
    availableProcessFlows,
    isSubmitting = false,
    isLoading = false,
    isError = false,
    onExecute,
}: ProcessFlowInputFormComponentProps) {
    const [goal, setGoal] = useState(processFlow?.default_goal || "");
    const [formValues, setFormValues] = useState<Record<string, any>>({});

    const formElements = processFlow?.goal_structure?.form_elements || [];
    const hasFormElements = formElements.length > 0;

    const updateFormValue = (id: string, value: any) => {
        setFormValues(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        onExecute({
            goal: hasFormElements ? buildGoalFromForm() : goal,
            input_variables: formValues,
        });
    };

    const buildGoalFromForm = (): string => {
        // Build goal from template and form values
        let goalText = processFlow?.goal_structure?.template || "";
        Object.entries(formValues).forEach(([key, value]) => {
            goalText = goalText.replace(`{${key}}`, String(value));
        });
        return goalText || goal;
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full p-6">
                <div className="w-full max-w-2xl bg-surface-container-default rounded-xl p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-surface-container-default-lighter rounded w-1/2" />
                        <div className="h-4 bg-surface-container-default-lighter rounded w-1/3" />
                        <div className="h-64 bg-surface-container-default-lighter rounded mt-6" />
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <div className="flex items-center justify-center h-full p-6">
                <div className="w-full max-w-2xl bg-surface-container-default rounded-xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-semantic-error-surface/10 flex items-center justify-center mb-4">
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
                        Failed to load process flow
                    </p>
                    <p className="text-text-inverse-subtle text-sm">
                        There was an error loading the process flow data.
                    </p>
                </div>
            </div>
        );
    }

    // Not found state
    if (!processFlow?.name) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <p className="text-text-inverse-subtle">Process flow not found</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-full p-6">
            <div className="w-full max-w-2xl bg-surface-container-default rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-stroke-default">
                        <h2 className="text-xl font-semibold text-text-inverse-default">
                            {processFlow.name}
                        </h2>
                        <p className="text-sm text-text-inverse-subtlest">
                            {processFlow.role}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 py-6 overflow-y-auto max-h-[calc(100vh-280px)]">
                        {hasFormElements ? (
                            <div className="space-y-4">
                                {formElements.map((element) => (
                                    <FormField
                                        key={element.id}
                                        element={element}
                                        value={formValues[element.id]}
                                        onChange={(value) => updateFormValue(element.id, value)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-inverse-subtlest">
                                    Goal
                                </label>
                                <textarea
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    placeholder="Describe what you want to achieve..."
                                    className="w-full min-h-[300px] px-3 py-2 bg-input-container rounded-md border border-input-stroke text-text-inverse-default placeholder:text-text-inverse-subtlest/50 focus:outline-none focus:border-surface-interactive-brand resize-none"
                                />
                                <p className="text-xs text-text-inverse-subtlest">
                                    Enter a clear and specific goal for this process flow execution
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-stroke-default flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-surface-interactive-brand text-white rounded-lg font-medium hover:bg-surface-interactive-brand-pressed disabled:opacity-50 transition-colors flex items-center gap-2"
                        >
                            <Play className="w-4 h-4" />
                            {isSubmitting ? "Starting..." : "Run Process Flow"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Dynamic form field component
function FormField({
    element,
    value,
    onChange,
}: {
    element: UIFormElements;
    value: any;
    onChange: (value: any) => void;
}) {
    const baseClass = "w-full px-3 py-2 rounded-md bg-input-container border border-input-stroke text-text-inverse-default placeholder:text-text-inverse-subtlest focus:outline-none focus:border-surface-interactive-brand";

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-text-inverse-default">
                {element.title}
                {element.required && <span className="text-semantic-error-surface ml-1">*</span>}
            </label>
            
            {element.description && (
                <p className="text-xs text-text-inverse-subtlest">{element.description}</p>
            )}

            {renderField(element, value, onChange, baseClass)}
        </div>
    );
}

function renderField(
    element: UIFormElements,
    value: any,
    onChange: (value: any) => void,
    baseClass: string
) {
    switch (element.type) {
        case "text":
            return (
                <input
                    type="text"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`Enter ${element.title}`}
                    className={baseClass}
                    required={element.required}
                />
            );

        case "long_text":
            return (
                <textarea
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`Enter ${element.title}`}
                    className={cn(baseClass, "min-h-[100px] resize-y")}
                    required={element.required}
                />
            );

        case "numeric_text":
            return (
                <input
                    type="number"
                    value={value || ""}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    placeholder={`Enter ${element.title}`}
                    className={baseClass}
                    required={element.required}
                />
            );

        case "checkbox":
            return (
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={value || false}
                        onChange={(e) => onChange(e.target.checked)}
                        className="w-4 h-4 rounded border-input-stroke text-surface-interactive-brand focus:ring-surface-interactive-brand"
                    />
                    <span className="text-sm text-text-inverse-default">
                        {element.label || element.title}
                    </span>
                </label>
            );

        case "single_option":
            return (
                <select
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    className={baseClass}
                    required={element.required}
                >
                    <option value="">Select {element.title}</option>
                    {element.options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );

        case "multi_option":
            return (
                <div className="space-y-2">
                    {element.options?.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={(value || []).includes(option)}
                                onChange={(e) => {
                                    const current = value || [];
                                    if (e.target.checked) {
                                        onChange([...current, option]);
                                    } else {
                                        onChange(current.filter((v: string) => v !== option));
                                    }
                                }}
                                className="w-4 h-4 rounded border-input-stroke text-surface-interactive-brand"
                            />
                            <span className="text-sm text-text-inverse-default">{option}</span>
                        </label>
                    ))}
                </div>
            );

        default:
            return (
                <input
                    type="text"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`Enter ${element.title}`}
                    className={baseClass}
                />
            );
    }
}
