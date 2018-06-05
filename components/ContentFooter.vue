<template>
  <center class="is-small">
    <a class="github-button" href="https://github.com/Sellsuki/js-array-playground" data-size="large" data-count-href="/Sellsuki/js-array-playground/stargazers" data-show-count="true" data-count-aria-label="# stargazers on GitHub" aria-label="Star Sellsuki/js-array-playground on GitHub">Star</a>
    &nbsp;&nbsp;
    <a class="github-button" href="https://github.com/Sellsuki/js-array-playground/fork" data-icon="octicon-repo-forked" data-size="large" data-count-href="/Sellsuki/js-array-playground/#forks_count" 
    data-show-count="true" data-count-aria-label="# forks on GitHub" aria-label="Fork Sellsuki/js-array-playground on GitHub">Fork</a>
    <br><br>
    Made with {{ footerEmoji }} and <a href="http://vuejs.org" target="_blank"><img class="vue-icon" src="https://vuejs.org/images/logo.png" alt="vue.js"/></a>.
    <br>
    <br>
    <script async defer src="https://buttons.github.io/buttons.js"></script>
  </center>
</template>

<script>
export default {
  props: ['footerEmoji']
}
</script>

<style lang="css">
</style>
