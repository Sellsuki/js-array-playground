<template lang="html">
  <div>
    <div class="" v-for="(content, index) in contents" :key="index">
      <topic :content="content" :run="run"></topic>
      <hr>
    </div>
  </div>
</template>

<script>
import Topic from './Topic'

export default {
  data () {
    return {}
  },
  props: ['contents', 'run'],
  components: {
    Topic
  }
}
</script>

<style lang="css">
</style>
