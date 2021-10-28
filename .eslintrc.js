module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        "prettier"
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'import'],
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }]
    },
    ignorePatterns: ["/*.*"],
};
