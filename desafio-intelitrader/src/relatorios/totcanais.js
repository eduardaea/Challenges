
export class Canal{
    
    canal_array = [0,0,0,0];
    
    canais(vendas){
        for(let i=0; i<vendas.length;i++){
            if(vendas[i].status == 100 || vendas[i].status == 102 ){
             
                
                if(vendas[i].canal==="1"){
                    this.canal_array[0]+= vendas[i].qtd_vendida
                }
                else if(vendas[i].canal==="2"){
                    this.canal_array[1]+= vendas[i].qtd_vendida
                }
                else if(vendas[i].canal==="3"){
                    this.canal_array[2]+= vendas[i].qtd_vendida
                }
                else if(vendas[i].canal==="4"){
                    this.canal_array[3]+= vendas[i].qtd_vendida
                }
                
            }
           
        }  
        console.log(`1 - Representantes ${this.canal_array[0]}`)
        console.log(`1 - Representantes ${this.canal_array[1]}`)
        console.log(`1 - Representantes ${this.canal_array[2]}`)
        console.log(`1 - Representantes ${this.canal_array[3]}`)
    }
}