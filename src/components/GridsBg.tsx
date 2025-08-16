"use client";

import { useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";

export function GridsBg() {
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    document.body.classList.remove("grids-dark", "grids-light");
    document.body.classList.add(isDarkMode ? "grids-dark" : "grids-light");
  }, [isDarkMode]);

  return null;
}
