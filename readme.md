# Random user generator

## API para geração de perfil

Desenvolvida para retornar dados aleatórios de perfil de usuário.

A API consiste em um endpoint GET que faz integração com a API [randomprofile.com](https://randomprofile.com/api-for-developers/), considerando um cenário de sucesso.

## Como configurar o ambiente?

### Configuração

* Instalar, caso não possua o [Node.js](https://nodejs.org/en/) com npm
* Para verificar a instalação execute no terminal do seu sistema: 
`node -v`
e
`npm -v`
ambos devem mostrar um número de versão.

## Instalação de dependências
No terminal do seu sistema, navegue até a pasta que contém o package.json e utilize o npm para instalar as dependências.

`npm install`

## Utilização
Na mesma pasta do package.json, execute o comando para iniciar o servidor:

>`npm start`

O servidor será iniciado na porta `3333` caso disponível, será possível o acesso no link:

[http://localhost:3333/?paises=GBR](http://localhost:3333/?paises=GBR)

Para fins de **desenvolvimento** pode ser utilizado o pacote [nodemon](https://www.npmjs.com/package/nodemon) que sobe novamente o servidor assim que arquivos da aplicação são alterados. 

Pode ser iniciado com o seguinte comando:

>`npm run dev`

### API endpoint
A API espera uma chamada get que retorna um usuário aleatório.

#### GET /

**Parâmetros**

|          Nome | Required |  Tipo   | Descricao                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `paises` | sim | string  | Lista de códigos ISO de países desejados do perfil, separados por vírgula. Códigos suportados: <br/>`CHN`<br/>`GBR`<br/>`JPN`<br/>`KOR`                                                                     |
|     `idadeInicial` | não | int  | Idade mínima do perfil desejado. De `0` a `100`. Valor padrão: `0`.                                                                    |
|     `idadeFinal` | não | int  | Idade máxima do perfil desejado. De `0` a `100`. Valor padrão: `100`.                                                                    |

**Respostas**

```
// Usuario retornado da API
{
  "profile": {
    "userID": "5e249579a7063",
    "firstName": "Tadg",
    "surname": "BURK",
    "translitFirstName": "Tadg",
    "translitSurname": "BURK",
    "gender": "Male",
    "birthday": "2018-05-24",
    "age": "1",
    "country": "United Kingdom",
    "iso": "GBR",
    "passportNumber": "845194979",
    "ssNumber": "JL648648A",
    "phone": "+4493 5413 1418",
    "address": "1172 Harvey Avenue, Plymouth",
    "translitAddress": "1172 Harvey Avenue, Plymouth",
    "zipCode": "PL4 9NN",
    "email": "Tadg.BURK@examp9le.com",
    "username": "water_Tadg439",
    "password": "ZcWb8oQ",
    "registeredDate": "0000-00-00",
    "occupation": "Child"
  }
}

//Parametro países não foi definido
"NO_COUNTRY: \"NO_COUNTRY\";\r\n"
```

## Deploy

O deploy automático está configurado para o heroku através do Procfile, um teste da aplicação rodando pode ser feito no link abaixo.

[Random profile generator](https://random-profile.herokuapp.com/)

### Live DEMO

[https://random-profile.herokuapp.com/?paises=GBR](https://random-profile.herokuapp.com/?paises=GBR)

[https://random-profile.herokuapp.com/?paises=GBR&idadeInicial=23](https://random-profile.herokuapp.com/?paises=GBR&idadeInicial=23)

## Testes

O teste de integração foi criado utilizando o [jest](https://jestjs.io/docs/en/getting-started).

Para executar, utilize o seguinte comando no seu terminal:

`npm test`

Deve retornar o status passed.

```
 PASS  __tests__/integration/get.test.js
  Integration
    √ should return a response with status 200 or 500 (810ms)
  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        3.582s, estimated 6s
  Ran all test suites.
```

## Autor
* **Eduardo Gomes** - criação da API - [elgsantos](https://github.com/elgsantos/)