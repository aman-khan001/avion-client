import { useTheme } from "./ThemeContext.jsx";

export default function ThemeLogo({
  className = "h-8 w-28 object-contain object-center",
  alt = "AVION Training & Placement Centre",
}) {
  const { theme } = useTheme();

  return (
    <img
      className={`${className} theme-logo`}
      src={
        theme === "light"
          ? "/assets/avion-dark.png"
          : "/assets/avion-light.png"
      }
      alt={alt}
    />
  );
}
