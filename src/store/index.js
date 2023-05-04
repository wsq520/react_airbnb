import { createStore } from 'redux'

const initialState = {
  counter: 100
}

function reducer() {
  return initialState
}

const store = createStore(reducer)

module.export = store