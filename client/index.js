import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  render(){
    return (
      <div>
        <h1>
            This is where FPL players will live
        </h1>
      </div>
    );

  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));