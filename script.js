document.addEventListener('DOMContentLoaded', function() {
    let generatedNumber;

    document.getElementById('submit').addEventListener('click', function(event) {
        // Obter valores inseridos nos inputs
        const min = parseInt(document.getElementById('minRange').value);
        const max = parseInt(document.getElementById('maxRange').value);

        // Criar numero aleatório
        generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Atualizar numero no h1
        const generatedNumberElement = document.querySelector('#generatedNumber h1');
        generatedNumberElement.textContent = generatedNumber;
        const generatedNumberElementId = document.getElementById('generatedNumber-h1')
        generatedNumberElementId.style.color = '#2b96cf'
    });

    // Função para copiar numero a partir do icon
    document.getElementById('copiedIcon').addEventListener('click', function() {
        if (generatedNumber !== undefined) {
            navigator.clipboard.writeText(generatedNumber).then(function() {
                alert('The generated number was successfully copied! - Number: '+ generatedNumber)
            }).catch(function(error) {
                alert('Error while copying number: '+error)
            });
        }
    });

    document.getElementById('pageTitle').addEventListener('click', function(){
        window.location.reload()
    })
});
