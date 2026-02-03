document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contato-form");
    const emailInput = document.getElementById("email-input");
    const emailErro = document.getElementById("email-erro");
    const btn = document.getElementById("btn-submit");
    const statusGeral = document.getElementById("status-mensagem");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Validação em Tempo Real (Apenas o texto vermelho)
    emailInput.addEventListener("input", function() {
        if (emailInput.value === "") {
            emailErro.style.display = "none";
            emailInput.style.borderColor = "#DDD";
        } else if (emailRegex.test(emailInput.value)) {
            emailErro.style.display = "none";
            emailInput.style.borderColor = "#B3924E"; // Fica dourado se estiver certo
        } else {
            emailErro.style.display = "block";
            emailInput.style.borderColor = "#ff4d4d"; // Fica vermelho se estiver errado
        }
    });

    // 2. Envio do Formulário
    form.onsubmit = function(e) {
        e.preventDefault();

        if (!emailRegex.test(emailInput.value)) {
            emailInput.focus();
            return;
        }

        btn.innerText = "Enviando...";
        btn.disabled = true;

        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                // Mensagem de sucesso profissional (pode manter discreta no lugar do botão)
                statusGeral.style.display = "block";
                statusGeral.style.color = "#B3924E";
                statusGeral.style.textAlign = "center";
                statusGeral.style.fontSize = "0.8rem";
                statusGeral.innerHTML = "MENSAGEM ENVIADA COM SUCESSO.";
                
                form.reset();
                btn.innerText = "SOLICITAR CONSULTORIA";
                btn.disabled = false;
                emailInput.style.borderColor = "#DDD";
            }
        }).catch(() => {
            alert("Erro de conexão. Tente novamente.");
            btn.disabled = false;
        });
    };
});