<template>
  <section class="is-fullheight">
    <div class="columns is-marginless is-gapless is-desktop">

      <div class="column is-4-desktop" :class="{'is-hidden-touch': toggleView}">
        <pre class="overflow-scroll-60 is-code-background"><code class="hljs javascript">{{{usersString | highlight 'javascript'}}}</code></pre>
      </div>

      <div class="column is-4-desktop" :class="{'is-hidden-touch': !toggleView}">
        <div class="overflow-scroll-60">
          <div class="content is-medium">
            <h1 class="title is-1">JavaScript Array Playground</h1>
            <hr>
            <code-boxs :examples="examples" :run="run"></code-boxs>
            <center class="is-small">
              <a class="github-button" href="https://github.com/Sellsuki/js-array-playground" data-style="mega" data-count-href="/Sellsuki/js-array-playground/stargazers" data-count-api="/repos/Sellsuki/js-array-playground#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star Sellsuki/js-array-playground on GitHub">Star</a>
              <br><br>
              แอบทำด้วย <a href="http://vuejs.org" target="_blank"><img class="vue-icon" src="https://vuejs.org/images/logo.png" alt="vue.js"/></a> และ 🍺 ที่หลังออฟฟิศ Sellsuki.
            </center>
            <br>
          </div>
        </div>
      </div>

      <div class="column is-4-desktop">
        <pre class="overflow-scroll-40 is-code-background"><code class="hljs javascript">{{{resultString | highlight 'javascript'}}}</code></pre>
      </div>
    </div>
    <div class="toggle-button is-hidden-desktop" @click="toggleView = !toggleView">
      <i v-if="toggleView" class="fa fa-code" aria-hidden="true"></i>
      <i v-if="!toggleView" class="fa fa-book" aria-hidden="true"></i>
    </div>
  </section>
</template>

<script>
import CodeBoxs from './components/CodeBoxs'
import examples from './data/examples'
import users from './data/users'

export default {
  data () {
    return {
      toggleView: true,
      emojis: ['🍺', '🖥', '💻', '⌨', '🕹', '🤖', '👙', '🐶', '🏓', '🎮'],
      examples,
      users,
      result: 'output'
    }
  },
  computed: {
    usersString () {
      return 'var users = ' + JSON.stringify(this.users, null, '  ')
    },
    resultString () {
      return JSON.stringify(this.result, null, '  ')
    }
  },
  ready () {},
  attached () {},
  methods: {
    run (code) {
      try {
        /*eslint-disable */
        let result = eval('this.'+ code)
        if (result) {
          this.result = result
        } else {
          this.result = 'undefined'
        }
        /*eslint-enable */
      } catch (e) {
        this.result = e.toString()
      }
    }
  },
  components: {
    CodeBoxs
  }
}
</script>

<style lang="scss">
$column-gap: 0px;
@import '~bulma';
@import "../node_modules/highlight.js/styles/atom-one-dark";

.toggle-button {
  display: block;
  position: fixed;
  right: 10px;
  top: 10px;
  border-radius: 3px;
  text-align: center;
  background: rgba(100, 100, 100, 0.2);
  padding: 2px 8px;
}
.toggle-button:hover {
  background: rgba(100, 100, 100, 0.5);
}

*:focus {
  outline: none;
}
.overflow-scroll-60, .overflow-scroll-40 {
  border-top: 1px solid #EEE;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}
.overflow-scroll-60{
  height: 60vh;
  max-height: 60vh;
}
.overflow-scroll-40{
  height: 40vh;
  max-height: 40vh;
}
@media screen and (min-width: 980px) {
  .overflow-scroll-60, .overflow-scroll-40 {
    height: 100vh;
    max-height: 100vh;
  }
}
.is-code-background {
  background-color: #282c34;
}
.content {
  padding: 10px 20px;
}
.input-code {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 3px;
  border: 0px;

}
.round {
  border-radius: 3px;
}
.vue-icon {
  vertical-align: sub;
  height: 20px;
}
</style>
