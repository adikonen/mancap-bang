<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { router } from '@/router'
import BenefitList from '@/components/BenefitList.vue'
import { useDark } from '@/stores/dark'
interface INav {
  route: string
  text: string
  icon: string
  isActive?: boolean
}

const open = ref(false)

const navlinkData: Array<INav> = [
  {
    route: '/',
    text: 'home',
    icon: 'mdi:home',
    isActive: router.currentRoute.value.path == '/'
  },
  {
    route: '#',
    text: 'Register',
    icon: 'mdi:door-open',
    isActive: router.currentRoute.value.path == '/register'
  }
]
const darkStore = useDark()
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Mancap Bang</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="open = !open"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <template v-for="link in navlinkData">
            <li>
              <RouterLink
                :to="link.route"
                :class="[
                  'nav-link nav-link__nonactive capitalize',
                  { 'text-primary': link.isActive }
                ]"
              >
                {{ link.text }}
              </RouterLink>
            </li>
          </template>
          <li>
            <button title="toggle dark mode" @click="darkStore.toggle()">
              <Icon icon="mdi:theme-light-dark" height="30"></Icon>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="block md:hidden dark:bg-gray-900 px-4 pb-8" v-show="open">
    <template v-for="link in navlinkData" :key="link.route">
      <BenefitList :icon="link.icon" text="Home">
        <RouterLink :to="link.route" class="block font-bold capitalize">
          {{ link.text }} <span v-if="link.isActive">(current)</span>
        </RouterLink>
      </BenefitList>
    </template>
  </div>
</template>
