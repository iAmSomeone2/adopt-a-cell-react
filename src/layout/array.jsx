import React, { Component } from 'react';

// Local Imports
import SubGrid from "./subGrid";
import ArrayLayout from  "./json/e2_array.json";
import "./css/array.css"
import E2img from "./assets/e2.svg";
import "./css/e2.css";



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

        // let subGridNum = Object.keys(ArrayLayout.subGrid).length;
        const subGrids = ArrayLayout.subGrid; // This will be used to map the JSX Elements.
        const cellDefaults = ArrayLayout.cellDefault;
        let panelArray = [];
        for (let grid_idx in subGrids){
            let grid = subGrids[grid_idx];

            // Check if an owner exists for the current cell.

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
                        cellDetail={this.props.cellDetail}
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
                        cellDetail={this.props.cellDetail}
                    />
                );
            }
        }
        return panelArray;
    }

    render(){
        return (
            <div className={"outer-div e2"}>
                <img className={"e2img"} src={E2img} width={256} alt={""}/>
                <div className={"cellArray"}>
                    {this.constructArray()}
                </div>
            </div>
        );
    }
}

export default CellArray;