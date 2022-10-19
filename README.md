# API

* Esse repositório possui um arquivo docker-compose.yml que cria um banco local.

## Stack

- Typescript
- [TSOA](https://tsoa-community.github.io/docs/getting-started.html)
- [KOA](https://koajs.com/)
- [TypeORM](docs/orm-typeorm.md)

## Desenvolvimento local

### Pré-requisitos

1. Node
    - Se usar [n](https://github.com/tj/n), verifique com `n`
    - Se usar [nvm](https://github.com/creationix/nvm), verifique com `nvm current`
2. npm
3. yarn
4. [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

### Rodando o servidor local para a API:

1. Instale as dependências: `yarn`
2. Inicialize o banco de dados subindo o docker-compose
3. Execute as migrations sempre que tiver atualizações no banco: `yarn update-database -d ./build/src/data-source.js`
4. Execute o servidor de desenvolvimento: `yarn start:dev`.

### Preparando para produção (Node API)

Pra buildar pra produção, use: `yarn build`. Depois rode para executar o build: `$ yarn start`

### Comandos npm úteis nesse repositório - Disponíveis no arquivo `package.json` na seção de scripts

1. `yarn start:dev` - Use para rodar a api em ambiente local
3. `yarn build` - cria o build para release dentro do diretório `build`
4. `yarn start` - roda a API a partir do build criado
5. `yarn lint` - roda o verificador de código typescript. MUITO IMPORTANTE SEMPRE RODAR ESSE SCRIPT!
6. __Database__
    - `yarn add-migration ./src/infra/migrations/<migration_name> -d ./build/src/data-source.js` - rode __SEMPRE__ que houver mudança em tabelas.
    - `yarn build` - antes de rodar update-database
    - `yarn update-database -d ./build/src/data-source.js` - roda todas as migrations para aplicar as mudanças no banco de dados
    - `yarn revert-database -d ./build/src/data-source.js` - reverte a migration mais recente

### Preparando a imagem docker (Node API)

1. `docker build -t <nome_imagem> .` -  constrói a imagem. __ATENÇÃO__: Falha ao rodar pelo CMD do windows e pelo terminal do VSCode
2. `docker run -d -p 5555:5555 <nome_imagem>` - roda o container
3. use para ter certeza que o container está rodando com sucesso: [http://localhost:5555/api/health](http://localhost:5555/api/health)