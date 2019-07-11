module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint']

  // TODO: Not using ESLint for now
  // extends: [
  //   'eslint:recommended',
  //   'plugin:react/recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'plugin:@typescript-eslint/recommended'
  // ],
  // rules: {
  //   '@typescript-eslint/indent': 'off',
  //   'react-hooks/rules-of-hooks': 'error',
  //   'react-hooks/exhaustive-deps': 'warn'
  // }
}
