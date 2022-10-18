<template>
  <AppHeader></AppHeader>
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
    };
  },
};
</script>
