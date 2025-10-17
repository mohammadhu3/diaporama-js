let currentDiapoIndex = 1;
const diapo = document.querySelectorAll("diapo");

document.querySelector('.precedent').addEventListener('click' ,
() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex - 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

})

document.querySelector('.suivant').addEventListener('click' ,
() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex + 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

})



function showDiapo(nb) {
    console.log(nb);

}

showDiapo(currentDiapoIndex);