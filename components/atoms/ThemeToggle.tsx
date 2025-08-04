"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </Button>
  )
}