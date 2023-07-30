<script lang="ts" setup>
import CloseIcon from '@heroicons/vue/24/solid/XCircleIcon'
import ArrowIcon from '@heroicons/vue/24/solid/ArrowRightIcon'
import SettingsItem from './SettingsItem.vue';
import { Ref, ref } from 'vue';

const props = defineProps({
  setVisibleSettings: Function,
  addLocation: Function,
  visibleSettings: Boolean,
  weatherItems: Array,
  deleteLocation: Function,
  dropHandl: Function,
  dragStartHandl: Function,
  dragOverHandl: Function,
  errorAddLocation: String,
})

const searchValue: Ref<string> = ref('')

const getLocation = () => {
  props.addLocation && props.addLocation(searchValue.value)
  searchValue.value = ''
}
</script>

<template>
  <div class="settings">
    <div class="settings__header">
      <h3 class="settings__header-title">Settings</h3>
      <close-icon class="settings__header-close" @click="setVisibleSettings && setVisibleSettings()"/>
    </div>
    <div class="settings__search">
      <p class="settings__search-title">Add location</p>
      <div class="settings__search-input">
        <input type="text" placeholder="search" v-model="searchValue">
        <button @click="getLocation">
          <arrow-icon/>
        </button>
      </div>
      <p class="settings__search-error">
        {{ errorAddLocation }}
      </p>
    </div>
    <div class="settings__main">
      <settings-item 
        v-for="weather, index in weatherItems" 
        :weather="(weather as string)" 
        :index="index"
        :deleteLocation="deleteLocation"
        :dragStartHandl="dragStartHandl"
        :dropHandl="dropHandl"
        :dragOverHandl="dragOverHandl"
      />
    </div>
  </div>
</template>