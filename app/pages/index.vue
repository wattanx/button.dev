<script setup lang="ts">
import Slider from "~/components/Slider.vue";
import FormField from "~/components/FormField.vue";
import { ref } from "vue";

const buttonStyle = ref({
  text: "button",
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
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-7xl mx-auto">
      <header>
        <div>button.dev</div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- preview -->
        <div
          class="rounded-lg border text-card-foreground shadow-sm h-fit overflow-hidden"
        >
          <div class="p-0">
            <div
              class="relative min-h-[400px] flex items-center justify-center"
            >
              <div class="relative z-10 p-8 rounded-2xl">
                <div class="flex flex-col items-center space-y-4">
                  <button
                    :style="{
                      '--button-pt': buttonStyle.pt + 'px',
                      '--button-pb': buttonStyle.pb + 'px',
                      '--button-pr': buttonStyle.pr + 'px',
                      '--button-pl': buttonStyle.pl + 'px',
                      '--button-width': buttonStyle.width === 'auto' ? 'auto' : buttonStyle.width + 'px',
                      '--button-height': buttonStyle.height === 'auto' ? 'auto' : buttonStyle.height + 'px',
                      '--button-radius': buttonStyle.radius + 'px',
                      '--button-color': buttonStyle.color,
                      '--button-bg-color': buttonStyle.bgColor,
                      '--button-active-scale': buttonStyle.activeScale,
                      '--button-transition-duration': buttonStyle.transitionDuration + 'ms',
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
          class="rounded-lg border text-card-foreground shadow-sm h-fit overflow-hidden space-y-6"
        >
          <div class="p-6">
            <div class="space-y-4">
              <FormField
                label="ボタンテキスト"
                id="buttonText"
                v-model="buttonStyle.text"
              />

              <div class="grid grid-cols-2 gap-4">
                <FormField
                  label="Width (px)"
                  id="width"
                  v-model="buttonStyle.width"
                  placeholder="auto or number"
                />
                <FormField
                  label="Height (px)"
                  id="height"
                  v-model="buttonStyle.height"
                  placeholder="auto or number"
                />
              </div>

              <div class="space-y-2">
                <label>Padding (px)</label>
                <div class="grid grid-cols-2 gap-4">
                  <FormField
                    label="Top"
                    id="pt"
                    v-model="buttonStyle.pt"
                    type="number"
                  />
                  <FormField
                    label="Bottom"
                    id="pb"
                    v-model="buttonStyle.pb"
                    type="number"
                  />
                  <FormField
                    label="Left"
                    id="pl"
                    v-model="buttonStyle.pl"
                    type="number"
                  />
                  <FormField
                    label="Right"
                    id="pr"
                    v-model="buttonStyle.pr"
                    type="number"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <FormField
                  label="Text Color"
                  id="color"
                  v-model="buttonStyle.color"
                  type="color"
                />
                <FormField
                  label="Background Color"
                  id="bgColor"
                  v-model="buttonStyle.bgColor"
                  type="color"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <FormField
                  label="Border Radius (px)"
                  id="radius"
                  v-model="buttonStyle.radius"
                  type="number"
                />
                <FormField
                  label="Active Scale"
                  id="activeScale"
                  v-model="buttonStyle.activeScale"
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                />
              </div>

              <FormField
                label="Transition Duration (ms)"
                id="transitionDuration"
                v-model="buttonStyle.transitionDuration"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
