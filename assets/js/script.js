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
            currentDiapoIndex = diapos.lenth -1;
} 
    
// }
    // diapos[nb].style.display = "block";
    // console.log(nb);
    diapos[currentDiapoIndex].style.display = "block";
    // console.log("Longeur de tableau des diapos =>" + diapos.length);
    // cosole.log("currentDiapoIndex  => " + currentDiapoIndex)



  
   

}

showDiapo(currentDiapoIndex);