<template>
  <div
    class="w-full min-h-[100vh] lg:bg-home-desktop-img md:bg-home-tablet-img bg-home-mobile-img bg-cover bg-center">
    <BaseNav />
    <main
      class="container mt-28 text-white flex items-center justify-between flex-col lg:flex-row">
      <div
        class="flex flex-col lg:items-start items-center justify-between lg:w-2/4">
        <p
          class="text-gray lg:text-lg text-center lg:text-left tracking-wider lg:w-3/4 mb-5 uppercase text-2xl">
          So, you want to travel to
        </p>
        <h1 class="uppercase text-8xl tracking-wider mb-7">space</h1>
        <p
          class="text-gray lg:text-lg text-xl text-center lg:text-left tracking-wide lg:w-3/4 mb-24 lg:mb-12">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div class="flex justify-center h-full pt-20">
        <span
          class="text-4xl text-black flex items-center justify-center w-[200px] h-[200px] bg-white rounded-full mb-24 lg:mb-12 hover:animate-spin cursor-pointer">
          <router-link to="/destination"> Explore </router-link>
        </span>
      </div>
    </main>
  </div>
</template>

<script setup>
import BaseNav from "@/components/BaseNav.vue";
</script>
