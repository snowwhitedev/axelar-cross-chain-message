module.exports = {
  overrides: [
    {
      files: "*.sol",
      options: {
        bracketSpacing: false,
        printWidth: 180,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        explicitTypes: "never",
      },
    },
    {
      files: "*.ts",
      options: {
        printWidth: 145,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        trailingComma: "es5",
      },
    },
    {
      files: "*.js",
      options: {
        printWidth: 145,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        trailingComma: "es5",
      },
    },
  ],
}
