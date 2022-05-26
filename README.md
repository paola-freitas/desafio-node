<h1 align = "center">Desafio Back-end</h1>

### ❗ Objetivos
    
Seguindo os padrões REST, deve-se uma Web API para realizar operações CRUD. Os dados que serão utilizados pela aplicação devem ser persistidos em um Banco de dados. As informações que serão armazenadas e consultadas são dados de fornecedores, tais dados são modelados pela seguinte definição:

- id: string de 16 dígitos
- name: string 
- company: string
- created_at: date
- amount_products: number

### 🛠️ Pré-requisitos

Downloads necessários para execução do projeto:
- [Node.js](https://nodejs.org/en/) e a sugestão de IDE é o [VSCode](https://code.visualstudio.com/);
- Para consumir as APIs sugiro utilizar o [Postman](https://www.postman.com/);
- O banco de dados utilizado é um NoSQL, o [MongoDB](https://www.mongodb.com/). Então possuir o software já instalado no computador é de suma importância.

### 👩‍💻 Rodando a aplicação

```bash
# Clonar o repositório
$ git clone https://github.com/paola-freitas/desafio-node.git

# Acessar a pasta do projeto no terminal/cmd
$ cd desafio-node/src

#Abrir a pasta no VSCode e rodar a aplicação através do terminal
$ nodemon server.js
```
Assim que o servidor aparecer disponível (ConnectionOK!), pode-se consumir a API ou realizar testes através do Postman.

### 💡 Consumindo a API

Como dito anteriormente, utilizaremos o Postman para consumir a API. Então como a Collection com os Requests já estão no repositório, basta exportar no software do Postman.


