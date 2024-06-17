<template>
  <div class="bg-home text-white p-6 px-10 flex justify-between items-center">
    <div>
      <router-link
        class="flex items-center text-center cursor-pointer justify-center gap-2"
        to="/menu"
      >
        <p class="text-2xl font-bold">Caffein</p>
        <img :src="logo" alt="Logo" class="w-10" />
      </router-link>
    </div>
    <div class="relative">
      <img :src="cart" alt="Cart" class="w-8 cursor-pointer" />
      <div class="w-2 h-2 bg-[red] rounded-full absolute top-0 right-0"></div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
import cart from "@/assets/cart.svg";
export default {
  data() {
    return {
      logo,
      cart,
    };
  },
};
</script>

<style lang="scss" scoped></style>
