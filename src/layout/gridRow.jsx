import React, { Component } from 'react';

// Local imports
import Cell from "./cell";

class GridRow extends Component {

    constructRow(){
        const ids = [...Array(this.props.cellNum).keys()];
        const cells = ids.map((id) =>
            <td>
                <Cell index={id+1} owner={""} claimed={false} size={64}/>
            </td>
        );
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