<template>
  <div class="uploadFile">
    <div class="uploadFile-header">
      <label for="uploadFile" class="flex-row-center">
        UploadFile：
        <template v-if="appInfo?.type !== undefined">
          <img
            class="systemIcon"
            :src="`${appInfo?.type === 'ipa' ? appTypeIcos.appleIcon : appTypeIcos.androidIcon}`"
            alt="App Type Icon"
          />
        </template>
        <input
          type="file"
          id="uploadFile"
          name="uploadFile"
          class="uploadFile"
          ref="uploadFile"
          @change="getAppInfo"
        />
      </label>
    </div>
    <div class="uploadFile-body">
      <template v-if="appInfo.icon !== undefined">
        <img :src="appInfo.icon" alt="AppIcon" />
      </template>
      <ul class="msgBox">
        <li v-for="(value, name) in appInfo" :key="name">
          <template
            v-if="
              (name !== 'expirationDate' || appInfo.type === 'ipa') &&
              name !== 'icon' &&
              name !== 'type'
            "
          >
            <label :for="name">
              {{ name }}：
              <input
                type="text"
                :id="name"
                :name="name"
                :class="{'appInfoInput': value !== null}"
                :disabled="value !== null"
                :placeholder="name === 'content' ? '請輸入更新內容' : value === null ? '未有資訊請自行填寫' : ''"
                :value="value"
              />
            </label>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// APP System Icon
import appleIcon from '../assets/icon/apple_icon.svg';
import androidIcon from '../assets/icon/android_icon.svg';

// msg set
import { noValueMsg } from '../script/deviceList';

export default {
  data() {
    return {
      appTypeIcos: {
        appleIcon,
        androidIcon,
      },
      appInfo: {},
    };
  },
  methods: {
    getAppInfo() {
      const appFile = this.$refs.uploadFile.files[0] ? this.$refs.uploadFile.files[0] : null;
      const appType = appFile !== null ? appFile.name.substring(appFile.name.length - 3) : '';
      if (appType === 'ipa' || appType === 'apk') {
        this.appInfo.type = appType;
        this.appInfo.size = `${(appFile.size / 1024 / 1024).toFixed(2)} MB`;
        const AppInfoParser = require('app-info-parser');
        const parser = new AppInfoParser(appFile);
        parser
          .parse()
          .then((res) => {
            // console.log('app info ----> ', res);
            switch (appType) {
              case 'ipa':
                this.appInfo.name = res.CFBundleName ? res.CFBundleName : null;
                this.appInfo.icon = res.icon;
                this.appInfo.version = res.CFBundleShortVersionString
                  ? res.CFBundleShortVersionString
                  : null;
                this.appInfo.expirationDate = res.mobileProvision.ExpirationDate
                  ? this.$moment(res.mobileProvision.ExpirationDate).format('YYYY-MM-DD, hh:mm:ss')
                  : null;
                break;
              case 'apk':
                this.appInfo.name = res.application.label ? res.application.label[0] : null;
                this.appInfo.icon = res.icon;
                this.appInfo.version = res.versionName ? res.versionName : null;
                this.appInfo.expirationDate = `apk ${noValueMsg.noExpirationDate}`;
                break;
              // no default
            }
          })
          .catch((err) => {
            console.log('err ----> ', err);
          });
      } else {
        console.log('上傳檔案格式錯誤或未上傳檔案');
      }
    },
  },
};
</script>
