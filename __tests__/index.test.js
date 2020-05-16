// import _ from 'lodash'
// import postcss from 'postcss'
// import tailwindcss from 'tailwindcss'
import plugin from '../src/index'

// const generatePluginCss = () => {
//   return postcss(
//     tailwindcss({
//       theme: {},
//       corePlugins: false,
//       plugins: [plugin],
//     })
//   )
//     .process('@tailwind base; @tailwind components; @tailwind utilities', {
//       from: undefined,
//     })
//     .then((result) => {
//       return result.css
//     })
// }

describe('plugin', () => {
  it('should return an object', () => {
    expect(plugin).toBeDefined()
  })
})
