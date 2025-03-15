"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function MarkdownArticle({ articleContent }: { articleContent: string }) {
    return (
        <MarkdownEditor.Markdown
            source={articleContent}
            style={{ backgroundColor: "transparent", direction: "rtl", color: "white", fontSize: "20px" }}
        />
    );
}
