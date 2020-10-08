var turn = 1;

function makeTurn(td) {
    if (turn % 2 != 0) {
        console.log("X");
        td.innerHTML = "X";
        ++turn;
    } else {
        console.log("O");
        td.innerHTML = "O";
        ++turn;
    }
}

function reset() {
    var array = document.getElementsByTagName("td");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.innerHTML = "";
        turn = 1;
    }
}