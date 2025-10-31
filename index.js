const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = [
    ["X", "0", ""],
    ["X", "0", ""],
    ["X", "0", "X"],
]



function board(){
    for (let x=0;x <= 2; x++){
        for (let y=0;y <= 2; y++){
            if (matrix[y][x] === "X") {
                cross(50 * x, 50 * y)
            }

            if (matrix[y][x] === "0") {
                ellipse(50 * x, 50 * y)
            }
        }
    }
}

function grid(){
    ctx.lineWidth = 2;
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.moveTo(0, 50);
    ctx.lineTo(150, 50);

    ctx.moveTo(50, 0);
    ctx.lineTo(50, 150);

    ctx.moveTo(0, 100);
    ctx.lineTo(150, 100);

    ctx.moveTo(100, 0);
    ctx.lineTo(100, 150);
    ctx.stroke()
    board()
}

function cross(x = 0, y = 0){
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(10 + x, 10 + y);
    ctx.lineTo(40 + x, 40 + y);

    ctx.moveTo(40 + x, 10 + y) ;
    ctx.lineTo(10 + x, 40 + y);
    ctx.stroke()
}

function ellipse(x = 0, y = 0){
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.ellipse(25 + x, 25 + y, 15, 15, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke()
}



grid()