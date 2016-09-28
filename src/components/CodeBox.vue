<template lang="html">
  <div>
    <h1 class="title is-3 is-code-font">{{ example.title }}</h1>
    <p>
      {{ example.content }}
    </p>

    <!-- <pre v-if="example.code"><code class="hljs javascript round">{{{ example.code | highlight 'javascript' }}}</code></pre>
    <textarea v-if="!example.code" v-model="inputCode" class="hljs javascript input-code" rows="4">/* เขียนโค้ดที่นี่ */</textarea>
    <br>
    <run-button :code="(example.code) ? example.code : inputCode" :run="run"></run-button> -->

    <textarea v-model="inputCode" class="hljs javascript input-code" rows="4">{{{ (example.code) ? example.code : '/* เขียนโค้ดที่นี่ */' }}}</textarea>
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
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    RunButton
  }
}
</script>

<style lang="css">
.is-code-font{
  font-family: Consolas,"Liberation Mono",Courier,monospace;
}
</style>
