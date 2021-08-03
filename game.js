const X = "X";
const O = "O";
let colorX = "blue";
let colorY = "red";

function setPlayerColor(playerX, playerO) {
    colorX = playerX || "blue";
    colorY = playerO || "red";
}


let game = {
    playerX: true,
    turn: 1,
    iswin: false,
    win: function (player) {
        let winner = X;
        if (player) {
            winner = O
        }
        console.log("map: ");
        console.log(winCondition.map(broad));
        console.log("game end!");
        document.getElementById("broad").innerHTML = "";
        document.getElementById("broad").innerHTML = "<h1 align=\"center\">" +
            "Player " + winner + " is the winner !</h1>" +
            " <p align=\"center\">Total Turn: " + game.turn + "</p>" +
            "    <p align=\"center\"><button onclick=\"start();\">Play Again?</button></p>"
    },
    checkWinner: function () {
        if (winCondition.colummWin(broad) ||
            winCondition.rowWin(broad) ||
            winCondition.crossWin(broad)) {
            setTimeout(this.win, 350, this.playerX);
        }
    },
    marked: function (id) {
        console.log("turn: " + this.turn);
        let cell = broad.value[eval(id)];
        if (cell.isMarked) {
        } else {
            if (this.playerX) {
                console.log("-> player X: " + cell.position);
                cell.mark(X);
                this.playerX = false;
            } else {
                console.log("-> player O: " + cell.position);
                cell.mark(O);
                this.playerX = true;
            }
            this.turn++;
        }
        this.checkWinner();
    }
};
