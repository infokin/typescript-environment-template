"use strict";

module.exports = {
  root: true,
  extends: [
    "@infokin/eslint-config-typescript"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: "tsconfig.json"
      }
    }
  ]
};
