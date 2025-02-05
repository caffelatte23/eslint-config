import { config as defineConfig, configs as tsConfig } from "typescript-eslint";
import gitignore from "eslint-config-flat-gitignore";
import js from "@eslint/js";

const config = () =>
  defineConfig({
    name: "caffelatte23/config",
    extends: [gitignore(), js.configs.recommended, tsConfig.recommended],
  });

export default config;
