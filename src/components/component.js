import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement({
  props: {},
  emits: {},
  template: '<span>spanspanspan</span>'
// normal Vue component options here

})

// Register the custom element.

// After registration, all `<my-vue-element>` tags

// on the page will be upgraded.

customElements.define( 'my-vue-element' , MyVueElement)
document.body.appendChild(
  new MyVueElement({})
)