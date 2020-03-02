
// Função que leva para a calculadora e as Variaveis
// Também impede que os textos se misturem na caixa de explicações de var
function calculadora(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "flex";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("botao02").style.display="none";
    document.getElementById("botao03").style.display = "none";
    document.getElementById("botao04").style.display = "none";

}
// Função que leva de volta para a home
function index(){
    document.getElementById("index").style.display = "flex";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "none";
}
// Função que leva para a Sobre aonde tem uma breve desc sobre a He4rt e o link para o site
function sobre(){
    document.getElementById("index").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("sobre").style.display = "flex";
    
}
// Mostrar o conteúdo do botão 01 e faz com que ta cor do fundo seja a mesma do botão
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
// Mostrar o conteúdo da botão 02 e faz com que ta cor do fundo seja a mesma do botão
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
// Mostrar o conteúdo da botão 03 e faz com que ta cor do fundo seja a mesma do botão
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
// Mostrar o conteúdo da botão 04 e faz com que ta cor do fundo seja a mesma do botão
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

// Aqui vai iniciar o JS da calculadora 