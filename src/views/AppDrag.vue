<template>
  <div class="container">
    <h1 class="title">Drag</h1>
    <div class="inpuText">
      <label for="arryText">
        Enter Text：
        <input type="text" id="arryText" v-model="inputText" />
        <button @click="push">Push</button>
      </label>
    </div>
    <transition-group class="list" name="drag" tag="ul">
      <li
        v-for="(item, index) in list"
        :key="item.label"
        class="list-item"
        draggable="true"
        @dragstart="dragstart(index)"
        @dragenter="dragenter(index)"
      >
        <span class="content">{{ item.label }}</span>
        <div class="btnGroup">
          <button @click="edit(item.label, index)">E</button>
          <button @click="del(index)">D</button>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      inputTextState: 'new',
      inputText: '',
      editIndex: null,
      dragIndex: '',
    };
  },
  methods: {
    // 送出
    push() {
      if (this.inputTextState === 'new') {
        this.list.push({
          label: this.inputText,
        });
      }
      if (this.inputTextState === 'edit') {
        this.list[this.editIndex].label = this.inputText;
      }
      this.inputText = '';
      this.editIndex = null;
      this.inputTextState = 'new';
    },
    // 修改
    edit(data, index) {
      this.inputTextState = 'edit';
      this.editIndex = index;
      this.inputText = data;
    },
    // 刪除
    del(index) {
      if (this.editIndex !== index) {
        this.list.splice(index, 1);
      } else {
        this.$swal.fire({
          icon: 'warning',
          text: '此項目正在編輯，無法刪除',
        });
      }
    },

    // 被拖曳的對象
    dragstart(index) {
      this.dragIndex = index;
    },
    // 拖曳到的目標
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
