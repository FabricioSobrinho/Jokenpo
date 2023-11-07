let res = document.getElementById('res')
let count = document.getElementById('count')

let i = 0

function escolha(pick) {
    i++
    count.innerHTML = i

    // Pedra = 0, papel = 1, tesoura 2
    let random = parseInt(Math.random(1) * 3) //Gera um número entre 0 e 2 para a verificação
    
    if (pick == "pedra") {
        if (random == 0) {
            res.innerHTML = `A máquina também escolheu <i class="fa-sharp fa-solid fa-hand-back-fist"></i> portanto: Empate.`
        } else if (random == 1) {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand"></i>, portanto: você perdeu.`
        } else {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand-scissors"></i>, portanto: você ganhou.`
        }
    } else if (pick == "papel") {
        if (random == 0) {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand-back-fist"></i> portanto: você ganhou.`
        } else if (random == 1) {
            res.innerHTML = `A máquina também escolheu <i class="fa-sharp fa-solid fa-hand"></i>, portanto: Empate.`
        } else {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand-scissors"></i>, portanto: você perdeu.`
        }
    } else {
        if (random == 0) {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand-back-fist"></i> portanto: você perdeu.`
        } else if (random == 1) {
            res.innerHTML = `A máquina escolheu <i class="fa-sharp fa-solid fa-hand"></i>, portanto: você ganhou.`
        } else {
            res.innerHTML = `A máquina também escolheu <i class="fa-sharp fa-solid fa-hand-scissors"></i>, portanto: Empate.`
        }
    }
}