module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '*.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-absolute-path': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
