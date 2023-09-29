	/*----- constants -----*/
const COLORS = {
    "0": "white",
    "1": "orange",
    "-1": "lightblue",
}

	/*----- state variables -----*/
let board, turn, winner

	/*----- cached elements  -----*/


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

}

function renderControls() {

}