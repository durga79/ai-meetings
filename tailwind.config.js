/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: "true",
            padding: "2rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1400px",
            },
        },
        extend: {
            // Add custom theme extensions here
            // These should match the host's theme for consistency
            screens: {
                "2xl": "1400px",
            },
            spacing: {
                4.5: "1.125rem",
            },
            maxWidth: {
                20: "5rem",
                4.5: "1.125rem",
            },
            leading: { 4.5: "1.125rem" },
            gridTemplateColumns: { 20: "repeat(20, minmax(0, 1fr))" },
            backgroundImage: {
                radial: "radial-gradient(circle at center, var(--tw-gradient-stops))",
            },
            boxShadow: {
                custom: "0 6px 20px 0 rgba(var(--surface-interactive-secondary), 0.12)",
            },
            colors: {
                default: {
                    white: "hsl(var(--background-white))",
                },
                fade: "hsl(var(--fade-white))",
                success: "hsl(var(--success))",
                warning: "hsl(var(--warning))",
                star: "hsl(var(--star))",
                "chat-background": "hsl(var(--chat-background))",
                "output-background": "hsl(var(--output-background))",
                "chat-message-background-1": "hsl(var(--chat-message-background-1))",
                "chat-message-background-2": "hsl(var(--chat-message-background-2))",
                "chat-message-background-3": "hsl(var(--chat-message-background-3))",
                "surface-container-default": "hsl(var(--surface-container-default))",
                child: "hsl(var(--child))",
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
                link: "hsl(var(--link))",
                background: "hsl(var(--background))",
                "brand-purple-100": "hsl(var(--brand-purple-100))",
                "brand-purple-300": "hsl(var(--brand-purple-300))",
                "brand-purple-600": "hsl(var(--brand-purple-600))",
                "brand-purple-800": "hsl(var(--brand-purple-800))",
                "brand-purple-950": "hsl(var(--brand-purple-950))",
                "neutral-600": "hsl(var(--neutral-600))",
                foreground: "hsl(var(--foreground))",
                backdrop: "hsl(var(--backdrop))",
                "accent-lime-400": "hsl(var(--accent-lime-400))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                    "lime-500": "hsl(var(--accent-lime-500))",
                    "lime-50": "hsl(var(--accent-lime-50))",
                    "pink-600": "hsl(var(--accent-pink-600))",
                    "lime-600": "hsl(var(--accent-lime-600))",
                    "yellow-600": "hsl(var(--accent-yellow-600))",
                    "orange-300": "hsl(var(--accent-orange-300))",
                    "orange-600": "hsl(var(--accent-orange-600))",
                    "sage-600": "hsl(var(--accent-sage-600))",
                    "sage-50": "hsl(var(--accent-sage-50))",
                    "pink-950": "hsl(var(--accent-pink-950))",
                    "orange-950": "hsl(var(--accent-orange-950))",
                    "sage-950": "hsl(var(--accent-sage-950))",
                    "pink-400": "hsl(var(--accent-pink-400))",
                    "orange-400": "hsl(var(--accent-orange-400))",
                    "sage-400": "hsl(var(--accent-sage-400))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
                input: {
                    container: "hsl(var(--input-container))",
                    stroke: "hsl(var(--input-stroke))",
                    "stroke-active": "hsl(var(--input-stroke-active))",
                },
                semantic: {
                    "error-surface": "hsl(var(--semantic-error-surface))",
                    "error-text": "hsl(var(--semantic-error-text))",
                    "success-surface": "hsl(var(--semantic-success-surface))",
                    "success-text": "hsl(var(--semantic-success-text))",
                    "warning-surface": "hsl(var(--semantic-warning-surface))",
                    "warning-text": "hsl(var(--semantic-warning-text))",
                },
                surface: {
                    container: {
                        default: " hsl(var(--surface-container-default))",
                        "default-lighter": " hsl(var(--surface-container-default-lighter))",
                        raised: " hsl(var(--surface-container-raised))",
                        active: " hsl(var(--surface-container-active))",
                        sunken: " hsl(var(--surface-container-sunken))",
                        purple: " hsl(var(--surface-container-purple))",
                    },
                    interactive: {
                        brand: " hsl(var(--surface-interactive-brand))",
                        "brand-pressed": " hsl(var(--surface-interactive-brand-pressed))",
                        "brand-raised": " hsl(var(--surface-interactive-brand-raised))",
                        default: " hsl(var(--surface-interactive-default))",
                        "default-inactive": "hsl(var(--surface-interactive-default-inactive))",
                        "default-pressed": " hsl(var(--surface-interactive-default-pressed))",
                        "default-raised": " hsl(var(--surface-interactive-default-raised))",
                        disabled: " hsl(var(--surface-interactive-disabled))",
                        secondary: " hsl(var(--surface-interactive-secondary))",
                        "secondary-pressed": " hsl(var(--surface-interactive-secondary-pressed))",
                        "secondary-raised": " hsl(var(--surface-interactive-secondary-raised))",
                    },
                    inverse: {
                        DEFAULT: "hsl(var(--surface-inverse))",
                        fade: "hsl(var(--surface-inverse-fade))",
                        subtle: "hsl(var(--surface-inverse-subtle))",
                        subtlest: "hsl(var(--surface-inverse-subtlest))",
                    },
                },
                stroke: {
                    default: "hsl(var(--stroke-default))",
                    soft: "hsl(var(--stroke-soft))",
                    subtle: "hsl(var(--stroke-subtle))",
                    subtlest: "hsl(var(--stroke-subtlest))",
                },
                decoration: "hsl(var(--decoration))",
                text: {
                    link: "hsl(var(--text-link))",
                    "inverse-default": "hsl(var(--text-inverse-default))",
                    "inverse-subtle": "hsl(var(--text-inverse-subtle))",
                    "inverse-subtlest": "hsl(var(--text-inverse-subtlest))",
                    success: "hsl(var(--text-success))",
                    default: "hsl(var(--text-default))",
                    subtle: "hsl(var(--text-subtle))",
                    subtlest: "hsl(var(--text-subtlest))",
                },
                face: {
                    interactive: {
                        default: "hsl(var(--face-interactive-default))",
                    },
                },
            },
            borderRadius: {
                "4xl": "32px",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
                "collapsible-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-collapsible-content-height)",
                    },
                },
                "collapsible-up": {
                    from: {
                        height: "var(--radix-collapsible-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
                "slide-in-from-left": {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        transform: "translateX(0)",
                    },
                },
                "slide-out-to-right": {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "100%": {
                        transform: "translateX(300%)",
                    },
                },
            },
            animation: {
                "accordion-up": "accordion-up 0.2s ease-out",
                "accordion-down": "accordion-down 0.2s ease-out",
                "collapsible-up": "collapsible-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-out",
                "slide-out-to-right": "slide-out-to-right 1s ease-in",
                "slide-in-from-left": "slide-in-from-left 0.5s ease-in",
            },
            fontFamily: {
                mono: ["var(--font-geist-mono)"],
                outfit: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animated")],
};
