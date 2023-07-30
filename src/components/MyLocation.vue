<script lang="ts" setup>
import { Ref, ref } from 'vue';
import ArrowIcon from '@heroicons/vue/24/solid/ArrowRightIcon'

const props = defineProps({
  weatherMyLocation: Function,
  errorMyLocation: String
})

const apiKey: Ref<string> = ref('')

const setMyLocation = () => {
  props.weatherMyLocation && props.weatherMyLocation(apiKey.value)
  apiKey.value = ''
}

</script>

<template>
  <div class="location">
    <h3 class="location__title">Enter your API_KEY</h3>
    <div class="location__api">
      <input type="text" v-model="apiKey">
      <button @click="setMyLocation"><arrow-icon/></button>
    </div>
    <p class="location__error">{{ errorMyLocation }}</p>
    <div class="location__description">
      To get the weather from your location, 
      you need to purchase a <a target="_blank" href="https://openweathermap.org/api">subscription</a> and insert your API_KEY
    </div>
  </div>
</template>