<script lang="ts" setup>
import { getIcon } from '../helper'

defineProps({
  land: String,
  temp: Number,
  wind: Number,
  description: String,
  idWeather: String,
})

</script>

<template>
  <div class="card" :class="temp && temp >= 20 ? 'hot': 'cold'">
    <h3 class="card__title">{{ land }}</h3>
    <div class="card__weather">
      <p class="card__weather-temp">{{temp}}°C</p>
      <img class="card__weather-img" :src="getIcon(String(idWeather))" :alt="description">
    </div>
    <p class="card__description">{{ description }}</p>
    <div>
      <p>wind <span class="card__wind" :style="{background: Number(wind) > 5 ? 'red' : '#1ABB85'}">{{ wind }}</span> m/s</p>
    </div>
  </div>
</template>