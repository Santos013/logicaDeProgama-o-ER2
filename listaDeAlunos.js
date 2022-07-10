/*
lista de cadastro de alunos
percorrer a lista:
    - percorrer de zero até o numero de alunos.
    - se o número for par, escreva par e o número correspondente.
    - se o número for impar, escreva impar e o número correspondente.
    - se o número for 0, escreva 0.
*/

let numeroDeAlunos = 10;

for(let contador=0; contador < numeroDeAlunos; contador++)
{
    //console.log(contador)

    if (contador == 0)
    {
     console.log("o número atual é zero.")   
    }
    else if (contador %2 == 0)
    {
    console.log("o número "+contador+" é PAR")    
    }
    else
    {
    console.log(`O número ${contador} é ÍMPAR`)
    }
}