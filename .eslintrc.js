module.exports = {
  'env': {
    'browser': true
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': '8',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'max-len': 0,
    'react/prop-types': 0,
  },
};
