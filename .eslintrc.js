module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      "vue/html-indent": ["warn", 4],
      "vue/script-indent": ["warn", 4],
    }
}