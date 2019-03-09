import React, { Component } from 'react';
import fs from 'browserify-fs';
import "./css/cell.css"
import UnclaimedCell from './assets/solar-cell_unclaimed.svg';
import ClaimedCell from './assets/solar-cell_claimed.svg';

const jsonName = "current_cell.json";

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
        //console.log(this.props.overlay.current.style);
        //this.props.overlay.current.style.display = "block";
        this.writeCellData();
        fs.readFile(jsonName, (err, data) => {
            if (err) throw err;
            let cellData = JSON.parse(data);
            console.log(cellData);
        });
    }

    writeCellData(){
        /* 
            Writes the cell info to a temporary JSON file.
            Using this set up lets us float the cell info back to the top
            so that any object can read it.
        */
       const cellData = {
            id:this.props.index,
            adoptee:this.props.owner,
            isClaimed:this.props.claimed,
       };

       const dataAsJSON = JSON.stringify(cellData);

       fs.writeFile(jsonName, dataAsJSON, 'utf8', (err) => {
           if (err) throw err;
           console.log("Cell data written to " + jsonName);
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
                width={this.state.size} height={this.state.size}>
                <img className="Cell-Img" src={cell_type} alt={cell_desc} width={this.state.size} 
                    height={this.state.size}/>
            </div>
        );
    }
}

export default Cell;