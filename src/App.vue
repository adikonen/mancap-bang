<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
<template>
  <TheNavbar></TheNavbar>
  <div class="px-10 py-8 max-w-screen-xl w-full mx-auto">
    <RouterView></RouterView>
  </div>
  <TheFooter></TheFooter>
</template>
