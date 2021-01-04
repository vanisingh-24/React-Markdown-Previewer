import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import "./App.css";

import Editor from './Components/Editor';
import Previewer from './Components/Previewer';

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <div className="App">
       <div className="container">

           <div className="row mt-4">
              <div className="col text-center">
               <h1>
                 <Badge className="text-align-center" variant="light" style={{fontSize: '50px'}}>
                   React Markdown Previewer
                 </Badge>
               </h1>
              </div>
            </div>

            <div className="row mt-5">
             <div className="col-md-6">
              <div className="col text-center">
                 <h4>
                   <Badge className="text-align-center" variant="secondary" style={{fontSize: '28px'}}>
                      Editor
                   </Badge>
                 </h4>
               </div>
               <Editor 
                 markdown={markdown}
                 onChange={(e) => setMarkdown(e.target.value)}
                />
              </div>

              <div className="col-md-6">
               <div className="col text-center">
                 <h4>
                   <Badge className="text-align-center" variant="secondary" style={{fontSize: '28px'}}>
                     Previewer
                   </Badge>
                 </h4>
               </div>
               <Previewer markdown={markdown} />
               
              </div>
            </div>
        </div>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:`

export default App;