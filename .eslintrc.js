module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    settings: {
        // 解析import的资源路径，比如alias
        'import/resolver': {
            webpack: {
                config: './build/webpack.dev.js'
            }
        }
    },
    rules: {
        // eslint-plugin-import插件提供的能力
        'no-restricted-globals': 'off',
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never',
                css: 'never',
                less: 'never'
            }
        ],
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
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },      
            multiline: {
                max: 1
            }
        }],
        'vue/first-attribute-linebreak': [2, {
            // 单行时，第一属性前不允许使用换行符
            singleline: 'beside',
            // 多行时，第一属性前必须使用换行符
            multiline: 'beside'
        }],
        'linebreak-style': [0, 'error', 'windows'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // 关闭名称校验
        'vue/multi-word-component-names': 'off' 
    }
};
