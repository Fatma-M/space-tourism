<template>
  <div
    class="w-full h-full lg:bg-destination-desktop-img md:bg-destination-tablet-img bg-destination-mobile-img bg-cover bg-center pb-24">
    <BaseNav />

    <main class="md:container px-5 mt-12 text-white">
      <div class="text-xl uppercase tracking-wider text-center lg:text-left">
        <h1 class="mb-12">
          <span class="text-dark-gray mr-2"> 01 </span>
          Pick your destination
        </h1>
      </div>

      <section
        class="lg:container mt-12 text-white flex items-start lg:justify-between justify-center flex-col lg:flex-row gap-36">
        <div class="flex-1 w-full flex justify-center">
          <img
            src="../assets/destination/image-moon.png"
            class="w-[400px] animate-pulse hover:animate-none"
            v-show="selectedDestination === 'moon'" />
          <img
            src="../assets/destination/image-mars.png"
            class="w-[400px] animate-pulse hover:animate-none"
            v-show="selectedDestination === 'mars'" />
          <img
            src="../assets/destination/image-titan.png"
            class="w-[400px] animate-pulse hover:animate-none"
            v-show="selectedDestination === 'titan'" />
          <img
            src="../assets/destination/image-europa.png"
            class="w-[400px] animate-pulse hover:animate-none"
            v-show="selectedDestination === 'europa'" />
        </div>

        <div class="flex-1 flex flex-col">
          <div
            class="tabs flex lg:justify-start justify-center tracking-wider uppercase">
            <span
              class="inline-block pb-2 mb-5 cursor-pointer hover:border-b-2 hover:border-dark-gray"
              :class="
                selectedDestination === 'moon' ? 'border-b-2 border-white' : ''
              "
              @click="selectedDestination = 'moon'">
              moon
            </span>
            <span
              class="inline-block md:ml-12 ml-7 pb-2 mb-5 cursor-pointer hover:border-b-2 hover:border-dark-gray"
              :class="
                selectedDestination === 'mars' ? 'border-b-2 border-white' : ''
              "
              @click="selectedDestination = 'mars'">
              Mars
            </span>
            <span
              class="inline-block md:ml-12 ml-7 pb-2 mb-5 cursor-pointer hover:border-b-2 hover:border-dark-gray"
              :class="
                selectedDestination === 'europa'
                  ? 'border-b-2 border-white'
                  : ''
              "
              @click="selectedDestination = 'europa'">
              Europa
            </span>
            <span
              class="inline-block md:ml-12 ml-7 pb-2 mb-5 cursor-pointer hover:border-b-2 hover:border-dark-gray"
              :class="
                selectedDestination === 'titan' ? 'border-b-2 border-white' : ''
              "
              @click="selectedDestination = 'titan'">
              Titan
            </span>
          </div>
          <div class="content mt-3 lg:text-left text-center">
            <!-- MOON -->
            <div class="moon" v-show="selectedDestination === 'moon'">
              <h1 class="text-7xl uppercase tracking-wider mb-6">moon</h1>
              <p
                class="text-gray tracking-wide pb-9 border-b-2 border-b-light-gray">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div
                class="flex lg:justify-between justify-center gap-24 items-center lg:pr-12">
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Avg. distance</span>
                  <span class="text-xl tracking-widest"> 384,400 km</span>
                </div>
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Est. travel time</span>
                  <span class="text-xl tracking-widest"> 3 days</span>
                </div>
              </div>
            </div>

            <!-- MARS -->
            <div class="mars" v-show="selectedDestination === 'mars'">
              <h1 class="text-7xl uppercase tracking-wider mb-6">mars</h1>
              <p
                class="text-gray tracking-wide pb-9 border-b-2 border-b-light-gray">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div
                class="flex lg:justify-between justify-center gap-24 items-center lg:pr-12">
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Avg. distance</span>
                  <span class="text-xl tracking-widest"> 225 mil. km</span>
                </div>
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Est. travel time</span>
                  <span class="text-xl tracking-widest"> 9 months</span>
                </div>
              </div>
            </div>

            <!-- EUROPA -->
            <div class="mars" v-show="selectedDestination === 'europa'">
              <h1 class="text-7xl uppercase tracking-wider mb-6">europa</h1>
              <p
                class="text-gray tracking-wide pb-9 border-b-2 border-b-light-gray">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div
                class="flex lg:justify-between justify-center gap-24 items-center lg:pr-12">
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Avg. distance</span>
                  <span class="text-xl tracking-widest"> 628 mil. km</span>
                </div>
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Est. travel time</span>
                  <span class="text-xl tracking-widest"> 3 years</span>
                </div>
              </div>
            </div>

            <!-- TITAN -->
            <div class="mars" v-show="selectedDestination === 'titan'">
              <h1 class="text-7xl uppercase tracking-wider mb-6">titan</h1>
              <p
                class="text-gray tracking-wide pb-9 border-b-2 border-b-light-gray">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div
                class="flex lg:justify-between justify-center gap-24 items-center lg:pr-12">
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Avg. distance</span>
                  <span class="text-xl tracking-widest"> 1.6 bil. km</span>
                </div>
                <div
                  class="flex flex-col items-start justify-between mt-5 uppercase">
                  <span class="text-gray text-xs"> Est. travel time</span>
                  <span class="text-xl tracking-widest"> 7 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import BaseNav from "@/components/BaseNav.vue";
import { ref } from "vue";

const selectedDestination = ref("moon");
</script>
