export const useColorMode = () => {
  const colorMode = useState<"light" | "dark" | "system">(
    "color-mode",
    () => "system"
  );

  const systemTheme = ref<"light" | "dark">("light");
  
  const resolvedTheme = computed(() => {
    if (colorMode.value === "system") {
      return systemTheme.value;
    }
    return colorMode.value;
  });

  const preference = computed({
    get: () => colorMode.value,
    set: (value: "light" | "dark" | "system") => {
      colorMode.value = value;
      if (import.meta.client) {
        if (value === "system") {
          localStorage.removeItem("button-dev-color-mode");
        } else {
          localStorage.setItem("button-dev-color-mode", value);
        }
        updateTheme();
      }
    },
  });

  const updateTheme = () => {
    const theme = resolvedTheme.value;
    if (theme === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
    }
  };

  const updateSystemTheme = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    systemTheme.value = prefersDark ? "dark" : "light";
    if (colorMode.value === "system") {
      updateTheme();
    }
  };

  onMounted(() => {
    // システムテーマを取得
    updateSystemTheme();
    
    // メディアクエリの変更を監視
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateSystemTheme);
    
    // localStorageから設定を読み込む
    const stored = localStorage.getItem("button-dev-color-mode") as
      | "light"
      | "dark"
      | null;
    if (stored) {
      preference.value = stored;
    } else {
      // storageにない場合はsystemのまま
      updateTheme();
    }

    // クリーンアップ
    onUnmounted(() => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    });
  });

  return {
    value: readonly(colorMode),
    resolvedTheme: readonly(resolvedTheme),
    preference,
  };
};
