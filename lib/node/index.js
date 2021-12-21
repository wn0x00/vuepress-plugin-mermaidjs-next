"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@vuepress/utils");
const markdown_it_mermaid_1 = require("./markdown-it-mermaid");
const mermaidPlugin = (option, app) => {
    return {
        name: "vuepress-plugin-mermaidjs-next",
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, "../client/clientAppEnhance.js"),
        extendsMarkdown: (md) => {
            md.use(markdown_it_mermaid_1.mermaid);
        }
    };
};
exports.default = mermaidPlugin;
