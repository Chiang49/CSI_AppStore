<template>
  <div class="container">
    <h1 class="title">AppStore - Upload Screenshots</h1>
    <Swiper
      class="mySwiper"
      :slides-per-view = "3"
      :space-between = "12"
    >
      <SwiperSlide
        class="mySwiperSlide"
        v-for="photo in photos" :key="photo"
      >
        <img :src="photo" alt="screenshots">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import photo1 from '../assets/images/Test.jpg';
import photo2 from '../assets/images/Test2.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: [
        photo1, photo2,
      ],
    };
  },
};
</script>
