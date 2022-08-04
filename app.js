const App = {
  data() {
    return {
      input: '',
      inputValue: '',
      words: null,
    }
    
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
      this.words = this.inputValue.trim().split(' ').sort()
    },
    btnHandler() {
      console.log(this.words)
    }
  }
}


Vue.createApp(App).mount('#app')

