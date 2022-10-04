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
  },
};
</script>
