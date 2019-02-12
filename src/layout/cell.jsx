import React, { Component } from 'react';
import unclaimed_cell from './assets/solar-cell_unclaimed.svg';
import claimed_cell from './assets/solar-cell_claimed.svg';

const unclaimed_cell_desc = "Unclaimed cell #";
const claimed_cell_desc = "Cell paid for by: ";

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            claimed: false,
            index: 0,
            owner: null,
            size: 128,
        };
    }

    render() {
        // Change visuals and alt-text depending on which state the tile is in

        let cell_type;
        let cell_desc;
        if (this.state.claimed) {
            cell_type = claimed_cell;
            cell_desc = claimed_cell_desc + this.state.owner; 
        } else {
            cell_type = unclaimed_cell
            cell_desc = unclaimed_cell_desc + this.state.index;
        }

        return (
            <div>
                <img src={cell_type} alt={cell_desc} width={this.state.size}></img>
            </div>
        );
    }
}

export default Cell;