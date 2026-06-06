
function calcularMedia() {
    const notaMtxt = document.getElementById('notaMensal');
    const notaBtxt = document.getElementById('notaBimestral');
    if (notaMtxt.value === '' || notaBtxt.value === '') {
        alert('Por favor, insira as notas.');
        return;
    } // O return impede que o resto do código rode
    const notaMensal = parseFloat(document.getElementById('notaMensal').value);
    const notaBimestral = parseFloat(document.getElementById('notaBimestral').value);
    const media = (notaMensal + notaBimestral) / 2;
    const mediaRes = document.getElementById('media-res');
    const body = document.body;
        if (notaMensal < 0 || notaMensal > 10 || notaBimestral < 0 || notaBimestral > 10) {
            alert('As notas devem ser entre 0 e 10.');
            return;
        }
        if (media >=7) {
            body.innerHTML =`<section id="resultado" style="background-color: lightgreen; padding: 20px; border-radius: 5px; display: block; color: green;">
            <p id="media-res">Média: ${media.toFixed(2)} - Aprovado</p>
            <button onclick="limparCampos()">Ok</button>
            </section>`; 
        }
        if (media >= 5 && media < 7) {
            body.innerHTML =`<section id="resultado" style="background-color: lightyellow; padding: 20px; border-radius: 5px; display: block; color: goldenrod;">
            <p id="media-res">Média: ${media.toFixed(2)} - Recuperação</p>
            <button onclick="limparCampos()">Ok</button>
            </section>`; 
        }
        if (media < 5) {
            body.innerHTML =`<section id="resultado" style="background-color: lightcoral; padding: 20px; border-radius: 5px; display: block; color: red;">
            <p id="media-res">Média: ${media.toFixed(2)} - Reprovado</p>
            <button onclick="limparCampos()">Ok</button>
            </section>`;
        }
    }
function limparCampos() {
    window.location.reload();
}
