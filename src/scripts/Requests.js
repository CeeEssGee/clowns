import { getRequests, deleteRequest, getClowns, saveCompletion, getCompletions, getOpenRequests } from "./dataAccess.js" // imports the array of requests 

// row9 - added clowns 
export const Requests = () => { // to retrieve the requests array from dataAccess.js
    // let openRequests = getOpenRequests()
    const requests = getRequests() // set as a variable so we can use the data 
    const clowns = getClowns()
    const completions = getCompletions()

    let convertRequestToListElement = (request) => { // create a string from the data incoporating list tags
        return `
        <tr class="reservation" id="${request.id}">
            <td>${request.parent}</td>
            <td>${request.child}</td>
            <td>${request.attendees}</td>
            <td>${request.address}</td>
            <td>${request.partyDate}</td>
            <td>${request.duration}</td>
            <td><button class="request__delete" id="request--${request.id}">Decline</button></td>
            <td><select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${
                clowns.map(
                    clown => {
                        return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
            }
        </select></td>
        `
    }
     
    // creates the rest of the html incorporating .map(function that creates the list of strings).join("") within unordered list tags. We've incorporated the <li> tags in the function, so no need to include anything within the .join("")
    let html = `
        <table>
            <thead>
                <tr class = "tableHeaders">
                    <th>Parent's Name</th>
                    <th>Child's Name</th>
                    <th>Attendees</th>
                    <th>Address</th>
                    <th>Party Date</th>
                    <th>Duration</th>
                    <th>Cancel</th>
                    <th>Clown Assigned</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    ${
                        requests.map(convertRequestToListElement).join("") //
                    }
                </tr>
            </tbody>
        </table>
    `

    return html
}


// Now add an event listener to the main container. When the user clicks on any of the delete buttons, invoke the deleteRequest() function you just made above. Make sure you pass the id of the service request to the deleteRequest() function as an argument.
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


// row9
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.className === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            
            /*
                This object should have 3 properties
                   1. requestId
                   2. clownId
                   3. date_created
            */
            const completion = {
                requestId,                
                clownId,
                date_created: Date.now()

             }

            
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

                saveCompletion(completion)
                // deleteRequest(requestId)
        }
    }
)














// DIFFERENT WAYS TO DO THE SAME FUNCTION AS Requests
        // export const Requests = () => {
        //     const requests = getRequests()
        //     let description = request => request.description
        //     let html = `
        //         <ul><li>
        //             ${
        //                 requests.map(description).join("</li><li>")
        //             }
        //         </li></ul>
        //     `
        //     return html
        // }

        // export const Requests = () => {
        //     const requests = getRequests()
        //     let html = `
        //         <ul><li>
        //             ${
        //                 requests.map(request => request.description).join("</li><li>")
        //             }
        //         </li></ul>
        //     `
        //     return html
        // }

    // AND ANOTHER ONE
        // export const Requests = () => {
        //     const requests = getRequests()
        //     let descriptions = requests.map(request => request.description) // 
        //     let html = `
        //         <ul><li>
        //             ${descriptions.join(`</li><li>`)}
        //         </li></ul>
        //     `
        //     return html
        // }
