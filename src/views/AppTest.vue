<template>
  <div class="container">
    <h1 class="title">Code Test</h1>

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
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      test: 'Test',
      isShow: true,
      list: ['1', '2', '3', '4', '5'],
      location: [],
      dragIndex: '',
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
  },
};
</script>
