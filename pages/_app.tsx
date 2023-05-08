import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* session provider er det som gjør at session er tilgjengelig på hver side */}
      {/* navbar blir satt her også så den vises på hver side*/}
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
