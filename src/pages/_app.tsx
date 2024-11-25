import "@/styles/globals.scss";

import localFont from "next/font/local";

import type { AppProps } from "next/app";
import Header from "@/components/molecules/Header/Header";

const materialSymbols = localFont({
    variable: "--symbols",
    style: "normal",
    src: "../../node_modules/material-symbols/material-symbols-rounded.woff2",
    display: "block",
    weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`app ${materialSymbols.variable}`}>
            <Header id="header" />
            <Component {...pageProps} />
        </div>
    );
}
