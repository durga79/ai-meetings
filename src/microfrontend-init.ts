"use client";

import { useRuntimeContextStore, type RuntimeContext } from "@/store/runtime-context-store";

export function initRuntimeContext(ctx: RuntimeContext): void {
    if (!ctx) return;
    useRuntimeContextStore.getState().setRuntimeContext(ctx);
}

export function getRuntimeContext(): RuntimeContext {
    return useRuntimeContextStore.getState().runtimeContext;
}
