<script lang="ts" setup>
import { Ref, ref } from 'vue';
import HeartIcon from '@heroicons/vue/24/solid/HeartIcon'

const props = defineProps({
  weatherMyLocation: Function
})

const apiKey: Ref<string> = ref('')

const setMyLocation = () => {
  const res = props.weatherMyLocation && props.weatherMyLocation(apiKey.value)
  apiKey.value = ''
}
</script>

<template>
  <div class="location">
    <h3 class="location__title">Enter your API_KEY</h3>
    <div class="location__api">
      <input type="text" v-model="apiKey">
      <button @click="setMyLocation"><heart-icon/></button>
    </div>
    <div class="location__description">
      To get the weather from your location, 
      you need to purchase a <a target="_blank" href="https://openweathermap.org/api">subscription</a> and insert your API_KEY
    </div>
  </div>
</template>