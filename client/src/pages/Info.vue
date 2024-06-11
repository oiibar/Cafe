<template>
  <div
    class="bg-menu h-screen py-20 px-6 sm:px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div class="w-full container flex flex-col gap-20">
      <h1 class="text-5xl font-extrabold">{{ coffee.name }}</h1>
      <div class="flex justify-between items-center">
        <img :src="coffee.image_url" alt="Coffee Image" class="w-96" />
        <div class="flex flex-col gap-2 border-4 p-4">
          <p class="text-md">{{ coffee.description }}</p>
          <p class="text-3xl font-bold">{{ coffee.price }}$</p>
          <p class="text-xl font-bold">{{ coffee.region }}</p>
          <p class="text-xl font-bold">{{ coffee.weight }}g</p>
          <div class="flex items-center justify-center gap-1">
            <p class="text-xl font-bold">Roast Level:</p>
            <div class="flex items-center ml-2">
              <span v-for="n in maxRoastLevel" :key="n" class="mx-1">
                <span
                  v-if="n <= coffee.roast_level"
                  class="inline-block w-6 h-6 rounded-full bg-home"
                ></span>
                <span
                  v-else
                  class="inline-block w-6 h-6 rounded-full bg-white"
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coffee: {},
      maxRoastLevel: 6,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://fake-coffee-api.vercel.app/api/${this.id}`
      );
      this.coffee = response.data[0];
    } catch (error) {
      console.error(error);
      alert("Failed to fetch coffee details.");
    }
  },
};
</script>

<style scoped></style>
