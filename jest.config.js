module.exports = {
  // 不建议自动mock 可以手动mock 后面会有讲
  automock: false,
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // 测试覆盖率
  collectCoverage: true,
  // 测试覆盖率收集来源
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx", "!**/node_modules/**"],
  // 测试覆盖率生成的目录文件
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  // babel不支持的一些文件 例如图片 css/scss 模块的映射
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", //className查找都会原样返回 要安装identity-obj-proxy
  },
  testEnvironment: "jsdom", // js测试环境  要安装 jest-environment-jsdom
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest"],
    "^.+\\.(ts|tsx)$": ["ts-jest"],
  },
  // 转换器要忽略的路径
  transformIgnorePatterns: [
    "[/\\\\]node_modules/(?!(antd)/)[/\\\\].+\\.(js|jsx|ts|tsx)$",
  ],
};
