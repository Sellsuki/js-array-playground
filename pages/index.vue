<template>
  <section class="is-fullheight">
    <div class="columns is-marginless is-gapless is-desktop">
      <div class="column is-4-desktop is-code-background">
        <div class="overflow-scroll-30">
          <no-ssr placeholder="Codemirror Loading...">
            <codemirror :code="inputString" :options="editorOption"></codemirror>
          </no-ssr>
        </div>
      </div>

      <div class="column is-4-desktop">
        <div class="overflow-scroll-40" @scroll="handleScroll">
          <div class="content is-medium">
            <h1 class="title is-1">JavaScript Array Playground</h1>
            <hr>
            <contents :contents="contents" :run="run"></contents>
            <content-footer :footerEmoji="footerEmoji"></content-footer>
          </div>
        </div>
      </div>

      <div class="column is-4-desktop is-code-background">
        <div class="overflow-scroll-30">
          <no-ssr placeholder="Codemirror Loading...">
            <codemirror class="is-code-background" :code="resultString" :options="editorOption"></codemirror>
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Contents from '../components/Contents'
import ContentFooter from '../components/ContentFooter'
import contents from '../data/contents'
import emojis from '../data/emojis'
import users from '../data/users'
import products from '../data/products'

export default {
  data () {
    return {
      isTop: true,
      toggleView: true,
      emojisIndex: 0,
      empty: [],
      emojis: [...emojis],
      contents: [...contents],
      users: [...users],
      products: [...products],
      result: 'output',
      scrollArea: 'TOP',
      editorOption: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'material',
        lineNumbers: true,
        line: true,
        readOnly: true
      },
      varName: ['empty', 'emojis', 'users', 'products']
    }
  },
  computed: {
    inputString () {
      return `${this.arrayEmptyString}

${this.emojisString}

${this.usersString}

${this.productsString}`
    },
    arrayEmptyString () {
      return 'var empty = ' + JSON.stringify(this.empty)
    },
    emojisString () {
      return 'var emojis = ' + JSON.stringify(this.emojis, null, '  ')
    },
    usersString () {
      return 'var users = ' + JSON.stringify(this.users, null, '  ')
    },
    productsString () {
      return 'var products = ' + JSON.stringify(this.products, null, '  ')
    },
    resultString () {
      return JSON.stringify(this.result, null, '  ')
    },
    footerEmoji () {
      return this.emojis[this.emojisIndex]
    }
  },
  methods: {
    run (code) {
      try {
        /*eslint-disable */
        let result = eval(this.preprocessCode(code))
        /*eslint-enable */
        if (result) {
          this.result = result
        } else {
          this.result = 'undefined'
        }
      } catch (e) {
        this.result = e.toString()
      }
    },
    handleScroll (e) {
      if (e.target.scrollTop <= 5) {
        this.isTop = true
      } else {
        this.isTop = false
      }

      let scrollArea = 'TOP'
      if (e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight) < 80) {
        scrollArea = 'BOTTOM'
      }
      if (this.scrollArea !== scrollArea && scrollArea === 'TOP') {
        this.emojisIndex = this.randomNewValue(this.emojis.length, this.emojisIndex)
      }
      this.scrollArea = scrollArea
    },
    randomNewValue (length, oldValue) {
      let value = Math.floor(Math.random() * length)
      if (value === oldValue) {
        return this.randomNewValue(length, oldValue)
      } else {
        return value
      }
    },
    preprocessCode (code) {
      let processedCode = '' + code
      this.varName.forEach(name => {
        let reg = new RegExp('(' + name + ')', 'g')
        processedCode = processedCode.replace(reg, 'this.$1')
      })
      return processedCode
    }
  },
  components: {
    Contents,
    ContentFooter
  }
}
</script>

<style lang="scss">
// $column-gap: 0px;
// @import '~bulma';

.CodeMirror {
  height: auto !important;
}
.toggle-button {
  display: block;
  position: fixed;
  right: 10px;
  top: 10px;
  border-radius: 3px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 8px;
  cursor: pointer;
  z-index: 2000;
  border: 2px solid #FEDC62;
}
.toggle-button:hover {
  background: rgba(255, 255, 255, 1.0);
}

*:focus {
  outline: none;
}
.overflow-scroll-60, .overflow-scroll-40, .overflow-scroll-30 {
  border-top: 1px solid #EEE;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}
.overflow-scroll-60{
  height: 60vh !important;
  max-height: 60vh !important;
}
.overflow-scroll-40{
  height: 40vh !important;
  max-height: 40vh !important;
}
.overflow-scroll-30{
  height: 30vh !important;
  max-height: 30vh !important;
}
@media screen and (min-width: 980px) {
  .overflow-scroll-60, .overflow-scroll-40, .overflow-scroll-30 {
    border-top: 0px;
    height: 100vh !important;
    max-height: 100vh !important;
  }
}
.is-code-background {
  background-color: #263238;
}
.content {
  padding: 10px 20px;
}
.round {
  border-radius: 3px;
}
.vue-icon {
  vertical-align: sub;
  height: 20px;
}
</style>
