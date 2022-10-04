<template>
  <div class="container">
    <h1 class="title">AppStore - Upload Screenshots</h1>
    <div id="screenshotsContent" class="slideWrap">
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
    };
  },
  methods: {
    // 要做動態取的父層寬度去算 swiper 高度
    screenshotsContent() {
      this.slideWrapHeight = document.querySelector('#screenshotsContent').offsetHeight;
      // this.slide.width = (this.screenshotWidth - (24 * 2)) / 3;
      // this.slide.height = (this.slide.width / 9) * 16;
    },
  },
};
</script>
