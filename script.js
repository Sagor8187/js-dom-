let curerntplayer = document.getElementById("player-root")
let newplayer = document.createElement("li")
newplayer.innerText ="Login"
curerntplayer.appendChild(newplayer)

curerntplayer.classList.add("navbar")

let queryselect = document.querySelectorAll("li")
// console.log(queryselect)
queryselect.forEach(item =>{
    item.style.fontWeight="bold"
})

let createsection = document.createElement("section")
createsection.innerHTML =`
<h1>Create this section use java-script dom </h1>

<p>this dom l learn many day ago. now i learn properly and perfectly </p>
`

// console.log(mainbody)
document.body.appendChild(createsection)
