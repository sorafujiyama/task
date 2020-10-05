<template>
  <form class="addlist" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="もう１つリストを追加"
    >
    <button type="submit" class="add-button">
      リストを追加
    </button>
  </form>
</template>

<script>
  export default {
  data: function() {
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