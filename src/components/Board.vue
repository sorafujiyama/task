<template>
  <div>
    <header>
        <h1 class="title">ここにタイトル</h1>
    </header>
    <main>
      <draggable :list="lists" class="list-index">
        <list v-for="(item,index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :listIndex="index"
          @change="movingCard"
        />
        <list-add />
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd.vue'
import List from'./List'
import { mapState } from'vuex'

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch('updateList',{ lists: this.lists })
    },
  }
}
</script>