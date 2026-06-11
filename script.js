// Garante a execução segura após a renderização do DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Mecanismo de Acessibilidade: Alternador de Alto Contraste
    const botaoContraste = document.getElementById("botao-contraste");
    
    botaoContraste.addEventListener("click", function() {
        // Inverte as classes estilizadas no arquivo CSS
        document.body.classList.toggle("alto-contraste");
        
        // Atualiza dinamicamente o rótulo de texto do botão para o usuário
        if (document.body.classList.contains("alto-contraste")) {
            botaoContraste.textContent = "Estilo Padrão";
        } else {
            botaoContraste.textContent = "Mudar Contraste";
        }
    });

    // 2. Manipulação do Formulário de Feedback (Garante Interação Fluida)
    const formulario = document.getElementById("formulario-feedback");
    const avisoSucesso = document.getElementById("aviso-sucesso");

    formulario.addEventListener("submit", function(evento) {
        // Interrompe o recarregamento automático padrão da página (essencial para UX)
        evento.preventDefault(); 
        
        // Realiza a limpeza segura dos campos preenchidos
        formulario.reset(); 
        
        // Exibe o alerta visual positivo na interface
        avisoSucesso.style.display = "block"; 
        
        // Oculta automaticamente o aviso após 4 segundos
        setTimeout(function() {
            avisoSucesso.style.display = "none";
        }, 4000);
    });
});
