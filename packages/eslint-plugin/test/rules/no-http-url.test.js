'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://冬瓜.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://冬瓜.com';",
      output: "var test = 'http://冬瓜.com';",
      errors: [
        {
          message: 'Recommended "http://冬瓜.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://冬瓜.com' />",
      output: "<img src='http://冬瓜.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://冬瓜.com" switch to HTTPS',
        },
      ],
    },
  ],
});
