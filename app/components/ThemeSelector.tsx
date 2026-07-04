"use client";

import { useState, useEffect } from "react";
import { ThemeSelectIcon, ClosingIcon } from "@icons";

const themes = [
  {
    id: "classic",
    name: "Classic",
    palette: ["#ffffff", "#ff335f", "#43a9a3", "#373a3c", "#818a91"],
  },
  {
    id: "dark",
    name: "Dark",
    palette: ["#0e141b", "#ff5277", "#43a9a3", "#ffffff", "#818a91"],
  },
  {
    id: "beach",
    name: "Koopa Beach",
    palette: ["#fffffe", "#ff9d00", "#bae8e8", "#272343", "#2d334a"],
  },
  {
    id: "choco",
    name: "Choco Mountain",
    palette: ["#55423d", "#f3ab87", "#e78fb3", "#fffffe", "#ffc0ad"],
  },
  {
    id: "moomoo",
    name: "Moo Moo Farm",
    palette: ["#fef6e4", "#f582ae", "#8bd3dd", "#172c66", "#006e8a"],
  },
  {
    id: "bowser",
    name: "Bowser's Castle",
    palette: ["#16161a", "#7f5af0", "#2cb67d", "#fffffe", "#94a1b2"],
  },
  {
    id: "yoshi",
    name: "Yoshi Valley",
    palette: ["#fafbf5", "#99c221", "#e55812", "#41474c", "#757d84"],
  },
  {
    id: "rainbow",
    name: "Rainbow Road",
    palette: ["#140527", "#49f5f7", "#01c317", "#feff00", "#ff464d"],
  },
  {
    id: "lobster",
    name: "Lobster Life",
    palette: ["#fcddd4", "#b62b2b", "#fb9f13", "#4b1313", "#146caa"],
  },
  {
    id: "hackernews",
    name: "Hacker News",
    palette: ["#f6f6ef", "#ff6600", "#ff6600", "#000000", "#828282"],
  },
];

export const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState("classic");
  const [isOpen, setIsOpen] = useState(false);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme && themes.find((theme) => theme.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      document.documentElement.className =
        document.documentElement.className.replace(
          /\b(classic|dark|beach|choco|moomoo|bowser|yoshi|rainbow|lobster|hackernews)\b/g,
          savedTheme
        );
    }
  }, []);

  // Apply theme when currentTheme changes
  useEffect(() => {
    // Replace any existing theme class with the new one
    document.documentElement.className =
      document.documentElement.className.replace(
        /\b(classic|dark|beach|choco|moomoo|bowser|yoshi|rainbow|lobster|hackernews)\b/g,
        currentTheme
      );

    // Save to localStorage
    localStorage.setItem("portfolio-theme", currentTheme);
  }, [currentTheme]);

  // Close panel when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleThemeSelect = (themeId: string) => {
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Theme Selector Button */}
      <button
        onClick={togglePanel}
        className="fixed top-8 right-8 z-50 p-4 bg-bgOffset text-bg rounded-full font-medium hover:opacity-80 transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Toggle theme selector"
      >
        <ThemeSelectIcon className="fill-text" />
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-bg border-b border-border transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="p-12">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-textOffset hover:text-text transition-colors duration-200 p-1"
              aria-label="Close theme selector"
            >
              <ClosingIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeSelect(theme.id)}
                className={`p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center ${currentTheme === theme.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-text hover:bg-bgOffset"
                  }`}
              >
                <div className="font-bold mb-3 text-sm fp">{theme.name}</div>
                <div className="flex gap-1">
                  {theme.palette.map((color, idx) => (
                    <div
                      key={idx}
                      className="md:w-6 md:h-6 w-4 h-4 rounded-full border border-border/30"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
