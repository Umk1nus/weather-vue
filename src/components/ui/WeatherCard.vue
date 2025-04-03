<script lang="ts" setup>
import { getIcon } from '../../helper'
import type { WeatherCardProps } from '../../types'

defineProps<WeatherCardProps>()

const getTemperatureClass = (temp: number) => (temp >= 20 ? 'hot' : 'cold')

const getWindStyle = (wind: number) => ({
  background: wind > 5 ? 'red' : '#1ABB85'
})
</script>

<template>
  <div class="card" :class="getTemperatureClass(temp)">
    <h3 class="card__title">{{ land }}</h3>
    <div class="card__weather">
      <p class="card__weather-temp">{{ temp }}°C</p>
      <img class="card__weather-img" :src="getIcon(idWeather)" :alt="description">
    </div>
    <p class="card__description">{{ description }}</p>
    <div class="card__wind-info">
      <p>
        Wind
        <span class="card__wind" :style="getWindStyle(wind)">{{ wind }}</span>
        m/s
      </p>
    </div>
  </div>
</template>