<template>
  <div class="container">
    <h1 class="title">QR Code Test</h1>
    <ul class="row">
      <li class="col-sm-12 col-md-6">
        <h2 class="subTitle">One Url in QR Code</h2>
        <div class="options">
          <template  v-for="item in devices" :key="item.title">
            <label
              :for="item.title"
              :class="['options-item', {'speech-bubble': item.title === chooseDevice}]">
                <input
                  type="radio"
                  name="device"
                  :value="item.title"
                  :id="item.title"
                  v-model="chooseDevice"
                  hidden
                >
                <img :src="item.icon" alt="title">
                <span v-if="item.title === chooseDevice">{{ item.title }}</span>
            </label>
          </template>
        </div>
        <div class="uploadFile">
          <div class="uploadFile-header">
            <label for="qrcodeUrl">
              <span>QRCode Url：</span>
              <input
                type="text"
                name="qrcodeUrl"
                id="qrcodeUrl"
                class="fileName"
                v-model="dataUrl"
              >
            </label>
            <button class="labelTest" @click="createdOneUrlQRcode">Change Url</button>
          </div>
        </div>
        <div id="qrcode" ref="qrcode" class="qrcode"></div>
      </li>
      <li class="col-sm-12 col-md-6">
        <h2 class="subTitle strikethrough">QR Code (Multi-QR) Test</h2>
        <div class="uploadFile">
          <div class="uploadFile-header">
            <label for="qrcodeUrl">
              <span>Url：</span>
              <input
                type="text"
                name="qrcodeUrl"
                id="qrcodeUrl"
                class="fileName"
                v-model="urlTemp"
              >
            </label>
            <button class="labelTest" @click="pushUrlGroup">Push Url</button>
          </div>
        </div>
        <VueQrcode
          v-if="urlGroup.length > 0"
          :value="urlGroup"
          class="qrcode2"
          @change="createdMoreUrlQRCode"
        ></VueQrcode>
        <ul v-for="(item, index) in urlGroup" :key="index">
          <li>{{ item }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import VueQrcode from 'vue-qrcode';
import appleIcon from '../assets/icon/apple_icon.svg';
import androidIcon from '../assets/icon/android_icon.svg';
import windowsIcon from '../assets/icon/windows_icon.svg';
import xxxIcon from '../assets/icon/xxx_icon.svg';

export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      devices: [
        {
          icon: appleIcon,
          title: 'Apple',
        },
        {
          icon: androidIcon,
          title: 'Android',
        },
        {
          icon: windowsIcon,
          title: 'Windows',
        },
        {
          icon: xxxIcon,
          title: 'Xxxxx',
        },
      ],
      chooseDevice: 'Apple',
      // 單一網址 QR Code
      dataUrl: '',
      // 多網址 QR Code
      urlTemp: '',
      urlGroup: [],
    };
  },
  methods: {
    // 使用者選擇的裝置
    userChooseDevice() {
      console.log(this.chooseDevice);
    },
    // 產生單一 URL 的 QRCode
    createdOneUrlQRcode() {
      // QRCode.clear 方法無法正常執行，改用原生 JS 去清除他
      document.getElementById('qrcode').innerHTML = '';
      if (this.dataUrl !== '') {
        const qrcode = new QRCode(this.$refs.qrcode, {
          width: 128,
          height: 128,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H,
        });
        qrcode.makeCode(this.dataUrl);
      }
    },
    // 產生多組 URL 在 QR Code 裡面
    pushUrlGroup() {
      this.urlGroup.push({
        data: this.urlTemp,
        mode: 'android',
      });
      this.urlTemp = '';
      console.log(this.urlGroup);
    },
    // 產生多個 URL 的 QRCode
    createdMoreUrlQRCode() {
      console.log('check');
    },
  },
};
</script>
