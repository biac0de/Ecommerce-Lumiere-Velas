export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public estoque: number
  ) {}

  atualizarEstoque(quantidade: number): void {
    if (quantidade > this.estoque) {
      throw new Error(`Estoque insuficiente para ${this.nome}`);
    }
    this.estoque -= quantidade;
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      estoque: this.estoque
    };
  }
}
