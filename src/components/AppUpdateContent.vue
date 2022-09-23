<template>
    <div class="updateContent">
      <label for="updateContent">
        更新內容
        <textarea name="updateContent" id="updateContent" rows="10"
            placeholder="請輸入更新內容"
            v-model="content"
            @input="sendUpdateContent"
        ></textarea>
      </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    };
  },
  methods: {
    sendUpdateContent() {
      this.$emit('sendUpdateText', this.content);
    },
  },
};
</script>
