<template>
  <div
    id="home"
    class="flex px-20 py-10 text-white bg-home items-center justify-between"
  >
    <div class="flex flex-col w-1/2 gap-4">
      <h1 class="font-bold text-5xl">Discover the perfect coffee</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ad
        dolorem maiores esse libero quia!
      </p>
      <div class="flex gap-2">
        <button
          class="bg-transparent hover:bg-white border flex items-center hover:text-home p-2"
          @mouseover="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Order Now
          <img
            :src="isHovering ? right : right_white"
            class="w-6 transition-colors duration-300"
            alt="->"
          />
        </button>
        <button
          class="bg-transparent hover:bg-white border hover:text-home p-2"
        >
          Explore More
        </button>
      </div>
      <div class="flex items-center text-center gap-2 mt-10">
        <div class="flex flex-col items-center justify-center">
          <p class="font-bold text-xl">50+</p>
          <p class="text-sm">ITEM OF COFFEE</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="font-bold text-xl">20+</p>
          <p class="text-sm">Order Running</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="font-bold text-xl">2k+</p>
          <p class="text-sm">Happy Customers</p>
        </div>
      </div>
    </div>
    <div><img :src="pic" alt="Logo" class="w-96" /></div>
  </div>
</template>

<script>
import pic from "../assets/pic.png";
import right_white from "../assets/right_white.svg";
import right from "../assets/right.svg";
export default {
  data() {
    return {
      pic,
      right_white,
      right,
      isHovering: false,
    };
  },
};
</script>

<style scoped></style>
