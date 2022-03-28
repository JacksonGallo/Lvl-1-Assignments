function handleMouseOver(){
    document.getElementById("square").style.backgroundColor="blue"
}
document.getElementById("square").addEventListener("mouseover", handleMouseOver)


function handleMouseOut(){
    document.getElementById("square").style.backgroundColor="white"
}
document.getElementById("square").addEventListener("mouseout", handleMouseOut)


function whileClicking() {
    document.getElementById("square").style.backgroundColor="red"
}
document.getElementById("square").addEventListener("mousedown", whileClicking)


function afterClicking() {
    document.getElementById("square").style.backgroundColor="yellow"
}
document.getElementById("square").addEventListener("mouseup", afterClicking)


function dblClick() {
    document.getElementById("square").style.backgroundColor="green"
}
document.getElementById("square").addEventListener("dblclick", dblClick)


/*function alwaysOrange() {
    document.getElementById("square").style.backgroundColor="orange"
}

document.getElementById("main").addEventListener("mousemove", alwaysOrange) */



document.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == 65){
        alert('You pressed A')
    } else if (key.keyCode == 82){
        document.getElementById("square").style.backgroundColor = "red"
    }else if (key.keyCode == 66){
        document.getElementById("square").style.backgroundColor = "blue"
    }else if (key.keyCode == 89) {
        document.getElementById("square").style.backgroundColor = "yellow"
    }else if (key.keyCode == 71) {
        document.getElementById("square").style.backgroundColor = "green"
    }else if (key.keyCode == 79) {
        document.getElementById("square").style.backgroundColor = "orange"
    }
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
  })