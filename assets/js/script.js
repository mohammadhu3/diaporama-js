let currentDiapoIndex = 1;
const diapos = document.querySelectorAll(".diapo");
// console.log(diapos);


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



function showDiapo(currentDiapoIndexParametre) {
    diapos.forEach(
        (diapo) => {diapo.style.display = "none"}
    );

    if (currentDiapoIndexParametre >= diapos.length) {
        currentDiapoIndex = 0;
} else if (currentDiapoIndexParametre < 0) {
            currentDiapoIndex = diapos.length -1;
} 
    diapos[currentDiapoIndex].style.display = "block";

    console.clear();
    console.log("Longueur du tableau des diapos => " + diapos.length);
    console.log("currentDiapoIndex => " + currentDiapoIndex);
    console.log("currentDiapoIndex passé en parametre de showdiapo => " + currentDiapoIndexParametre);
   


 

}

showDiapo(currentDiapoIndex);



