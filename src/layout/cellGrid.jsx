import React, { Component } from 'react';
import Cell from "./cell";

class CellGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            startIndex: 2,
            columns: 2,
            rows: 2,
            // cells is initialized as an empty 2D array.
            cells: () => {
                let cells = []
                for (let i = 0; i<this.state.columns; i++){
                    cells[i] = [];
                }
                return cells;
            },
        };

        makeCellGrid();
    }

    /*
        This function maps Cell objects to the 2-D array, cells, in the object state.
        This is strictly a logical mapping. Nothing is drawn at this point.
    */
    makeCellGrid(){
        let index = this.state.startIndex;
        // Run this for each column to make (x-value)
        for (let x = 0; x < this.state.columns; x++){
            // Run this for each row to make (y-value)
            for (let y = 0; y < this.state.rows; y++){
                this.state.cells[x][y] = <Cell></Cell>;
                index++;
            }
        }
    }

}