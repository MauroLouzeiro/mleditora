document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const master = document.querySelector('.carrossel-master');
    if (!track) return;

    const originalCards = Array.from(track.children);
    const gap = 30;
    let isTransitioning = false;
    let autoPlayInterval;
    
    // Clonagem para Loop Infinito (triplicamos para garantir buffer para ambos os lados)
    // Estrutura final: [Clones Final] [Originais] [Clones Início]
    originalCards.forEach(card => {
        track.appendChild(card.cloneNode(true));
        track.insertBefore(card.cloneNode(true), track.firstChild);
    });

    // Começamos no bloco do meio (original)
    // O índice inicial deve apontar para o primeiro elemento do conjunto original
    let currentIndex = originalCards.length;

   function getTranslateX() {
    const card = track.querySelector('.card-insta');
    if (!card) return 0;

    // Pegamos a largura real do card e da janela no momento do clique/redimensionamento
    const style = window.getComputedStyle(card);
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    const cardWidth = card.offsetWidth;
    const fullCardWidth = cardWidth + marginLeft + marginRight;
    
    // Gap dinâmico (pega do CSS)
    const trackStyle = window.getComputedStyle(track);
    const trackGap = parseFloat(trackStyle.gap) || 30;

    const containerWidth = master.offsetWidth;
    
    // O cálculo:
    // Ponto inicial: Metade do container
    // Menos: Metade do card (para o centro do card bater com o centro do container)
    // Menos: O deslocamento de quantos cards já passaram
    // O passo de deslocamento é: largura total do card + gap do track
    return (containerWidth / 2) - (cardWidth / 2) - (marginLeft) - (currentIndex * (fullCardWidth + trackGap));
}

    function updateActiveCard() {
        const allCards = track.querySelectorAll('.card-insta');
        allCards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    window.moveSlide = function(direction) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex += direction;
        
        track.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        track.style.transform = `translateX(${getTranslateX()}px)`;
        updateActiveCard();
    };

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        
        // Loop Infinito: Teletransporte sem transição
        // Se chegou no final dos clones da direita -> volta para o início do original
        if (currentIndex >= originalCards.length * 2) {
            track.style.transition = "none";
            currentIndex = originalCards.length;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        }
        // Se chegou no início dos clones da esquerda -> vai para o final do original
        if (currentIndex < originalCards.length) {
            track.style.transition = "none";
            currentIndex = originalCards.length * 2 - 1;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        }
        updateActiveCard();
    });

    // Responsividade
    window.addEventListener('resize', () => {
        track.style.transition = "none";
        track.style.transform = `translateX(${getTranslateX()}px)`;
    });

    // Auto Play
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            moveSlide(1);
        }, 3500); // 3.5 segundos por slide
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Interações de Mouse (Pausar no hover)
    master.addEventListener('mouseenter', stopAutoPlay);
    master.addEventListener('mouseleave', startAutoPlay);
    
    // Interações de Touch (Swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    master.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, {passive: true});

    master.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) moveSlide(1);
        if (touchEndX > touchStartX + 50) moveSlide(-1);
    }

    // Inicialização
    track.style.transform = `translateX(${getTranslateX()}px)`;
    updateActiveCard();
    startAutoPlay();
});
