
// Função que leva para a calculadora e as Variaveis
// Também impede que os textos se misturem na caixa de explicações de var

function index(){
    document.getElementById("index").style.display = "none";
}
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

// CALCULADORA 
// 1 - Permitir somente os números

function onlynumber(evt){
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    // Não esqueça de colocar o onkeypress="return onlynumber(); se for type:"text"
    let regex = /^[0-9.]+$/;
    if( !regex.test(key)){
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

// 2 - Declarar a função do calculo e pegar os valores inseridos nos inputs
function calcular(){
    let valorProjeto = document.getElementById("valor-total").value;
    let horasDiarias = document.getElementById("horas-dia").value;
    let diasEfetivos = document.getElementById("dias-efetivos").value;
    let diasFerias = document.getElementById("dias-ferias").value;

    //Calculo
     let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias));

    //Mostrar o resultado
    document.getElementById("valorHora").innerHTML = "R$" + valorHora.toFixed();
}