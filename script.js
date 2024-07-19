
function display(key){
    const val = document.getElementById("screen");
    if(val.value != '0'){
        document.getElementById("screen").value += key; 
    }else{
        clearScreen();
        document.getElementById("screen").value += key;
        document.getElementById("button_AC").innerHTML = "C"; 
    }
}

function eraseLastKey(){
    const screen = document.getElementById("screen");
    screen.value = screen.value.slice(0,-1);
    if(!screen.value){
        document.getElementById("button_AC").innerHTML = "AC";
        screen.value = '0';
    }
}

function calculate(){
    const x = document.getElementById("screen").value;
    let y = eval(x);
    if(y){
        document.getElementById("screen").value = y;
    }else{          //dang ko hoat dong
        document.getElementById("screen").value = "err..."
    }
    return y;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function display1(){
    const val = document.getElementById("screen");
    if(val.value.charAt(0) == '-'){
        val.value = val.value.slice(1);
    }else{
        val.value = '-' + val.value;
    }
}

//xử lí giữ nút AC (đang ko hoạt động)
(function() {

    var mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = window.setTimeout(execMouseDown,2000); //set timeout to fire in 2 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
    }
  
    function execMouseDown() { 
        clearScreen();
    }
  
    var button = document.getElementById("button_AC");
    button.addEventListener("mousedown", mouseDown);
    document.body.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on 
  }());