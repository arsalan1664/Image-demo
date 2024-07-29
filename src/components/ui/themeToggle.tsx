"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

type ThemeType = {
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export function ThemeToggle({ size = "default" }: ThemeType) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size={size} onClick={toggleTheme} variant="outline">
      <Sun className="h-4 w-4" />
    </Button>
  );
}
