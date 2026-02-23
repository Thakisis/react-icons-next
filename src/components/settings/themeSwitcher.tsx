"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const iconSize = 14;

  const handleToggle = (newTheme: string) => {
    if (newTheme === theme) return; // ya está activo, no hace nada

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <>
      <Button
        title="Light mode"
        variant="ghost"
        name="light"
        size="sm"
        className={cn(
          "rounded-none border-r border-zinc-200 px-2.5 dark:border-zinc-800 bg-zinc-200",
          "dark:bg-transparent",
        )}
        onClick={() => handleToggle("light")}
      >
        <SunIcon size={iconSize} />
      </Button>
      <Button
        title="Dark mode"
        name="dark"
        variant="ghost"
        size="sm"
        className={cn("rounded-none px-2.5", "dark:bg-zinc-800")}
        onClick={() => handleToggle("dark")}
      >
        <MoonIcon size={iconSize} />
      </Button>
    </>
  );
};

export default ThemeSwitcher;
