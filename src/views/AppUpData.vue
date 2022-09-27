<template>
  <div class="container">
    <h1 class="title">AppStore - Upload File</h1>
    <ul>
      <li class="appFile"
        v-for="(item, index) in appInfo.files" :key="item.id">
        <UploadFile
          @sendAppInfo="getAppInfo"
          :propsAppInfo="item"
          :appIndex="index"
        ></UploadFile>
      </li>
    </ul>

    <UpdateContent @sendUpdateText="getUpdataContent"></UpdateContent>

    <button class="addFileBtn"
      @click="addUploadFile"
    > + 新增 OS 檔案</button>

    <div class="msgBox">
      <h2 class="subTitle">JSON</h2>
      <p>{{ appInfo }}</p>
    </div>
  </div>
</template>

<script>
import UploadFile from '../components/AppUploadFile.vue';
import UpdateContent from '../components/AppUpdateContent.vue';

export default {
  components: {
    UploadFile,
    UpdateContent,
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
        this.$swal.fire({
          icon: 'warning',
          text: '已有一筆空間可上傳',
        });
      }
    },
    // get AppUploadFile component data
    getAppInfo(AppData) {
      this.appInfo.files[this.appInfo.files.length - 1] = AppData;
    },
    // get Updata content
    getUpdataContent(updateText) {
      this.appInfo.updateContent = updateText;
    },
  },
};
</script>
