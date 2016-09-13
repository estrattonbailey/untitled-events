import delegate from 'delegate'

const state = {
  cache: {}
}

const cache = obj => {
  let p = window.location.pathname
  state.cache[p] = state.cache[p] || []
  state.cache[p].push(obj)
  return obj
}

const add = fn => cache({
  instance: fn
})

const on = (event, selector, callback) => cache({
  selector,
  event,
  instance: delegate(document, selector, event, callback)
})

const clear = path => {
  state.cache[path].forEach(o => o.instance.destroy ? o.instance.destroy() : null)
  delete state.cache[path]
}

export default {
  on,
  add,
  clear,
  getCache: () => state.cache
} 
