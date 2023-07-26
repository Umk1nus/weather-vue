<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WeatherWidget from './components/WeatherWidget.vue';

@Options({
  components: {
    WeatherWidget,
  },
})
export default class App extends Vue {}
</script>

<template>
  <weather-widget/>
</template>

