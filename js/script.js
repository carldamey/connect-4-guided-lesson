	/*----- constants -----*/
const COLORS = {
    "0": "white",
    "1": "orange",
    "-1": "blue",
}

	/*----- state variables -----*/
let board, turn, winner

	/*----- cached elements  -----*/
const messageEl = document.querySelector("h1")

	/*----- event listeners -----*/


	/*----- functions -----*/
init()

function init() {
    board = [
        [0, 0, 0, 0, 0, 0,], //col 0
        [0, 0, 0, 0, 0, 0,], //col 1
        [0, 0, 0, 0, 0, 0,], //col 2
        [0, 0, 0, 0, 0, 0,], //col 3
        [0, 0, 0, 0, 0, 0,], //col 4
        [0, 0, 0, 0, 0, 0,], //col 5
        [0, 0, 0, 0, 0, 0,], //col 6
    ]
    turn = 1
    winner = null
    render()
}

function render() {
    renderBoard()
    renderMessage()
    renderControls() // hide & show UI elements
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        //iterate over cells in this column
        colArr.forEach(function(cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            cellEl.style.backgroundColor = COLORS[cellVal]
        })

    })
}

function renderMessage() {
    if (winner === "T") messageEl.innerText = "It's a tie!"
    else if (winner) messageEl.innerText = `${COLORS[winner].toUpperCase()} wins!`
    else messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s turn:`
} 

function renderControls() {

}