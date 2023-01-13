//Main Global Vars
const cells = [...document.querySelectorAll('.cell')];
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

//GamePlay Module
(()=> {
    const player_1 = Player('x');
    const player_2 = Player('o');
    const scoreBoard = document.querySelector('.score-board');
    const p1Points = document.getElementById('p1-points');
    const p2Points = document.getElementById('p2-points');

    let pTurn = player_1;
    cells.forEach(cell => cell.onclick = () => {
        if(cell.firstElementChild) return;
        if(pTurn === player_1){
            cell.appendChild(player_1.sign());
            pTurn = player_2;
            checkCells();
        } else {
            cell.appendChild(player_2.sign());
            pTurn = player_1;
            checkCells();
        }
    })

    //Check if someone won
    function checkCells() {
        console.log(scoreBoard)
        let winner;
        const control = winningComb.find(comb => {
            for(const i of comb) {
                if(!(cells[i].firstElementChild)) return false;
            }
            const el_1 = cells[comb[0]].firstElementChild.id;
            const el_2 = cells[comb[1]].firstElementChild.id;
            const el_3 = cells[comb[2]].firstElementChild.id;
            const asnwer = el_1 == el_2 && el_1 == el_3? true: false;
            return asnwer;
        });
        if(control) winner = cells[control[0]].firstElementChild.id;
        if(winner){
            cells.forEach(cell => cell.onclick = null);
            winner == 'x'? ++player_1.points: ++player_2.points;
            scoreBoard.style.opacity = '1';
            p1Points.textContent = player_1.points;
            p2Points.textContent = player_2.points;
        }
    }
})()

//Create Player Factory Function
function Player(signature) {
    let points = 0;
    const sign = function () {
            const xo = document.createElement('img');
            xo.src = `./images/${signature}.svg`;
            xo.id = signature;
            if(signature == 'o') xo.style.width = '90%';
            return xo;
    }
    return {points, sign};
}
