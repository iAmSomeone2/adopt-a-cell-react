import React, { Component } from 'react';
import "./css/cell.css"
import UnclaimedCell from './assets/solar-cell_unclaimed.svg';
import ClaimedCell from './assets/solar-cell_claimed.svg';

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            size: this.props.size,
            // mouseOver: false,
            componentClasses: ["Cell"]
        };
        // this.originalSize = this.state.size;

        this.CellInfo = {
            size:100,
            adoptee:this.props.owner,
            isClaimed:this.props.claimed,
            id:this.props.index,
        };
    }

    handleOnClick(){
        // Turn on the cell overlay
        console.log("Cell #" + this.props.index + " was clicked.");
        console.log(this.props.cellDetail.current.style);
        this.props.cellDetail.current.style.display = "block";
    }
    
    render() {
        // Change visuals and alt-text depending on which state the tile is in.

        let cell_type;
        let cell_desc;
        if (this.props.claimed) {
            cell_type = ClaimedCell;
            cell_desc = "Claimed Solar Cell. ID: " + this.props.index;
            this.state.componentClasses.push("claimed");
        } else {
            cell_type = UnclaimedCell
            cell_desc = "Unclaimed Solar Cell. ID: " + this.props.index;
            this.state.componentClasses.push("unclaimed");
        }

        return (
            // This needs to be modified to be a button instead of just an image.
            <div className={this.state.componentClasses.join(' ')}
                 onClick={() => {this.handleOnClick()}} 
                width={this.state.size} height={this.state.size}>
                <img className="Cell-Img" src={cell_type} alt={cell_desc} width={this.state.size} 
                    height={this.state.size}/>
            </div>
        );
    }
}

export default Cell;