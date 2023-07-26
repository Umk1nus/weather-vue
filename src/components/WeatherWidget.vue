<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { API_KEY } from '@/constants'


@Options({
  components: {
    WeatherWidget,
  },
  data () {
    items: []
  },
  mounted() {
    async () => {
      // const b = await fetch()
    }
  }
})
export default class WeatherWidget extends Vue {}
</script>

<template>
  <p>sfsdfsdfsdf</p>
</template>
