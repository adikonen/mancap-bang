import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useDark = defineStore('dark', () => {
  const isDark = ref<boolean>(localStorage.theme === 'dark')

  watchEffect(() => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  })

  function toggle(): void {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
})
