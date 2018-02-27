// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // 融合了 jquery 所以暂时屏蔽
    'no-undef': 0, // 不允许未声明的变量
    'no-unused-vars': [0, {'vars': 'all', 'args': 'after-used'}], // 不允许有声明后未使用的变量或者参数
    'no-tabs': 0, // 不允许tabs
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'], // 不允许混用tab和空格
    'indent': [0, 4], // 缩进风格
    'camelcase': [0, {'properties': 'never'}], // 强制驼峰命名规则
    'space-before-function-paren': [0, {'anonymous': 'always', 'named': 'never'}], // 函数定义时括号前的空格
    'no-trailing-spaces': 0, // 代码不能尾随空格

    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-extra-semi': 0, // 不允许出现不必要的分号

    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
