<template>
  <section class="hero is-fullheight">
    <div class="tile">
      <div class="tile is-vertical is-4">
        <pre class="overflow-scroll is-code-background"><code class="hljs javascript">{{{usersString | highlight 'javascript'}}}</code></pre>
      </div>
      <div class="tile is-vertical is-4">
        <div class="overflow-scroll">
          <div class="content is-medium">
            <h1 class="title is-1">JavaScript Array Playground</h1>
            <hr>
            <code-boxs :examples="examples" :run="run"></code-boxs>
            <center class="is-small">
              <a class="github-button" href="https://github.com/Sellsuki/js-array-playground" data-style="mega" data-count-href="/Sellsuki/js-array-playground/stargazers" data-count-api="/repos/Sellsuki/js-array-playground#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star Sellsuki/js-array-playground on GitHub">Star</a>
              <br><br>
              Made with <a href="http://vuejs.org" target="_blank"><img class="vue-icon" src="https://vuejs.org/images/logo.png" alt="vue.js"/></a> and 🍺 by Sellsuki.
            </center>
            <br>
          </div>
        </div>
      </div>
      <div class="tile is-vertical is-4">
        <pre class="overflow-scroll is-code-background"><code class="hljs javascript">{{{resultString | highlight 'javascript'}}}</code></pre>
      </div>
    </div>
  </section>
</template>

<script>
import CodeBoxs from './components/CodeBoxs'
import examples from './data/examples'

console.log(examples)

export default {
  data () {
    return {
      emojis: ['🍺', '🖥', '💻', '⌨', '🕹', '🤖', '👙', '🐶', '🏓', '🎮'],
      inputCode: 'users.map(item => item.name)',
      examples,
      result: 'output',
      users: [
        {
          id: 1000,
          name: 'Corey Griffith',
          username: 'cGriffith',
          gender: 'male',
          age: 13
        },
        {
          id: 1001,
          name: 'Marion McDaniel',
          username: 'mMcDaniel',
          gender: 'female',
          age: 15
        },
        {
          id: 1002,
          name: 'Tom Robbins',
          username: 'tRobbins',
          gender: 'male',
          age: 15
        },
        {
          id: 1003,
          name: 'Ruth Harvey',
          username: 'rHarvey',
          gender: 'female',
          age: 14
        },
        {
          id: 1004,
          name: 'Terry Willis',
          username: 'tWillis',
          gender: 'male',
          age: 13
        }
      ]
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
        this.result = eval('this.'+ code)
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

*:focus {
  outline: none;
}
.overflow-scroll {
  overflow-y: scroll;
  height: 100vh;
  max-height: 100vh;
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
