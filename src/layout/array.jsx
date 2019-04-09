import React, { Component } from 'react';

// Local Imports
import SubGrid from "./subGrid";
import PatronData from "../logic/patronData";
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
            Reads through the JSON layout file and creates a JSX Element for the array
        */

        // let subGridNum = Object.keys(ArrayLayout.subGrid).length;
        const subGrids = ArrayLayout.subGrid; // This will be used to map the JSX Elements.
        const cellDefaults = ArrayLayout.cellDefault;
        let panelArray = [];

        // Create a new patronData object to pass to the sub-grids.
        let patronData = new PatronData();
        console.log("PatronData object created.");
        console.log(patronData.cellData);
        console.log(patronData.patronData);
        console.log(patronData.totalRaised);

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
                        detailRef={this.props.detailRef}
                        patronData={patronData}
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
                        detailRef={this.props.detailRef}
                        patronData={patronData}
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