<template lang="html">
  <a class="button is-primary is-outlined" @click="run(code)">
    <span class="icon">
      <i class="fa fa-play" aria-hidden="true"></i>
    </span>
    <span>Run</span>
  </a>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['code', 'run'],
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
