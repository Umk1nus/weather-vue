<script lang="ts" setup>
import HeaderWidget from './HeaderWidget.vue'
import WeatherCard from './ui/WeatherCard.vue'
import MyLocation from './MyLocation.vue'
import { fetchWeatherData } from '@/helper'
import type { TWeather } from '@/types'
import type { Ref } from 'vue'
import { API_KEY, API_MAIN, API_VERSION } from '@/constants'
import { onBeforeMount, onUpdated, ref } from 'vue'

const weatherItems: Ref<TWeather[]> = ref([])
const geoLatitude: Ref<number> = ref(0)
const geoLongitude: Ref<number> = ref(0)
const currentIndex: Ref<number> = ref(0)
const errorMyLocation: Ref<string> = ref('')
const errorAddLocation: Ref<string> = ref('')

const addLocation = async (land: string) => {
  try {
    const data = await fetchWeatherData(`${API_MAIN}/${API_VERSION}/weather?q=${land}&units=metric&appid=${API_KEY}`)
    if (data.cod === 200) {
      if (!weatherItems.value.find(el => el.land === data.name)) {
        weatherItems.value.push({
          land: data?.name,
          temp: Math.round(data?.main?.temp),
          wind: Math.round(data?.wind?.speed),
          description: data.weather[0].description,
          id_weather: data.weather[0].icon.slice(0, -1)
        })
        errorAddLocation.value = ''
      } else {
        errorAddLocation.value = 'There is already a widget with this city'
      }
    } else {
      errorAddLocation.value = data.message
    }
  } catch (error) {
    console.error('Error adding location:', error)
  }
}

const deleteLocation = (index: number) => {
  weatherItems.value.splice(index, 1)
}

const handleDragStart = (index: number) => {
  currentIndex.value = index
}

const handleDragOver = (e: Event) => {
  e.preventDefault()
}

const handleDrop = (e: Event, index: number) => {
  e.preventDefault()
  if (Number.isInteger(index)) {
    [weatherItems.value[currentIndex.value], weatherItems.value[index]] = [weatherItems.value[index], weatherItems.value[currentIndex.value]]
  }
}

const fetchMyLocationWeather = async (key: string) => {
  try {
    const data = await fetchWeatherData(`${API_MAIN}/${API_VERSION}/onecall?lat=${geoLatitude.value}&lon=${geoLongitude.value}&appid=${key}`)
    if (data.code === 200) {
      localStorage.setItem('key', key)
      weatherItems.value.push({
        land: 'Your city',
        temp: Math.round(data?.current?.temp),
        wind: Math.round(data?.current?.wind_speed),
        description: data.current?.weather[0]?.description,
        id_weather: data.current?.weather[0]?.icon.slice(0, -1)
      })
      errorMyLocation.value = ''
    } else {
      errorMyLocation.value = data.message
    }
  } catch (error) {
    console.error('Error fetching weather for my location:', error)
  }
}

const initializeApp = () => {
  const weather = localStorage.getItem('weather')
  const coords = localStorage.getItem('coords')
  const key = localStorage.getItem('key')

  if (weather) {
    Array.from(JSON.parse(weather)).forEach(item => {
      if (item !== 'Your city') addLocation(item as string)
    })
  }

  if (coords) {
    const { latitude, long } = JSON.parse(coords)
    geoLatitude.value = latitude
    geoLongitude.value = long
  } else {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      geoLatitude.value = latitude
      geoLongitude.value = longitude
      localStorage.setItem('coords', JSON.stringify({ latitude, long: longitude }))
    })
  }

  if (key) fetchMyLocationWeather(key)
}

onBeforeMount(initializeApp)

onUpdated(() => {
  localStorage.setItem('weather', JSON.stringify(weatherItems.value.map(item => item.land)))
})
</script>

<template>
  <header-widget
    :addLocation="addLocation"
    :weatherItems="weatherItems.map(weather => weather.land)"
    :deleteLocation="deleteLocation"
    :dragStartHandl="handleDragStart"
    :dragOverHandl="handleDragOver"
    :dropHandl="handleDrop"
    :errorAddLocation="errorAddLocation"
  />
  <my-location :weatherMyLocation="fetchMyLocationWeather" :errorMyLocation="errorMyLocation"/>
  <div class="main">
    <weather-card v-for="(weather, index) in weatherItems"
      :key="index"
      :land="weather.land"
      :temp="weather.temp"
      :wind="weather.wind"
      :description="weather.description"
      :idWeather="weather.id_weather"
    />
  </div>
</template>
