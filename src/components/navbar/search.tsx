"use client";

import { CommandIcon } from "lucide-react";

import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/ui/input";

interface iSearchProps {
  className?: string;
  placeholder?: string;
}

const Search = (props: iSearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        className={props.className}
        type="search"
        name="iconName"
        placeholder={props.placeholder}
        defaultValue={""}
        autoComplete="off"
        onChange={(e) => handleChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && (
        <kbd className="pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded bg-zinc-200 p-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          <CommandIcon size={14} />
          <span>K</span>
        </kbd>
      )}
    </div>
  );
};

export default Search;
