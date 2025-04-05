<script lang="ts" setup>
import SettingsWidget from './SettingsWidget.vue'
import SettingsIcon from '@heroicons/vue/24/solid/Cog8ToothIcon'
import type { HeaderWidgetProps } from '@/types'
import { ref } from 'vue'

defineProps<HeaderWidgetProps>()

const visibleSettings = ref(false)

const toggleSettingsVisibility = () => {
  visibleSettings.value = !visibleSettings.value
}
</script>

<template>
  <header class="header">
    <h1 class="header__title">Umk1nus Weather Widget</h1>
    <SettingsIcon class="header__settings-visible" @click="toggleSettingsVisibility" />
    <SettingsWidget
      v-if="visibleSettings"
      :errorAddLocation="errorAddLocation"
      :toggleSettingsVisibility="toggleSettingsVisibility"
      :deleteLocation="deleteLocation"
      :weatherItems="weatherItems"
      :addLocation="addLocation"
      :visibleSettings="visibleSettings"
      :dragStartHandl="dragStartHandl"
      :dropHandl="dropHandl"
      :dragOverHandl="dragOverHandl"
    />
  </header>
</template>