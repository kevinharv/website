import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Blog() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch('src/posts/Test.md')
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <>
            <ReactMarkdown children={markdown} />
        </>
    );
}