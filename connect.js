let currentPlayer = "rball";

const columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    column.onclick = function() {
        if (column.childElementCount === 6) {
            return;
        }
        const checker = document.createElement("div");
        checker.classList.add("checker", currentPlayer);
        column.appendChild(checker);

        if (currentPlayer === "rball") {
            currentPlayer = "bball";
        } else {
            currentPlayer = "rball";
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
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    
    



]