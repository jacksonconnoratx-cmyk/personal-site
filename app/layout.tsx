import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Nav from "@/components/layout/Nav";
import { palettes, defaultPalette } from "@/lib/themes";

const paletteSlugs = palettes.map((palette) => palette.slug);

const setPaletteScript = `(function() {
  try {
    var stored = window.localStorage.getItem("palette");
    var valid = ${JSON.stringify(paletteSlugs)};
    var palette = valid.indexOf(stored) !== -1 ? stored : ${JSON.stringify(defaultPalette)};
    document.documentElement.setAttribute("data-palette", palette);
  } catch (e) {}
})();`;

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: setPaletteScript }} />
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
