/*if (n > 100 || n < 1) {
    window.alert('Digite um número entre 1 e 100')
}*/

let num = document.getElementById('inum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}



function inlista(n) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
            window.alert('valor invalido ou já está na lista')
        }
        num.value = "";
        num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor na lista é ${menor}.</p>`
        res.innerHTML += `<p>O maior valor na lista é ${maior}.</p>`
        res.innerHTML += `<p>A soma dos valores e igual a  ${soma}.</p>`
        res.innerHTML +=  `<p> a media desses números e igual a ${media}`
    }
}