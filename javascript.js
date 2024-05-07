async function getAdressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json(); // Aguarde a resolução da promessa
        console.log(data);
        document.getElementById("rua").value = data.logradouro; // Use "logradouro" em vez de "rua"
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade; // Use "localidade" em vez de "cidade"
    } catch (error) {
        console.log(error);
    }
}
async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);

        // Supondo que você queira exibir apenas a primeira temperatura da lista
        const temperature = data.hourly.temperature_2m[0];

        // Cria um elemento de parágrafo para exibir a temperatura
        const paragraph = document.createElement('p');
        paragraph.textContent = `Temperatura atual: ${temperature}°C`;

        // Limpa o conteúdo existente e anexa o novo parágrafo à div
        const divGraus = document.getElementById('graus');
        divGraus.innerHTML = ''; // Limpa o conteúdo anterior
        divGraus.appendChild(paragraph); // Anexa o novo parágrafo
    } catch (error) {
        console.log(error);
    }
}


function executarFuncoes(){
    getAdressByCep();
    getPrevisao();
}
