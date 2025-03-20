function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados  e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 4) {//bebe
                img.setAttribute('src', 'bebe-homem.webp')
        
            } else if (idade >= 4 && idade < 16) {//criança/adolescente
                img.setAttribute('src', 'criança-homem.jpeg')
        
            } else if (idade >= 16 && idade < 28) {//jovem
                img.setAttribute('src', 'jovem-homem.jpeg')
            } else if (idade >= 28 && idade < 50) {//adulto
                img.setAttribute('src', 'adulto-homem.jpeg')
            } else if (idade >= 50 && idade < 500) {//veio
                img.setAttribute('src', 'homem-idoso.jpeg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 4) {//bebe
                img.setAttribute('src', 'bebe-mulher.jpeg')

            } else if (idade >= 4 && idade < 16) {//criança/adolescente
                img.setAttribute('src', 'criança-mulher.jpeg')

            } else if (idade >= 16 && idade < 28) {//jovem
                img.setAttribute('src', 'jovem-mulher.jpeg')

            } else if (idade >= 28 && idade < 50) {//adulto
                img.setAttribute('src', 'adulta-mulher.jpeg')

            } else if (idade >= 50 && idade < 500) {//veio
                img.setAttribute('src', 'mulher-idosa.jpeg')

            }
        }

        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
