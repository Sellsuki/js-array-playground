<template lang="html">
  <div>
    <h1 class="title is-3">
      <b>{{ content.title }}</b>
      <span v-if="content.type === 'pure'" class="tag is-warning is-medium">Pure</span>
      <span v-if="content.type === 'impure'" class="tag is-danger is-medium">Impure</span>
    </h1>
    <p>
      {{ content.description }}
    </p>

    <div v-for="example in examples">
      <div class="code-container">
        <codemirror v-model="example.code" :options="editorOption"></codemirror>
        <div class="button-group">
          <run-button :code="example.code" :run="run"></run-button>
        </div>
      </div>
      <br>
    </div>

  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import RunButton from './RunButton'

export default {
  data () {
    return {
      editorOption: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'material',
        lineNumbers: true,
        line: true
      }
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
    codemirror,
    RunButton
  }
}
</script>

<style lang="css" scoped>
.code-container {
  border-radius: 3px 3px 3px 3px;
  padding-top: 3px;
  background: #263238;
}
.button-group {
  background-color: #282c34;
  padding: 8px;
  border-radius: 0px 0px 3px 3px;
}
</style>
