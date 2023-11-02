module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [{
    "env": {
      "node": true
    },
    "files": [
      ".eslintrc.{js,cjs}"
    ],
    "parserOptions": {
      "sourceType": "script"
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "vue"
  ],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "vue/multi-word-component-names": "off",
    "eol-last": ["error", "never"],
    "no-undef": "off"
  },
};