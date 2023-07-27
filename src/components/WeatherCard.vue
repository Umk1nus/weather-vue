<script lang="ts" setup>
defineProps({
  land: String,
  temp: Number,
  wind: Number,
  description: String,
})
</script>

<template>
  <div class="card" :class="temp && temp >= 20 ? 'hot': 'cold'">
    <h3 class="card__title">{{ land }}</h3>
    <p class="card__temp">{{temp}}</p>
    <p class="card__description">{{ description }}</p>
    <div>
      <p>Wind: {{ wind }} m/s</p>
    </div>
  </div>
</template>