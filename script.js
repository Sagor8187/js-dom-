let curerntplayer = document.getElementById("player-root")
let newplayer = document.createElement("li")
newplayer.innerText ="Login"
curerntplayer.appendChild(newplayer)

curerntplayer.classList.add("navbar")

let queryselect = document.querySelectorAll("li")
console.log(queryselect)
queryselect.forEach(item =>{
    item.style.fontWeight="bold"
})