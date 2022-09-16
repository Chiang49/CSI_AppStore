<template>
  <div class="container">
    <h1>App List</h1>
    <div class="userDevice">
      <ul>
        <li>
          User Device System：<span>{{ userDevice }}</span>
        </li>
        <li>
          Mac Device：<span>{{ userMacDevice }}</span>
        </li>
      </ul>
    </div>
    <div class="testMsg">
      <h2>Console</h2>
      <p>{{ testMsg }}</p>
    </div>
  </div>
</template>

<script>
import { deviceList } from '@/script/deviceList';

export default {
  data() {
    return {
      // Test Data
      testMsg: '',
      // Formal Data
      userDevice: sessionStorage.getItem('userDevice'),
      userMacDevice: '',
    };
  },
  created() {
    this.getUserDeviceSys();
  },
  methods: {
    // 判別 user 裝置系統類別
    getUserDeviceSys() {
      const agentMsg = navigator.userAgent;
      this.testMsg = agentMsg; // Test Console
      if (this.userDevice === null) {
        deviceList.system.forEach((item) => {
          const flag = agentMsg.indexOf(item);
          if (flag > -1) {
            this.userDevice = item;
            sessionStorage.setItem('userDevice', item);
          }
        });
      }
      // 如果是 Mac 系統要在判別使用裝置
      if (this.userDevice === 'Mac OS') {
        this.getUserMacDevice(agentMsg);
      }
    },

    // 判別 user Mac 系統裝置類別
    getUserMacDevice(agentMsg) {
      deviceList.macList.forEach((item) => {
        const flag = agentMsg.indexOf(item);
        if (flag > -1) {
          this.userMacDevice = item;
        }
      });
      // sessionStorage.setItem('userMacDevice', this.userMacDevice);
    },
  },
};
</script>
