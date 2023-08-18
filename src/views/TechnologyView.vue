<template>
  <div
    class="w-full lg:bg-tech-desktop-img md:bg-tech-tablet-img bg-tech-mobile-img bg-cover bg-center pb-8">
    <BaseNav />

    <main class="lg:pl-28 lg:pr-0 mt-12 text-white">
      <div class="text-xl uppercase tracking-wider text-center lg:text-left">
        <h1 class="mb-12">
          <span class="text-dark-gray mr-2"> 03 </span>
          Space launch 101
        </h1>
      </div>

      <section
        class="lg:mt-9 mt-7 text-white flex lg:justify-between items-center justify-center flex-col-reverse lg:flex-row gap-24 mb-16">
        <div class="flex-1 flex flex-col lg:flex-row gap-16">
          <!-- TABS -->
          <div
            class="tabs flex lg:flex-col flex-row justify-center gap-9 text-xl">
            <span
              class="w-14 h-14 rounded-full border border-dark-gray cursor-pointer flex items-center justify-center"
              :class="
                selectedSpace === 'vehicle'
                  ? 'bg-white text-black'
                  : 'transparent text-white'
              "
              @click="selectedSpace = 'vehicle'">
              1
            </span>
            <span
              class="w-14 h-14 rounded-full border border-dark-gray cursor-pointer flex items-center justify-center"
              :class="
                selectedSpace === 'spaceport'
                  ? 'bg-white text-black'
                  : 'transparent text-white'
              "
              @click="selectedSpace = 'spaceport'">
              2
            </span>
            <span
              class="w-14 h-14 rounded-full border border-dark-gray cursor-pointer flex items-center justify-center"
              :class="
                selectedSpace === 'capsule'
                  ? 'bg-white text-black'
                  : 'transparent text-white'
              "
              @click="selectedSpace = 'capsule'">
              3
            </span>
          </div>

          <!-- CONTENT -->
          <div
            class="content mt-14 lg:text-left text-center pb-14 md:pb-3 px-9 lg:px-0">
            <!-- vehicle -->
            <div class="vehicle" v-show="selectedSpace === 'vehicle'">
              <h1 class="text-gray uppercase tracking-wide mb-4">
                The terminology...
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-3">
                Launch vehicle
              </h1>
              <p class="text-gray tracking-wide pb-9">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>

            <!-- spaceport -->
            <div class="vehicle" v-show="selectedSpace === 'spaceport'">
              <h1 class="text-gray uppercase tracking-wide mb-4">
                The terminology...
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-3">Spaceport</h1>
              <p class="text-gray tracking-wide pb-9">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>

            <!-- capsule -->
            <div class="vehicle" v-show="selectedSpace === 'capsule'">
              <h1 class="text-gray uppercase tracking-wide mb-4">
                The terminology...
              </h1>
              <h1 class="text-4xl uppercase tracking-wide mb-3">
                Space capsule
              </h1>
              <p class="text-gray tracking-wide pb-9">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>
        </div>

        <!-- IMAGES -->
        <div
          class="flex-1 w-full flex lg:justify-end justify-center pb-10 md:pb-0">
          <img
            src="../assets/technology/image-launch-vehicle-portrait.jpg"
            class="w-[400px] hidden lg:block"
            v-show="selectedSpace === 'vehicle'" />
          <img
            src="../assets/technology/image-launch-vehicle-landscape.jpg"
            class="w-full block lg:hidden"
            v-show="selectedSpace === 'vehicle'" />
          <img
            src="../assets/technology/image-spaceport-portrait.jpg"
            class="w-[400px] hidden lg:block"
            v-show="selectedSpace === 'spaceport'" />
          <img
            src="../assets/technology/image-spaceport-landscape.jpg"
            class="w-full block lg:hidden"
            v-show="selectedSpace === 'spaceport'" />
          <img
            src="../assets/technology/image-space-capsule-portrait.jpg"
            class="w-[400px] hidden lg:block"
            v-show="selectedSpace === 'capsule'" />
          <img
            src="../assets/technology/image-space-capsule-landscape.jpg"
            class="w-full block lg:hidden object-contain"
            v-show="selectedSpace === 'capsule'" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import BaseNav from "@/components/BaseNav.vue";
import { ref } from "vue";

const selectedSpace = ref("vehicle");
</script>
