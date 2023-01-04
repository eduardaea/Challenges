import { Produto } from '../model/produto.model.js'
import { Venda } from '../model/venda.model.js'
import fs from 'fs';
import { Transfere } from './relatorios/transfere.js';
import { Diverge } from './relatorios/diverge.js';
import { Canal } from './relatorios/totcanais.js';

let data;
let produtos_array;
let estoque_produtos = []

let vendas_array;
let vendas_produtos= [];

try {
  data = fs.readFileSync('../Casodeteste1/c1_produtos.txt', 'utf8');
  produtos_array=data.split("\n");
} catch (err) {
  console.error(err);
}

try {
    data = fs.readFileSync('../Casodeteste1/c1_vendas.txt', 'utf8');
    vendas_array=data.split("\n");
  } catch (err) {
    console.error(err);
  }

for(let i=0; i<produtos_array.length; i++){
    const produto_string = produtos_array[i].split(";");
    const produto = new Produto(produto_string[0],parseInt(produto_string[1]),parseInt(produto_string[2]))
    estoque_produtos.push(produto);
}

for(let i=0; i<vendas_array.length; i++){
    const venda_string = vendas_array[i].split(";");
    const venda = new Venda(venda_string[0],parseInt(venda_string[1]),venda_string[2],venda_string[3])
    vendas_produtos.push(venda);
}

let transfere = new Transfere();
let diverge = new Diverge();
let canais_status = new Canal()



//console.log(transfere.transferencia(estoque_produtos,vendas_produtos))

//console.log(diverge.divergencias(estoque_produtos,vendas_produtos))

// console.log(canais_status.canais(vendas_produtos))


const content = transfere.transferencia(estoque_produtos,vendas_produtos);

try {
  fs.writeFileSync('./transfere.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}




