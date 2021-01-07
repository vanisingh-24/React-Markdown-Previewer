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

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://github.com/PragatiVerma18), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;


export default App;