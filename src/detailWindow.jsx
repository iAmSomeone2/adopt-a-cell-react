import React, { Component } from 'react';
import fs from 'browserify-fs';

// Local imports
import DetailCell from "./layout/detailCell";
import SVP_logo from "./svp_logo.svg";

const JSON_NAME = "current_cell.json";

class DetailWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewClass: "logo",
            cellOwner: "",
            cellOwned: false,
            cellID: 0,
            infoExists: false
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

            this.setState({ infoExists: fileFound });
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
            this.setState({
                cellID: cellData.id,
                cellOwner: cellData.adoptee,
                cellOwned: cellData.isClaimed
            });
            console.log(cellData);
        });
    }

    setComponent() {
        // Component info is determined based on whether the JSON file exists.
        if (this.state.infoExists)  {
            // Grab the cell data and apply it to the state.
        } else {
            // Show the SVP logo.
            return (
                <div>
                    <img src={SVP_logo} alt={"SVP logo."} width={128}/>
                </div>
            );
        }
    }

    render() {
        // Update the state indicating the existance of the data file
        jsonExists();

        // Set which components are applied to the detailWindow. 
        let drawComponent = setComponent();
    }
}

export default DetailWindow;