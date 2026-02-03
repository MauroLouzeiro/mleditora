document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contato-form");
    const emailInput = document.getElementById("email-input");
    const emailErro = document.getElementById("email-erro");
    const btn = document.getElementById("btn-submit");
    const statusGeral = document.getElementById("status-mensagem");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form) return;

    // 1. Validação em Tempo Real (Apenas o texto vermelho)
    emailInput.addEventListener("input", function() {
        if (emailInput.value === "" || emailRegex.test(emailInput.value)) {
            emailErro.style.display = "none";
            emailInput.style.borderColor = "#DDD";
        } else {
            emailErro.style.display = "block";
            emailInput.style.borderColor = "#ff4d4d";
        }
    });

    // 2. Envio via AJAX (BLOQUEIO TOTAL de redirecionamento)
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Trava o envio padrão do navegador
        e.stopPropagation(); // Impede que outros scripts interfiram

        // Se o e-mail estiver errado, foca no campo e não envia
        if (!emailRegex.test(emailInput.value)) {
            emailErro.style.display = "block";
            emailInput.focus();
            return false;
        }

        btn.innerText = "ENVIANDO...";
        btn.disabled = true;

        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json' // Avisa o Formspree para não redirecionar
            }
        })
        .then(response => {
            statusGeral.style.display = "block";
            statusGeral.style.textAlign = "center";
            statusGeral.style.marginTop = "15px";
            statusGeral.style.fontSize = "0.8rem";
            statusGeral.style.fontWeight = "600";

            if (response.ok) {
                statusGeral.style.color = "#B3924E"; // Dourado
                statusGeral.innerHTML = "MENSAGEM ENVIADA COM SUCESSO!";
                form.reset(); // Limpa os campos
                emailInput.style.borderColor = "#DDD";
            } else {
                statusGeral.style.color = "#ff4d4d";
                statusGeral.innerHTML = "ERRO AO ENVIAR. TENTE NOVAMENTE.";
            }
        })
        .catch(error => {
            statusGeral.style.display = "block";
            statusGeral.style.color = "#ff4d4d";
            statusGeral.innerHTML = "ERRO DE CONEXÃO. VERIFIQUE A INTERNET.";
        })
        .finally(() => {
            btn.innerText = "SOLICITAR CONSULTORIA";
            btn.disabled = false;
        });
    });
});