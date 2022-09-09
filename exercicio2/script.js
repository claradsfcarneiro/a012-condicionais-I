let idade = Number(prompt("Qual é a sua idade?"));
let terminouEnsinoMedio = String(prompt("Você terminou o ensino médio?")).toLowerCase() === "sim";
let cursandoFaculdade = String(prompt("Você está cursando uma faculdade?")).toLowerCase() === "sim";

if(idade >=18 === true){
    console.log("Você é maior de idade")

}else{
    console.log("Você não é maior de idade");
}

if(terminouEnsinoMedio === true){
    console.log("Você terminou o ensino médio");
}else{
    console.log("Você não terminou o ensino médio");
}

if(cursandoFaculdade === false){
    console.log("Você não está cursando uma faculdade");
}else{
    console.log("Você está cursando uma faculdade")
}