/*
Blog Page
Author: Kevin Harvey
Date: 20221012
Overview: Markdown renderer for blog posts uploaded to Firebase storage blob.
*/

/*
    TODO
    - Add core site navigation
    - Add Firestore calls to get and display blog posts
*/

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