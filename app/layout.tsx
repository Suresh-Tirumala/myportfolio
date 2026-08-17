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
import LanguageProvider, {
  LANG_BOOT_SCRIPT,
} from "@/components/LanguageProvider";

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
    "Portfolio de Suresh Mahima Kumar Tirumala — Full Stack Developer. Experiencias web inmersivas con Next.js y React Three Fiber.",
  authors: [{ name: "Suresh Mahima Kumar Tirumala" }],
  openGraph: {
    title: "Suresh Mahima Kumar Tirumala — Full Stack Developer",
    description:
      "Portfolio inmersivo con escena 3D interactiva. Next.js, React Three Fiber, GLSL.",
    type: "website",
    locale: "es_ES", // could be changed to en_US depending on the app's primary target
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Mahima Kumar Tirumala — Full Stack Developer",
    description:
      "Portfolio inmersivo con escena 3D interactiva. Next.js, React Three Fiber, GLSL.",
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
