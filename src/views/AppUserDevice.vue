<template>
  <div class="container">
    <h1 class="title">AppStore - User Device</h1>
    <ul class="msgBox">
      <li>
        User Device System：<span class="userDevice">{{ userDevice }}</span>
      </li>
      <li v-if="userDevice === 'Mac OS'">
        Mac Device：<span class="userDevice">{{ userMacDevice }}</span>
      </li>
    </ul>
    <div class="msgBox">
      <h2 class="subTitle">Console</h2>
      <ul>
        <li v-for="(value, name) in consoleLogMsg" :key="name">
          <template v-if="value !== null">
            {{ name }}：<br /><span class="msgLog">{{ value }}</span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { deviceList } from '@/script/deviceList';

export default {
  data() {
    return {
      // console.log Msg =======================================
      consoleLogMsg: {
        userAgent: null,
        check1: null,
        check2: null,
        check3: null,
        check4: null,
        check5: null,
        iosQuirkPresent: null,
        isTouchScreen: null,
        check6: null,
      },

      // Formal Data ===========================================
      userDevice: sessionStorage.getItem('userDevice'),
      userMacDevice: sessionStorage.getItem('userMacDevice'),
    };
  },
  created() {
    this.getUserDeviceSys();
  },
  methods: {
    // 判別 user 裝置系統類別
    getUserDeviceSys() {
      const agentMsg = navigator.userAgent;
      this.consoleLogMsg.userAgent = agentMsg; // console.log
      if (this.userDevice === null) {
        this.consoleLogMsg.check1 = 'Enter user device decide function'; // console.log
        deviceList.system.forEach((item) => {
          const flag = agentMsg.indexOf(item);
          if (flag > -1) {
            this.consoleLogMsg.check2 = 'Succeed get user device'; // console.log
            this.userDevice = item;
            sessionStorage.setItem('userDevice', item);
          }
        });
      }
      if (this.userDevice === 'Mac OS') {
        this.getUserMacDevice(agentMsg);
      }
    },

    // 判別 user Mac 系統裝置類別
    getUserMacDevice(agentMsg) {
      this.consoleLogMsg.check3 = 'Enter user Mac device decide function'; // console.log
      deviceList.macList.forEach((item) => {
        const flag = agentMsg.indexOf(item);
        if (flag > -1) {
          this.userMacDevice = item;
          this.consoleLogMsg.check4 = 'Succeed get user Mac device'; // console.log
        }
      });
      if (this.userMacDevice === null) {
        this.consoleLogMsg.check5 = 'Enter user Mac device other decide function'; // console.log
        const iosQuirkPresent = () => {
          const audio = new Audio();
          audio.volume = 0.5;
          return audio.volume === 1;
        };
        this.consoleLogMsg.iosQuirkPresent = iosQuirkPresent(); // console.log
        const isTouchScreen = navigator.maxTouchPoints >= 1;
        this.consoleLogMsg.isTouchScreen = isTouchScreen; // console.log
        this.userMacDevice = isTouchScreen || iosQuirkPresent() ? 'iPad' : 'Mac';
        this.consoleLogMsg.check6 = `Succeed get user Mac device is ${this.userMacDevice}`; // console.log
      }
      sessionStorage.setItem('userMacDevice', this.userMacDevice);
    },
  },
};
</script>
