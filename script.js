let ok = 0;

function display(key){
    ok = 0;
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
    if(ok == 1){
        document.getElementById("screen").value = "0";
        ok = 0;
    }else{
        const screen = document.getElementById("screen");
        screen.value = screen.value.slice(0,-1);
        if(!screen.value){
            document.getElementById("button_AC").innerHTML = "AC";
            screen.value = '0';
        }
    }
}

function calculate(){
    ok = 1;
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

function display1(){    //tinh +/-
    const val = document.getElementById("screen");
    if(val.value.charAt(0) == '-'){
        val.value = val.value.slice(1);
    }else if(val.value.charAt(0) != '0'){
        val.value = '-' + val.value;
    }
}

//xử lí giữ nút AC (đang ko hoạt động)
(function() {

    let mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = setTimeout(execMouseDown,700); //set timeout to fire in 0.5 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if(mouseTimer) clearTimeout(mouseTimer);  //cancel timer when mouse button is released
    }
  
    function execMouseDown() { 
        // clearScreen();
        document.getElementById("screen").value = "0";
        // document.getElementById("button_AC").innerHTML = "AC";
    }
  
    const button = document.getElementById("button_AC");
    button.addEventListener("mousedown", mouseDown);
    document.body.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on 
  }());


function display2(){        //tinh %
    ok = 1;
    const val = document.getElementById("screen");
    let len = val.value.length;
    let i = len - 1;
    while(val.value.charAt(i) >= '0' && val.value.charAt(i) <= '9'){
        i--;
    }
    let y = eval(val.value.slice(i+1, len) + '/100');
    val.value = val.value.slice(0, i+1) + y;
}