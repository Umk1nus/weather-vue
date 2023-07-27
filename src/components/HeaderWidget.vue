<script lang="ts" setup>
import SettingsWidget from './SettingsWidget.vue'
import SettingsIcon from '@heroicons/vue/24/solid/Cog8ToothIcon'
import { ref } from 'vue';

defineProps({
  weatherItems: Array,
  addLocation: Function,
  deleteLocation: Function,
  dropHandl: Function,
  dragStartHandl: Function,
  dragOverHandl: Function,
})

const visibleSettings = ref(false)

const setVisibleSettings = () => {
  visibleSettings.value = !visibleSettings.value
}
</script>

<template>
  <header class="header">
    <h1 class="header__title">Umk1nus Weather Widget</h1>
    <settings-icon class="header__settings-visible" @click="setVisibleSettings()"/>
    <settings-widget
      :setVisibleSettings="setVisibleSettings"
      :deleteLocation="deleteLocation" 
      :weatherItems="weatherItems" 
      :addLocation="addLocation" 
      :visibleSettings="visibleSettings"
      :dragStartHandl="dragStartHandl"
      :dropHandl="dropHandl"
      :dragOverHandl="dragOverHandl" 
      v-if="visibleSettings"
    />
  </header>
</template>