<template>
  <div
    class="flex flex-col text-center items-center justify-center border-2 border-black w-1/3 flex-wrap"
  >
    <div class="p-4 flex flex-col justify-center items-center">
      <img :src="item.image_url" class="w-60" alt="Coffee Image" />
      <p class="text-3xl font-bold">{{ item.name }}</p>
      <p class="text-md">{{ item.price }}$</p>
    </div>
    <button class="bg-btn w-full p-4 border-t-2 font-bold text-xl">
      <router-link :to="`/info/${item.id}`" class="text-blue-500 underline">
        View Details
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
