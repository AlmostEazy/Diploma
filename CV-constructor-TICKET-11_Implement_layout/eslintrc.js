module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-undef": "off",
    "max-len": [
      "error",
      {
        code: 140,
      },
    ],
    "no-return-assign": ["error", "always"],
    "no-global-assign": "error",
    "no-eq-null": "error",
    "no-var": "error",
    "new-cap": "error",
    "object-shorthand": "error",
    "array-callback-return": "error",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          object: true,
        },
        AssignmentExpression: {},
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-eval": "error",
    "no-implied-eval": "error",
    "wrap-iife": "error",
    "no-new-func": "error",

    // react
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/jsx-fragments": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/state-in-constructor": ["error", "never"],

    // typescript
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",

    // import
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",
  },
  overrides: [
    {
      files: ["*.story.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
};
