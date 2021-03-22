import React from "react";
import ReactDOM from "react-dom";
import Hello from './src/js/Hello';
import "./src/css/main.scss";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg: "React.js"
        }
    }
    render() {
        return (
            <div>
                <Hello msg={this.state.msg}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));