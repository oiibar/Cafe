<template>
  <div id="news" class="bg-menu">
    <div class="px-20 py-16 flex items-center text-center justify-between">
      <h2 class="text-5xl font-extrabold w-96">Stay up to date on all news</h2>
      <div class="flex">
        <input type="text" class="p-4 w-80" placeholder="Email" />
        <button class="bg-home text-white p-2" @click="alert">
          <img :src="right_white" class="w-10" alt="->" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import right_white from "../assets/right_white.svg";
export default {
  data() {
    return {
      right_white,
    };
  },
  methods: {
    alert() {
      alert("In progress...");
    },
  },
};
</script>

<style lang="scss" scoped></style>
