const { registerTransforms } = require("@tokens-studio/sd-transforms");
const StyleDictionary = require("style-dictionary");

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["**/*.tokens.json"],
  platforms: {
    css: {
      buildPath: "./",
      prefix: "",
      transformGroup: "tokens-studio",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      buildPath: "./",
      transformGroup: "tokens-studio",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
