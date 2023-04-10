<script setup lang="ts">
import { Icon } from '@iconify/vue'

import Box from '@/components/Box.vue'
import Card from '@/components/Card.vue'
import BenefitList from '@/components/BenefitList.vue'

import { cardData, alumniCardData } from '@/_data/card'
import { benefitData } from '@/_data/benefit'
</script>

<template>
  <section id="welcome" class="md:grid md:md:grid-cols-2 lg:gap-16 md:gap-4">
    <div class="flex flex-col align-bottom justify-center">
      <h1 class="font-bold text-4xl leading-[2.8rem]">
        Learn Software Development from anywhere with
        <span class="text-primary font-bold">Mancap Bang</span>
      </h1>
      <p class="mt-4 font-semibold text-lg">
        <span class="text-primary font-bold">Mancap Bang</span> is Online Class for everyone from
        zero to hero. It's nice for who want good skill in software development, high salary or
        build own website for personal bussines. 1200+ people has learn in this platform.
      </p>
      <button type="button" class="btn btn-primary md:w-2/4 w-full p-4 mt-6 mr-2 mb-2">
        Get Started
      </button>
    </div>
    <div class="lg:px-4 hidden md:block">
      <Box>
        <img src="@/assets/images/learn.svg" alt="ss" />
      </Box>
    </div>
  </section>
  <section id="product" class="mt-6">
    <h4 class="text-center mb-6 font-bold text-2xl">Choose Class</h4>
    <div class="md:grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <template v-for="card in cardData" :key="card.title">
        <Card class="cursor-pointer mb-10 mx-auto">
          <div class="flex gap-4">
            <div class="bg-primary rounded-md p-3 w-fit h-fit relative top-[-1rem]">
              <Icon :icon="card.icon" height="30"></Icon>
            </div>
            <div class="flex flex-col">
              <h4 class="font-bold text-xl">{{ card.title }}</h4>
              <p class="text-gray-400 mt-1">{{ card.description }}</p>
              <a href="#" class="text-primary">Detail</a>
            </div>
          </div>
        </Card>
      </template>
    </div>
  </section>
  <section id="benefit">
    <h4 class="text-center mt-12 text-2xl font-bold">
      Benefit of <span class="text-primary">Mancap Bang</span>
    </h4>
    <div class="md:grid md:grid-cols-2 mt-4 gap-4">
      <div>
        <img src="@/assets/images/benefit.svg" />
      </div>
      <div class="mt-4 p-4">
        <ul v-for="benefit in benefitData" :key="benefit.text">
          <BenefitList :icon="benefit.icon">
            {{ benefit.text }}
          </BenefitList>
        </ul>
      </div>
    </div>
  </section>
  <section id="alumni-says">
    <h4 class="text-center mt-12 text-2xl font-bold mb-4">What Alumni Says</h4>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <template v-for="card in alumniCardData">
        <Card class="cursor-pointer mb-10">
          <div class="flex gap-4">
            <div>
              <img :src="card.image.src" :alt="card.image.alt" class="h-14" />
            </div>
            <div class="flex flex-col">
              <h4 class="font-bold text-xl">{{ card.title }}</h4>
              <p class="text-gray-400 mt-1">{{ card.description }}</p>
            </div>
          </div>
        </Card>
      </template>
    </div>
  </section>
  <section>
    <div class="flex flex-col items-center justify-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-32 mr-3" alt="Flowbite Logo" />
      <h2 class="text-2xl font-bold mt-4">Let's Join Class Today</h2>
      <p class="mt-2">Learn together with others</p>
      <button class="btn btn-primary mt-4">Register</button>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 5rem;
}
</style>
