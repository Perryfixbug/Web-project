
function display(value){
    document.getElementById("screen").value += value;
    
    
    //tại sao dùng id được mà không dùng class được
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function eraseLastKey(){
    const screen = document.getElementById("screen");
    screen.value = screen.value.slice(0,-1);
}
//giu nut C de xoa
(function() {

    var mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = window.setTimeout(execMouseDown,500); //set timeout to fire in 2 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
    }
  
    function execMouseDown() { 
        clearScreen();
    }
  
    const button_C = document.getElementById("button_C");
    button_C.addEventListener("mousedown", mouseDown);
    document.body.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on
    
  }());

function calculate() {
    const x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
    return y;
}

