<template>
  <div class="container">
    <h1 class="title">AppStore - Upload Screenshots</h1>
    <div class="screenshots">
      <div class="screenshots-header">
        <p>Upload Screenshots</p>
        <p>{{`${photos.length} / 6`}}</p>
      </div>
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
          <img :src="photo.locationPath" alt="screenshots">
        </SwiperSlide>
      </Swiper>
      <label for="uploadScreenShots" class="uploadScreen">
        <input type="file"
              accept="image/*"
              id="uploadScreenShots"
              ref="uploadScreen"
              @change="uploadScreenShots"
        />
        <span>+</span>
      </label>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    uploadScreenShots() {
      if (this.photos.length < 6) {
        const screenShot = this.$refs.uploadScreen.files[0];
        const screenPath = URL.createObjectURL(screenShot);
        this.photos.push({
          locationPath: screenPath,
        });
      } else {
        this.$swal.fire({
          icon: 'warning',
          text: '已達上傳檔案上限 6 張',
        });
      }
    },
  },
};
</script>
