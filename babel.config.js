module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                "useBuiltIns": "usage",
                // 指定core-js版本
                "corejs": 3,
                // 指定浏览兼容性版本
                "targets": {
                    "chrome": "60",
                    "firefox": "60",
                    "ie": "9",
                    "safari": "10",
                    "edge": "17"
                }
            }
        ]
    ]
};