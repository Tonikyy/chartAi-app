export default {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn'
  }
}
