
var jogadores = []
var numeros_sorteados = []
var numeros_possiveis = []

for (let i = 1; i <= 75; i++) {
    numeros_possiveis.push(i)
}

function verificarVencedor(jogador) {

    // Verifica se todos os elementos estão marcados
    for (var i = 0; i < elementosTabela.length; i++) {
        var elemento = elementosTabela[i];
        if (elemento.style.backgroundColor !== 'green') {
            return false; // Encontrou um elemento não marcado, retorna falso
        }
    }

    return true; // Todos os elementos estão marcados, retorna verdadeiro
}


function pintarFundo(numero) {
    var numeros = document.querySelectorAll('table td')
    for (let i = 0; i < numeros.length; i++) {
        let elemento = numeros[i]
        if (parseInt(elemento.textContent) === numero) {
            elemento.style.backgroundColor = 'green';
        }
    }
}

function verificarNumero() {
    for (let i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i]
        var nome = jogador["nome"]
        var cartela = jogador["cartela"]
        var acertos = jogador["acertos"]
        for (let j = 0; j < cartela.length; j++) {
            for (let k = 0; k < cartela[j].length; k++) {
                var numero = cartela[j][k]
                if (numeros_sorteados.indexOf(numero) !== -1) {
                    pintarFundo(numero)
                    acertos += 1
                    if (acertos >= 25) {
                        alert(`${nome} acaba de vencer!!`)
                    }
                }
            }
        }
    }
}

function gerarNumeroSortiado() {
    /*Função para gerar números aleatórios de 1 até 75 que serão sorteados. Retorna o numero aleatorio*/

    var num = (Math.floor(Math.random() * numeros_possiveis.length))
    var numero_escolhido = numeros_possiveis[num]
    numeros_sorteados.push(numero_escolhido)
    numeros_possiveis.splice(num, 1)
    console.log(numeros_possiveis)

    var numero = document.createElement('h1')
    numero.className = 'numero_sorteado'
    numero.innerHTML = numero_escolhido
    area_numeros.appendChild(numero)

    console.log(`Numeros sorteados: ${numeros_sorteados}`)
}

function jogar() {
    gerarNumeroSortiado()
    verificarNumero()
}

function reiniciar() {
    /*Função para reiniciar a página.*/

    location.reload();
    console.log('Reiniciar')
}

function gerarNumeros(num_max, num_min, qtde) {
    /*Função para gerar os números da cartela.*/

    var nums = []
    while (nums.length < qtde) {
        nums.push(Math.floor(Math.random() * (num_max - num_min) + num_min))
        nums = [...new Set(nums)]
    }
    return nums
}

function criarTabela() {
    /*Função para criar os cartões de BINGO.*/

    var area_cartela = document.getElementById('area_cartelas')

    // Estrutura da tabela
    var cartela = document.createElement('div')
    cartela.className = 'cartela'
    area_cartela.appendChild(cartela)

    var label_jogador = document.createElement('label')
    label_jogador.className = 'nome'

    var nome_jogador = prompt('Nome do jogador')
    label_jogador.innerHTML = nome_jogador
    cartela.appendChild(label_jogador)

    var numeros_tabela = [gerarNumeros(15, 1, 5), gerarNumeros(30, 16, 5), gerarNumeros(45, 31, 5), gerarNumeros(60, 46, 5), gerarNumeros(75, 61, 5)]

    jogadores.push({ "nome": nome_jogador, "cartela": numeros_tabela, "acertos": 0 })

    // Corpo da tabela
    var table = document.createElement('table')
    cartela.appendChild(table)

    var thead = document.createElement('thead')
    table.appendChild(thead)

    var tbody = document.createElement('tbody')
    table.appendChild(tbody)

    // Cria o thead para ficar escrito BINGO
    var thB = document.createElement('th');
    thB.innerText = 'B';
    thead.appendChild(thB)

    var thI = document.createElement('th');
    thI.innerText = 'I';
    thead.appendChild(thI)

    var thN = document.createElement('th');
    thN.innerText = 'N';
    thead.appendChild(thN)

    var thG = document.createElement('th');
    thG.innerText = 'G';
    thead.appendChild(thG)

    var thO = document.createElement('th');
    thO.innerText = 'O';
    thead.appendChild(thO)


    // Looping para adicionar os números na tabela
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr')
        tbody.appendChild(tr)
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td')

            td.innerText = numeros_tabela[j][i]
            tr.appendChild(td);
        }
    }

    console.log(jogadores)
}