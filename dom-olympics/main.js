//qualifier

header.innerHTML += "<h1 class='header'> JavaScript Made This!! </h1> <br> <h2 id='subHeader'> <span class='name'> Jackson Gallo </span> wrote the JavaScript </h2>";
document.getElementById("subHeader").style.textAlign = "center"

//bronze

let messageNew = document.querySelectorAll(".message")
console.log(Array.from(messageNew))

messageNew[0].textContent="Hello how are you?"
messageNew[1].textContent="Bruhhhhh suhhh dude?"
messageNew[2].textContent="down 2 surf?"
messageNew[3].textContent="golf first, surf later*"

function cleanConvo() {
    messageNew[0].textContent=""
    messageNew[0].style.backgroundColor="white"
    messageNew[1].textContent=""
    messageNew[1].style.backgroundColor="white"
    messageNew[2].textContent=""
    messageNew[2].style.backgroundColor="white"
    messageNew[3].textContent="" 
    messageNew[3].style.backgroundColor="white"
}
document.querySelector("#clear-button").addEventListener("click", cleanConvo)

//silver


/* function toggleTheme() {
    if (value == "theme-one") {
        document.getElementsByClassName("message left").style.backgroundColor="lightblue"
        document.getElementsByClassName("message right").style.backgroundColor="lightbrown"
    } else if (value == "theme-two") {
        document.getElementsByClassName("message left").style.backgroundColor="red"
        document.getElementsByClassName("message right").style.backgroundColor="black"
        document.getElementsByClassName("message left").style.color="white"
        document.getElementsByClassName("message right").style.color="white"
    }
    
}
document.getElementById("theme-drop-down").addEventListener("change", toggleTheme) */

/* let select = document.querySelector("select")
let messageLeft = document.getElementsByClassName("message left")
let messageRight = document.getElementsByClassName("message right")
select.addEventListener("change" () => {
    messageLeft.style.backgroundColor="red"
}) */