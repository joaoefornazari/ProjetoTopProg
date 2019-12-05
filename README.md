# ProjetoTopProg
Código-fonte do projeto de Tópicos em Programação.

## Dependências utilizdas

* Node.js (10.17.0)
* npm (6.13.2)
* yarn (1.19.2)
    * Dependências instaladas com o yarn:
    * express
    * mongoose
    * axios

## Como funciona
Dentro da pasta *backend* está os *schemas* dos JSONs do Carrinho e do Produto; possui as rotas do servidor
que apontam para o *localhost* na porta *3333*, bem como alguns *scripts* para execução do sistema *web*.

A grosso modo, apenas a arquitetura do banco de dados (backend) está pronta.

Para testá-la (caso dê certo), primeiro mude para a pasta *backend* dentro do diretório raiz do projeto.
Depois, deve-se instalar as dependências:

Utilizando o ```yarn```, instale as dependências:

```
    yarn add express
    yarn add mongoose
    yarn add axios
    yarn init -y
```

Para executar o software, digite no terminal:

```yarn start```

A partir daí, o sistema funcionará no ```localhost/3333```.

### Estrutura do BD

O banco de dados se organiza da seguinte forma:

![Diagrama do Banco de Dados](/UntitledDiagram.png)

Os *controllers* são capazes de verificar se existe um carrinho *Carrinho*, um produto *Product* ou um usuário *User* no banco de dados.
