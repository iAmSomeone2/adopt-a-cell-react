import React, { Component } from 'react';

// Local imports
import Cell from "./cell";
import "./css/gridRow.css"

// Import patron info
//import Patrons from "../patron_info/2019_adoptees.json";

class GridRow extends Component {

    constructRow(){
        const cellIdx = this.props.startIdx;
        const endIdx = cellIdx + this.props.cellNum;

        let cells = [];
        for (let i = cellIdx; i < endIdx; i++){
            // See if adoptee info exists for this cell, and set it if it does
            const adopteeList = this.props.patronData.getPatronData();
            console.log(adopteeList);
            const cellList = this.props.patronData.getCellData();
            let adoptee = this.props.cellOwner;
            let isClaimed = this.props.cellClaimed;
            // console.log(adopteeList);
            for (let cell of cellList){
                // Iterate over the list of adoptees in the cell
                if (cell.adoptee_ids.length === 1) {
                    let id = cell.adoptee_ids[0] - 1;
                    adoptee = adopteeList[id].first_name;
                    adoptee += " " + adopteeList[id].last_name;
                } else {
                    if (cell.adoptee_ids.length > 0) {
                        adoptee = "";
                        let i = 0;
                        let len = cell.adoptee_ids.length;
                        for (let id of cell.adoptee_ids) {
                            id -= 1;
                            adoptee += adopteeList[id].first_name;
                            adoptee += " " + adopteeList[id].last_name;
                            if (i < len) {
                                adoptee += " and ";
                            }
                            i++;
                        }
                    }
                }
            }

            cells.push(
                <td>
                    <Cell
                        index={i}
                        owner={adoptee}
                        claimed={isClaimed}
                        size={this.props.cellSize}
                        detailRef={this.props.detailRef}
                        key={i.toString() + adoptee}
                    />
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