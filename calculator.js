const canvas = document.getElementById("Output");
//intially gets the first number from inout, which is 0

const ctx = canvas.getContext('2d');
let num = 0;

clear();
function multiply() {
    clear();

    var getInput = document.getElementById("numInput").value;
    var lastInput = document.getElementById("dos").value;
    num = getInput * lastInput;

    

    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    var textWidth = ctx.measureText(num ).width;
    ctx.fillText(num, (canvas.width/2) - (textWidth/2), 200);
}

function add(){
    clear();

    var getInput = document.getElementById("numInput").value;
    var lastInput = document.getElementById("dos").value;
    num = Number(getInput) + Number(lastInput);

    


    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    var textWidth = ctx.measureText(num ).width;
    ctx.fillText(num, (canvas.width/2) - (textWidth/2), 200);
}

function subtract(){
    clear();

    var getInput = document.getElementById("numInput").value;
    var lastInput = document.getElementById("dos").value;
    num = getInput - lastInput;

    

    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    var textWidth = ctx.measureText(num ).width;
    ctx.fillText(num, (canvas.width/2) - (textWidth/2), 200);
}


function divide(){
    clear();

    var getInput = document.getElementById("numInput").value;
    var lastInput = document.getElementById("dos").value;
    num = getInput / lastInput;

    

    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    var textWidth = ctx.measureText(num.toFixed(3) ).width;
    ctx.fillText(num.toFixed(3), (canvas.width/2) - (textWidth/2), 200);
}



function clear() {
    

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
