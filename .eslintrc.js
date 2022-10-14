module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended', // vue3严格模式
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
