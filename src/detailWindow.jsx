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
        if (this.infoExists)  {
            // Grab the cell data and apply it to the state.
            this.parseJSON();
            if (this.cellOwned) {
                // Cell has an owner so class reflects that.
                //this.state.viewClass = ["owned-cell"];
            } else {
                //this.state.viewClass = ["free-cell"];
            }

            console.log("A Detail Cell should be rendering.")
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
            console.log("The SVP logo should be rendering.")
            return (
                <div>
                    <img src={SVP_logo} alt={"SVP logo."} width={128}/>
                </div>
            );
        }
    }

    render() {
        // Set which components are applied to the detailWindow.
        console.log("Detail window should be re-rendering.")

        return (
            <div>
                {this.setComponent()}
            </div>
        );
    }
}

export default DetailWindow;