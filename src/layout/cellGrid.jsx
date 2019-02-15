import React, { Component } from 'react';
import Cell from "./cell";

class CellGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            startIndex: 1,
            columns: 2,
            rows: 2,
            // cells is initialized as an empty 2D array.
            cells: () => {
                let cells = []
                for (let i = 0; i < this.state.columns; i++){
                    cells[i] = [];
                }
                return cells;
            },
        };

        initCellGrid();
    }

    // TODO: Rework Cell class so that it gets its info from here. 

    /*
        This function maps Cell objects to the 2-D array, cells, in the object state.
        This is strictly a logical mapping. Nothing is drawn at this point.
    */
    initCellGrid(){
        let idx = this.state.startIndex;
        // Run this for each row to make (x-value)
        for (let x = 0; x < this.state.rows; x++){
            // Run this for each column to make (y-value)
            for (let y = 0; y < this.state.columns; y++){
                this.state.cells[x][y] = new Cell({
                    index: idx
                });
                idx++;
            }
        }
    }

    renderCell(size) {
        return (
            <Cell
                size={size}
            />
        );
    }

    renderCellRow(size) {
        /* 
            A cell row will will have the same number of columns as there are in the
            state, so we can use that value to determine how many cells to render.
        */
        for (let col = 0; col < this.state.columns; col++){
            
        }
    }

    render() {
        // Display the cells according to their row and column info

        /*
            Cells should be rendered row by row.
        */
        let row = 0;

        return (
            <div>
                <div className="cell-row">
                    {

                    }
                </div>
            </div>
        );
    }
}