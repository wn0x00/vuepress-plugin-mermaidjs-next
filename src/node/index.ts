import { path } from "@vuepress/utils";
import type MarkdownIt from "markdown-it";
import { mermaid } from "./markdown-it-mermaid";

const mermaidPlugin = (option, app) => {
  return {
    name: "vuepress-plugin-mermaidjs-next",

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    extendsMarkdown: (md: MarkdownIt): void => {
      md.use(mermaid);
    }
  };
};

export default mermaidPlugin;
