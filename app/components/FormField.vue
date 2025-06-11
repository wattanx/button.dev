<script setup lang="ts">
interface Props {
  modelValue: string | number;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    @input="handleInput"
    class="border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md px-2 py-1 outline-none focus-visible:duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 transition-[colors,box-shadow] text-gray-900 dark:text-gray-100"
    v-bind="$attrs"
  />
</template>
