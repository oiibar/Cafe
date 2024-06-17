<template>
  <div class="bg-home text-white p-6 px-10 flex justify-between items-center">
    <div>
      <a
        class="flex items-center text-center cursor-pointer justify-center gap-2"
        href=""
      >
        <p class="text-2xl font-bold">Caffein</p>
        <img :src="logo" alt="Logo" class="w-10" />
      </a>
    </div>
    <div class="relative">
      <img :src="cart" alt="Cart" class="w-8 cursor-pointer" />
      <div class="w-2 h-2 bg-[red] rounded-full absolute top-0 right-0"></div>
    </div>
  </div>
  <div
    class="bg-menu h-screen py-20 px-6 sm:px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div
      v-if="isLoading"
      class="w-full container flex gap-4 items-center justify-center"
    >
      <div class="text-5xl font-bold text-[#000]">Loading</div>
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="blue"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="white"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else class="w-full container flex flex-col gap-20">
      <h1 class="text-5xl font-extrabold">{{ coffee.name }}</h1>
      <div class="flex justify-between items-center">
        <img :src="coffee.image_url" alt="Coffee Image" class="w-96" />
        <div class="flex flex-col gap-1 border-4 p-4">
          <p class="text-md">{{ coffee.description }}</p>
          <p class="text-3xl font-bold">{{ coffee.price }}$</p>
          <p class="text-md font-bold">{{ coffee.region }}</p>
          <p class="text-md font-bold">{{ coffee.weight }}g</p>
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
          <button
            class="border font-bold rounded-md text-3xl w-fit mx-auto px-4 py-2 hover:bg-white hover:text-[#000] transition-colors ease-in-out duration-100"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import logo from "@/assets/logo.svg";
import cart from "@/assets/cart.svg";

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
      maxRoastLevel: 5,
      logo,
      cart,
      isLoading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://fake-coffee-api.vercel.app/api/${this.id}`
      );
      this.coffee = response.data[0];
      this.isLoading = false; // Use equals sign here
    } catch (error) {
      console.error(error);
      alert("Failed to fetch coffee details.");
      this.isLoading = false; // Make sure to set loading to false on error as well
    }
  },
};
</script>

<style scoped></style>
