/**
 * @type {import('prettier').Options}
 */
module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    quoteProps: "as-needed",
    singleQuote: true,
    trailingComma: "all",
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
    jsxSingleQuote: false,
    proseWrap: "always",
    importOrder: [
        "^react$",
        "^react-dom$",
        "<THIRD_PARTY_MODULES>",
        "^@/(.*)$",
        "^[./]"
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
}