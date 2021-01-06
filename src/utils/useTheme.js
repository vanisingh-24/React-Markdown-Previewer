import React, {useEffect, useState} from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');
    //const [mountedComponent, setMountedComponent] = useState(false);
    const[markdown, setMarkdown] = useState('Heading\n=======\n\n---\n\nSub-heading\n-----------\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nOrdered list:\n\n  * item\n  * item\n  * item\n\nNumbered list:\n\n  1. item\n  2. item\n  3. item\n\n```javascript \nvar s = "JavaScript syntax highlighting";\n\nalert(s);\n``` \n\n*[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)*')
    // const setMode = (mode) => {
    //     window.localStorage.setItem("theme",mode);
    //     setTheme(mode);
    // };

    useEffect(() => {
        const data = localStorage.getItem('default-md');
        if(data) setMarkdown(data);
    }, []);

    useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    localStorage.setItem('default-md', markdown)
  }, [markdown]);

  //return [theme, setMode, mountedComponent];
}