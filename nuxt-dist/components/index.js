export const DefaultNoise = () => import('../../components/Default/Noise.vue' /* webpackChunkName: "components/default-noise" */).then(c => wrapFunctional(c.default || c))
export const FeaturesHero = () => import('../../components/Features/Hero.vue' /* webpackChunkName: "components/features-hero" */).then(c => wrapFunctional(c.default || c))
export const FeaturesLogo = () => import('../../components/Features/Logo.vue' /* webpackChunkName: "components/features-logo" */).then(c => wrapFunctional(c.default || c))
export const FeaturesThefooter = () => import('../../components/Features/Thefooter.vue' /* webpackChunkName: "components/features-thefooter" */).then(c => wrapFunctional(c.default || c))

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
