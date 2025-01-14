import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a mordern banking app for everyone",
  icons:{
     icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  );
}
