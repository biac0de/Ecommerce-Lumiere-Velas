> Ecommerce Lumière Velas

Este projeto refere-se ao **trabalho final de POO (Programação Orientada a Objetos)**, desenvolvido em **TypeScript** com foco em boas práticas de modelagem de classes e simulação de um sistema simples de e-commerce.

---

> Estrutura do Projeto

lumiere-velas/
├── src/
│ ├── index.ts # Arquivo principal (execução do sistema)
│ ├── models/
│ │ ├── Produto.ts # Classe Produto
│ │ ├── ItemCarrinho.ts # Classe ItemCarrinho
│ │ ├── Carrinho.ts # Classe Carrinho
│ │ └── Cliente.ts # Classe Cliente
├── package.json
├── tsconfig.json
└── README.md


---

> Classes implementadas

- **Produto** → representa os produtos disponíveis no e-commerce.  
- **ItemCarrinho** → vincula um produto e sua quantidade no carrinho.  
- **Carrinho** → gerencia os itens adicionados, cálculo do total e listagem.  
- **Cliente** → simula um cliente que possui um carrinho de compras.

---

> Diagrama UML

O projeto foi modelado a partir do seguinte diagrama UML:

![Diagrama UML](docs/diagrama.png)

---

> Como rodar o projeto

1. Clone o repositório:
 
   git clone https://github.com/SEU-USUARIO/Ecommerce-Lumiere-Velas.git
   cd Ecommerce-Lumiere-Velas

2. Instale as dependências:

npm install

3. Execute o sistema:

npm run start