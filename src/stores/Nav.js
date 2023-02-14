import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => {
    return { translate: null}
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    close() {
      this.translate=false
    },
    open() {
        this.translate=true
      },
  },
})