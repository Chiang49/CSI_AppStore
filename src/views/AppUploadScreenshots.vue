<template>
  <div class="container">
    <h1 class="title">AppStore - Upload Screenshots</h1>
    <div id="screenshotsContent" class="screenshotStyle">
      <Swiper
        :state="'edit'"
      ></Swiper>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/AppSwiper.vue';

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      screenshotWidth: 0,
      swiper: {
        swiperHeight: 0,
        slideWidth: 0,
      },
    };
  },
  mounted() {
    this.screenshotsContent();
  },
  methods: {
    // 要做動態取的父層寬度去算 swiper 高度
    screenshotsContent() {
      this.screenshotWidth = document.querySelector('#screenshotsContent').offsetWidth;
      this.swiper.slideWidth = (this.screenshotWidth - (24 * 2)) / 3;
      this.swiper.swiperHeight = (this.swiper.slideWidth / 9) * 16;
      console.log(this.screenshotWidth);
    },
  },
};
</script>
