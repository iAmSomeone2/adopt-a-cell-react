import React, { Component } from 'react';

// Local imports
import Cell from "./cell";
import "./css/gridRow.css"

// Import patron info
import Patrons from "../patron_info/test_data.json";

class GridRow extends Component {

    constructRow(){
        const cellIdx = this.props.startIdx;
        const endIdx = cellIdx + this.props.cellNum;

        let cells = [];
        for (let i = cellIdx; i < endIdx; i++){
            // See if adoptee info exists for this cell, and set it if it does
            const adopteeList = Patrons.adoptees; // For some reason these are always seen as ints despite them being objects.
            let adoptee = this.props.cellOwner;
            let isClaimed = this.props.cellClaimed;
            // console.log(adopteeList);
            for (let idx in adopteeList){
                if (adopteeList[idx].cell_id === i){
                    adoptee = adopteeList[idx].first_name + " " + adopteeList[idx].last_name;
                    isClaimed = true;
                }
            }

            cells.push(
                <td>
                    <Cell index={i} owner={adoptee} claimed={isClaimed} size={this.props.cellSize}/>
                </td>
            );
        }

        return cells;
    }

    render(){
        return (
            <tr>
                {this.constructRow()}
            </tr>
        );
    }
}

export default GridRow;