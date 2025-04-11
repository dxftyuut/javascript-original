console.log('Olá, Node.js!');

console.log("Funcionou!");

function Contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('coloca o bagulho ai tio, deixa em branco não')
    } else {
        res.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
        for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c}🤟🏽`
    } 
    } else{
        for (let c = i ; c >= f; c -= p) {
            res.innerHTML += `${c}🤟🏽`
            
        }
    }
    }
    

    



}