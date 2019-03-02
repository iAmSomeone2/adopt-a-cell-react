import React, { Component } from 'react';

// Local Imports
import SubGrid from "./subGrid";
import array_layout from  "./json/e2_array.json";

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
            console.log(grid); // Debug to check object output.
            panelArray.push(
                <SubGrid
                grid_id={grid.name}
                colNum={grid.columns}
                rowNum={grid.rows}
                cellSize={cellDefaults.size}
            />
            );
        }
        return panelArray;
    }

    render(){
        return (
            <div>
                {this.constructArray()}
            </div>
        );
    }
}

export default CellArray;