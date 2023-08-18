<template>
  <div
    class="w-full h-[100vh] lg:bg-crew-desktop-img md:bg-crew-tablet-img bg-crew-mobile-img bg-cover bg-center">
    <BaseNav />

    <main class="md:container px-5 mt-12 text-white">
      <div class="text-xl uppercase tracking-wider text-center lg:text-left">
        <h1 class="mb-12">
          <span class="text-dark-gray mr-2"> 02 </span>
          Meet Your Crew
        </h1>
      </div>

      <section
        class="lg:mt-12 mt-7 text-white flex items-start lg:justify-between justify-center md:flex-col flex-col-reverse lg:flex-row gap-24 mb-16">
        <div class="flex-1 flex md:flex-col flex-col-reverse">
          <!-- CONTENT -->
          <div
            class="content lg:mt-24 mt-14 lg:text-left text-center pb-14 md:pb-3">
            <!-- MARK -->
            <div class="mark" v-show="selectedMember === 'mark'">
              <h1 class="text-2xl text-gray uppercase tracking-wide mb-6">
                Mission Specialist
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-6">
                Mark Shuttleworth
              </h1>
              <p class="text-gray tracking-wide pb-9">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>

            <!-- Victor -->
            <div class="victor" v-show="selectedMember === 'victor'">
              <h1 class="text-2xl text-gray uppercase tracking-wide mb-6">
                Pilot
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-6">
                Victor Glover
              </h1>
              <p class="text-gray tracking-wide pb-9">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>

            <!-- Douglas -->
            <div class="douglas" v-show="selectedMember === 'douglas'">
              <h1 class="text-2xl text-gray uppercase tracking-wide mb-6">
                Commander
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-6">
                Douglas Hurley
              </h1>
              <p class="text-gray tracking-wide pb-9">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          </div>

          <!-- TABS -->
          <div
            class="tabs flex lg:justify-start justify-center tracking-wider uppercase border-t-2 border-t-light-gray md:border-none py-9">
            <span
              class="inline-block w-4 h-4 rounded-full border-none cursor-pointer mr-4 hover:bg-dark-gray"
              :class="selectedMember === 'mark' ? 'bg-white' : 'bg-light-gray'"
              @click="selectedMember = 'mark'">
            </span>
            <span
              class="inline-block w-4 h-4 rounded-full border-none cursor-pointer mr-4 hover:bg-dark-gray"
              :class="
                selectedMember === 'victor' ? 'bg-white' : 'bg-light-gray'
              "
              @click="selectedMember = 'victor'">
            </span>
            <span
              class="inline-block w-4 h-4 rounded-full border-none cursor-pointer mr-4 hover:bg-dark-gray"
              :class="
                selectedMember === 'douglas' ? 'bg-white' : 'bg-light-gray'
              "
              @click="selectedMember = 'douglas'">
            </span>
          </div>
        </div>

        <!-- IMAGES -->
        <div class="flex-1 w-full flex justify-center pb-10 md:pb-0">
          <img
            src="../assets/crew/image-mark-shuttleworth.png"
            class="w-[400px]"
            v-show="selectedMember === 'mark'" />
          <img
            src="../assets/crew/image-douglas-hurley.png"
            class="w-[400px]"
            v-show="selectedMember === 'douglas'" />
          <img
            src="../assets/crew/image-victor-glover.png"
            class="w-[400px]"
            v-show="selectedMember === 'victor'" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import BaseNav from "@/components/BaseNav.vue";
import { ref } from "vue";

const selectedMember = ref("mark");
</script>
