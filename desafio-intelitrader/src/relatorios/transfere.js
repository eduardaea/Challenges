

export class Transfere{

     transferencia(produtos,vendas) {
        for(let i=0; i<vendas.length;i++){
            if(vendas[i].status == 100 || vendas[i].status == 102 ){
                const produto = produtos.find(produto => produto.cod_produto === vendas[i].cod_produto);
                if(produto !== undefined){
                    produto.qtd_venda += vendas[i].qtd_vendida;
                    produto.qtd-=vendas[i].qtd_vendida

                    produto.qtd_necess = this.reposicao(produto.qtd_min, produto.qtd)
                    produto.qtd_armazem_co = this.armazem_co(produto.qtd_necess)
                }
                else{
                    console.log("Produto inexistente")
                }
            }
           
        }    
        return(produtos)

    } 
    
    reposicao(qtd_min, qtd_estoque){
        if(qtd_min<qtd_estoque){
            return 0;
        }
        else{
            return(qtd_min-qtd_estoque)
        }
    }

    armazem_co(produto){
        if(produto > 0 && produto < 10){
            return 10
        }
        else{
            return produto;
        }
    }

}