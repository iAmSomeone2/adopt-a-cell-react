import React, { Component } from 'react';

// Local imports
import DetailCell from "./layout/detailCell";
import SVP_logo from "./svp_logo.svg";


class DetailWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewClass: ["logo"],
            cellOwner: "",
            cellOwned: false,
            cellID: -1
        };
    }

    render() {
        // Set which components are applied to the detailWindow.
        console.log("Detail window should be re-rendering.")

        let viewComponent = <div>
                                <img src={SVP_logo} alt={"SVP logo."} width={128}/>
                            </div>;

        if (this.state.cellOwned) {
            viewComponent = <DetailCell
                                size={128}
                                adoptee={this.state.cellOwner}
                                id={this.state.cellID}
                                isClaimed={this.state.cellOwned}
                            />;
        }

        return (
            <div>
                {viewComponent}
            </div>
        );
    }
}

export default DetailWindow;