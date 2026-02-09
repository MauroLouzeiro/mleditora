function copyEmail() {
    const emailText = "contato@mleditora.com.br";
    navigator.clipboard.writeText(emailText).then(() => {
        const feedback = document.getElementById("copy-feedback");
        feedback.classList.add("show");
        
        setTimeout(() => {
            feedback.classList.remove("show");
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar e-mail: ', err);
    });
}