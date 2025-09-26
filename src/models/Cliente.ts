import { Carrinho } from "./Carrinho";

export class Cliente {
  private historico: Carrinho[] = [];

  constructor(public id: number, public nome: string) {}

  finalizarCompra(carrinho: Carrinho): void {
    this.historico.push(carrinho);
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      historico: this.historico.map(c => c.toJSON())
    };
  }
}
