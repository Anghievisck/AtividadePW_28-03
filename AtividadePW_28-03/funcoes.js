let Valor1 = prompt("Digite um número:")

let Result = ""
let Valor2 = ""

function GetPosInt(x){
    if (x >= 0){
        if (isNaN(x) == false){
            Result = "PosInt"
        } else {
        Result = "Pos" 
        }
    } else { 
        if (isNaN(x) == false){
            Result = "Int"
        } else {
            Result = "NaN"
        }
    }
    return Result
}

let CondiValor1 = GetPosInt(Valor1)
let CondiValor2 = ""

switch(CondiValor1){
    case("PosInt"):
        break
    
    case("Pos"):
        Valor2 = prompt("Digite outro número")
        CondiValor2 = GetPosInt(Valor2)
        break

    case("Int"):
        Valor2 = prompt("Digite outro número")
        CondiValor2 = GetPosInt(Valor2)
        break
    
    case("NaN"):
        break
}

if (CondiValor1 != "NaN"){
    if (CondiValor1 == "PosInt"){
        
    } else {
        if (CondiValor2 != "NaN"){
            Valor1 = parseFloat(Valor1)
            Valor2 = parseFloat(Valor2)
 
            let Soma = Valor1 + Valor2
 
            document.write(`A soma entre ${Valor1} e ${Valor2} é igual a ${Soma}`)
        }  else if (CondiValor2 == "NaN") {
            alert("Erro: O segundo valor digitado não é um número")
        }
    }
} else if (CondiValor1 ==  "NaN") {
    alert("Erro: O valor digitado não é um número!!")
}