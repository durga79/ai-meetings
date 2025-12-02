/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Add custom theme extensions here
            // These should match the host's theme for consistency
            colors: {
                // Surface colors
                "surface-container-default": "var(--surface-container-default, #1a1a1a)",
                "surface-container-default-lighter": "var(--surface-container-default-lighter, #2a2a2a)",
                "surface-interactive-brand": "var(--surface-interactive-brand, #3b82f6)",
                "surface-interactive-brand-pressed": "var(--surface-interactive-brand-pressed, #2563eb)",
                "surface-inverse-fade": "var(--surface-inverse-fade, rgba(255, 255, 255, 0.1))",
                
                // Text colors
                "text-inverse-default": "var(--text-inverse-default, #ffffff)",
                "text-inverse-subtle": "var(--text-inverse-subtle, #a1a1aa)",
                "text-inverse-subtlest": "var(--text-inverse-subtlest, #71717a)",
                
                // Stroke colors
                "stroke-default": "var(--stroke-default, #27272a)",
                
                // Semantic colors
                "semantic-success-surface": "var(--semantic-success-surface, #22c55e)",
                "semantic-error-surface": "var(--semantic-error-surface, #ef4444)",
                "semantic-warning-surface": "var(--semantic-warning-surface, #f59e0b)",
                
                // Input colors
                "input-container": "var(--input-container, #27272a)",
                "input-stroke": "var(--input-stroke, #3f3f46)",
            },
        },
    },
    plugins: [],
};
