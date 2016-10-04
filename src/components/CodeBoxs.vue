<template lang="html">
  <div>
    <div class="" v-for="example in examples">
      <code-box :example="example" :run="run"></code-box>
      <hr>
    </div>
  </div>
</template>

<script>
import CodeBox from './CodeBox'

export default {
  data () {
    return {}
  },
  props: ['examples', 'run'],
  components: {
    CodeBox
  }
}
</script>

<style lang="css">
</style>
