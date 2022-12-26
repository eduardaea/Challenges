

export class Transfere{

     transferencia(produtos,vendas) {
        for(let i=0; i<vendas.length;i++){
            if(vendas[i].status == 100 || vendas[i].status == 102 ){
                const produto = produtos.find(produto => produto.cod_produto === vendas[i].cod_produto);
                if(produto !== undefined){
                    produto.qtd-=vendas[i].qtd_vendida
                }
                else{
                    console.log("Produto inexistente")
                }
            }
           
        }    
        return(produtos)

    }   

}