<template>
  <form class="addcard" @submit.prevent="addCardToList">
    <input v-model="body"
      type="text"
      class="text-input"
      placeholder="＋カードを追加"
    />
    <button type="submit" class="add-button">
      追加
    </button>
  </form>
</template>

<script>
  export default {
    props: {
      listIndex: {
        type: Number,
        required: true,
      }
    },
    data: function() {
      return {
        body:'',
      }
    },
    methods: {
      addCardToList: function() {
        this.$store.dispatch('addCardToList',{ body: this.body,listIndex: this.listIndex })
        this.body = ''
      }
    }
  }
</script>