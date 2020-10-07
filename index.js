/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => { 

const header = document.querySelector("#header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/
header.style = "color:red"


/***** Deliverable 3 *****/
function showPlayers() {
    console.log("PLAYERS array looks like this:", PLAYERS)
    let playersDiv = document.querySelector(".player-container")

    PLAYERS.forEach(function (player) {
        let playerDiv = document.createElement("div")
        playerDiv.classList.add("player")
        playerDiv.setAttribute("data-number", `${player.number}`)
        playerDiv.innerHTML = `
            <h3>
                ${player.name} (<em>${player.nickname}</em>)
            </h3>
                <img src=${player.photo} alt=${player.name}>
        `
        playersDiv.append(playerDiv)
    })
}

showPlayers()






/***** Deliverable 4 *****/
let raheem = document.querySelector('div[data-number="7"]')
raheem.remove()
})