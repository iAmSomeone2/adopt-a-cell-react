/*
    The patronData class grabs the patron data from cell.bdavidson.dev/patron-data.json and converts it into a
    JavaScript object. This object can be used to update the values in the array.
 */

const url = "https://cell.bdavidson.dev/patron-data";
// TODO: Figure out why the app is getting blocked by CORS.

// PatronData encapsulates all of the functionality for retrieving the patron data and saving it to memory.
class PatronData {
    patronData = null;
    cellData = null;
    totalRaised = 0;

    constructor() {
        this.updateData();
    }

    updateData() {
        /*
            UpdateData grabs the most recent version of the patron data from where it's hosted.
         */
        // Fetch the data from the url.
        fetch(url, {mode: "no-cors"})
        // Convert the response to JSON and add the respective entries to the their variables.
            .then((resp) => resp.json())
                .then((data) => {
                    this.patronData = data.patron_list;
                    this.cellData = data.cells;
                    this.totalRaised = data.total_raised;
                })
                .catch((error) => {
                    console.error(error)
                })
            .catch((error) => {
                console.error(error);
            })
    }

    // Set up getters and setters here.
    /*
    get cellData() {
        return this.cellData;
    }

    set cellData(data) {
        this.cellData = data;
    }

    get patronData() {
        return this.patronData;
    }

    set patronData(data) {
        this.patronData = data;
    }

    get totalRaised() {
        return this.totalRaised;
    }

    set totalRaised(total) {
        this.totalRaised = total;
    }
    */
}

export default PatronData;