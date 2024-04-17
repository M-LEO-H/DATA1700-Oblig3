/**
 * Gets all values from user, validates them then stores
 */
function purchase() {
    //Variables
    const film = $("#movie").val();
    const ticketNr = $("#ticketNr").val();
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const phoneNr = $("#phoneNr").val();
    const testEmail = $("#email").val();

    let correct = validation(film, "Movie") * validation(ticketNr, "ticket-number") *
        validation(firstName, "first-name") * validation(lastName, "last-name") *
        validation(phoneNr, "phone-number") * validation(testEmail, "Email");

    if (correct) {
        const purchase = {
            movie: film,
            numberOfTickets: ticketNr,
            fName: firstName,
            lName: lastName,
            phoneNumber: phoneNr,
            email: testEmail
        };
        $.post("/savePurchase", purchase, function () {
            getAll();

        });
        reset();
    }
}


/**
 * code:
 *   Title: SQL1-Kodegjennomgang
 *   Author: anafvana
 *   Date: last updated 15. April 2021
 *   Availability: https://github.com/anafvana/SQL1-Kodegjennomgang
 *
 *  Original code is modified and/or translated. Code depended on this function
 *  are imitating the authors naming and solution
 *  --------------------------------------------------------------------------
 *
 * Checks if information inserted by user is valid and inserts error message when necessary
 * @param   {string}    data    Value fetched from input.
 * @param   {string}    span    Name of field (capitalised, as necessary, for error message). Error div/span-id should match "[felt]-error" pattern, all lower case.
 */
function validation(data, span){
    /**
     * RegEx code for Phone & Email:
     *      Tittle: Regular Expressions (RegEx) Tutorial #15 - Email RegEx Pattern
     *      Author: Net Ninja
     *      Date: 5. March 2018
     *      Available: https://www.youtube.com/watch?v=QxjAOSUQjP0
     *
     * RegExp code for Name:
     *      Questioned answered by: maček
     *      Available: https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
     */

    const namePattern = /^[a-z ,.'-]+$/i
    const phonePattern = /^\d{8}$/g
    const emailPattern = /^([a-z\d_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g


    // A couple of variables to avoid repetition
    const span_lc = span.toLowerCase();
    const error = "#"+span_lc+"-error"

    if (data === ""){
        $(error).html(span + " must be filled.");
        return false;
    }
    if (data === ("--Select " + span_lc + "--")){
        $(error).html("Must select a " + span_lc + ".");
        return false;
    }
    if (span === "first-name" || span === "last-name"){
        if(!namePattern.test(data)){
            $(error).html("Name is not valid");
            return false;
        }
    }
    if(span === "phone-number"){
        if (!phonePattern.test(data)){
            $(error).html("Phone number is not valid");
            return false;
        }
    }
    if(span === "Email"){
        if (!emailPattern.test(data)){
            $(error).html("Email is not valid");
            return false;
        }
    }
    if(span === "ticket-number"){
        if (isNaN(Number(data)) || data < 1){
            $(error).html("Not a number or not above 0");
            return false
        }
    }

    $(error).html("");
    return true;            // No need for "else" because this line will only be reached if all is good.
}

function getAll(){
    $.get("/getAll", function (purchase){
        let out = "<table class='table'><tr>" +
            "<th>Last Name</th><th>First Name</th><th>Phone number</th><th>Email</th><th>Movie</th><th>Number of Tickets</th>" +
            "</tr>";
        for (let p of purchase){
            out+="<tr>";
            out+="<td>"+p.lName+"</td><td>"+p.fName+"</td><td>"+p.phoneNr+"</td><td>"+p.email+"</td>" +
                "<td>"+p.movie+"</td><td>"+p.numberOfTickets+"</td>";
            out+="</tr>";
        }
        document.getElementById("all tickets").innerHTML=out;
    })
}



//Reset function of all inputs
function reset(){
    document.getElementById("movie").value = "--Select movie--";
    document.getElementById("ticketNr").value = "0";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phoneNr").value = "";
    document.getElementById("email").value = "";
}


function deleteTickets(){
    $.post("/deleteAll", function (){
        getAll();
    });
}