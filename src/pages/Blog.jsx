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

    /*
        1. Connect to FB
        2. Call blogs.list() => (file) {
            // Fetch file
            // Create MD element
            // Join to elements
            // Reference animal farm https://github.com/fireship-io/react-course/blob/main/animalfarm/src/App.jsx
        }
    */

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