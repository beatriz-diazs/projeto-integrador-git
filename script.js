
// Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('nav ul a');

// Destaca o link da seção atual
linksMenu.forEach(link => {
    link.addEventListener('click', function () {
        linksMenu.forEach(item => {
            item.classList.remove('ativo');
        });

        this.classList.add('ativo');
    });
});

// Mensagem de boas-vindas no console
console.log("Bem-vindo(a) ao portfólio da Beatriz!");

// Exibe o ano atual automaticamente no rodapé
const rodape = document.querySelector('footer p');

if (rodape) {
    const anoAtual = new Date().getFullYear();

    rodape.textContent = `© ${anoAtual} Beatriz Dias. Todos os direitos reservados.`;
}

// Efeito de entrada nas seções
const secoes = document.querySelectorAll('main section');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, {
    threshold: 0.15
});

secoes.forEach(secao => {
    observador.observe(secao);
});
