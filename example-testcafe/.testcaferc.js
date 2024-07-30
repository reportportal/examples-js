module.exports = {
  browsers: "chrome",
  src: "./tests/**/*.js",
  screenshots: {
    path: "./screenshots/"
  },
  reporter: [
    {
      name: "list"
    },
    {
      name: "agent-js-testcafe"
    }
  ],
  takeScreenshotsOnFails: true
};
