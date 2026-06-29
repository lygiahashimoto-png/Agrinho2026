// ================================
// BOTÃO MODO ESCURO
// ================================

const botaoModo = document.getElementById("modoEscuro");

botaoModo.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoModo.innerHTML = "☀️ Modo Claro";
    } else {
        botaoModo.innerHTML = "🌙 Modo Escuro";
    }
});


// ================================
// POLINIZAÇÃO
// ================================

const flor = document.getElementById("flor");
const abelha = document.getElementById("abelha");
const mensagem = document.getElementById("mensagemPolinizacao");

flor.addEventListener("click", function () {

    // Faz a abelha "voar"
    abelha.style.transform = "translateX(120px)";

    mensagem.innerHTML =
    "🌸 Flor polinizada! Graças às abelhas, novos frutos poderão nascer.";

    // Depois de 2 segundos a abelha volta
    setTimeout(function(){

        abelha.style.transform = "translateX(0px)";

    },2000);

});


// ================================
// QUIZ
// ================================

function resposta(correta){

    const resultado = document.getElementById("resultadoQuiz");

    if(correta){

        resultado.innerHTML =
        "🎉 Parabéns! Você acertou!";

        resultado.style.color = "green";

    }

    else{

        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente!";

        resultado.style.color = "red";

    }

}


// ================================
// SAUDAÇÃO
// ================================

function cumprimentar(){

    const nome = document.getElementById("nome").value;

    const saudacao = document.getElementById("saudacao");

    if(nome.trim() === ""){

        saudacao.innerHTML =
        "Digite seu nome primeiro.";

        saudacao.style.color = "red";

        return;

    }

    saudacao.innerHTML =
    "🐝 Olá, " + nome + "! Obrigado por visitar nosso projeto Agrinho 2026!";

    saudacao.style.color = "green";

}


// ================================
// EFEITO NOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        alert("🍯 As abelhas são fundamentais para a produção deste alimento!");

    });

});