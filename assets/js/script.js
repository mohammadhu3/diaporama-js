let currentDiapoIndex = 1;
const diapos = document.querySelectorAll(".diapo");
console.log(diapos);


document.querySelector('.precedent').addEventListener('click' ,
() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex - 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

})

document.querySelector('.suivant').addEventListener('click' ,
() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex + 1);
    // showDiapo(diapoIndex = diapoIndex - 1);

});



function showDiapo(nb) {
    diapos.forEach(
        (diapos) => {diapos.style.display = "none"}
    );

//     if (nb => diapos.length) {
//         currentDiapoIndex = 0;
//         nb = 0;
    
// }
    // diapos[nb].style.display = "block";
    console.log(nb);
    // diapos[nb].style.display = "block";


//     console.clear();
//     console.log("currentDiapoIndex passé en par")

}

showDiapo(currentDiapoIndex);