import React, { Component } from 'react';
import "./css/cell.css";
import "./css/detailCell.css";
import UnclaimedCell from './assets/solar-cell_unclaimed.svg';
import ClaimedCell from './assets/solar-cell_claimed.svg';


const unclaimed_cell_desc = "Unclaimed cell #";
const claimed_cell_desc = "Cell adopted by: ";

class DetailCell extends Component {
    render(){
        let cellImg;
        let cellDesc;
        if (this.props.isClaimed){
            cellImg = ClaimedCell;
            cellDesc = claimed_cell_desc + " " + this.props.adoptee;
        } else {
            cellImg = UnclaimedCell;
            cellDesc = unclaimed_cell_desc + " " + this.props.id;
        }

        return(
            <div className={"Cell"}>
                <img className={"Cell-Img"} src={cellImg} width={this.props.size} alt={cellDesc}/>
                <p className={"Cell-Content"}>
                    {cellDesc}
                </p>
            </div>
        );
    }
}

export default DetailCell;