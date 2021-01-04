import React, { useState } from 'react';
import "./App.css";
import { ThemeProvider } from 'styled-components';

import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import ThemeColor from './Components/ThemeColor';

import{
  lightTheme,
  darkTheme,
  oceanTheme,
  quietTheme,
  marvelTheme
} from './utils/Themes';
import {useTheme} from './utils/useTheme';

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);
  const [theme, setMode, mountedComponent] = useTheme();

  const themeMode = () => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      case "ocean":
        return oceanTheme;
      case "quiet":
        return quietTheme;
      case "marvel":
        return marvelTheme;
      default:
        return lightTheme;
    }
  };

  if(!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode()}>
      <div className="container">
        <h1 className="is-size-1 has-text-weight-bold has-text-centered">
          React Markdown Previewer
        </h1>
        <ThemeColor setMode={setMode} />
        <div className="AppWrap columns">
            <div className="EditorWrap column">
              <Editor
                markdown={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />
            </div>
            <div className="PreviewerWrap column">
              <Previewer markdown={markdown} />
            </div>
        </div>
      </div>
    </ThemeProvider>
    // <div className="App">
    //    <div className="container">

    //        <div className="row mt-4">
    //           <div className="col text-center">
    //            <h1>
    //              <Badge className="text-align-center" variant="light" style={{fontSize: '50px'}}>
    //                React Markdown Previewer
    //              </Badge>
    //            </h1>
    //           </div>
    //         </div>

    //         <div className="row mt-5">
    //          <div className="col-md-6">
    //           <div className="col text-center">
    //              <h4>
    //                <Badge className="text-align-center" variant="secondary" style={{fontSize: '28px'}}>
    //                   Editor
    //                </Badge>
    //              </h4>
    //            </div>
    //            <Editor 
    //              markdown={markdown}
    //              onChange={(e) => setMarkdown(e.target.value)}
    //             />
    //           </div>

    //           <div className="col-md-6">
    //            <div className="col text-center">
    //              <h4>
    //                <Badge className="text-align-center" variant="secondary" style={{fontSize: '28px'}}>
    //                  Previewer
    //                </Badge>
    //              </h4>
    //            </div>
    //            <Previewer markdown={markdown} />
               
    //           </div>
    //         </div>
    //     </div>
    // </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:`

export default App;