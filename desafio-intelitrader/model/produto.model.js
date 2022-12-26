export class Produto{
    
    cod_produto;
    qtd;
    qtd_min;

    constructor(input_cod_produto, input_qtd, input_qtd_min){
        
        this.cod_produto = input_cod_produto;
        this.qtd = input_qtd;
        this.qtd_min = input_qtd_min;

    }

}