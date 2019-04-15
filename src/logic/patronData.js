/*
    The patronData class grabs the patron data from cell.bdavidson.dev/patron-data.json and converts it into a
    JavaScript object. This object can be used to update the values in the array.
 */

const url = "https://cell.bdavidson.dev/patron-data";

// PatronData encapsulates all of the functionality for retrieving the patron data and saving it to memory.
class PatronData {
    patronData = null;
    cellData = null;
    totalRaised = 0;

    async updateData() {
        /*
            UpdateData grabs the most recent version of the patron data from where it's hosted.
         */
        // Fetch the data from the url.
        return new Promise((resolve, reject) => {
            fetch(url, {
                crossDomain:true,
                method: "GET",
                headers: {'Content-Type':'text/plain'}
            })
            // Convert the response to JSON and add the respective entries to the their variables.
                .then((resp) => resp.json())
                    .then((data) => {
                        this.patronData = data.patron_list;
                        this.cellData = data.cells;
                        this.totalRaised = data.patron_list.total_raised;
                        resolve("Data downloaded!");
                    })
                    .catch((error) => {
                        reject(error);
                    })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    getPatronData() {
        return this.patronData;
    }

    getCellData() {
        return this.cellData;
    }

    getTotalRaised() {
        return this.totalRaised;
    }
}

export default PatronData;