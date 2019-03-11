import React, { Component } from 'react';
import "./css/cell.css"
import UnclaimedCell from './assets/solar-cell_unclaimed.svg';
import ClaimedCell from './assets/solar-cell_claimed.svg';


class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            componentClasses: ["Cell"]
        };
    }

    // ***Mouse event handlers***
    handleOnClick(){
        // This is really just being used for debugging.
        let detailWindow = this.props.detailRef.current;
        console.log("Cell #" + this.props.index + " was clicked.");
        console.log("DetailWindow object:");
        console.log(detailWindow);
    }

    handleMouseEnter(){
        let detailWindow = this.props.detailRef.current;
        // Send the cell info directly to the DetailWindow object.
        detailWindow.setState({
            cellID: this.props.index,
            cellOwner: this.props.owner,
            cellOwned: this.props.claimed
        });
    }

    handleMouseLeave(){
        let detailWindow = this.props.detailRef.current;
        // Remove the cell info from the DetailWindow object.
        detailWindow.setState({
            cellID: this.props.index,
            cellOwner: "",
            cellOwned: false
        });
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
            <div className={this.state.componentClasses.join(' ')}
                onClick={() => {this.handleOnClick()}}
                onMouseEnter={() => {this.handleMouseEnter()}}
                onMouseLeave={() => {this.handleMouseLeave()}}
                width={this.state.size} height={this.state.size}>
                <img className="Cell-Img" src={cell_type} alt={cell_desc} width={this.props.size} 
                    height={this.props.size}/>
            </div>
        );
    }
}

export default Cell;