import plugin from 'tailwindcss/plugin'
import rules from './rules'

export default plugin(({ addComponents }) => {
  addComponents(rules)
})
