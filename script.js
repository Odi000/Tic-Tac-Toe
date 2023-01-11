//GamePlay Module
(()=> {
    const cells = [...document.querySelectorAll('.cell')];
    const player_1 = Player(
        prompt('Please enter your name:','Andy'),'x'
        );
    const player_2 = Player('PC','o');
    const winningComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let pTurn = player_1;
    cells.forEach(cell => cell.onclick = () => {
        if(cell.firstElementChild) return;
        if(pTurn === player_1){
            cell.appendChild(player_1.sign());
            pTurn = player_2;
            (() => {
                winningComb.forEach(comb => {
                    for(i in comb) {
                        if(!(cells[comb[i]].firstElementChild)) return;
                        // console.log(cells[comb[i]].firstElementChild);
                    }
                    const el_1 = cells[comb[0]].firstElementChild.id;
                    const el_2 = cells[comb[1]].firstElementChild.id;
                    const el_3 = cells[comb[2]].firstElementChild.id;
                    const asnwer = el_1 == el_2 && el_1 == el_3? true: false;
                    console.log(asnwer);
                })
            })()
        } else {
            cell.appendChild(player_2.sign());
            pTurn = player_1;
            (() => {
                winningComb.forEach(comb => {
                    for(i in comb) {
                        if(!(cells[comb[i]].firstElementChild)) return;
                        // console.log(cells[comb[i]].firstElementChild);
                    }
                    const el_1 = cells[comb[0]].firstElementChild.id;
                    const el_2 = cells[comb[1]].firstElementChild.id;
                    const el_3 = cells[comb[2]].firstElementChild.id;
                    const asnwer = el_1 == el_2 && el_1 == el_3? true: false;
                    return asnwer;
                })
            })()
        }
    })
})()

//Create Player Factory Function
function Player(name, signature) {
    let points = 0;
    const sign = function () {
            const xo = document.createElement('img');
            xo.src = `./images/${signature}.svg`;
            xo.id = signature;
            if(signature == 'o') xo.style.width = '90%';
            return xo;
    }
    return {name, points, sign};
}