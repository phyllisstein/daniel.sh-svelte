const fs = require('fs')
const path = require('path')

const sourceRoot = path.resolve(__dirname, './src')
const dirEntries = fs.readdirSync(sourceRoot, { withFileTypes: true })
const moduleDirectories = dirEntries
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .join('|')


module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'./.eslintrc.common.cjs',
    './.eslintrc.svelte.cjs',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	settings: {
		'import/internal-regex': `^(${ moduleDirectories })\b`,
	}
};
