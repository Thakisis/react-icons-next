"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const iconSize = 14;

  const handleToggle = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  };

  return (
    <>
      <Button
        title="Light mode"
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-none border-r border-zinc-200 px-2.5 dark:border-zinc-800 bg-zinc-200",
          "dark:bg-transparent",
        )}
        onClick={handleToggle}
      >
        <SunIcon size={iconSize} />
      </Button>
      <Button
        title="Dark mode"
        variant="ghost"
        size="sm"
        className={cn("rounded-none px-2.5", "dark:bg-zinc-800")}
        onClick={handleToggle}
      >
        <MoonIcon size={iconSize} />
      </Button>
    </>
  );
};

export default ThemeSwitcher;
