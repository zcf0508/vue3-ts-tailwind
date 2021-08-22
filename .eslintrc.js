module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-essential'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreRegExpLiterals: true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
