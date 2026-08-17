import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suresh Mahima Kumar Tirumala — Full Stack Developer",
  description:
    "Portfolio of Suresh Mahima Kumar Tirumala — Full Stack Developer. Immersive web experiences with Next.js and React Three Fiber.",
  authors: [{ name: "Suresh Mahima Kumar Tirumala" }],
  openGraph: {
    title: "Suresh Mahima Kumar Tirumala — Full Stack Developer",
    description:
      "Immersive portfolio with interactive 3D scene. Next.js, React Three Fiber, GLSL.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Mahima Kumar Tirumala — Full Stack Developer",
    description:
      "Immersive portfolio with interactive 3D scene. Next.js, React Three Fiber, GLSL.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060e1c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <SeasonProvider>
          <FrozenBackground />
          <ScrollProgress />
          {children}
          <CustomCursor />
          <MagneticTargets />
        </SeasonProvider>
      </body>
    </html>
  );
}
