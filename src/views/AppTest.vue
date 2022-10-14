<template>
  <div class="container">
    <h1 class="title">Vue Transition Test</h1>

    <div class="row">
      <!-- Transition 正常類別 + Draggable -->
      <div class="col-md-4">
        <h2 class="subTitle">TransitionGroup 正常類別 + Draggable</h2>
        <transition-group class="testList" name="test" tag="ul">
          <li v-for="(item, index) in list"
              :key="item"
              class="testList-item"
              draggable="true"
              @dragstart="dragstart(index)"
              @dragenter="dragenter(index)"
          >{{ item }}</li>
        </transition-group>
      </div>
      <!-- Transition 正常類別 -->
      <div class="col-md-4">
        <h2 class="subTitle">Transition 正常類別</h2>
        <button @click="transitionTest" class="btnStyle">Toggle</button>
        <p>Transition</p>
        <transition name="fade">
          <div v-if="isShow" class="box"></div>
        </transition>
        <p>Animation</p>
        <transition name="bounce">
          <div v-if="isShow" class="box"></div>
        </transition>
      </div>
      <!-- Transition 自訂義類別 -->
      <div class="col-md-4">
        <h2 class="subTitle">Transition 自訂義類別</h2>
        <button @click="transitionTest2" class="btnStyle">Toggle</button>
        <transition
          enter-from-class="opacity-0"
          enter-active-class="trs-time-3"
          leave-active-class="trs-time-3"
          leave-to-class="opacity-0"
        >
          <div v-if="isShow2" class="box"></div>
        </transition>
      </div>
      <!-- Transition 套用 Animate.css 套件 -->
      <div class="col-md-4">
        <h2 class="subTitle">Transition 套用 Animate.css 套件</h2>
        <button @click="transitionTest3" class="btnStyle">Toggle</button>
        <transition
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__backOutDown"
        >
          <div v-if="isShow3" class="box"></div>
        </transition>
      </div>
      <!-- : class test -->
      <div class="col-md-4">
        <h2 class="subTitle">:class Test</h2>
        <button class="btnStyle" @click="changeBg">Change</button>
        <div :class="['box', {'darkBox': darkModa}]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      test: 'Test',
      isShow: true,
      isShow2: true,
      isShow3: true,
      list: ['1', '2', '3', '4', '5'],
      location: [],
      dragIndex: '',
      darkModa: false,
    };
  },
  methods: {
    getData() {
      axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taipei?%24top=30&%24format=JSON')
        .then((res) => {
          this.location = res.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    dragstart(index) {
      this.dragIndex = index;
    },
    dragenter(index) {
      if (this.dragIndex !== index) {
        const move = this.list[this.dragIndex];
        this.list.splice(this.dragIndex, 1);
        this.list.splice(index, 0, move);
        this.dragIndex = index;
      }
    },
    transitionTest() {
      this.isShow = !this.isShow;
    },
    transitionTest2() {
      this.isShow2 = !this.isShow2;
    },
    transitionTest3() {
      this.isShow3 = !this.isShow3;
    },
    changeBg() {
      this.darkModa = !this.darkModa;
    },
  },
};
</script>
