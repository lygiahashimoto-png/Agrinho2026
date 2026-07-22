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


function calcularQuiz() {
    let pontuacao = 0;
    const totalPerguntas = 2;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        alert("🐝 Bzzzz! Por favor, responda a todas as perguntas antes de enviar!");
        return;
    }

    if (q1.id === "q1b") {
        pontuacao++;
    }

    if (q2.id === "q2a") {
        pontuacao++;
    }

    const divResultado = document.getElementById("resultado-quiz");
    divResultado.style.display = "block";

    if (pontuacao === totalPerguntas) {
        divResultado.style.backgroundColor = "#e8f5e9";
        divResultado.style.color = "#1b5e20";
        divResultado.style.border = "2px solid #a5d6a7";
        divResultado.innerHTML = `
            <h2>👑 Incrível! 2/2 Acertos! 🐝✨</h2>
            <p>Você é um verdadeiro Guardião das Abelhas e um perito em Agro Sustentável! 🌻🍯</p>
        `;
    } else if (pontuacao === 1) {
        divResultado.style.backgroundColor = "#fffde7";
        divResultado.style.color = "#f57f17";
        divResultado.style.border = "2px solid #ffe082";
        divResultado.innerHTML = `
            <h2>🐝 Muito Bem! 1/2 Acerto! 🌸</h2>
            <p>Você está no caminho certo! Que tal dar uma lida na nossa página inicial para virar um mestre? 📖</p>
        `;
    } else {
        divResultado.style.backgroundColor = "#ffebee";
        divResultado.style.color = "#c62828";
        divResultado.style.border = "2px solid #ef9a9a";
        divResultado.innerHTML = `
            <h2>🐝 Ops! 0/2 Acertos! 🌻</h2>
            <p>Sem problemas! As abelhinhas te convidam a ler o nosso site para aprender mais sobre elas! 🍯</p>
        `;
    }

    // Rola a página suavemente até o resultado
    divResultado.scrollIntoView({ behavior: 'smooth' });
}