export const useColorMode = () => {
  const colorMode = useState<"light" | "dark">("color-mode", () => "light");

  const preference = computed({
    get: () => colorMode.value,
    set: (value: "light" | "dark") => {
      colorMode.value = value;
      if (import.meta.client) {
        localStorage.setItem("color-mode", value);
        if (value === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
  });

  onMounted(() => {
    const stored = localStorage.getItem("color-mode") as
      | "light"
      | "dark"
      | null;
    if (stored) {
      preference.value = stored;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      preference.value = prefersDark ? "dark" : "light";
    }
  });

  return {
    value: readonly(colorMode),
    preference,
  };
};
