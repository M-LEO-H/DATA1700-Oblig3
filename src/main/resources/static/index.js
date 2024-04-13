/**
 * TO DO:
 *      - see over regex checker, cannot be a loop --> find another solution
 *      - see other faults and bug fix
 *      - if time create a nother pojo file for movies and use the readyfunction to
 *          display
 *
 */
$(function (){
    validation($("#fName").val(), "First name");
})


function purchase() {
    //Variables
    const film = $("#movie").val();
    const ticketNr = $("#ticketNr").val();
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const phoneNr = $("#phoneNr").val();
    const testEmail = $("#email").val();

    let correct = validation(film, "Movie") * validation(ticketNr, "Ticket number") *
        validation(firstName, "First name") * validation(lastName, "Last name") *
        validation(phoneNr, "Phone number") * validation(testEmail, "Email");

    if (correct) {
        const purchase = {
            movie: film,
            numberOfTickets: ticketNr,
            fName: firstName,
            lName: lastName,
            phoneNumber: phoneNr,
            email: testEmail
        }
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
 *  Original code is modified and/or translated. Depend code on this function
 *  are imitating the authors naming and solution
 *  --------------------------------------------------------------------------
 *
 * Checks if information inserted by user is valid and inserts error message when necessary
 * @param   {string}    data    Value fetched from input.
 * @param   {string}    span    Name of field (capitalised, as necessary, for error message). Error div/span-id should match "[felt]-error" pattern, all lower case.
 */
function validation(data, span){
    /**
     * RegEx code:
     *      Tittle: Regular Expressions (RegEx) Tutorial #15 - Email RegEx Pattern
     *      Author: Net Ninja
     *      Date: 5. March 2018
     *      Available: https://www.youtube.com/watch?v=QxjAOSUQjP0
     *
     *      A more comprehensive email pattern you could use the one provided by
     *      the community user Tripleaxis
     *      Available: https://regexr.com/2rhq7
     */
    const namePattern = /^[a-z]+$/g
    const phonePattern = /^\d{8}$/g
    const emailPattern = /^([a-z\d_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g

    let patterns = [namePattern, phonePattern, emailPattern];



    // A couple of variables to avoid repetition
    const span_lc = span.toLowerCase();
    const error = "#"+span_lc+"-error"

    if (data === ""){
        $(error).html(span + " must be filled.");
        return false;
    }
    if (data === ("--Select " + span_lc + "--")){
        $(error).html("Må velge en " + span_lc + ".");
        return false;
    }
    if (span === "First Name" || span === "Last Name"){
        if(!namePattern.test(data)){
            return false;
        }
    }
    if(span === "Phone number"){
        if (!phonePattern.test(data)){
            return false;
        }
    }
    if(span === "Email"){
        if (!emailPattern.test(data)){
            return false;
        }
    }
    /*for (const ptrn in patterns){
        if (!ptrn.match(data)){
            $(error).html(span + " is not valid")
            return false;
        }
    }*/

    $(error).html("");
    return true;            // No need for "else" because this line will only be reached if all is good.
}

function getAll(){
    $.get("/getAll", function (purchase){
        let ut = "<table><tr>" +
            "<th>Movie</th><th>total tickets</th><th>First name</th><th>Last name</th><th>Phone number</th><th>email</th>" +
            "</tr>";
        for (let p of purchase){
            ut+="<tr>";
            ut+="<td>"+p.movieTitle+"</td><td>"+p.ticketAmount+"</td><td>"+p.firstName+"</td><td>"+p.lastName+"</td>" +
                "<td>"+p.phoneNumber+"</td><td>"+p.email+"</td>";
            ut+="</tr>";
        }
        document.getElementById("all tickets").innerHTML=ut;
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