document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = "Landing Page Lençóis Maranhenses";
    const mensagem = document.getElementById("mensagem").value;
    const client = "dhagesturismo"; // Valor fixo ou variável de identificação do cliente

    // Cria o objeto com os dados a serem enviados
    const data = {
        nome: nome,
        email: email,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem,
        client: client
    };

    // Envia os dados usando o método POST
    fetch("https://api.dhagesturismo.com.br/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Processa a resposta JSON
            } else {
                throw new Error("Erro no envio. Tente novamente.");
            }
        })
        .then(data => {
            console.log("Sucesso:", data); // Manipula a resposta de sucesso
            alert("Mensagem enviada com sucesso!");
        })
        .catch(error => {
            console.error("Erro:", error); // Manipula os erros
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        });
});