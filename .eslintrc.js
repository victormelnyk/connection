module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"]
  },
  "globals": {
    "window": true
  }
};