<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { computed } from "vue";

const colorMode = useColorMode();

const isDark = computed(() => colorMode.value.value === "dark");

const toggleTheme = () => {
  colorMode.preference.value = isDark.value ? "light" : "dark";
};
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-100 dark:hover:bg-zinc-700"
    :aria-label="isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
  >
    <Moon v-if="isDark" class="h-5 w-5 transition-all" />
    <Sun v-else class="h-5 w-5 transition-all" />
  </button>
</template>
