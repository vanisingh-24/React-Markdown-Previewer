import React, { useState,useEffect } from 'react';
import "./App.css";
import { ThemeProvider } from 'styled-components';

import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import ThemeColor from './Components/ThemeColor';
import RepoLink from './Components/RepoLink';
import Toggle from './Components/Toggle';
import {MoonIcon, SunIcon} from './Components/Icons';

import{
  light,
  dark
} from './utils/Themes';
import {useTheme} from './utils/useTheme';

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);
  const [theme, setMode, mountedComponent] = useTheme();

  const themeMode = () => {
    switch (theme) {
      case "light":
        return light;
      case "dark":
        return dark;
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

const placeholder = `Heading
=======

---

Sub-heading
-----------
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Text attributes *italic*, **bold**, 

Ordered list:

  * item
  * item
  * item

Numbered list:

  1. item
  2. item
  3. item

javascript 
var s = "JavaScript syntax highlighting";

alert(s);
 

*[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)*`

export default App;