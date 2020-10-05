<template>
  <form class="addlist" @submit.prevent="addlist">
    <input v-model="title"
      type="text"
      class="text-input"
      placeholder="リストのタイトルを入力"
    >
    <button type="submit" class="add-button">
      リストを追加
    </button>
  </form>
</template>

<script>
  export default {
    data:function() {
      return {
        title: '',
      }
    },
    methods: {
      addList: function() {
        this.$store.dispatch('addlist', { title: this.title })
        this.title = ''
      },
    }
  }
</script>