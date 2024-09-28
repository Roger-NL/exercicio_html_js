document.getElementById('form-valida-numeros').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir bug
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    // Validação: número B deve ser maior que o número A
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O campo B é maior que o campo A.";
        mensagem.className = 'success';
    } else {
        mensagem.textContent = "Formulário inválido! O campo B deve ser maior que o campo A.";
        mensagem.className = 'error';
    }
});
