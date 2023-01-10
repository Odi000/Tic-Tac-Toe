(()=> {
    const cells = [...document.querySelectorAll('.cell')];
    const winningComb = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];

    let pTurn = 0;
    cells.forEach(cell => cell.onclick = () => {
        const X = document.createElement('img');
        const O = document.createElement('img');
        X.src = "./images/x.svg";
        O.src = "./images/circle.svg";
        O.style.width = "90%";
        if(cell.firstElementChild) return;
        if(pTurn === 0){
            cell.appendChild(O);
            pTurn = 1;
        } else {
            cell.appendChild(X);
            pTurn = 0;
        }
    })
})()