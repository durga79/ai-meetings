import type { AppProps } from "next/app";
import "@/styles/globals.css";

/**
 * Custom App Component
 * 
 * This is used for standalone development only.
 * When loaded as a microfrontend, the host application
 * provides its own App wrapper.
 */
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
