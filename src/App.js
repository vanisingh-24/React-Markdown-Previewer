import React from 'react';
import Badge from "react-bootstrap/Badge";

export default class App extends React.Component{
  render(){
  var variableOne = 'Lorem Ipsum';
  var variableTwo = 'Lorem Ipsum';

  var inputStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px"
  };

  var outputStyle = {
    width: "400px",
    height: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

    return (
      <div className="App">
         <div className="container">
           <div className="row mt-4">
             <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
             </div>
           </div>

           <div className="row mt-4">
             <div className="col-md-6">
               <div className="col text-center">
                 <h4>
                   <Badge className="text-align-center" variant="secondary">
                     Markdown Input
                   </Badge>
                 </h4>
               </div>
               <div className="mark-input" style={inputStyle}>
                 <textarea className="input" style={inputStyle}></textarea>
               </div>
             </div>

             <div className="col-md-6">
             <div className="col text-center">
                 <h4>
                   <Badge className="text-align-center" variant="secondary">
                     Preview
                   </Badge>
                 </h4>
               </div>
               <div style={outputStyle}>
                 
               </div>
             </div>
           </div>
         </div>
      </div>
    );
  }
}
