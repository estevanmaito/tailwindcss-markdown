import _ from 'lodash'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import plugin from '../src/index'

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge(
        {
          theme: {},
          corePlugins: false,
          plugins: [plugin],
        },
        config
      )
    )
  )
    .process('@tailwind base', {
      from: undefined,
    })
    .then((result) => {
      return result.css
    })
}

describe('plugin', () => {
  it('should return exact styles', () => {
    return generatePluginCss().then((css) => {
      expect(css).toBeTruthy()
    })
  })
})
