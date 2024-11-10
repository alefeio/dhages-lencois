// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

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
            // alert("Mensagem enviada com sucesso!");
            window.location.href = "https://lencois-maranhenses.dhagesturismo.com.br/obrigado.html";
        })
        .catch(error => {
            console.error("Erro:", error); // Manipula os erros
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        });
});

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#000";
        document.getElementById("navbar").style.opacity = "0.8";
        document.getElementById("logo").style.width = "70px";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("logo").style.width = "150px";
    }
}

function sendMessage() {
    const whatsappNumber = document.getElementById('whatsapp').value;
    const nomeInput = document.getElementById("nome").value;
    const textWpp = encodeURIComponent("Olá, acessei a landing page dos Lençóis Maranhenses e gostaria de informações sobre os pacotes.");

    // Coleta os dados do formulário
    const nome = nomeInput;
    const email = "sem@email.com";
    const telefone = whatsappNumber;
    const assunto = "Landing Page Lençóis Maranhenses";
    const mensagem = "Lead clicou no botão do WhatsApp através da landing page Lençóis Maranhenses.";
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

    if (whatsappNumber && nomeInput) {

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
                // alert("Mensagem enviada com sucesso!");

                const url = `https://wa.me/5591981149800?text=${textWpp}`;
                window.open(url, '_blank');
            })
            .catch(error => {
                console.error("Erro:", error); // Manipula os erros
                alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            });
    } else {
        alert("Por favor, insira seu nome e um número de WhatsApp.");
    }
}

function verificarWhatsApp() {
    const whatsappInput = document.getElementById("whatsapp");
    const nomeInput = document.getElementById("nomeZap");

    // Verifica se o campo "whatsapp" está preenchido
    if (whatsappInput.value.trim() !== "") {
        nomeInput.style.display = "inline";  // Mostra o campo "nome"
    } else {
        nomeInput.style.display = "nomeZap";  // Esconde o campo "nome" caso "whatsapp" esteja vazio
    }
}