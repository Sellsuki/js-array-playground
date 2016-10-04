<template lang="html">
  <div>
    <h1 class="title is-3 is-code-font">{{ example.title }}</h1>
    <p>
      {{ example.content }}
    </p>

    <textarea v-model="inputCode" class="hljs javascript input-code" rows="4"></textarea>
    <br>
    <run-button :code="inputCode" :run="run"></run-button>
  </div>
</template>

<script>
import RunButton from './RunButton'

export default {
  data () {
    return {
      inputCode: ''
    }
  },
  props: ['example', 'run'],
  mounted () {
    this.inputCode = this.example.code
  },
  components: {
    RunButton
  }
}
</script>

<style lang="css">

</style>
