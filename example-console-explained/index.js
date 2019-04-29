import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object.
 * The only important part is that you should not modify/mutate the state object,
 * but return a new object if the state changes.
 *
 * In this example, we use a `switch case` statement and strings
 */

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// store's API method is { subscribe, dispatch, getState }.
const store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => {
  console.log(store.getState())
})

// The only way to modify/mutate the internal state is to send/dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

store.dispatch({ type: 'INCREMENT' })
// 1

store.dispatch({ type: 'INCREMENT' })
// 2

store.dispatch({ type: 'DECREMENT' })
// 1

store.getState()
