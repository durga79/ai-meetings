import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

/**
 * Custom App Component
 * 
 * This is used for standalone development only.
 * When loaded as a microfrontend, the host application
 * provides its own App wrapper.
 */
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
