import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useNavStore = defineStore('nav', ()=>{
  const state=ref(false)
  function close() {
    state.value=false
  }
  function open() {
    state.value=true
  }
  return {state,close,open}
}
  )
 