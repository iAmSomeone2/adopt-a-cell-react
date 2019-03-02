import React, { Component } from 'react';

// Local imports
import GridRow from "./gridRow";
import "./subGrid.css";

class SubGrid extends Component {

    /*
        DESIGN NOTES
        The easiest way to render the cells would be as a table. Due to how
        mapping JSX elements works, the grids should be constructed one row
        at a time.
    */

    constructGrid() {
        // Returns a grid containing all of the needed rows of cells.
        // Use GridRow to get each row.
        const rows = [...Array(this.props.rowNum).keys()];
        const cellGrid = rows.map((row) =>
            <GridRow cellNum={this.props.colNum}/>
        );

        return cellGrid;
    }

    render(){
        // Returns what gets rendered to the page.
        return (
            <table>
                <tbody>
                    {this.constructGrid()}
                </tbody>
            </table>
        );
    }
}

export default SubGrid;