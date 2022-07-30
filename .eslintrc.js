module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'no-param-reassign': 'off',
        // 允许在开发环境添加debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 允许使用嵌套的三目
        'no-nested-ternary': 'off',
        indent: ['error', 4],
        // 'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'global-require': 'off',
        'no-trailing-spaces': 'off',
        'eol-last': 'off',
        'max-len': ['error', { code: 260 }],
        'arrow-parens': ['error', 'as-needed'],
        'operator-linebreak': ['error', 'after'],
        'object-curly-newline': 'off',
        'vue/script-indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/require-component-is': 'off',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        // 'vue/max-attributes-per-line': [
        //     'error',
        //     {
        //         singleline: 1,
        //         multiline: {
        //             max: 1,
        //             allowFirstLine: true
        //         }
        //     }
        // ],
        'linebreak-style': [0, 'error', 'windows']
    
    }
};
