let Cell = function (xNumber, yNumber, cellSize, color, maxRow) {
    this.cellSize = cellSize || 40;
    this.x = (xNumber * this.cellSize) + "px";
    this.y = (yNumber * this.cellSize) + "px";
    this.position = xNumber + "x" + yNumber;
    this.id = (yNumber - 1) * maxRow + (xNumber - 1);
    this.inside = " ";
    this.isMarked = false;
    this.borderColor = color || "black";
    this.setColor = function () {
        if (this.inside === X) {
            return colorX;
        } else if (this.inside === O) {
            return colorY;
        } else {
            return this.borderColor;
        }
    };
    this.displayInner = function () {
        document.getElementById(this.id).querySelector("b").innerHTML = this.inside;
        document.getElementById(this.id).querySelector("b").style.color = this.setColor();
    };
    this.display = function () {
        document.getElementById("broad").innerHTML += "<div " +
            "style=\"position: absolute; width: " + this.cellSize + "px; height: " + this.cellSize + "px;" +
            "line-height: " + this.cellSize + "px;" +
            "border: 2px solid " + this.borderColor + ";" +
            "font-size: " + (this.cellSize - 15) + "px;\" align=\"center\" id =\"" + this.id + "\" " +
            "onclick=\"game.marked(this.id);\">" +
            "<b style=\"color: red\"></b>" +
            "</div>";
        document.getElementById(this.id).style.left = this.x;
        document.getElementById(this.id).style.top = this.y;
    };
    this.mark = function (mark) {
        this.inside = mark;
        this.isMarked = true;
        this.displayInner();
    };
};
let broad = {
    width: 0,
    height: 0,
    value: [],
    makeNewBroad: function (xMax, yMax, color, cellSize) {
        this.width = xMax || 10;
        this.height = yMax || 10;
        this.value = [];
        for (let y = 1; y < yMax + 1; y++) {
            for (let x = 1; x < xMax + 1; x++) {
                this.value.push(new Cell(x, y, cellSize, color, yMax));
            }
        }
        console.log("broad generating...");
    },
    displayBroad: function () {
        for (let e of this.value) {
            e.display();
        }
        console.log("broad generated: " + "width " + this.width + ", height " + this.height);
    },
};