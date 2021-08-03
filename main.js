let winCondition = {
    map: function (broad, bool) {
        let height;
        let width;
        if (bool) {
            width = broad.width;
            height = broad.height;
        } else {
            width = broad.height;
            height = broad.width;
        }
        let map = "";
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (bool) {
                    map += broad.value[y * width + x].inside
                } else {
                    map += broad.value[x * width + y].inside
                }
            }
            map += "\n";
        }
        return map;
    },
    rowWin: function (broad) {
        return (/[X]{5}/.test(this.map(broad, true)) ||
            /[O]{5}/.test(this.map(broad, true)));
    },
    colummWin: function (broad) {
        return (/[X]{5}/.test(this.map(broad, false)) ||
            /[O]{5}/.test(this.map(broad, false)));
    },
    crossWin: function (broad) {
        let regexX1 = eval("/(X[X,O,\\s,\\n]{" + (broad.width + 1) + "}){5}/");
        let regexX2 = eval("/(X[X,O,\\s,\\n]{" + (broad.width - 1) + "}){5}/");
        let regexO1 = eval("/(O[X,O,\\s,\\n]{" + (broad.width + 1) + "}){5}/");
        let regexO2 = eval("/(O[X,O,\\s,\\n]{" + (broad.width - 1) + "}){5}/");
        return (regexX1.test(this.map(broad, true)) ||
            regexX2.test(this.map(broad, true)) ||
            regexO1.test(this.map(broad, true)) ||
            regexO2.test(this.map(broad, true)));
    }
};

function start() {
    document.getElementById("broad").innerHTML = "";
    let broadInfo = prompt("Bạn muốn tạo bàn cờ như thê nào? (width,height,color,cellsize)", "20,20,blueviolet").split(",");
    console.log(broadInfo);
    broad.makeNewBroad(Number(broadInfo[0]), Number(broadInfo[1]), broadInfo[2], Number(broadInfo[3]));
    broad.displayBroad();
    console.log("game started!");
}

start();
console.log("use setPlayerColor(X,O) to set your Color !");