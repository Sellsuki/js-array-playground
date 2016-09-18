<template>
  <section class="hero is-fullheight">
    <div class="tile">
      <div class="tile is-vertical is-4">
        <pre class="overflow-scroll is-code-background"><code class="hljs javascript">{{{usersString | highlight 'javascript'}}}</code></pre>
      </div>
      <div class="tile is-vertical is-4">
        <div class="overflow-scroll">
          <div class="content is-medium">
            <code-boxs :examples="examples" :run="run"></code-boxs>
            <center class="is-small">
              made with 🍺 by Sellsuki
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

export default {
  data () {
    return {
      emojis: ['🍺', '🖥', '💻', '⌨', '🕹', '🤖', '👙', '🐶', '🏓', '🎮'],
      inputCode: 'users.map(item => item.name)',
      examples: [
        {
          title: 'playground',
          content: 'ลองเล่นกันดู',
          code: ''
        },
        {
          title: 'filter',
          content: 'ลองเล่นกันดู',
          code: 'users.filter(item => item.age > 13)'
        },
        {
          title: 'map',
          content: 'ลองเล่นกันดู',
          code: 'users.map(item => item.gender)'
        },
        {
          title: 'map',
          content: 'ลองเล่นกันดู',
          code: `users.map(function (item) {
  return item.age
})`
        }
      ],
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
</style>
