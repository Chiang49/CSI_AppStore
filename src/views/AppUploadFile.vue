<template>
  <div class="container">
    <h1 class="title">AppStore - Upload File</h1>
    <div class="msgBox">
      <label for="uploadFile">
        UploadFile：
        <input type="file" id="uploadFile" name="uploadFile"
          ref="uploadFile"
          @change="getAppInfo">
      </label>
    </div>
    <ul class="msgBox">
      <li v-for="(value, name) in appInfo" :key="name">
        <template v-if="name !== 'expirationDate' || appType === 'ipa'">
          <label for="appName">
            {{ name }}：
            <input type="text" id="appName" name="appName" class="appInfo"
              disabled
              :placeholder="value">
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appType: '',
      appInfo: {
        type: 'App Type',
        name: 'APP name',
        version: 'APP version',
        expirationDate: 'iOS APP expirationDate',
      },
    };
  },
  methods: {
    getAppInfo() {
      const appFile = this.$refs.uploadFile.files[0];
      this.appType = appFile ? appFile.name.substring(appFile.name.length - 3) : '';
      if (this.appType === 'ipa' || this.appType === 'apk') {
        const AppInfoParser = require('app-info-parser');
        const parser = new AppInfoParser(appFile);
        parser.parse().then((res) => {
          // console.log('app info ----> ', res);
          switch (this.appType) {
            case 'ipa':
              this.appInfo = {
                type: this.appType,
                name: res.CFBundleName,
                version: res.CFBundleShortVersionString,
                expirationDate: this.$moment(res.mobileProvision.ExpirationDate).format('YYYY-MM-DD, hh:mm:ss'),
              };
              break;
            case 'apk':
              this.appInfo = {
                type: this.appType,
                name: res.application.label[0],
                version: res.versionName,
                expirationDate: 'apk have not expirationDate',
              };
              break;
            // no default
          }
        }).catch((err) => {
          console.log('err ----> ', err);
        });
      } else {
        console.log('請確認上傳檔案的格式是否正確');
      }
    },
  },
};
</script>
