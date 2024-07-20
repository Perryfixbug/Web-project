let clearAll = false;
let fullScreen = false

function display(key){
    clearAll = false;
    const val = document.getElementById("screen");
    if(val.value != '0' || key == '.'){
        document.getElementById("screen").value += key; 
    }else{
        clearScreen();
        document.getElementById("screen").value += key;
        document.getElementById("button_AC").innerHTML = "C";
    }
    resize();
}

function eraseLastKey(){
    if(clearAll){
        document.getElementById("screen").value = "0";
        clearAll = false;
    }else{
        const screen = document.getElementById("screen");
        screen.value = screen.value.slice(0,-1);
        if(!screen.value){
            document.getElementById("button_AC").innerHTML = "AC";
            screen.value = '0';
        }
    }
    resize();
}

function calculate(){
    clearAll = true;
    const x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;   
    resize();
    return y;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function display1(){    //tinh +/-
    const val = document.getElementById("screen");
    if(val.value.charAt(0) == '-'){
        val.value = val.value.slice(1);
    }else if(val.value != '0'){
        val.value = '-' + val.value;
    }
    resize();
}

//xử lí giữ nút AC (đang ko hoạt động)
(function() {

    let mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = setTimeout(execMouseDown,700); //set timeout to fire in 0.7 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if(mouseTimer) clearTimeout(mouseTimer);  //cancel timer when mouse button is released
    }
  
    function execMouseDown() { 
        // clearScreen();
        document.getElementById("screen").value = "0";
        resize();
        // document.getElementById("button_AC").innerHTML = "AC";
    }
  
    const button = document.getElementById("button_AC");
    button.addEventListener("mousedown", mouseDown);
    document.body.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on 
    
  }());


function display2(){        //tinh %
    clearAll = true;
    const val = document.getElementById("screen");
    let len = val.value.length;
    let index = len - 1;
    while(val.value.charAt(index) >= '0' && val.value.charAt(index) <= '9' || val.value.charAt(index) == '.'){
        index--;
    }
    let y = eval(val.value.slice(index+1, len) + '/100');
    val.value = val.value.slice(0, index+1) + y;
    resize();
}

function resize(){
    const screen = document.getElementById("screen");
    let len = screen.value.length;
    if(len > 6 && len <= 8){
        screen.style.fontSize = "4rem";
    }else if(len > 8 && len <= 10){
        screen.style.fontSize = "3rem";
    }else if(len > 10){
        screen.style.fontSize = "2.2rem";
    }else{
        screen.style.fontSize = '5rem';
    }
}

