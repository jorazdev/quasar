// eslint-disable-next-line no-undef
const { defineConfig } = require('@vue/cli-service')
// eslint-disable-next-line no-undef
module.exports = defineConfig({
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
})
