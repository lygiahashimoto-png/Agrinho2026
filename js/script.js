document.addEventListener("DOMContentLoaded", function () {
    // 1. Destaque e Animação do Menu Ativo
    const links = document.querySelectorAll("nav a");
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === paginaAtual) {
            link.style.backgroundColor = "#ffca28";
            link.style.color = "#3e2723";
        }
    });

    // 2. Animações e Efeitos para a página "Polinizadores em Dados" (grafico.html)
    const pieChart = document.querySelector(".pie-chart");
    const centroGrafico = document.querySelector(".pie-center strong");

    if (pieChart) {
        // Efeito de entrada suave no gráfico redondo
        pieChart.style.opacity = "0";
        pieChart.style.transform = "scale(0.8)";
        pieChart.style.transition = "all 0.8s ease-in-out";

        setTimeout(() => {
            pieChart.style.opacity = "1";
            pieChart.style.transform = "scale(1)";
        }, 150);

        // Contador animado para a porcentagem das Abelhas (0% -> 66%)
        if (centroGrafico) {
            let contador = 0;
            const meta = 66;
            const duracao = 1500; // 1.5 segundos
            const passo = duracao / meta;

            const intervalo = setInterval(() => {
                contador++;
                centroGrafico.textContent = contador + "%";
                if (contador >= meta) {
                    clearInterval(intervalo);
                }
            }, passo);
        }
    }

    // 3. Interatividade nos cards da legenda do gráfico
    const itensLegenda = document.querySelectorAll(".chart-legend li");

    itensLegenda.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateX(8px)";
            item.style.transition = "transform 0.2s ease";
            item.style.cursor = "pointer";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateX(0px)";
        });
    });
});