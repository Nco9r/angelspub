export { default as DefaultNoise } from '../../components/Default/Noise.vue'
export { default as DefaultTheHeader } from '../../components/Default/TheHeader.vue'
export { default as FeaturesAfterwork } from '../../components/Features/Afterwork.vue'
export { default as FeaturesBaseline } from '../../components/Features/Baseline.vue'
export { default as FeaturesEvents } from '../../components/Features/Events.vue'
export { default as FeaturesHero } from '../../components/Features/Hero.vue'
export { default as FeaturesLogo } from '../../components/Features/Logo.vue'
export { default as FeaturesResa } from '../../components/Features/Resa.vue'
export { default as FeaturesRestaurant } from '../../components/Features/Restaurant.vue'
export { default as FeaturesThefooter } from '../../components/Features/Thefooter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
