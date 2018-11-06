import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

var contentNode = document.getElementById('Main');

class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h1>HELLO</h1>
        )
    }
}
ReactDOM.render(<Main />, contentNode);
export default Main;