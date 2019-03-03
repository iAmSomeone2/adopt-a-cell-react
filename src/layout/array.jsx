import React, { Component } from 'react';

// Local Imports
import SubGrid from "./subGrid";
import array_layout from  "./json/e2_array.json";
import "./css/array.css"

class CellArray extends Component {
    
    /*
        The Array is in charge of interpreting layout information and 
        organizing SubGrids. Layout information is stored in a JSON file
        that is read in as the JSX Element is constructed in constructArray().
    */

    constructArray(){
        /*
            Reads through the JSON layuot file and creates a JSX Element for the array
        */

        // let subGridNum = Object.keys(array_layout.subGrid).length;
        const subGrids = array_layout.subGrid; // This will be used to map the JSX Elements.
        const cellDefaults = array_layout.cellDefault;
        let panelArray = [];
        for (let grid_idx in subGrids){
            let grid = subGrids[grid_idx];
            if (grid.hasOwnProperty("padding_rows")) {
                let divHeight = cellDefaults.size * grid.padding_rows;
                let divHeightAttrib = divHeight.toString() + "px"; 
                panelArray.push(
                    <SubGrid
                        className={"inner-div"}
                        grid_id={grid.name}
                        colNum={grid.columns}
                        rowNum={grid.rows}
                        startIdx={grid.start_idx}
                        cellSize={cellDefaults.size}
                        cellClaimed={cellDefaults.claimed}
                        cellOwner={cellDefaults.owner}
                        marginBottom={divHeightAttrib}
                    />
                );
            } else {
                panelArray.push(
                    <SubGrid
                        className={"inner-div"}
                        grid_id={grid.name}
                        colNum={grid.columns}
                        rowNum={grid.rows}
                        startIdx={grid.start_idx}
                        cellSize={cellDefaults.size}
                        cellClaimed={cellDefaults.claimed}
                        cellOwner={cellDefaults.owner}
                    />
                );
            }
        }
        return panelArray;
    }

    render(){
        return (
            <div className={"outer-div"}>
                {this.constructArray()}
            </div>
        );
    }
}

export default CellArray;