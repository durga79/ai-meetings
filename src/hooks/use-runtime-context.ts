"use client";

import { useRuntimeContextStore, type AxiosConfig, type AxiosLikeInstance, type RuntimeContext } from "@/store/runtime-context-store";

export function useRuntimeContext(): RuntimeContext {
    return useRuntimeContextStore((s) => s.runtimeContext);
}

export function useAxiosConfig(): AxiosConfig | undefined {
    return useRuntimeContextStore((s) => s.runtimeContext?.axiosConfig);
}

export function useDataServiceAxios(): AxiosLikeInstance | undefined {
    return useRuntimeContextStore((s) => s.runtimeContext?.axiosConfig?.dataServiceAxios);
}

export function useApiServiceAxios(): AxiosLikeInstance | undefined {
    return useRuntimeContextStore((s) => s.runtimeContext?.axiosConfig?.apiServiceAxios);
}

export function useSuperAgentServiceAxios(): AxiosLikeInstance | undefined {
    return useRuntimeContextStore((s) => s.runtimeContext?.axiosConfig?.superAgentServiceAxios);
}

export function useRuntimeValue<T>(selector: (ctx: RuntimeContext) => T): T {
    return useRuntimeContextStore((s) => selector(s.runtimeContext));
}
