"use client"

import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    const initialTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.add(initialTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.remove(prevTheme!)
      document.documentElement.classList.add(newTheme)
      return newTheme
    })
  }

  return { theme, toggleTheme }
}