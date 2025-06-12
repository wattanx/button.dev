<script setup lang="ts">
interface Props {
  modelValue: string | number;
  options?: Array<{ value: string; label: string }>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <select
    :value="props.modelValue"
    @change="handleChange"
    class="border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md px-2 py-1 outline-none focus-visible:duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 transition-[colors,box-shadow] text-gray-900 dark:text-gray-100"
    v-bind="$attrs"
  >
    <option v-for="option in props.options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
