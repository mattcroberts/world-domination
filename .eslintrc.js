module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'react/jsx-uses-vars': ['error'],
        'react/jsx-uses-react': ['error'],
        'no-console': 0,
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'consistent-as-needed'],
        'semi': ['error', 'always']
    }
};
