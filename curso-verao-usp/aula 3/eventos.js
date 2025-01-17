const lampada = document.getElementById('lampada') // retorna ref ao elemento
const fiozinho = document.getElementById('fiozinho')
const sfx = new Audio('sfx/interruptor.mp3')
fiozinho.onclick = function(){
    lampada.classList.toggle('acesa')
    sfx.play()
}
