<script setup lang="ts">
import { Icon } from '@iconify/vue'
// import type { IBenefit } from '@/_data/benefit';

export interface IBenefitList {
  icon: string
}

defineProps<IBenefitList>()
</script>

<template>
  <li class="flex items-center gap-4 py-4 border-b-4 border-gray-500">
    <div class="bg-primary w-fit h-fit p-2 rounded-full">
      <Icon :icon="icon" height="28"></Icon>
    </div>
    <!-- <p class="font-bold">{{ text }}</p> -->
    <slot></slot>
  </li>
</template>
