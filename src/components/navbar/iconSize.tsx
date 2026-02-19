"use client";
import { useEffect, useState } from "react";

import { Slider } from "@/ui/slider";

const MIN_SIZE = 20;
const MAX_SIZE = 70;
const DEFAULT_SIZE = 45;

const validateSize = (size: number) => {
  if (isNaN(size) || size < MIN_SIZE) return DEFAULT_SIZE;
  if (size > MAX_SIZE) return MAX_SIZE;
  return size;
};

const IconSize = () => {
  const [iconSizeValue, setIconSizeValue] = useState(45);
  const changeSize = (value: number[]) => {
    const newValue = validateSize(value[0]);
    document.documentElement.style.setProperty("--icon-size", `${newValue}px`);
    setIconSizeValue(newValue);
  };
  return (
    <Slider
      title={`Icon Size: ${iconSizeValue}px`}
      showTooltip={true}
      value={[iconSizeValue]}
      onValueChange={changeSize}
      max={MAX_SIZE}
      min={MIN_SIZE}
      step={1}
    />
  );
};

export default IconSize;
