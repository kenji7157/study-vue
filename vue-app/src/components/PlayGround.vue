<template>
  <div>
    <button @click="show">表示する</button>
    <p v-if="hoge.isShow">表示</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoge: {
        // isShow: false, コメントアウトで未定義にしています
      }
    };
  },
  methods: {
    show() {
      this.$set(this.hoge, "isShow", true);
    }
  }
};
</script>
