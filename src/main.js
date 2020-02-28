var visivel = true;

function calculadora(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "flex";
    document.getElementById("sobre").style.display = "none"
}

function index(){
    document.getElementById("index").style.display = "flex";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "none"
}

function sobre(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "flex"
    
}
