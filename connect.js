let currentPlayer = "Red";

const columns = document.querySelectorAll(".column");

const board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]
const players= {
    Red: [],
    Black: [],
}

for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    column.onclick = function() {
        if (column.childElementCount === 6) {
            return;
        }
        
        const checker = document.createElement("div");
        checker.classList.add("checker", currentPlayer);
        column.appendChild(checker);
        players[currentPlayer].push(i+(7*board[i].length))
        
        board[i].push(i+(7*board[i].length));
        const winnerfound = checkwinner();
        
        if(winnerfound) {
            alert("Player " + currentPlayer + " Wins!")
            //resetGame();
        }
        if (currentPlayer === "Red") {
            currentPlayer = "Black";
        } else {
            currentPlayer = "Red";
        }
    }
}



const winningcombinations = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 14],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 36],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    [3, 11, 19, 27],
    [34, 26, 18, 10],
    [2, 10, 18, 26],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [14, 22, 30, 38],
    [21, 15, 9, 3],
    [28, 22, 16, 10],
    [22, 16, 10, 4],
    [35, 29, 23, 17],
    [29, 23, 17, 11],
    [23, 17, 11, 5],
    [36, 30, 24, 18],
    [30, 24, 18, 12],
    [24, 18, 12, 6],
    [37, 31, 25, 19,],
    [31, 25, 19, 13],
    [38, 32, 26, 20],
]

function checkwinner() {
    let matches;
    for(let i = 0; i < winningcombinations.length; i++) {
       matches = 0
       const combination = winningcombinations[i];
        for(let h = 0; h < combination.length; h++) {
            const comb = combination[h];
            if (players[currentPlayer].includes(comb)) {
                matches++;
            }
            else {
                break;
            }
            if (matches === 4) {
                return true;
            }
        }
    }
    if (matches != 4) {
        return false;
    }
}

//function resetGame() {
  //  players = new Array();
 //   players = new Array();
  //  for(var i = 0; i < columns.length; i++) {
  //    columns[i].innerHTML = ""
 //   }
//}