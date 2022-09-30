<template>
  <div class="screenshots">
    <div class="screenshots-header">
      <p>Upload Screenshots</p>
      <p>{{ `${photos.length}/ 6` }}</p>
    </div>
    <transition-group
      name="drag"
      class=""
      tag="ul"
    >
      <li v-for="item in photos" :key="item.locationPath">
        <img :src="item.locationPath" alt="">
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true,
      default: 'view',
    },
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    // upload ScreenShots
    uploadScreenShots() {
      if (this.photos.length < 6) {
        const screenShot = this.$refs.uploadScreenBtn.files[0];
        const screenPath = screenShot ? URL.createObjectURL(screenShot) : '';
        if (screenPath !== '') {
          this.photos.push({
            locationPath: screenPath,
          });
        }
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
