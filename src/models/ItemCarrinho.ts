import { Produto } from "./Produto";

export class ItemCarrinho {
  constructor(public produto: Produto, public quantidade: number) {}

  calcularSubtotal(): number {
    return this.produto.preco * this.quantidade;
  }

  toJSON() {
    return {
      produto: this.produto.toJSON(),
      quantidade: this.quantidade,
      subtotal: this.calcularSubtotal()
    };
  }
}
