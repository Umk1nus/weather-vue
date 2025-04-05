<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { MyLocationProps } from '@/types'
import ArrowIcon from '@heroicons/vue/24/solid/ArrowRightIcon'

const props = defineProps<MyLocationProps>()

const apiKey: Ref<string> = ref('')

const setMyLocation = () => {
  if (props.weatherMyLocation && apiKey.value.trim()) {
    props.weatherMyLocation(apiKey.value)
    apiKey.value = ''
  }
}
</script>

<template>
  <div class="location">
    <h3 class="location__title">Enter your API Key</h3>
    <div class="location__api">
      <input type="text" v-model="apiKey" placeholder="API Key">
      <button @click="setMyLocation">
        <ArrowIcon />
      </button>
    </div>
    <p v-if="errorMyLocation" class="location__error">{{ errorMyLocation }}</p>
    <div class="location__description">
      To get the weather from your location,
      you need to purchase a
      <a target="_blank" href="https://openweathermap.org/api">subscription</a>
      and insert your API Key.
    </div>
  </div>
</template>