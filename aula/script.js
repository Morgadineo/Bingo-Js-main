
function gerarNumeroEscolhido() {

    let numero = document.createElement('h1')
    numero.className = 'numero_sorteado'
    numero_aleatorio = (Math.floor(Math.random() * (75 - 1) + 1))
    numero.innerHTML = numero_aleatorio
    area_numeros.appendChild(numero)
}

function jogar() {

    let botao_jogar = document.getElementById('botao-jogar')

    let area_numeros = document.getElementById('area_numeros')

    for (let i = 0; i < 25; i++) {
        setTimeout(gerarNumeroEscolhido, i * 500);
    }


    console.log('Função Jogar finalizada')

}

function reiniciar() {
    location.reload();
    console.log('Reiniciar')
}

function gerarNumeros(num_max, num_min, qtde) {
    let nums = []
    while (nums.length < qtde) {
        nums.push(Math.floor(Math.random() * (num_max - num_min) + num_min))
        nums = [...new Set(nums)]
    }

    console.log(nums)
    return nums
}

function criarEstruturaTabela() {

    let nome_jogador = prompt('Nome do jogador')

    let numeros_tabela = [gerarNumeros(15, 1, 5), gerarNumeros(30, 16, 5), gerarNumeros(45, 31, 5), gerarNumeros(60, 46, 5), gerarNumeros(75, 61, 5)]

    let area_cartela = document.getElementById('area_cartelas')

    let cartela = document.createElement('div')
    cartela.className = 'cartela'

    let label_jogador = document.createElement('label')
    label_jogador.innerHTML = nome_jogador
    label_jogador.className = 'nome'

    area_cartela.appendChild(cartela)

    cartela.appendChild(label_jogador)

    let table = document.createElement('table')
    cartela.appendChild(table)


    let thead = document.createElement('thead')
    table.appendChild(thead)

    let tbody = document.createElement('tbody')
    table.appendChild(tbody)


    let thB = document.createElement('th');
    thB.innerText = 'B';
    let thI = document.createElement('th');
    thI.innerText = 'I';
    let thN = document.createElement('th');
    thN.innerText = 'N';
    let thG = document.createElement('th');
    thG.innerText = 'G';
    let thO = document.createElement('th');
    thO.innerText = 'O';

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        console.log('Loop i')
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td')
            if (i == 2 && j == 2) {
                td.innerText = "X";
                tr.appendChild(td);
            } else {
                td.innerText = numeros_tabela[j][i]
                tr.appendChild(td);
                console.log('Loop j')
            }
        }
    }


    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    console.log('Uma tabela foi criada!')
}
