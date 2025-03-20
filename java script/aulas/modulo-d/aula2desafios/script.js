function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`



if (hora>= 0 && hora < 12) {
    //bom dia
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#e2cd9f'
}
else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#9c7e5f'
}
else {
    //boa noite
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#556978'
}
    
}

