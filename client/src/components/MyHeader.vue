<template>
  <header
    class="flex justify-between items-center text-center bg-amber-950 text-white p-4"
  >
    <div class="flex items-center text-center justify-center gap-2">
      <p class="text-lg font-bold">Caffein</p>
      <img :src="logo" alt="Logo" class="w-6" />
    </div>
    <nav class="flex gap-2">
      <div>Home</div>
      <div>Menu</div>
      <div>Contact</div>
    </nav>
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
