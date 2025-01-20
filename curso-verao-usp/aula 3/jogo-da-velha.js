const espacos = document.querySelectorAll('#jogo div');
console.log(espacos);

const state = {
    vezDoPrimeiro: true
    //vetor com indices que correspondem aos espacos do tabuleiro
    //descobre que alguem ganhou de acordo com os padroes desse vetor
    /*Padrões:
    X X X _ _ _ _ _ _ LINHA
    _ _ _ X X X _ _ _ LINHA
    _ _ _ _ _ _ X X X LINHA
    X _ _ X _ _ X _ _ COLUNA
    X _ _ _ X _ _ _ X DIAGONAL
    _ _ X _ X _ X _ _ DIAGONAL INVERSA*/
    posicoesVitoria: [
        // vitorias em linhas
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // colunas
        [0, 4, 8], [2, 4, 6]
        // [1, 1, 1, 0, 0, 0, 0, 0, 0], //0 1 2 X X X _ _ _ _ _ _
        // [0, 0, 0, 1, 1, 1, 0, 0, 0], //3 4 5 _ _ _ X X X _ _ _
        // [0, 0, 0, 0, 0, 0, 1, 1, 1], //6 7 8 _ _ _ _ _ _ X X X

        // // vitorias em colunas       // 0 1 2 3 4 5 6 7 8
        // [1, 0, 0, 1, 0, 0, 1, 0, 0], // X _ _ X _ _ X _ _
        // [0, 1, 0, 0, 1, 0, 0, 1, 0], // _ X _ _ X _ _ X _
        // [0, 0, 1, 0, 0, 1, 0, 0, 1], // _ _ X _ _ X _ _ X

        // // vitorias diag             // 0 1 2 3 4 5 6 7 8
        // [1, 0, 0, 0, 1, 0, 0, 0, 1], // X _ _ _ X _ _ _ X
        // [0, 0, 1, 0, 1, 0, 1, 0, 0], // _ _ X _ X _ X _ _
    ],
    tabuleiro: [null, null, null, null, null, null,null, null, null]
};
function verificarVencedor(){
    console.log(state.tabuleiro)
    for(const cond of state.posicoesVitoria){
        const et1 = cond.map (it => state.tabuleiro[it])
        const xVenceu = cond.every (it => it == "X")
        const oVenceu = cond.every (it => it == "O")
        const empate = state.tabuleiro.every(it=> !== null)

        if (xVenceu){
            alert('X venceu!')
            limparTabuleiro()
        }else if(oVenceu){
            alert('O venceu!')
            limparTabuleiro()
        }else if(empate){
            alert('VELHA!')
            limparTabuleiro()
        }
        
    }
}
function limparTabuleiro(){
    state.tabuleiro= [null, null, null, null, null, null,null, null, null]
    for(const el of espacos){
        
    }
}
function aoClicarEmEspaco(ev) {
    console.log(ev);
    const el = ev.target;
    const idx = indexDoElementoNoPai(el)
    console.log('index', idx)


    if(state.tabuleiro[idx] == null){
        let caracter = "X"
        if (!state.vezDoPrimeiro) {
            el.innerText = "O";
        } 

        el.innerText = caracter
        state.tabuleiro[idx] = el.innerText

        state.vezDoPrimeiro = !state.vezDoPrimeiro;
        el.classList.add('preenchido')
    }

}

for (const espaco of espacos) {
    espaco.onclick = aoClicarEmEspaco;
}

// copiado descaradamente de https://stackoverflow.com/a/42337722/7988516
function indexDoElementoNoPai(el) {
    return Array.from(el.parentNode.children).indexOf(el);
}