<template>
  <div class="container">
    <h1 class="title">AppStore - Upload File</h1>
    <div class="msgBox">
      <label for="uploadFile" class="flex-row-center">
        UploadFile：
        <template v-if="appType.icon !== null">
          <img class="systemIcon" :src="appType.icon" alt="App Type Icon">
        </template>
        <input type="file" id="uploadFile" name="uploadFile"
          class="uploadFile"
          ref="uploadFile"
          @change="getAppInfo">
      </label>
    </div>
    <div class="uploadFileCard">
      <template v-if="appInfo.icon !== ''">
        <img :src="appInfo.icon" alt="AppIcon">
      </template>
      <ul class="msgBox">
        <li v-for="(value, name) in appInfo" :key="name">
          <template v-if="(name !== 'expirationDate' || appType.type === 'ipa') && name !== 'icon'">
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
  </div>
</template>

<script>
import appleIcon from '../assets/icon/apple_icon.svg';
import androidIcon from '../assets/icon/android_icon.svg';

export default {
  data() {
    return {
      appType: {
        type: '',
        icon: null,
      },
      appInfo: {
        type: 'App Type',
        name: 'APP name',
        icon: '',
        version: 'APP version',
        expirationDate: 'iOS APP expirationDate',
      },
    };
  },
  methods: {
    getAppInfo() {
      const appFile = this.$refs.uploadFile.files[0];
      this.appType.type = appFile ? appFile.name.substring(appFile.name.length - 3) : '';
      if (this.appType.type === 'ipa' || this.appType.type === 'apk') {
        const AppInfoParser = require('app-info-parser');
        const parser = new AppInfoParser(appFile);
        parser.parse().then((res) => {
          // console.log('app info ----> ', res);
          switch (this.appType.type) {
            case 'ipa':
              this.appType.icon = appleIcon;
              this.appInfo = {
                type: this.appType.type,
                name: res.CFBundleName,
                icon: res.icon,
                version: res.CFBundleShortVersionString,
                expirationDate: this.$moment(res.mobileProvision.ExpirationDate).format('YYYY-MM-DD, hh:mm:ss'),
              };
              break;
            case 'apk':
              this.appType.icon = androidIcon;
              this.appInfo = {
                type: this.appType.type,
                name: res.application.label[0],
                icon: res.icon,
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
