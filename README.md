<!-- ![logo_API-NODE.JS-MVC-com-SQL-Server](Images/Img1.jpg) -->

API NODE.JS MVC - SQL SERVER

<hr>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Implantação](#implantação)

- [Test end points](#test-end-points)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

## Descrição do projeto 

<p align="justify">
Este projeto foi desenvolvido para ser usado como exemplo de uma api simples feita em node para ser consumida por outra API.

Seu conteúdo é composto apenas das 4 funcionalidades CRUD, sem controle de acesso, com banco de dados Sql Server.

Ao escrever este readme, estou considerando o uso desta API para ser consumida pela minha api <a href="https://github.com/medinasp/APItoAPI" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="20" height="20"/>"APItoAPI".</a>
</p>
<br>

## Implantação
<div style="width:100%">

`Preparação:`
<!-- ![Tela de abertura](Images/abertura.jpg) -->
* Abra o a pasta dos arquivos na IDE

* Abra o arquivo db.js e preencha as credenciais do banco Sql Server

* Adicione o Cors
   * npm install cors

* Criar o banco no Sql Server com as mesmas configurações que estão no db.js

* Talvez seja necessário liberar a porta 1433, caso já não esteja:
   * Abra o SQL Server Configuration Manager (Gerenciador de Configuração do SQL Server)
   * Expanda o nó "Configuração de Rede do SQL Server" e selecione "Protocolos para MSSQLSERVER" (ou o nome da instância do SQL Server que você está usando)
   * Na janela à direita, verifique se o protocolo TCP/IP está habilitado. Se não estiver, clique com o botão direito do mouse no protocolo e selecione "Habilitar".
   * Clique com o botão direito do mouse no protocolo TCP/IP e selecione "Propriedades".
   * Na guia "Endereços IP", role para baixo até a seção "IPAll" e verifique se a porta 1433 está configurada em "Portas Dinâmicas TCP". Se estiver, remova o valor em "Portas Dinâmicas TCP" e insira "1433".

`Execução:`
   * linha de comando na pasta raiz do projeto:
      * node src/server.js

</div>   
</br>

## Test end points

`Verificar endpoints em controllers/ProdutoController.js`

✅ `Create:` Realizar cadastro de usuário administrador.
   * Exemplo de json para end point "Create":
      Post: localhost:4200/Create
      Json Content:
         {
            "Descricao":"Registro 3",
            "DataCriacao":"01/01/2022"
         }

✅ `List:`

✅ `Update:`

✅ `GetOne`

✅ `Delete`

<br>

## Ferramentas utilizadas

<a href="https://node.js.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="nodeJs" width="40" height="40"/></a>
<a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2022" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="sqlServer" width="40" height="40"/>

<!-- ## Acesso ao projeto
Você pode [acessar o código fonte do projeto ou baixá-lo](https://github.com/medinasp/TestesApi) </br></br> -->
