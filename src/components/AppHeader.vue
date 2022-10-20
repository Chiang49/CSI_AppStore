<template>
  <div class="appHeader">
    <nav class="container">
      <router-link to="/">Device</router-link>
      <router-link to="/UploadFile">UploadFile</router-link>
      <router-link to="/UploadScreenshots">Screenshots</router-link>
      <router-link to="/AppDrag">Drag</router-link>
      <router-link to="/AppTransition">Transition</router-link>
      <router-link to="/AppQRCode">QRCode</router-link>
    </nav>
    <label for="darkMode" :class="['switch', {'dark': isDark }]">
      <img src="../assets/icon/light_mode.svg" alt="light" class="switch-icon">
      <img src="../assets/icon/dark_mode.svg" alt="dark" class="switch-icon">
      <input
        type="checkbox"
        name="darkMode"
        id="darkMode"
        v-model="isDark"
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
      preferredTheme: '',
    };
  },
  watch: {
    isDark() {
      this.preferredTheme = this.isDark ? 'dark' : 'ligth';
      this.setPreferredTheme(this.preferredTheme);
    },
  },
  created() {
    this.getLocalTheme();
  },
  methods: {
    // 從 localStorage 取得 mode
    getLocalTheme() {
      this.preferredTheme = localStorage.getItem('theme');
      this.preferredTheme = this.preferredTheme === null ? 'light' : this.preferredTheme;
      this.isDark = this.preferredTheme === 'dark';
      this.setPreferredTheme(this.preferredTheme);
    },

    // 將 mode 寫入 localStorage 裡
    setPreferredTheme(newTheme) {
      localStorage.setItem('theme', newTheme);
      this.setTheme(newTheme);
    },

    // 設定模式
    setTheme(newTheme) {
      if (newTheme !== document.body.className) {
        window.theme = newTheme;
        this.preferredTheme = newTheme;
        document.body.className = newTheme;
      }
    },
  },
};
</script>
