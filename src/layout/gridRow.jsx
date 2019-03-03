import React, { Component } from 'react';

// Local imports
import Cell from "./cell";
import "./css/gridRow.css"

class GridRow extends Component {

    constructRow(){
        const cellIdx = this.props.startIdx;
        const endIdx = cellIdx + this.props.cellNum;

        let cells = [];
        for (let i = cellIdx; i < endIdx; i++){
            cells.push(
                <td>
                    <Cell index={i} owner={this.props.cellOwner} claimed={this.props.cellClaimed} size={this.props.cellSize}/>
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