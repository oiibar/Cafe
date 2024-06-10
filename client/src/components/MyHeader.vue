<template>
  <header class="bg-home text-white py-10 px-20">
    <div
      class="flex justify-between items-center text-center border-white border-2 p-4"
    >
      <a
        class="flex items-center text-center cursor-pointer justify-center gap-2"
        href="#home"
      >
        <p class="text-2xl font-bold">Caffein</p>
        <img :src="logo" alt="Logo" class="w-10" />
      </a>
      <nav class="flex gap-2 text-white/60 cursor-pointer">
        <div><a href="#home" class="link">Home</a></div>
        <div><a href="#menu" class="link">Menu</a></div>
        <div><a href="#review" class="link">Reviews</a></div>
        <div><a href="#news" class="link">News</a></div>
        <div><a href="#contact" class="link">Contact</a></div>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "../assets/logo.svg";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped></style>
