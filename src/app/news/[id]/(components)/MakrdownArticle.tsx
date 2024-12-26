"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function MarkdownNews({ newsTopicContent }: { newsTopicContent: string }) {
    return (
        <MarkdownEditor.Markdown source={newsTopicContent} style={{ backgroundColor: "transparent" }} />
    );
}
