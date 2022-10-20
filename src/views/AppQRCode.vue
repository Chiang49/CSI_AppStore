<template>
  <div class="container">
    <h1 class="title">QR Code Test</h1>
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
        <button class="labelTest" @click="createdQRcode">Change Url</button>
      </div>
    </div>
    <div id="qrcode" ref="qrcode" class="qrcode"></div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';

export default {
  data() {
    return {
      // qrcode: null,
      dataUrl: '',
    };
  },
  methods: {
    createdQRcode() {
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
  },
};
</script>
