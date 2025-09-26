import { Produto } from "./models/Produto";
import { Cliente } from "./models/Cliente";
import { Carrinho } from "./models/Carrinho";

// Produtos em estoque
const velaLavanda = new Produto(1, "Vela Lavanda 200ml", 29.9, 50);
const velaBaunilha = new Produto(2, "Vela Baunilha 120g", 24.5, 30);
const kitDecorativo = new Produto(3, "Kit Velas Decorativas", 59.9, 20);

// Cliente
const cliente = new Cliente(1, "Beatriz Costa");

// Simulação de compra
const carrinho = new Carrinho();
carrinho.adicionarProduto(velaLavanda, 2);
carrinho.adicionarProduto(velaBaunilha, 1);

console.log("Resumo do carrinho:", carrinho.toJSON());

// Finalizar compra
cliente.finalizarCompra(carrinho);
console.log("Histórico de compras:", cliente.toJSON());
