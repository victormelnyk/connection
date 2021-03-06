module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "no-underscore-dangle": ["error", {"allowAfterThis": true}],
    "valid-jsdoc": ["error", {
      "requireParamDescription": false,
      "requireReturnDescription": false,
      "requireReturn": false
    }],
    "no-prototype-builtins": "off"
  },
  "globals": {
    "window": true,
    "jasmine": true,
    "it": true,
    "expect": true,
    "beforeEach": true,
    "describe": true
  }
};
