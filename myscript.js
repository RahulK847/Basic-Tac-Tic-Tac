// Restart game Buttom
var restart = document.querySelector("#btm");

//grab all the squares
var squares = document.querySelectorAll("td");

// clear all the sQuares
function clearBoard(){
    for (var i=0; i < squares.length;i++){
        squares[i].textContent = "";
    }
}
restart.addEventListener('click', clearBoard);

//check the Square marker
function changeMarker(){
    if (this.textContent===""){
        this.textContent = "X";
    }
    else if (this.textContent==="X"){
        this.textContent = "O";
    }
    else{
        this.textContent="";
    }
}
for (var i=0; i < squares.length;i++){
    squares[i].addEventListener("click", changeMarker)
}

//For Loop to add event listeners to all the square
