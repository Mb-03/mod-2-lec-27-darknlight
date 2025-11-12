"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DesktopThemeSwitcher from "./DesktopThemeSwitcher";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isLight = resolvedTheme === "light";

  return (
    <div>
      <DesktopThemeSwitcher isLight = {isLight} setTheme = {setTheme} />
    </div>
  );
};

export default ThemeSwitcher;
