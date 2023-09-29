	/*----- constants -----*/


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
    
}