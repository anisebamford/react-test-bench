module.exports = {
  exclude: [
    "**/.idea/**/*",
    "**/snowpack.config.js",
    "**/package*",
    "**/app.js",
    "**/docker-compose.yml"
  ],
  plugins: [
    "@snowpack/plugin-dotenv",
  ],
};
