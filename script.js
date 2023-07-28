const number = document.querySelector("#number");


function aposta() {
    const random =Math.floor(Math.random()*100)+1;
    if(number.value == random) {
        alert("Você Ganhou!");
    } else {
        alert("Você Perdeu !");
        alert("O numero era: " + random)
    }

}