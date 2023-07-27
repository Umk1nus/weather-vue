<script lang="ts" setup>
import CloseIcon from '@heroicons/vue/24/solid/XCircleIcon'
import BarsIcon from '@heroicons/vue/24/solid/Bars3Icon'

defineProps({
  weather: String,
  index: Number,
  deleteLocation: Function,
  dropHandl: Function,
  dragStartHandl: Function,
  dragOverHandl: Function
})


</script>

<template>
  <div 
    class="item" 
    draggable="true"
    @dragstart="dragStartHandl && dragStartHandl( index )" 
    @dragover="(e) => dragOverHandl && dragOverHandl(e)" 
    @drop="(e) => dropHandl && dropHandl(e, index )"
  >
    <span class="item__icon burger" >
      <bars-icon/>
    </span>
    {{ weather  }}
    <span class="item__icon delete" @click="deleteLocation && deleteLocation(index)"><close-icon/></span>
  </div>
</template>