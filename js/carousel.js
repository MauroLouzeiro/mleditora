document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const master = document.querySelector('.carrossel-master');
    if (!track) return;

    const originalCards = Array.from(track.children);
    const gap = 30;
    let isTransitioning = false;
    
    // Clonagem para Loop Infinito
    originalCards.forEach(card => {
        track.appendChild(card.cloneNode(true));
        track.insertBefore(card.cloneNode(true), track.firstChild);
    });

    // Começamos no bloco do meio (original)
    let currentIndex = originalCards.length;

   function getTranslateX() {
    // Pegamos a largura real do card e da janela no momento do clique/redimensionamento
    const cardWidth = track.querySelector('.card-insta').offsetWidth;
    const windowWidth = window.innerWidth;
    
    // O cálculo:
    // Ponto inicial: Metade da tela
    // Menos: Metade do card (para o centro do card bater com o centro da tela)
    // Menos: O deslocamento de quantos cards já passaram (incluindo o gap)
    return (windowWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap));
}

    window.moveSlide = function(direction) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex += direction;
        
        track.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        track.style.transform = `translateX(${getTranslateX()}px)`;
    };

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        
        // Reseta para o bloco central sem o usuário perceber (Loop)
        if (currentIndex >= originalCards.length * 2) {
            track.style.transition = "none";
            currentIndex = originalCards.length;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        }
        if (currentIndex < originalCards.length) {
            track.style.transition = "none";
            currentIndex = originalCards.length * 2 - 1;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        }
    });

    // Início e Redimensionamento
    window.addEventListener('resize', () => {
        track.style.transition = "none";
        track.style.transform = `translateX(${getTranslateX()}px)`;
    });

    // Posicionamento Inicial
    track.style.transform = `translateX(${getTranslateX()}px)`;
});