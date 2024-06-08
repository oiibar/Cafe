<template>
  <div
    class="flex py-6 px-20 text-white bg-amber-950 items-center justify-center"
  >
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-5xl">Discover the perfect coffee</h1>
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ad
        dolorem maiores esse libero quia!
      </p>
      <div class="flex gap-2">
        <button class="bg-blue-500 text-white p-2">Order Now -></button>
        <button class="bg-blue-500 text-white p-2">Explore More</button>
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
    <div>
      <img :src="pic" alt="" />
    </div>
  </div>
</template>

<script>
import pic from "../assets/pic.png";
export default {
  data() {
    return {
      pic,
    };
  },
};
</script>

<style scoped></style>
