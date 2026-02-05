# ML Editora 📚

> **Solução Editorial para Autores Independentes.**

A **ML Editora** se posiciona como uma boutique editorial independente, focada na arquitetura, produção e publicação de obras digitais de alto padrão. Este projeto consiste na *landing page* institucional da editora, desenvolvida com uma arquitetura moderna, modular e performática para transmitir a sobriedade e elegância que a marca exige.

---

## 🚀 Visão Geral do Projeto

O site foi projetado para ser uma vitrine de conversão, guiando o autor por uma jornada de descoberta que passa pelos valores da empresa, manifesto, planos de serviço e portfólio visual, culminando em canais diretos de contato.

### Destaques Técnicos

-   **Arquitetura CSS Modular**: O estilo foi refatorado em múltiplos módulos (`layout`, `components`, `sections`, etc.) para facilitar a manutenção e escalabilidade.
-   **Carrossel Infinito (Vanilla JS)**: Implementação de um slider de "loop infinito" leve e responsivo, sem dependência de bibliotecas pesadas (como jQuery ou Swiper), garantindo performance máxima.
-   **Design Responsivo & Fluido**: Layout adaptável que mantém a integridade visual desde grandes monitores até dispositivos móveis.
-   **Micro-interações**: Animações sutis e transições suaves (`hover`, `fadeIn`) que enriquecem a experiência do usuário sem comprometer a sobriedade.

---

## 🛠️ Tecnologias e Estrutura

O projeto utiliza a tríade clássica do desenvolvimento web, focando em padrões modernos e semânticos.

-   **HTML5**: Estrutura semântica e acessível.
-   **CSS3**: Variáveis (Custom Properties), Flexbox, Grid Layout e Media Queries.
-   **JavaScript (ES6+)**: Lógica para interatividade do carrossel e manipulação do DOM.

### Estrutura de Diretórios

A organização dos arquivos segue o padrão de separação de responsabilidades:

```text
mleditora/
├── css/                        # Estilos modularizados
│   ├── base.css                # Reset e variáveis globais (:root)
│   ├── layout.css              # Estrutura macro (wrapper, containers)
│   ├── components.css          # Botões, cards, inputs
│   ├── sections.css            # Estilos específicos de seções
│   ├── carousel.css            # Estilo do slider infinito
│   ├── pricing.css             # Tabelas de preço e cards
│   ├── responsive.css          # Ajustes finais de mobile
│   └── ... (outros módulos)
├── js/
│   └── carousel.js             # Lógica do carrossel infinito
├── assets/                     # Imagens e ícones
├── index.html                  # Markup principal
└── README.md                   # Documentação
```

---

## 🎨 Design System

A identidade visual é o coração do projeto, evocando confiança e tradição literária com um toque contemporâneo.

### Paleta de Cores
-   **Azul Meia-Noite** (`#1B2631`): Cor primária, transmite autoridade e profundidade.
-   **Dourado Acetinado** (`#B3924E`): Cor de destaque (accent), usada em bordas, ícones e detalhes premium.
-   **Creme Editorial** (`#FDFBF7`): Fundo suave que simula papel pólen, reduzindo o cansaço visual.
-   **Cinza Antracite** (`#454545`): Usado para textos corridos, oferecendo contraste ideal sem a dureza do preto puro.

### Tipografia
-   **Libre Baskerville** (Serif): Utilizada em títulos e cabeçalhos. Traz a elegância dos livros impressos.
-   **Montserrat** (Sans-serif): Utilizada no corpo do texto e menus. Garante legibilidade e modernidade.

---

## Instalação e Execução

Este é um projeto estático, o que significa que não há necessidade de compilação ou configuração de servidores complexos.

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/mleditora.git
    ```
2.  **Acesse a pasta**:
    ```bash
    cd mleditora
    ```
3.  **Execute**:
    -   Abra o arquivo `index.html` diretamente em seu navegador.
    -   Ou use uma extensão como *Live Server* (VS Code) para simular um ambiente local.

---

## 📞 Contato e Suporte

Para dúvidas sobre o desenvolvimento ou sobre os serviços da editora:

-   **E-mail**: contato@mleditora.com.br
-   **WhatsApp**: Link direto integrado no rodapé do site.
-   **Horário**: Segunda a Sexta, das 09h às 18h.

---
*© 2026 ML Editora. Todos os direitos reservados.*
