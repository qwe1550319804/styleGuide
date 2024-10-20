module.exports = {
  plugins: ['eslint-plugin-norm'],
  rules: {
    'eslint-plugin-encode/no-http-url': 'warn',
    'eslint-plugin-encode/no-secret-info': 'error',
  },
};
