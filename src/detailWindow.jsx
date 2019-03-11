import React, { Component } from 'react';
import fs from 'browserify-fs';

// Local imports
import DetailCell from "./layout/detailCell";
import SVP_logo from "./svp_logo.svg";

const JSON_NAME = "current_cell.json";

class DetailWindow extends Component {
    // Variable declarations
    cellOwner = "";
    cellOwned = false;
    cellID = -1;
    infoExists = false;

    constructor(props) {
        super(props);
        this.state = {
            viewClass: ["logo"]
        };
    }

    jsonExists() {
        // Sets whether the cell data JSON file can be found.
        fs.stat(JSON_NAME, (err, stats) => {
            let fileFound = false;
            
            if (err) {
                // File doesn't exist/couldn't be found.
            } else {
                // File was found and is accessable.
                fileFound = true;
            }

            this.infoExists = fileFound;
        });
    }

    parseJSON() {
        /*
            Reads through the JSON file, converts it to an object,
            and sets the propper state settings.
        */

        let cellData;
        fs.readFile(JSON_NAME, (err, data) => {
            if (err) throw err; 
            cellData = JSON.parse(data);
            this.cellID = cellData.id;
            this.cellOwner = cellData.adoptee;
            this.cellOwned = cellData.isClaimed;
            console.log(cellData);
        });
    }

    setComponent() {
        // Update the state indicating the existance of the data file
        this.jsonExists();
        // Component info is determined based on whether the JSON file exists.
        if (this.state.infoExists)  {
            // Grab the cell data and apply it to the state.
            this.parseJSON();
            if (this.state.cellOwned) {
                // Cell has an owner so class reflects that.
                //this.state.viewClass = ["owned-cell"];
            } else {
                //this.state.viewClass = ["free-cell"];
            }

            this.state.viewClass.shift();

            return (
                <DetailCell 
                    size={128}
                    adoptee={this.cellOwner}
                    id={this.cellID}
                    isClaimed={this.cellOwned}
                />
            );
        } else {
            // Show the SVP logo.
            //this.state.viewClass = ["logo"];
            return (
                <div>
                    <img src={SVP_logo} alt={"SVP logo."} width={128}/>
                </div>
            );
        }
    }

    render() {
        // Set which components are applied to the detailWindow. 
        let drawComponent = this.setComponent();

        return (
            drawComponent
        );
    }
}

export default DetailWindow;