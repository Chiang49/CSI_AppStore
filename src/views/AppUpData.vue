<template>
  <div class="container">
    <h1 class="title">AppStore - Upload File</h1>
    <ul>
      <li class="appFile"
        v-for="item in appInfo.files" :key="item">
        <UploadFile></UploadFile>
      </li>
    </ul>
    <button class="addFileBtn"
      @click="addUploadFile"
    > + 新增 OS 檔案</button>
  </div>
</template>

<script>
import UploadFile from '../components/AppUploadFile.vue';

export default {
  components: {
    UploadFile,
  },
  data() {
    return {
      appInfo: {
        files: [
          {},
        ],
      },
    };
  },
  methods: {
    addUploadFile() {
      this.appInfo.files.push({});
    },
  },
};
</script>
