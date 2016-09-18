<template>
  <div id="app">
    <div class="columns">
      <div class="column is-4">
        <pre>{{ usersString }}</pre>
      </div>
      <div class="column is-4">
        <textarea v-model="inputCode" rows="8" cols="40"></textarea>
        <br>
        <button class="button is-primary" @click="runCode(inputCode)">Run</button>
      </div>
      <div class="column is-4">
        <pre>{{ resultString }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  data () {
    return {
      inputCode: 'users.map(item => item.name)',
      result: {},
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
      return JSON.stringify(this.users, null, '  ')
    },
    resultString () {
      return JSON.stringify(this.result, null, '  ')
    }
  },
  ready () {},
  attached () {},
  methods: {
    runCode (code) {
      /*eslint-disable */
      this.result = eval('this.'+ code)
      /*eslint-enable */
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import '~bulma';
</style>
