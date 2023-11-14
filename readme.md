# 🚀 Node.js - Consuming API Function

## 📜 Descrição

Este repositório contém um projeto simples em Node.js que consome uma API para obter informações de usuários. O código utiliza a função `getUser` para fazer uma requisição à API [reqres.in](https://reqres.in/) e, em seguida, a função `showUserName` exibe o nome do usuário no console. O projeto utiliza `async/await` para lidar com operações assíncronas.

<br>

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Nodemon:** Ferramenta para reiniciar automaticamente o servidor em ambiente de desenvolvimento.

<br>

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).

<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/NodeJS-Consuming-API-function.git
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Iniciar o Projeto:**

    ```bash
    npm start
    ```

4. O resultado será exibido no console, mostrando o nome do usuário obtido da API.

<br>

## 📄 Código

```javascript
function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(`O nome do usuário é: ${user.data.first_name}`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

showUserName(1);
```

## 📋 Package.json

```json
{
  "name": "nodejs--async-and-await",
  "version": "1.0.0",
  "description": "Documentation",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon request.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "nodemon": "^3.0.1"
  }
}
```

<br>

## 🧑‍💻 Autor

Este projeto foi desenvolvido por [Edison Matos](https://github.com/EdisonMatos).

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

[Edison Matos](https://github.com/EdisonMatos) é um entusiasta da tecnologia e desenvolvedor apaixonado por criar soluções inovadoras.

<br>

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.

<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
