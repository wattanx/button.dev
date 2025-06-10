<script setup lang="ts">
interface Props {
  label: string;
  modelValue: string | number;
  id: string;
  type?: string;
  placeholder?: string;
  step?: string | number;
  min?: string | number;
  max?: string | number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  class: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="space-y-2 flex flex-col" :class="props.class">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :step="step"
      :min="min"
      :max="max"
      @input="handleInput"
      class="border border-zinc-200 rounded-md px-2 py-1"
    />
  </div>
</template>