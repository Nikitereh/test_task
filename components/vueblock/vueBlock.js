const App = {
  data() {
    return {
      inputValue: '',
      placeHolder: 'Веедите слова...',
      words: null,
      seen: false,
      checkedNumbers:[],
    }
    
  },
  components: {
    
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value;
      this.words = this.inputValue.trim().split(' ').sort();
      if(event.target.value.length === 0) {
        this.seen = false;
      }
    },
    sortHandler() {
      if(this.words.length <= 10) {
        this.seen = true;
      }
      if(this.words.length > 10) {
        alert('Максимальное количество слов - 10');
        this.seen = false;
      }
      
    },
    resultHandler() {
      let arr = this.checkedNumbers;
      let sum = 0;
      if(arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
          sum = sum + Number(arr[i])
        }
        return sum;
      }
      },
    }
};

Vue.createApp(App).mount('#app');