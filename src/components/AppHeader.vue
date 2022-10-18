<template>
  <div class="appHeader">
    <nav class="container">
      <router-link to="/">Device</router-link>
      <router-link to="/UploadFile">UploadFile</router-link>
      <router-link to="/UploadScreenshots">Screenshots</router-link>
      <router-link to="/AppDrag">Drag</router-link>
      <router-link to="/AppTransition">Transition</router-link>
      <router-link to="/AppModeSwitch">Mode Switch</router-link>
    </nav>
    <label for="darkMode" :class="['switch', {'dark': isDark }]">
      <img src="../assets/icon/light_mode.svg" alt="light" class="switch-icon">
      <img src="../assets/icon/dark_mode.svg" alt="dark" class="switch-icon">
      <input
        type="checkbox"
        name="darkMode"
        id="darkMode"
        v-model="isDark"
        @click="changeMode"
        hidden
      >
      <div class="switch-btn"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
      mode: '',
    };
  },
  watch: {
    isDark() {
      this.mode = this.isDark ? 'dark' : 'ligth';
      this.$emit('sendMode', this.mode);
    },
  },
  created() {
    this.mode = localStorage.getItem('theme');
    this.isDark = this.mode === 'dark';
  },
  methods: {
  },
};
</script>
