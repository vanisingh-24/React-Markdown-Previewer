import React, { useState,useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import marked from 'marked';

import GlobalStyles from './utils/GlobalStyles';
import Main from './Components/Main';
import Container from './Components/Container';
import Previewer from './Components/Previewer';
import Editor from './Components/Editor';
import RepoLink from './Components/RepoLink';
import Toggle from './Components/Toggle';
import Header from './Components/Header';
import {MoonIcon, SunIcon} from './Components/Icons';

import{light,dark} from './utils/Themes';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [markdown, setMarkdown] = useState(placeholder);

  const toggleTheme = () => {
    if(theme === 'light'){
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }else{
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('default-md');
    if(data) setMarkdown(data);
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    localStorage.setItem('default-md', markdown);
  }, [markdown]);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
          <Toggle onClick={toggleTheme} theme={theme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Toggle>
          <Main>
            <Editor
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
            />
            <Previewer dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </Main>
        </Container>
        <RepoLink />
      </>
    </ThemeProvider>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer !
## 🤷‍♂️ What can you write here
1. Code
  *  \`<div></div>\` 
  *  \`\`\`
  // this is multi-line code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\` 
* \`\`\` bash
  npm install 
  \`\`\`
2. Blockquote
	* eg: 
> Blockquote
3. Different Text Style
  * **Bold**
  * *Italic*
  * ~~Strikethrough~~
4. Links [Click Here](https://github.com/vanisingh-24)
  
5. Tables
    | Name          | Age           | Salary|
    | ------------- |:-------------:| -----:|
    | Steve        | 32           | $160000|
    | Peter         | 24            |$120000|
    | Tony        | 37           | $150000 |
6. Images
  
    ![React](https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/412/square_256/AccessibleReact_1000.png)

## 🛸 Technologies Used
*  React.js
*  SCSS
*  Javascript
`;

export default App;