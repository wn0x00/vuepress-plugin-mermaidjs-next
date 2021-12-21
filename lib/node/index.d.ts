declare const mermaidPlugin: (option: any, app: any) => {
    name: string;
    clientAppEnhanceFiles: string;
    extendsMarkdown: (md: MarkdownIt) => void;
};
export default mermaidPlugin;
