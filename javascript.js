let board = [["", "", ""],["", "", ""],["", "", ""]];
let turn = 'X';
const dialog = document.querySelector('dialog');


let spaces = document.querySelectorAll('.space')
spaces.forEach((space) => {
    console.log(`listener added for ${space.id}`)
    space.addEventListener('click', updateBoard)
})

function updateBoard(e) {
    e.currentTarget.innerHTML = turn;
    let spaceID = e.currentTarget.id;
    let row = Math.floor(spaceID / 3);
    let col = spaceID % 3;
    board[row][col] = turn;
    turn = turn == 'X' ? 'O' : 'X';
    e.currentTarget.removeEventListener('click',updateBoard)
    let winner = checkWin();
    if (winner) {
        dialog.innerHTML = `${winner} wins! Game over!`
        dialog.showModal();
    }
}

function checkWin(){
    for (let row = 0; row <  3; row++){
        if (board[row].every(val => val === board[row][0])) {
            return board[row][0];
        }
    }
    for (let col = 0; col < 3; col++){
        let colArr = [];
        for (let row = 0; row <  3; row++){
            colArr.push(board[row][col])
        }
        if (colArr.every(val => val === colArr[0])) {
            return colArr[0];
        }
    }
    let diag1 = [
        board[0][0],
        board[1][1],
        board[2][2]
    ]
    let diag2 = [
        board[2][0],
        board[1][1],
        board[0][2]
    ]
    if (diag1.every(val => val === diag1[0])) {
        return diag1[0];
    }
    if (diag2.every(val => val === diag2[0])) {
        return diag2[0];
    }
    return false;
}