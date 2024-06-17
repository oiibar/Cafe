<template>
  <order-header></order-header>
  <div
    id="menu"
    class="bg-menu py-20 px-6 sm:px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div v-if="menu.length > 0" class="w-full max-w-2xl flex flex-col gap-4">
      <h1 class="text-5xl font-extrabold">Cart</h1>
      <p class="text-sm text-gray-600">Finalize your order here</p>
    </div>
    <div
      class="text-center flex items-center gap-6 flex-wrap"
      v-if="menu.length > 0"
    >
      <div class="border w-full p-6">
        <div
          v-for="item in menu"
          class="flex items-center gap-10 justify-between text-center"
        >
          <img :src="item.image_url" :key="item.id" class="w-60" alt="" />
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.weight }}g</p>
          </div>
          <div class="flex items-center gap-2">
            <button
              class="border rounded-full p-2 w-6 h-6 flex items-center justify-center"
            >
              -
            </button>
            <p>0</p>
            <button
              class="border rounded-full p-2 w-6 h-6 flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div>
            <p>{{ item.price }}$</p>
            <button class="border p-1">Remove</button>
          </div>
        </div>
        <hr class="py-2" />
        <div class="flex flex-col gap-2">
          <p class="text-3xl font-extrabold">Total: <span>87$</span></p>
          <button
            class="border font-bold rounded-md text-3xl w-fit mx-auto px-4 py-2 hover:bg-white hover:text-[#000] transition-colors ease-in-out duration-100"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="text-center bg-menu h-screen gap-2 flex justify-center items-center"
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
  </div>
</template>

<script>
import CoffeeCard from "@/components/CoffeeCard.vue";
import OrderHeader from "@/components/OrderHeader.vue";
import axios from "axios";

export default {
  components: { CoffeeCard, OrderHeader },
  data() {
    return {
      menu: [],
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://fake-coffee-api.vercel.app/api"
      );
      this.menu = response.data;
      this.isLoading = false;
    } catch (error) {
      alert(error);
    }
  },
};
</script>

<style scoped></style>
