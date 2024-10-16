import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { cache } from "react";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/navbar/nav";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "T3 Turbo x Supabase",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "T3 Turbo x Supabase",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://github.com/supabase-community/create-t3-turbo",
    siteName: "T3 Turbo x Supabase",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
};
import { esES } from "../../../../es-ES";
// Lazy load headers
const getHeaders = cache(async () => headers());

export default function Layout(props: { children: React.ReactNode, }) {
  return (
    <ClerkProvider
      localization={esES}>
      <html lang="en">
        <body className="flex h-screen flex-col items-center bg-zinc-900 text-zinc-200">

          <main className={["font-sans", fontSans.variable].join(" ")}>
            <TRPCReactProvider headersPromise={getHeaders()}>
              <Header />
              {props.children}
            </TRPCReactProvider>

          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
