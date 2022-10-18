<template>
  <AppHeader
    @sendMode="getMode"
  ></AppHeader>
  <router-view />
</template>

<style lang="scss">
@import './assets/style/all.scss';
</style>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      preferredTheme: '',
    };
  },
  created() {
    this.getLocalTheme();
  },
  methods: {
    // 從 localStorage 取得 mode
    getLocalTheme() {
      try {
        this.preferredTheme = localStorage.getItem('theme');
      } catch (err) {
        console.log(err);
      }
      this.setPreferredTheme(this.preferredTheme);
    },
    // 手動更改 mode
    getMode(mode) {
      this.setPreferredTheme(mode);
    },
    // 將 mode 寫入 localStorage 裡
    setPreferredTheme(newTheme) {
      try {
        if (newTheme !== this.preferredTheme) {
          localStorage.setItem('theme', newTheme);
        }
      } catch (err) {
        console.log(err);
      }
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
