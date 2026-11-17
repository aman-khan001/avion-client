import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="theme-toggle-icon" key={theme}>
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
}
