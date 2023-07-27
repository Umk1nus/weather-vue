<script lang="ts" setup>
import CloseIcon from '@heroicons/vue/24/solid/XCircleIcon'
import HeartIcon from '@heroicons/vue/24/solid/HeartIcon'
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
})

const searchValue: Ref<string> = ref('')
const error: Ref<string> = ref('')

const getLocation = () => {
  if (!props.weatherItems?.includes(searchValue.value)) {
    props.addLocation && props.addLocation(searchValue.value)
    searchValue.value = ''
    error.value = ''
  } else error.value = 'there is already a widget with this city'
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
          <heart-icon/>
        </button>
      </div>
      <p class="settings__search-error">
        {{ error }}
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