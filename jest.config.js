module.exports = {
  verbose: true,
  testRegex: ".*\\.spec\\.ts[x]$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "md", "scss"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["components/**/*.{ts,tsx,scss}"],
  maxWorkers: "50%",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
