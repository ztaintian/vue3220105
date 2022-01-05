function checkout(el,binding) {
  if (true) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

export default {
  inserted(el,binding) {
    checkout(el,binding)
  },
  update(el,binding) {
    checkout(el,binding)
  }
}