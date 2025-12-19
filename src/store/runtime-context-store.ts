"use client";

import { create } from "zustand";

export type AxiosLikeInstance = {
    get: Function;
    post: Function;
    put: Function;
    patch: Function;
    delete: Function;
};

export type AxiosConfig = {
    iAxios?: unknown;
    dataServiceAxios?: AxiosLikeInstance;
    apiServiceAxios?: AxiosLikeInstance;
    superAgentServiceAxios?: AxiosLikeInstance;
};

export type RuntimeContext = {
    axiosConfig?: AxiosConfig;
    [key: string]: unknown;
} | null;

type RuntimeContextState = {
    runtimeContext: RuntimeContext;
    setRuntimeContext: (ctx: RuntimeContext) => void;
};

export const useRuntimeContextStore = create<RuntimeContextState>((set) => ({
    runtimeContext: null,
    setRuntimeContext: (ctx) => set({ runtimeContext: ctx }),
}));
