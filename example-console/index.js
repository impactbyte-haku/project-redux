import { createStore } from 'redux'

// 1. reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 2. store
const store = createStore(counter)

// 3. subscribe
store.subscribe(() => {
  console.log(store.getState())
})

// 4. dispatch
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'DECREMENT'
})
