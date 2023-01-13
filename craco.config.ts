import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "components"),
    },
  },
};

export {};
