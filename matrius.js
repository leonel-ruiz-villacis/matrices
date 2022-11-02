let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
function paintAll() {

    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < rows[i].cells.length; j++) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function erase() {
    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < rows[i].cells.length; j++) {
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function paintRightHalf() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        for (var j = rows[i].cells.length - Math.floor(rows[i].cells.length * 0.5); j < rows[i].cells.length; j++) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintLeftHalf() {
    erase();

    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < Math.ceil(rows[i].cells.length * 0.5); j++) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperHalf() {
    erase();
    for (var i = 0; i < Math.ceil(rows.length * 0.5); i++) {
        for (var j = 0; j < rows[i].cells.length; j++) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}


function paintLowerTriangle() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < rows[i].cells.length; j++) {
            if (i > j) {
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintUpperTriangle() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        for(var j = 0; j < rows[i].cells.length; j++) { // afegir codi
            if(i <= j) 
            {
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}
}


function paintPerimeter() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        for(var j = 0; j < rows[i].cells.length; j++) {
            if(i == 0  || j == 0  || i == rows.length -1 || j == rows[i].cells.length -1) {
            // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}
}

function paintCheckerboard() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        var startNumb = i % 2 == 0 ? 0 : 1
        for(var j = startNumb; j < rows[i].cells.length; j = j + 2) { 
            // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintCheckerboard2() {
    erase();
    for (var i = 0; i < rows.length; i++) {
        var startNumb = i % 2 == 0 ? 1 : 0
        for(var j = startNumb; j < rows[i].cells.length; j = j + 2) { 
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}



function paintNeighbours() {
     erase();
    let inputX = document.getElementById("inputX").valueAsNumber;
    let inputY = document.getElementById("inputY").valueAsNumber;
        
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if(!(i == 0 && j == 0)){
            try{
                matrix[inputX+i][inputY+j].style.backgroundColor = "red";
            }catch{
                continue;
            }
            }
        }
    }
}


function countNeighbours(x,y) {
    let count = 0;
    for (i=-1; i<=1; i++){
        for (j=-1; j<=1; j++){
            let sum1=i+x;
            let sum2=j+y;
            if((sum1<matrix.length && sum1>0) && (sum2<matrix[sum1].length && sum2>0)){
                if (matrix[sum1][sum2].style.backgroundColor=="red"){
                    if(sum1!=x || sum2!=y){
                        count++;
                }
            }
        }
    }
    return count;
}

}

function paintAllNeighbours() {
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}
