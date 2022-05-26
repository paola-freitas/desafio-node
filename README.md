<h1 align = "center">Desafio Back-end</h1>

### ❗ Objetivos
    
Seguindo os padrões REST, deve-se uma Web API para realizar operações CRUD. Os dados que serão utilizados pela aplicação devem ser persistidos em um Banco de dados. As informações que serão armazenadas e consultadas são dados de fornecedores, tais dados são modelados pela seguinte definição:

- id: string de 16 dígitos
- name: string 
- company: string
- created_at: datetime
- amount_products: int

### 🛠️ Pré-requisitos

Downloads necessários para execução do projeto:
- [Node.js](https://nodejs.org/en/) e a sugestão de IDE é o [VSCode](https://code.visualstudio.com/);
- Para realizar os testes e consumir as APIs também sugiro utilizar o [Postman](https://www.postman.com/);
- O banco de dados utilizado é um NoSQL, o [MongoDB](https://www.mongodb.com/). Então possuir a aplicação já instalada no computador é de suma importância.

### 👩‍💻 Rodando a aplicação

```bash
# Clonar o repositório
$ git clone https://github.com/paola-freitas/desafio-node.git

# Acessar a pasta do projeto no terminal/cmd
$ cd desafio-node/src

#Abrir a pasta no VSCode e rodar a aplicação através do terminal
$ nodemon server.js

#Assim que o servidor aparecer disponível, pode-se consumir a API ou realizar testes através do Postman

```
### 👩‍💻 Consumindo a API

Como dito anteriormente, utilizaremos o Postman para consumir a API, então os endereços necessários serão:

- GET:      http://localhost:8080/
- POST:     http://localhost:8080/readporviders
- PUT:      http://localhost:8080/putproviders/{provider}
- DELETE:   http://localhost:8080/deleteproviders/{id}


