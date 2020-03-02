var visivel = true;

function calculadora(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "flex";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("botao02").style.display="none";
    document.getElementById("botao03").style.display = "none";
    document.getElementById("botao04").style.display = "none";

}

function index(){
    document.getElementById("index").style.display = "flex";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "none";
}

function sobre(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "flex";
    
}

function botao01(){
    document.getElementById("botao01").style.display = "flex";
    document.getElementById("botao02").style.display = "none";
    document.getElementById("botao03").style.display = "none";
    document.getElementById("botao04").style.display = "none";
    document.getElementById("color-tab01").style.backgroundColor = "#551597";
    document.getElementById("color-tab02").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab03").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab04").style.backgroundColor = "#9164CD";

    
}

function botao02(){
    document.getElementById("botao01").style.display = "none";
    document.getElementById("botao02").style.display = "flex";
    document.getElementById("botao03").style.display = "none";
    document.getElementById("botao04").style.display = "none"; 
    document.getElementById("color-tab01").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab02").style.backgroundColor = "#551597";
    document.getElementById("color-tab03").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab04").style.backgroundColor = "#9164CD";
    
    
}

function botao03(){
    document.getElementById("botao01").style.display = "none";
    document.getElementById("botao02").style.display = "none";
    document.getElementById("botao03").style.display = "flex";
    document.getElementById("botao04").style.display = "none";
    document.getElementById("color-tab01").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab02").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab03").style.backgroundColor = "#551597";
    document.getElementById("color-tab04").style.backgroundColor = "#9164CD";
}

function botao04(){
    document.getElementById("botao01").style.display = "none";
    document.getElementById("botao02").style.display = "none";
    document.getElementById("botao03").style.display = "none";
    document.getElementById("botao04").style.display = "flex";
    document.getElementById("color-tab01").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab02").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab03").style.backgroundColor = "#9164CD";
    document.getElementById("color-tab04").style.backgroundColor = "#551597";
}