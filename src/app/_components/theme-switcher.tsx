"use client";

import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["dark", "light"];

export const NoFOUCScript = (storageKey: string) => {
  const [DARK, LIGHT] = ["dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? LIGHT;
    const classList = document.documentElement.classList;
    if (mode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };
  window.updateDOM();
};

let updateDOM: () => void;

const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference | null>(null);

  useEffect(() => {
    updateDOM = window.updateDOM;
    const saved = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    setMode(saved ?? "light");

    addEventListener("storage", (e: StorageEvent): void => {
      if (e.key === STORAGE_KEY) setMode(e.newValue as ColorSchemePreference);
    });
  }, []);

  useEffect(() => {
    if (mode) {
      localStorage.setItem(STORAGE_KEY, mode);
      updateDOM();
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  if (!mode) return null;

  return (
    <button
      onClick={handleModeSwitch}
      className="h-9 w-9 rounded-full border border-secondary-fill bg-primary-fill text-lg text-primary-gray"
    >
      {mode === "light" ? "☀️" : "🌙"}
    </button>
  );
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

export const ThemeSwitcher = () => {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
};
