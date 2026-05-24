import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import { Header } from "@/components/header";
import { PwaInstaller } from "@/components/pwa-installer";

export const metadata: Metadata = {
  title: "21 Games by SOL Theory",
  description: "A collection of daily word, logic, and puzzle games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <Header />
          <PwaInstaller />
          <div className="pt-20">{children}</div>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
