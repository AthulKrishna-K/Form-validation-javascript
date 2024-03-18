// document.getElementById("name").addEventListener("keyup", function () {

//     var fname = document.getElementById("name").value
//     var letters = /[A-z]/g;
//     if (fname.match(letters)) {
//         document.getElementById("p1").textContent = ""
//     }
//     else {
//         document.getElementById("p1").textContent = "Name should be char"
//         document.getElementById("p1").style.color = "red"
//     }
// })

// document.getElementById("mail").addEventListener("keyup", function () {
//     var mails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var mailid = document.getElementById("mail").value

//     if (mailid.match(mails)) {
//         document.getElementById("p2").textContent = ""
//     }
//     else {
//         document.getElementById("p2").textContent = "not valid"
//         document.getElementById("p2").style.color = "red"
//     }

// })
// document.getElementById("number").addEventListener("keyup", function () {
//     var numbers = /[0-9]/g;
//     var phnum = document.getElementById("number").value
//     if (phnum.match(numbers)) {
//         document.getElementById("p3").textContent = ""
//     }
//     else {
//         document.getElementById("p3").textContent = "not valid"
//         document.getElementById("p3").style.color = "red"
//     }

// })

function validation() {
    var letters = /[A-z]/g;
    var mails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /[0-9]/g;
    var fname = document.getElementById("name").value
    var mailid = document.getElementById("mail").value
    var phnum = document.getElementById("number").value

    // name validation
    if (fname.match(letters)) {
        document.getElementById("p1").textContent = ""
        return false
    }
    else if(fname="") {
        document.getElementById("p1").textContent = "Please enter your name"
        document.getElementById("p1").style.color = "red"
        return false
    }
    else{
        document.getElementById("p1").textContent = "Name should be char"
        document.getElementById("p1").style.color = "red"
        return false
    }

    // mail validation//

    if (mailid.match(mails)) {
        document.getElementById("p2").textContent = ""
        return false
    }
        else if(fname="") {
            document.getElementById("p1").textContent = "Please enter your mail id"
            document.getElementById("p1").style.color = "red"
            return false
        }
        else{
            document.getElementById("p1").textContent = "invalid format"
            document.getElementById("p1").style.color = "red"
            return false
    }
}