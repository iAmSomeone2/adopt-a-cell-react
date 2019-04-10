import React, { Component } from 'react';

// Local imports
import "./info.css";

const CAMPAIGN_SRC = "https://crowdfund.umn.edu/?cfpage=project&project_id=26458";

class Info extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

 
    handleClick() {
        // handleClick() opens the crowdfund page in a new tab.
        var win = window.open(CAMPAIGN_SRC, "_blank");
        win.focus();
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className={"contribute_btn"}
                    onClick={this.handleClick}
                >
                    Adopt!
                </button>
                <div className={"content card"}>
                    <div className={"text"}>
                        <p>
                            Hover your mouse over a yellow cell to see who adopted it! Mobile users
                            can tap on the cells.
                        </p>
                        <p>
                            To have a cell adopted in your name, contribute $50 to our campaign.
                            $25 donations will be paired to jointly adopt a cell.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info