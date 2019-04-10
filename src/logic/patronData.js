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
        fetch(url, {
            crossDomain:true,
            method: "GET",
            headers: {'Content-Type':'application/json'},
        })
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

        /*
        // We're going to try to use a XMLHttpRequest here since I can't get fetch to work.
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';
        request.send();

        request.onload = () => {
            let aacData = request.response;
            this.patronData = aacData.patron_list;
            this.cellData = aacData.cells;
            this.totalRaised = aacData.total_raised;
        };
        */
    }
}

export default PatronData;