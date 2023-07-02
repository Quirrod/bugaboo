"use client";
import React from "react";
import dynamic from "next/dynamic";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { LineModel } from "@/models/@codemirror/LineModel";
import { linesAddPlusGutter } from "@/utils/@codemirror/glutter/src";

interface CodeMirrorProps {
    value: string;
    height?: string;
    width?: string;
    language?: string;
}
export const CodeMirror: React.FC<CodeMirrorProps> = ({
    value,
    height = "100svh",
    width = "width: 100%",
    language = null,
}) => {
    const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
        ssr: false,
    });

    const handleComment = (line: LineModel) => {
        console.log(line);
    };

    const extensions = [
        linesAddPlusGutter(handleComment, {
            backgroundColor: "#3E404B",
        }),
    ];

    const languagePlugin =
        language === "javascript"
            ? extensions.push(javascript({ jsx: true }))
            : null;

    return (
        <CodeMirror
            value={value}
            height={height}
            width={width}
            theme={dracula}
            extensions={extensions}
            onChange={(value) => null}
            placeholder={"// Enter your code here"}
        />
    );
};
