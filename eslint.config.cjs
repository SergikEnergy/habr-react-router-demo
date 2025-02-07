import globals from 'globals';
import js from '@eslint/js';
import tsesLint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/**@type {import('eslint').Linter.Config[]} */
export default tsesLint.config(
    {
        plugins: {
            '@typescript-eslint': tsesLint.plugin,
            'react-hooks': eslintReactHooks,
            react: eslintReact,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ['node__modules', 'dist', '*.cjs'],
    },
    js.configs.recommended,
    ...tsesLint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: { project: ['./tsconfig.eslint.json', 'tsconfig.node.json'] },
        },
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            ...eslintConfigPrettier.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'import/no-absolute-path': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        },
    }
);
