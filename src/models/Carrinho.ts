import { Produto } from "./Produto";
import { ItemCarrinho } from "./ItemCarrinho";

export class Carrinho {
  private itens: ItemCarrinho[] = [];

  adicionarProduto(produto: Produto, quantidade: number): void {
    produto.atualizarEstoque(quantidade);
    this.itens.push(new ItemCarrinho(produto, quantidade));
  }

  calcularTotal(): number {
    return this.itens.reduce((soma, item) => soma + item.calcularSubtotal(), 0);
  }

  toJSON() {
    return {
      itens: this.itens.map(item => item.toJSON()),
      total: this.calcularTotal()
    };
  }
}
