let diapoIndex = 1;
showDiapo(diapoIndex);

document.querySelector('.precedent').addEventListener('click' ,
() => {
    showDiapo(diapoIndex = diapoIndex - 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

})

document.querySelector('.suivant').addEventListener('click' ,
() => {
    showDiapo(diapoIndex = diapoIndex + 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

})



function showDiapo(nb) {
    console.log(nb);

}