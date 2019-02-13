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

    /*
        This function maps Cell objects to the 2-D array, cells, in the object state.
        This is strictly a logical mapping. Nothing is drawn at this point.
    */
    initCellGrid(){
        let idx = this.state.startIndex;
        // Run this for each column to make (x-value)
        for (let x = 0; x < this.state.columns; x++){
            // Run this for each row to make (y-value)
            for (let y = 0; y < this.state.rows; y++){
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

    render() {
        // Display the cells according to their row and column info

        /*
            TODO: Figure out how to properly iterate through the cell array, and
            render them to the page.
        */
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