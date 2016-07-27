module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "env": {
        "browser": true,
        "node": true
  },
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    'import/imports-first': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': 0
  }
}
