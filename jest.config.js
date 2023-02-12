module.exports = {
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest"],
    "^.+\\.(ts|tsx)$": ["ts-jest"],
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules/(?!(antd)/)[/\\\\].+\\.(js|jsx|ts|tsx)$",
  ],
};
