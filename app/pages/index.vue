<script setup lang="ts">
import FormField from "~/components/FormField.vue";
import SelectField from "~/components/SelectField.vue";
import ThemeToggle from "~/components/ThemeToggle.vue";
import { ref } from "vue";

interface ButtonType {
  type: "button" | "submit" | "reset";
}

const buttonStyle = ref({
  text: "button",
  type: "button" as ButtonType["type"],
  width: "200",
  height: "auto",
  pt: "12",
  pb: "12",
  pr: "16",
  pl: "16",
  radius: "8",
  color: "#ffffff",
  bgColor: "#3b82f6",
  activeScale: "0.95",
  transitionDuration: "300",
});

const buttonTypeOptions = [
  { value: "button", label: "button" },
  { value: "submit", label: "submit" },
  { value: "reset", label: "reset" },
];
</script>

<template>
  <div
    class="min-h-screen p-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors"
  >
    <div class="max-w-7xl mx-auto">
      <header class="flex items-center justify-between mb-8">
        <div class="text-2xl font-bold">button.dev</div>
        <ThemeToggle />
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- preview -->
        <div
          class="rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm h-fit overflow-hidden transition-colors"
        >
          <div class="p-0">
            <div
              class="relative min-h-[400px] flex items-center justify-center"
            >
              <div class="relative z-10 p-8 rounded-2xl">
                <div class="flex flex-col items-center space-y-4">
                  <button
                    :type="buttonStyle.type"
                    :style="{
                      '--button-pt': buttonStyle.pt + 'px',
                      '--button-pb': buttonStyle.pb + 'px',
                      '--button-pr': buttonStyle.pr + 'px',
                      '--button-pl': buttonStyle.pl + 'px',
                      '--button-width':
                        buttonStyle.width === 'auto'
                          ? 'auto'
                          : buttonStyle.width + 'px',
                      '--button-height':
                        buttonStyle.height === 'auto'
                          ? 'auto'
                          : buttonStyle.height + 'px',
                      '--button-radius': buttonStyle.radius + 'px',
                      '--button-color': buttonStyle.color,
                      '--button-bg-color': buttonStyle.bgColor,
                      '--button-active-scale': buttonStyle.activeScale,
                      '--button-transition-duration':
                        buttonStyle.transitionDuration + 'ms',
                    }"
                    class="relative overflow-hidden shadow-lg hover:shadow-xl active:scale-(--button-active-scale) transition-all duration-(--button-transition-duration) pt-(--button-pt) pb-(--button-pb) pr-(--button-pr) pl-(--button-pl) w-(--button-width) h-(--button-height) rounded-(--button-radius) color-(--button-color) bg-(--button-bg-color)"
                  >
                    <span class="relative z-10">{{ buttonStyle.text }}</span>

                    <div
                      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- editor -->
        <div
          class="rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm h-fit overflow-hidden space-y-6 transition-colors"
        >
          <div class="p-6">
            <div class="space-y-4">
              <div class="space-y-2 flex flex-col">
                <label for="buttonText" class="text-gray-900 dark:text-gray-100"
                  >ボタンテキスト</label
                >
                <FormField id="buttonText" v-model="buttonStyle.text" />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2 flex flex-col">
                  <label for="width" class="text-gray-900 dark:text-gray-100"
                    >Width (px)</label
                  >
                  <FormField
                    id="width"
                    v-model="buttonStyle.width"
                    placeholder="auto or number"
                  />
                </div>
                <div class="space-y-2 flex flex-col">
                  <label for="height" class="text-gray-900 dark:text-gray-100"
                    >Height (px)</label
                  >
                  <FormField
                    id="height"
                    v-model="buttonStyle.height"
                    placeholder="auto or number"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-gray-900 dark:text-gray-100">Padding (px)</label>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2 flex flex-col">
                    <label for="pt" class="text-sm text-gray-600 dark:text-gray-400"
                      >Top</label
                    >
                    <FormField id="pt" v-model="buttonStyle.pt" type="number" />
                  </div>
                  <div class="space-y-2 flex flex-col">
                    <label for="pb" class="text-sm text-gray-600 dark:text-gray-400"
                      >Bottom</label
                    >
                    <FormField id="pb" v-model="buttonStyle.pb" type="number" />
                  </div>
                  <div class="space-y-2 flex flex-col">
                    <label for="pl" class="text-sm text-gray-600 dark:text-gray-400"
                      >Left</label
                    >
                    <FormField id="pl" v-model="buttonStyle.pl" type="number" />
                  </div>
                  <div class="space-y-2 flex flex-col">
                    <label for="pr" class="text-sm text-gray-600 dark:text-gray-400"
                      >Right</label
                    >
                    <FormField id="pr" v-model="buttonStyle.pr" type="number" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2 flex flex-col">
                  <label for="color" class="text-gray-900 dark:text-gray-100"
                    >Text Color</label
                  >
                  <FormField
                    id="color"
                    v-model="buttonStyle.color"
                    type="color"
                  />
                </div>
                <div class="space-y-2 flex flex-col">
                  <label for="bgColor" class="text-gray-900 dark:text-gray-100"
                    >Background Color</label
                  >
                  <FormField
                    id="bgColor"
                    v-model="buttonStyle.bgColor"
                    type="color"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2 flex flex-col">
                  <label for="radius" class="text-gray-900 dark:text-gray-100"
                    >Border Radius (px)</label
                  >
                  <FormField
                    id="radius"
                    v-model="buttonStyle.radius"
                    type="number"
                  />
                </div>
                <div class="space-y-2 flex flex-col">
                  <label for="activeScale" class="text-gray-900 dark:text-gray-100"
                    >Active Scale</label
                  >
                  <FormField
                    id="activeScale"
                    v-model="buttonStyle.activeScale"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                  />
                </div>
              </div>

              <div class="space-y-2 flex flex-col">
                <label
                  for="transitionDuration"
                  class="text-gray-900 dark:text-gray-100"
                  >Transition Duration (ms)</label
                >
                <FormField
                  id="transitionDuration"
                  v-model="buttonStyle.transitionDuration"
                  type="number"
                />
              </div>

              <div class="space-y-2 flex flex-col">
                <label for="buttonType" class="text-gray-900 dark:text-gray-100"
                  >type attribute</label
                >
                <SelectField
                  id="buttonType"
                  v-model="buttonStyle.type"
                  :options="buttonTypeOptions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
