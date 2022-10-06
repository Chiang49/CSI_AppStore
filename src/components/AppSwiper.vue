<template>
  <div class="slide">
    <div class="slide-header">
      <p>應用程式擷取畫面</p>
      <p>{{ `${photos.length} / 6` }}</p>
    </div>
    <transition-group
      name="slideDrag"
      tag="ul"
      class="slide-body"
      ref="slideBody"
    >
      <li v-for="(item, index) in photos"
          :key="item.locationPath"
          class="slide-item"
          :style="{ width: `${slideWidth}px`, height: `${slideHeight}px` }"
          draggable="true"
          @dragstart="dragstart(index)"
          @dragenter="dragenter(index)"
      >
        <img
          :src="item.locationPath"
          alt="TEST"
        />
        <button @click="deleteImg(index)">X</button>
      </li>
    </transition-group>
    <!-- 上傳按鈕 -->
    <label for="upload" class="uploadBtn">
      <input
        type="file"
        id="upload"
        accept="image/*"
        multiple
        ref="uploadScreenshot"
        @change="uploadScreenshot"
      />
      <span>+</span>
    </label>
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
      slideHeight: 0,
      photos: [],
      dragIndex: '',
    };
  },
  mounted() {
    // 取得 slide-body 高度
    this.slideHeight = this.$refs.slideBody.offsetHeight;
  },
  computed: {
    slideWidth() {
      return Number(((this.slideHeight / 16) * 9).toFixed(0));
    },
  },
  methods: {
    // 上傳
    uploadScreenshot() {
      const screenImgs = Array.from(this.$refs.uploadScreenshot.files);
      if (this.photos.length >= 6) {
        this.sweetAlert('warning', '圖片空間已達上限 6 張');
        return;
      }
      if (screenImgs.length > 6) {
        this.sweetAlert('warning', '上傳數量超過 6 張');
        return;
      }
      screenImgs.forEach((item) => {
        this.photos.push({
          locationPath: URL.createObjectURL(item),
        });
      });
    },
    // 移除截圖
    deleteImg(index) {
      this.photos.splice(index, 1);
    },
    // alert
    sweetAlert(icon, msg) {
      this.$swal.fire({
        icon,
        text: msg,
      });
    },

    // 被拖曳的 DOM
    dragstart(index) {
      this.dragIndex = index;
    },
    // 拖曳到的目標
    dragenter(index) {
      if (this.dragIndex !== index) {
        const move = this.photos[this.dragIndex];
        this.photos.splice(this.dragIndex, 1);
        this.photos.splice(index, 0, move);
        this.dragIndex = index;
      }
    },
  },
};
</script>
