import React, { Component } from 'react';

import CellArray from "./array";

import E2img from "./assets/e2.svg"
import "./css/e2.css";

class E2 extends Component{
    render(){
        return (
            <div className={"e2"}>
                <img className={"e2img"} src={E2img} width={216} alt={""}/>
                <CellArray className={"cellArray"}/>
            </div>
        )
    }
}

export default E2;