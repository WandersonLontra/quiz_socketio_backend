# 😃Olá, esse é o projeto [QuizQuiz](https://quizquiz-nextjs.herokuapp.com/) BACKEND.

###### link web: https://quizquiz-nextjs.herokuapp.com/

<p align="center">
    <img src="/assets/sample_image.png"/>
</p>

- Este projeto consiste em auxiliar professores e alunos em um ambiente online. Com os desafios causados pela pandemia da COVID-19, as escolas e cursos dos mais diversos seguimentos foram forçados a se adequarem no mundo online.
- Este repositório trata-se do backend, em NodeJS, da aplicação. Para acessar o repositório do Front-end, clique em [QuizQuiz-Frontend](https://github.com/WandersonLontra/quiz_socketio_frontend). A aplicação utiliza websocket, para conexão em tempo real com o client, onde são emitidos e escutados eventos para tráfego de dados com as questões para os alunos e o desempenho dos alunos ao professor.

## Tecnologias usadas 🚀

- [NodeJS](nodejs.org)
- [ExpressJS](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Socket.io](https://socket.io)
- [uuid](https://www.npmjs.com/package/uuid)

## Arrumando o ambiente 💪

Faça o clone do projeto com o comando abaixo:

```bash
git clone https://github.com/WandersonLontra/quiz_socketio_backend.git
```
Em seguida instale as dependências:

```bash
npm install
# ou
yarn
```
- *Crie, na raiz do projeto, um arquivo com nome **".env"** para setar a variável de ambiente abaixo:*
> ORIGIN_CORS_URL = http://localhost:3000

Url para conexão com o frontend, via socket.io. É imprescindível a configuração desta variável, caso contrário, a conexão não irá ocorrer devido as restrições do **CORS**.


## Iniciando a aplicação 😍

Após a instalação das dependências e configuração da variável de ambiente, rode o comando: 


```bash
npm run dev
# ou
yarn dev
```
##### Em seguida, siga o procedimento para configuração e inicialização descrita no README do [QuizQuiz-Frontend](https://github.com/WandersonLontra/quiz_socketio_frontend)
