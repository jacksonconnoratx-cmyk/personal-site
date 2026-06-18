"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes, defaultPalette, type PaletteSlug } from "@/lib/themes";

const STORAGE_KEY = "palette";

function isPaletteSlug(value: string | null): value is PaletteSlug {
  return palettes.some((palette) => palette.slug === value);
}

export default function PaletteSelector() {
  const [active, setActive] = useState<PaletteSlug>(defaultPalette);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isPaletteSlug(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial state from localStorage, not derivable at render
      setActive(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function applyPalette(slug: PaletteSlug) {
    setActive(slug);
    document.documentElement.setAttribute("data-palette", slug);
    window.localStorage.setItem(STORAGE_KEY, slug);
    setOpen(false);
  }

  const activePalette = palettes.find((palette) => palette.slug === active) ?? palettes[0];

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        type="button"
        aria-label="Choose color palette"
        aria-expanded={open}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((value) => !value)}
        className="grid grid-cols-2 gap-0.5 border border-border p-1"
      >
        {mounted &&
          activePalette.swatches.map((color) => (
            <span
              key={color}
              className="h-4 w-4"
              style={{ backgroundColor: color }}
            />
          ))}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 z-10 mt-2 flex flex-wrap justify-end gap-2 border border-border bg-surface p-2"
          >
            {palettes.map((palette) => (
              <motion.button
                key={palette.slug}
                type="button"
                aria-label={`Use ${palette.name} palette`}
                aria-pressed={palette.slug === active}
                whileTap={{ scale: 0.85 }}
                onClick={() => applyPalette(palette.slug)}
                className={`grid grid-cols-2 gap-0.5 border p-1 ${
                  palette.slug === active ? "border-accent" : "border-border"
                }`}
              >
                {palette.swatches.map((color) => (
                  <span
                    key={color}
                    className="h-4 w-4"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
