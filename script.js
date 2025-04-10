const inputAltura = document.getElementById('input-altura');
const BotaoCalcular = document.getElementById('Botao-calcular');
const inputPeso = document.getElementById('input-peso');
const resultadoDiv = document.querySelector('.resultado-container');

const nivel = ["Abaixo do peso", "Peso normal", "SobrePeso", "Obesidade grau", "Obesidade grau 2","Obesidade grau 3"];


BotaoCalcular.addEventListener('click' , function(){
    calculoIMC();
})


function calculoIMC (){
    const peso = parseFloat(inputPeso.value.replace(',' , '.'))
    const altura = parseFloat(inputAltura.value.replace(',' ,'.'))

    const IMC = peso / (altura * altura);

    if (isNaN(peso) || isNaN(altura)){
        alert ("Por favor, preencha todos os Campos!")
        return false;
    }
    if (peso <= 0 || altura <= 0){
        alert("Os valores não podem ser 0")
        return false;
    }

    let mensagem = '';
    let classe = '';
    if (IMC <= 18.5 ){
        mensagem = nivel[0];
        classe = "abaixo-peso"
    }

    else if (IMC >= 18.5 && IMC <= 24.9 ){
        mensagem = nivel[1];

        classe = "peso-normal"
    }
    else if (IMC >= 25 && IMC <= 29.9 ){
        mensagem = nivel[2];
        classe = 'sobrepeso';
    }
    else if (IMC >= 30 && IMC <= 34.9 ){
        mensagem = nivel[3];
        classe = 'obesidade-1';
    }
    else if (IMC >= 35 && IMC <= 39.9){
        mensagem = nivel[4];
        classe = 'obesidade-2';
    }
    else if (IMC >= 40){
        mensagem = nivel[5];
        classe = 'obesidade-3';
    }

    exibirResultado(`${mensagem} - IMC: ${IMC.toFixed(2)}` , classe);
}

function exibirResultado(texto, classeCSS){
    resultadoDiv.textContent = texto;
    resultadoDiv.className = `resultado ${classeCSS}`;
}

// terminar de fazer CSS na exibição do resultado.