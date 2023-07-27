<script lang="ts" setup>
import HeaderWidget from './HeaderWidget.vue'
import WeatherCard from './WeatherCard.vue'
import MyLocation from './MyLocation.vue'
import { API_KEY, API_MAIN, API_VERISON, API_VERSION_NEW } from '../constants'
import { Ref, onBeforeMount, onUpdated, ref } from 'vue';

type TWeather = {
  land: string,
  temp: number,
  wind: number,
  description: string
}

const weatherItems: Ref<TWeather[]> = ref([])
const geoLatitude: Ref<number> = ref(0)
const geoLongitude: Ref<number> = ref(0)
const currentIndex: Ref<number> = ref(0)
const errorMyLocation: Ref<string> = ref('')
const errorAddLocation: Ref<string> = ref('')

const addLocation = (land: string) => {
  fetch(`${API_MAIN}/${API_VERISON}/weather?q=${land}&units=metric&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        weatherItems.value.push({land: data?.name, temp: Math.round(data?.main?.temp), wind: Math.round(data?.wind?.speed), description: data.weather[0].description})
        errorAddLocation.value = ''
      } else {
        errorAddLocation.value = data.message
      }
    })
    .catch(error => console.error(error))
}

const deleteLocation = (index: number) => {
  weatherItems.value.splice(index, 1)
}

const dragStartHandl = (index: number) => {
  currentIndex.value = index
}

const dragOverHandl = (e: Event ) => {
  e.preventDefault()
}

const dropHandl = (e: Event, index: number) => {
  e.preventDefault()
  weatherItems.value[currentIndex.value]
  Number.isInteger(index) ? [weatherItems.value[currentIndex.value], weatherItems.value[index]] = [weatherItems.value[index], weatherItems.value[currentIndex.value]] : ''
}

const weatherMyLocation = (key: string) => {
  fetch(`${API_MAIN}/${API_VERSION_NEW}/onecall?lat=${geoLatitude.value}&lon=${geoLongitude.value}&appid=${key}`)
    .then(res => res.json())
    .then(data => {
      if(data.code === 200) {
        weatherItems.value.push({land: 'Your city', temp: Math.round(data?.current?.temp), wind: Math.round(data?.current?.wind_speed), description: data.current?.weather[0]?.description})
        errorMyLocation.value = ''
      } else errorMyLocation.value = data.message
    })
    .catch(error => console.error(error))
}

onBeforeMount(() => {
  const weather = localStorage.getItem('weather')
  const coords = localStorage.getItem('coords')
  weather && Array.from(JSON.parse(weather)).map(item => addLocation(item as string))

  if(coords) {
    const {latitude, long} = JSON.parse(coords)
    geoLatitude.value = latitude
    geoLongitude.value = long
  } else {
    navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords
    geoLatitude.value = latitude
    geoLongitude.value = longitude
    localStorage.setItem('coords', JSON.stringify({latitude: latitude, long: longitude}))
    })
  }
})

onUpdated(() => {
  localStorage.setItem('weather', JSON.stringify(weatherItems.value.map(item => item.land)))
})

</script>

<template>
  <header-widget 
    :addLocation="addLocation" 
    :weatherItems="weatherItems.map(weather => weather.land)"
    :deleteLocation="deleteLocation"
    :dragStartHandl="dragStartHandl"
    :dragOverHandl="dragOverHandl"
    :dropHandl="dropHandl"
    :errorAddLocation="errorAddLocation"
  />
  <my-location :weatherMyLocation="weatherMyLocation" :errorMyLocation="errorMyLocation"/>
  <div class="main">
    <weather-card v-for="weather, index in weatherItems"
      :key="index"
      :land="weather.land" 
      :temp="weather.temp" 
      :wind="weather.wind" 
      :description="weather.description"
    />
  </div>
</template>
