$(document).ready(function() {
    // Manipulando o envio do formulário
    $('#formTarefa').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Obtém o valor do campo de texto
        var nomeTarefa = $('#nomeTarefa').val();
        
        // Verifica se o campo não está vazio
        if (nomeTarefa.trim() !== '') {
            // Adiciona a tarefa à lista
            $('#listaTarefas').append('<li>' + nomeTarefa + '</li>');
            // Limpa o campo de texto
            $('#nomeTarefa').val('');
        }
    });

    // Adicionando efeito de linha através do clique nos itens da lista
    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
