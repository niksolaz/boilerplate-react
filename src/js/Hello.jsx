import React from "react";

const say = () => {
    return "Starting Template with ";
}

export default ({msg}) => <div><h1>{say()} {msg} !!!</h1></div>