<template lang="html">
  <div>
    <h1 class="title is-3 is-code-font"><b>{{ content.title }}</b></h1>
    <p>
      {{ content.description }}
    </p>

    <div v-for="example in examples">
      <textarea v-model="example.code" class="hljs javascript input-code" rows="2"></textarea>
      <div class="button-group">
        <run-button :code="example.code" :run="run"></run-button>
      </div>
      <br>
    </div>

  </div>
</template>

<script>
import RunButton from './RunButton'

export default {
  data () {
    return {
    }
  },
  props: ['content', 'run'],
  // mounted () {
  //   this.inputCodes = this.content.examples
  // },
  computed: {
    examples () {
      return this.content.examples
    }
  },
  components: {
    RunButton
  }
}
</script>

<style lang="css">
textarea {
  resize: none;
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: scroll;
}
.button-group {
  background-color: #282c34;
  padding: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.input-code {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border: 0px;
  font-family: "Inconsolata", "Consolas", "Monaco", monospace;
  font-size: 14px;
}
</style>
