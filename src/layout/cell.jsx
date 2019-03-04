import React, { Component } from 'react';
import "./css/cell.css"
import UnclaimedCell from './assets/solar-cell_unclaimed.svg';
import ClaimedCell from './assets/solar-cell_claimed.svg';



const unclaimed_cell_desc = "Unclaimed cell #";
const claimed_cell_desc = "Cell adopted by: ";

class Cell extends Component {
    originalSize;
    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            size: this.props.size,
            mouseOver: false,
            componentClasses: ["Cell"]
        };
        this.originalSize = this.state.size;
        // Bind the event handlers so that they can be used later.
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(event) {
        /*
            Enlarges the cell and displays the owner info inside of it.
        */
        if (!this.state.mouseOver) {
            this.setState(() => ({
                size: this.state.size * 3,
                mouseOver: true,
            }));
            this.state.componentClasses.push("hover")
        }
    }

    handleMouseOut(event) {
        /*
            Resets the cell size and hides the owner info.
        */
       if (this.state.mouseOver) {
            this.setState(() => ({
                size: this.originalSize,
                mouseOver: false,
                componentClasses: ["Cell"],
            }));
        }
    }

    render() {
        // Change visuals and alt-text depending on which state the tile is in.

        let cell_type;
        let cell_desc;
        if (this.props.claimed) {
            cell_type = ClaimedCell;
            cell_desc = claimed_cell_desc + this.props.owner;
            this.state.componentClasses.push("claimed");
        } else {
            cell_type = UnclaimedCell
            cell_desc = unclaimed_cell_desc + this.props.index;
            this.state.componentClasses.push("unclaimed");
        }

        return (
            // This needs to be modified to be a button instead of just an image.
            <div className={this.state.componentClasses.join(' ')} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                width={this.state.size} height={this.state.size}>
                <img className="Cell-Img" src={cell_type} alt={cell_desc} width={this.state.size} 
                    height={this.state.size}/>
                <p className="Cell-Content">
                    {this.state.mouseOver ? cell_desc : ""}
                </p>
            </div>
        );
    }
}

export default Cell;