// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:

// Entregar o menor número de notas;
// É possível sacar o valor solicitado com as notas disponíveis;
// Saldo do cliente infinito;
// Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do problema);
// Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00
// Exemplos:

// Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00.
function saque(valor:number):number{
    let notas=[10,20,50,100]
        let nota=0
    for (let i=0; i< valor;i++){
      if(valor>=100){
          nota+=1
          valor-=100
      }
      else if(valor>=50){
          nota+=1
          valor-=50
      }
      else if(valor>=20){
          nota+=1
          valor-=20
      }
      else if(valor>=10){
          nota+=1
          valor-=10
      }
    
    }
  
    return nota
  
  }
  console.log(saque(180));