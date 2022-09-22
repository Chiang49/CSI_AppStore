<template>
  <div class="container">
    <h1 class="title">AppStore - Upload File</h1>
    <ul>
      <li class="appFile"
        v-for="(item) in appInfo.files" :key="item.id">
        <UploadFile
          @sendAppInfo="getAppInfo"
          :propsAppInfo="item"
        ></UploadFile>
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
        files: [{}],
      },
    };
  },
  methods: {
    // add upload file component
    addUploadFile() {
      const lastFile = this.appInfo.files[this.appInfo.files.length - 1];
      if (Object.keys(lastFile).length !== 0) {
        this.appInfo.files.push({});
      } else {
        console.log('有一筆空物件可上傳檔案');
      }
    },
    // get AppUploadFile component data
    getAppInfo(AppData) {
      this.appInfo.files[this.appInfo.files.length - 1] = AppData;
      console.log(this.appInfo);
    },
  },
};
</script>
