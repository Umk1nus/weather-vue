<script lang="ts" setup>
import type { SettingsItemProps } from '../types'
import CloseIcon from '@heroicons/vue/24/solid/XCircleIcon'
import BarsIcon from '@heroicons/vue/24/solid/Bars3Icon'

defineProps<SettingsItemProps>()
</script>

<template>
  <div
    class="item"
    draggable="true"
    @dragstart="dragStartHandl(index)"
    @dragover="dragOverHandl"
    @drop="(e) => dropHandl(e, index)"
  >
    <span class="item__icon burger">
      <BarsIcon />
    </span>
    {{ weather }}
    <span class="item__icon delete" @click="deleteLocation(index)">
      <CloseIcon />
    </span>
  </div>
</template>