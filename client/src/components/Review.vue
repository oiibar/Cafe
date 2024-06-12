<template>
  <div id="review" class="bg-review">
    <div
      class="px-20 py-16 font-bold text-center flex flex-col gap-16 items-center justify-center"
    >
      <h1 class="font-extrabold text-5xl">What our customers say</h1>
      <div class="flex items-center justify-center text-center gap-6">
        <div
          class="bg-menu p-2 cursor-pointer hover:bg-menu/60"
          @click="prevReview"
        >
          <img :src="left" alt="<-" class="w-10" />
        </div>
        <transition name="slide-fade" mode="out-in">
          <div
            key="currentIndex"
            class="bg-home w-1/2 p-10 flex flex-col gap-6 text-white text-md"
          >
            <div>
              <p class="text-2xl font-normal">
                {{ reviews[currentIndex].text }}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-center gap-2">
                <img
                  v-for="i in reviews[currentIndex].rating"
                  :key="i"
                  :src="star"
                  class="w-4"
                />
              </div>
              <div>
                <p>{{ reviews[currentIndex].author }}</p>
              </div>
            </div>
          </div>
        </transition>
        <div
          class="bg-menu p-2 cursor-pointer hover:bg-menu/60"
          @click="nextReview"
        >
          <img :src="right" alt="->" class="w-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "../assets/star.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";

export default {
  data() {
    return {
      star,
      right,
      left,
      currentIndex: 0,
      reviews: [
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, perspiciatis labore doloribus accusantium voluptates aliquam repudiandae ipsa voluptas laudantium! Sit?",
          rating: 5,
          author: "CXV",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, perspiciatis labore doloribus accusantium voluptates aliquam repudiandae ipsa voluptas laudantium! Sit?",
          rating: 4,
          author: "John Doe",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, perspiciatis labore doloribus accusantium voluptates aliquam repudiandae ipsa voluptas laudantium! Sit?",
          rating: 3,
          author: "Jane Smith",
        },
      ],
    };
  },
  methods: {
    nextReview() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevReview() {
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
  },
};
</script>

<style scoped></style>
