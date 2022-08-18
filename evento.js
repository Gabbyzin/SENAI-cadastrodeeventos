let today = new Date(2022,8,10);
dataEvento = new Date("2022-09-14")
console.log("----------")

console.log("Insira ano/mês/dia do evento")
if(dataEvento > today) {console.log("Cadastro permitido")}
else {console.log("Data Inválida")}
console.log("----------")

let idade = 19
console.log("Insira a idade")
if(idade>=18) {console.log("Cadastro permitido.")}
else {console.log("Cadastro não permitido para menores de idade.")}
console.log("----------")

if(idade< 18) {console.log(" ")}
else {
    let participantesEvento = 100
console.log("Verificando número de participantes no evento.")
if(participantesEvento >= 100) {console.log("Limite excedido.")}
else {console.log("Cadastro realizado com sucesso")}
console.log("----------")
}

//let participantesEvento = 89
//console.log("Verificando número de participantes no evento.")
//if(participantesEvento >= 100) {console.log("Limite excedido.")}
//else {console.log("Cadastro realizado com sucesso")}
//console.log("----------")