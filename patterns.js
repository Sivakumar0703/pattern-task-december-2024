
const rows = 5;

printHallowSquare(rows);
printSquare(rows);
printInvertedRightAngleTriangle(rows);
printInvertedPyramid(rows);

// print hallow square
function printHallowSquare(rows){
    console.log("Hallow Square");
    console.log("");
    let currentRows = "";
    for(let outer=1; outer<=rows; outer++){
        for(let inner=1; inner<=rows; inner++){
            if( outer == 1 || outer == rows ){
                currentRows = currentRows + "*";
            } else if(inner == 1 || inner == rows) {
                currentRows = currentRows + "*";
            } else {
                currentRows = currentRows + " ";
            }
        }
        console.log(currentRows);
        currentRows = "";
    }
    console.log("");
}


// print solid square
function printSquare(rows){
    console.log("Solid Square");
    console.log("");
    let currentRows = "";
    for(let outer=1; outer<=rows; outer++){
        for(let inner=1; inner<=rows; inner++){
            currentRows = currentRows + "*";
        }
        console.log(currentRows);
        currentRows = "";
    }
    console.log("");
}

// print inverted right angle triangle
function printInvertedRightAngleTriangle(rows){
    console.log("Inverted Right Angle Triangle");
    console.log("");
    let currentRows = "";
    for(let outer=rows; outer>0; outer--){
        for(let inner=0; inner<=rows; inner++){
            if((outer-inner) > 0){
                currentRows = currentRows + "*"
            }
        }
        console.log(currentRows);
        currentRows = "";
    }
    console.log("");
}

// print inverted pyramid
function printInvertedPyramid(rows){
    console.log("Inverted Pyramid");
    console.log("");
    let currentRows = "";
    for(let outer=rows; outer>0; outer--){
        for(let space=1; space<=rows-outer; space++){
            currentRows = currentRows + " ";
        }
        for(let star=1; star<=outer; star++){
            currentRows = currentRows + "*" + " ";
        }
        console.log(currentRows);
        currentRows = "";
    }
    console.log("");
}