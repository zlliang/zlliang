module.exports = {
  env: { browser: true, es6: true, node: true },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }

  // TODO: Not using TypeScript for now
  //
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.json'
  // },
  // plugins: ['react', 'react-hooks', '@typescript-eslint']
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
