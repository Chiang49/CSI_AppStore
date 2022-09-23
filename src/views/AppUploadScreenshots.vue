<template>
  <div class="container">
    <h1 class="title">AppStore - Upload Screenshots</h1>
    <Swiper
      class="mySwiper"
      :slides-per-view = "3"
      :height = "100"
      :space-between = "24"
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
import photo1 from '../assets/images/Test1.jpg';
import photo2 from '../assets/images/Test2.jpg';
import photo3 from '../assets/images/Test3.jpg';
import photo4 from '../assets/images/Test4.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: [
        photo1, photo2, photo3, photo4,
      ],
    };
  },
};
</script>
