"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PaletteSelector from "@/components/ui/PaletteSelector";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/metrics", label: "Metrics" },
];

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-detection avoids SSR/client theme mismatch
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 sm:px-8">
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-sm text-text transition-colors hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <PaletteSelector />
        <motion.button
          type="button"
          aria-label="Toggle dark mode"
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="rounded-md border border-border px-3 py-1 text-sm text-text"
        >
          {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "Theme"}
        </motion.button>
      </div>
    </nav>
  );
}
