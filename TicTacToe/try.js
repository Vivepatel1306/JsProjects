// document.addEventListener('DOMContentLoaded', () => {
//     const inputBoxes = document.querySelectorAll('input');
//     const winnerDisplay = document.querySelector('h1');
//     const board = Array.from({ length: 3 }, () => Array(3).fill(null));
//     const playerSymbols = { player1: "✅", player2: "❌" };
//     let currentPlayer = playerSymbols.player1;

//     inputBoxes.forEach(input => input.addEventListener('click', handleClick));

//     document.querySelector('button').addEventListener('click', resetGame);

//     function handleClick(event) {
//         const input = event.target;
//         const [row, col] = getBoardPosition(input.id);

//         if (!board[row][col]) {
//             input.value = currentPlayer;
//             board[row][col] = currentPlayer;
//             togglePlayer();
//             checkWinner();
//         }
//     }

//     function getBoardPosition(id) {
//         return [Math.floor(id / 3), id % 3];
//     }

//     function togglePlayer() {
//         currentPlayer = currentPlayer === playerSymbols.player1 ? playerSymbols.player2 : playerSymbols.player1;
//     }

//     function checkWinner() {
//         const winningCombos = [
//             [ [0, 0], [0, 1], [0, 2] ],
//             [ [1, 0], [1, 1], [1, 2] ],
//             [ [2, 0], [2, 1], [2, 2] ],
//             [ [0, 0], [1, 0], [2, 0] ],
//             [ [0, 1], [1, 1], [2, 1] ],
//             [ [0, 2], [1, 2], [2, 2] ],
//             [ [0, 0], [1, 1], [2, 2] ],
//             [ [2, 0], [1, 1], [0, 2] ]
//         ];

//         for (const combo of winningCombos) {
//             const [a, b, c] = combo;
//             if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
//                 winnerDisplay.innerHTML = `${board[a[0]][a[1]]} is the winner!`;
//                 setTimeout(resetGame, 5000);
//                 return;
//             }
//         }

//         if (board.flat().every(cell => cell)) {
//             winnerDisplay.innerHTML = "It's a draw!";
//             setTimeout(resetGame, 5000);
//         }
//     }

//     function resetGame() {
//         currentPlayer = playerSymbols.player1;
//         board.forEach(row => row.fill(null));
//         inputBoxes.forEach(input => input.value = '');
//         winnerDisplay.innerHTML = '';
//     }
// });
console.log(Math.floor(Math.random()*6)+1)