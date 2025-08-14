

function entrar(x){
    ctd = document.querySelectorAll('#conteudo')
    ctd[x].style.display = 'inline'
    ctd[x].style.opacity = '1'
    ctd[x].style.transition = 'opacite 0.5s ease-in-out'
    ctd[x].style.transform = 'scale(1.1)'
 }

function sair(x){
    ctd = document.querySelectorAll('#conteudo')
    ctd[x].style.display = 'inline'
    ctd[x].style.opacity = '0'
    ctd[x].style.transition = 'opacity 0.5s ease-in-out'
}
