/**
 * Next.js Configuration for Microfrontend Template
 * 
 * This is a REMOTE microfrontend that exposes components to the coworker-web host.
 * 
 * IMPORTANT: 
 * - Uses Pages Router (simpler for microfrontends)
 * - Exposes components via Module Federation
 * - Shares React as singleton to prevent hook errors
 */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow CORS for remoteEntry.js
    async headers() {
        return [
            {
                source: "/_next/static/chunks/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET" },
                ],
            },
        ];
    },

    webpack(config, options) {
        const { isServer } = options;

        // Only apply Module Federation on client side
        if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    /**
                     * IMPORTANT: Change this name to match your microfrontend
                     * This MUST match the 'scope' in the host's registry.ts
                     * Convention: camelCase (e.g., myCustomAgent, wexaSheets)
                     */
                    name: "aiMeetings",
                    
                    filename: "static/chunks/remoteEntry.js",
                    
                    /**
                     * Exposed modules - these are loaded by the host application
                     * 
                     * Format: { "./ModuleName": "./path/to/module" }
                     * 
                     * The host loads these using:
                     * - mainComponent: "./MainComponent" 
                     * - uiComponentMapPath: "./UIComponentMap"
                     * - executionComponentMapPath: "./ExecutionComponentMap"
                     */
                    exposes: {
                        // Main component for fullscreen mode
                        "./MainComponent": "./src/components/MainComponent",
                        
                        // UI Component Map - overrides DEFAULT_COMPONENT_MAP by UIKEY
                        // Components: Home, ProcessFlowList, TablesList, TableComponent, etc.
                        "./UIComponentMap": "./src/components/UIComponentMap",
                        
                        // Execution Component Map - components for ExecutionChainWrapper
                        // Maps ACTION_UNIQUE_ID to custom components
                        "./ExecutionComponentMap": "./src/components/ExecutionComponentMap",

                        "./MicrofrontendInit": "./src/microfrontend-init",
                    },
                    
                    /**
                     * Shared dependencies - MUST match host's shared config
                     * These are loaded once and shared between host and remotes
                     * 
                     * CRITICAL: singleton: true prevents multiple React instances
                     * which would cause "Invalid hook call" errors
                     */
                    shared: {
                        react: {
                            singleton: true,
                            requiredVersion: false,
                        },
                        "react-dom": {
                            singleton: true,
                            requiredVersion: false,
                        },
                        "@tanstack/react-query": {
                            singleton: true,
                            requiredVersion: false,
                        },
                        zustand: {
                            singleton: true,
                            requiredVersion: false,
                        },
                        sonner: {
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                    
                    extraOptions: {
                        exposePages: false,
                        enableImageLoaderFix: true,
                        enableUrlLoaderFix: true,
                        // CRITICAL: Prevents useRouter() from breaking in host
                        skipSharingNextInternals: true,
                    },
                })
            );
        }

        return config;
    },
};

module.exports = nextConfig;
