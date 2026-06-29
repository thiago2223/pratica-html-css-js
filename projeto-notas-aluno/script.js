// 1. Criamos uma lista com o nome de todas as matérias de forma organizada
const materias = [
    'portugues', 'matematica', 'ciencias', 'historia', 'geografia', 
    'filosofia', 'artes', 'ingles', 'quimica', 'biologia', 'fisica', 'sociologia'
];

// 2. Esta função vai rodar TODA VEZ que o usuário digitar qualquer nota
function calcularTudo() {
    let somaMensal = 0;
    let somaBimestral = 0;
    let qtdMensal = 0;
    let qtdBimestral = 0;

    // Loop que passa de matéria em matéria calculando as médias individuais
    materias.forEach(materia => {
        // Captura os elementos HTML da matéria atual
        const inputMensal = document.getElementById(`${materia}-mensal-nota`);
        const inputBimestral = document.getElementById(`${materia}-bimestral-nota`);
        const campoMediaMateria = document.getElementById(`${materia}-media`);

        // Pega os valores e converte para número. Se estiver vazio, define como 0.
        const notaMensal = parseFloat(inputMensal.value) || 0;
        const notaBimestral = parseFloat(inputBimestral.value) || 0;

        // Se o usuário digitou no campo mensal, soma para a média geral
        if (inputMensal.value !== "") {
            somaMensal += notaMensal;
            qtdMensal++;
        }
        // Se o usuário digitou no campo bimestral, soma para a média geral
        if (inputBimestral.value !== "") {
            somaBimestral += notaBimestral;
            qtdBimestral++;
        }

        // Calcula a média individual da matéria (Mensal + Bimestral) / 2
        // Só exibe se pelo menos um dos dois campos tiver nota
        if (inputMensal.value !== "" || inputBimestral.value !== "") {
            const mediaMateria = (notaMensal + notaBimestral) / 2;
            campoMediaMateria.innerText = mediaMateria.toFixed(1);
        } else {
            campoMediaMateria.innerText = "-"; // Deixa um traço se estiver tudo vazio
        }
    });

    // --- ATUALIZA OS TOTAIS DA TABELA MENSAL ---
    const txtSomaMensal = document.getElementById("soma-mensal");
    const txtMediaMensal = document.getElementById("media-mensal");
    
    if (qtdMensal > 0) {
        txtSomaMensal.innerText = somaMensal.toFixed(1);
        txtMediaMensal.innerText = (somaMensal / qtdMensal).toFixed(1);
    } else {
        txtSomaMensal.innerText = "-";
        txtMediaMensal.innerText = "-";
    }

    // --- ATUALIZA OS TOTAIS DA TABELA BIMESTRAL ---
    const txtSomaBimestral = document.getElementById("soma-bimestral");
    const txtMediaBimestral = document.getElementById("media-bimestral");

    if (qtdBimestral > 0) {
        txtSomaBimestral.innerText = somaBimestral.toFixed(1);
        txtMediaBimestral.innerText = (somaBimestral / qtdBimestral).toFixed(1);
    } else {
        txtSomaBimestral.innerText = "-";
        txtMediaBimestral.innerText = "-";
    }
}

// 3. O SEGREDO DO TEMPO REAL:
// Adiciona um ouvinte na página inteira. Qualquer alteração nos inputs dispara a função.
document.addEventListener('input', calcularTudo);