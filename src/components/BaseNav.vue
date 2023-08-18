<template>
  <header
    class="p-9 md:pl-9 md:pr-0 md:pt-0 lg:pt-12 flex items-baseline md:items-center justify-between">
    <div class="logo mr-12">
      <img src="@/assets/shared/logo.svg" alt="" />
    </div>
    <div
      class="flex-[2] line bg-[rgba(255,255,255,0.11)] backdrop-blur-sm h-[2px] w-100 mr-[-30px] z-10 lg:block hidden"></div>
    <nav
      class="lg:flex-[3] bg-[rgba(255,255,255,0.05)] backdrop-blur-md hidden md:flex items-center justify-start pt-9 lg:pl-16 px-9 uppercase text-white text-xs tracking-wider">
      <router-link
        to="/"
        class="inline-block ml-12 pb-9 hover:border-b-2 hover:border-dark-gray"
        :class="route.path === '/' ? 'border-b-2 border-white' : ''">
        <span class="hidden lg:inline-block"> 00 </span>
        Home
      </router-link>
      <router-link
        to="/destination"
        class="inline-block ml-12 pb-9 hover:border-b-2 hover:border-dark-gray"
        :class="route.path === '/destination' ? 'border-b-2 border-white' : ''">
        <span class="hidden lg:inline-block"> 01 </span>
        Destination
      </router-link>
      <router-link
        to="/crew"
        class="inline-block ml-12 pb-9 hover:border-b-2 hover:border-dark-gray"
        :class="route.path === '/crew' ? 'border-b-2 border-white' : ''">
        <span class="hidden lg:inline-block"> 02 </span>
        crew</router-link
      >
      <router-link
        to="/technology"
        class="inline-block ml-12 pb-9 hover:border-b-2 hover:border-dark-gray"
        :class="route.path === '/technology' ? 'border-b-2 border-white' : ''">
        <span class="hidden lg:inline-block"> 03 </span>
        technology</router-link
      >
    </nav>

    <div class="mobile-nav md:hidden text-white">
      <img
        src="../assets//shared/icon-hamburger.svg"
        alt=""
        class="w-[45px] cursor-pointer flex items-center"
        :class="!mobileNav ? 'inline-block' : 'hidden'"
        @click="mobileNav = true" />
      <nav
        class="absolute top-0 right-0 h-[100dvh] w-3/5 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm flex flex-col"
        :class="mobileNav ? 'flex' : 'hidden'">
        <img
          src="../assets/shared/icon-close.svg"
          alt=""
          class="w-[30px] h-[30px] absolute top-8 right-8 cursor-pointer"
          :class="!mobileNav ? 'hidden' : 'block'"
          @click="mobileNav = false" />

        <div class="absolute top-24 flex flex-col items-center">
          <router-link
            to="/"
            class="inline-block ml-12 pb-6 w-full mb-5 hover:border-b-2 hover:border-dark-gray"
            :class="route.path === '/' ? 'border-b-2 border-white' : ''"
            >00 Home
          </router-link>
          <router-link
            to="/destination"
            class="inline-block ml-12 pb-6 w-full mb-5 hover:border-b-2 hover:border-dark-gray"
            :class="
              route.path === '/destination' ? 'border-b-2 border-white' : ''
            "
            >01 Destination
          </router-link>
          <router-link
            to="/crew"
            class="inline-block ml-12 pb-6 w-full mb-5 hover:border-b-2 hover:border-dark-gray"
            :class="route.path === '/crew' ? 'border-b-2 border-white' : ''"
            >02 Crew
          </router-link>
          <router-link
            to="/technology"
            class="inline-block ml-12 pb-6 w-full mb-5 hover:border-b-2 hover:border-dark-gray"
            :class="
              route.path === '/technology' ? 'border-b-2 border-white' : ''
            "
            >03 Technology
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const mobileNav = ref(false);
</script>
