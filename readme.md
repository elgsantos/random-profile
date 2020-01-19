# Random user generator

## API para geração de perfil

A API consiste em um endpoint GET que faz integração com a API [randomprofile.com](https://randomprofile.com/api-for-developers/).

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

Para fins de desenvolvimento pode ser utilizado o pacote [nodemon](https://www.npmjs.com/package/nodemon) que sobe novamente o servidor assim que arquivos da aplicação são alterados. 

Pode ser iniciado com o seguinte comando:

>`npm run dev`
