<script lang="ts" setup>
import CloseIcon from '@heroicons/vue/24/solid/XCircleIcon'
import ArrowIcon from '@heroicons/vue/24/solid/ArrowRightIcon'
import SettingsItem from './SettingsItem.vue'
import { SettingsProps } from '../types'
import { Ref, ref } from 'vue'

const props = defineProps<SettingsProps>()

const searchValue: Ref<string> = ref('')

const handleAddLocation = () => {
  if (props.addLocation && searchValue.value.trim()) {
    props.addLocation(searchValue.value)
    searchValue.value = ''
  }
}
</script>

<template>
  <div class="settings">
    <div class="settings__header">
      <h3 class="settings__header-title">Settings</h3>
      <CloseIcon class="settings__header-close" @click="props.toggleSettingsVisibility" />
    </div>
    <div class="settings__search">
      <p class="settings__search-title">Add Location</p>
      <div class="settings__search-input">
        <input type="text" placeholder="Search" v-model="searchValue">
        <button @click="handleAddLocation">
          <ArrowIcon />
        </button>
      </div>
      <p v-if="errorAddLocation" class="settings__search-error">
        {{ errorAddLocation }}
      </p>
    </div>
    <div class="settings__main">
      <SettingsItem
        v-for="(weather, index) in weatherItems"
        :key="index"
        :weather="weather"
        :index="index"
        :deleteLocation="deleteLocation"
        :dragStartHandl="dragStartHandl"
        :dropHandl="dropHandl"
        :dragOverHandl="dragOverHandl"
      />
    </div>
  </div>
</template>