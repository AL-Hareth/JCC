"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function MarkdownNews({ newsTopicContent }: { newsTopicContent: string }) {
    return (
        <div style={{ color: "white" }} dir="rtl">
            <MarkdownEditor.Markdown
                source={newsTopicContent}
                style={{ backgroundColor: "transparent" }}
            />
        </div>
    );
}
