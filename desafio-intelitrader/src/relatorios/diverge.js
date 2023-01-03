
export class Diverge{
    
    divergencias_array = [];
    
    divergencias(produtos,vendas){
        for(let i=0; i<vendas.length;i++){
            if(vendas[i].status !== 100 || vendas[i].status !== 102 ){
                const produto = produtos.find(produto => produto.cod_produto === vendas[i].cod_produto);
                
                if(vendas[i].status == 999){
                    this.divergencias_array.push(`Linha ${i+1} – Erro desconhecido. Acionar equipe de TI`)
                }

                else if(produto == undefined){
                    this.divergencias_array.push(`Linha ${i} – Código de Produto Não encontrado ${vendas[i].cod_produto}`)
                }
                else if(vendas[i].status == 135){
                    this.divergencias_array.push(`Linha ${i+1} –  Venda cancelada`)
                }
                else if(vendas[i].status == 190){
                    this.divergencias_array.push(`Linha ${i+1} – Venda não finalizada`)
                }
                
            }
           
        }  
        return this.divergencias_array  
    }
}