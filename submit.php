<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensagem = trim($_POST["mensagem"]);

    // Verifica se os campos estão preenchidos corretamente
    if (empty($nome) || empty($mensagem) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Define um código de resposta (400 = Requisição inválida)
        http_response_code(400);
        echo "Por favor, preencha todos os campos e tente novamente.";
        exit;
    }

    // Defina o destinatário
    $destinatario = "alexandrefpenha@gmail.com";
    
    // Assunto do e-mail
    $assunto = "Nova mensagem de $nome";

    // Corpo do e-mail
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "De: $nome <$email>";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        // Define um código de resposta (200 = Sucesso)
        http_response_code(200);
        echo "Obrigado! Sua mensagem foi enviada.";
    } else {
        // Define um código de resposta (500 = Erro no servidor)
        http_response_code(500);
        echo "Oops! Algo deu errado, não conseguimos enviar sua mensagem.";
    }

} else {
    // Define um código de resposta (403 = Acesso proibido)
    http_response_code(403);
    echo "Ocorreu um problema com o envio do formulário. Tente novamente.";
}
?>
