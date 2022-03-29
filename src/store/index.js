import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    toggleNav() {
      const nav = document.querySelector("#app > header > nav")
      const translate0 = 'translateX(0px)'
      const translate50 = 'translateX(50%)'
      if (nav.style.transform === '' || nav.style.transform === translate50)
        nav.style.transform = translate0
      else if (nav.style.transform === translate0)
        nav.style.transform = translate50
    }
  },
  modules: {
  }
})
