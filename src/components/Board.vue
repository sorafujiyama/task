<template>
  <div>
    <header>
        <h1 class="title">ここにタイトル</h1>
    </header>
    <main>
      <list-add/>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'

export default {
  components: {
    ListAdd
  },
  }
</script>