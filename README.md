# API para gerenciamento de tarefas

Made by: Jônatas Pereira da Rocha 

# Descrição do Projeto

O projeto **TASK-MANAGER-API** é uma aplicação web de gerenciamento de tarefas, projetada para pessoas organizarem suas atividades diárias, acompanhar o progresso e priorizar suas responsabilidades de forma eficiente.

## Objetivo

O objetivo principal do projeto **TASK-MANAGER-API** é proporcionar uma plataforma intuitiva e fácil de usar para o gerenciamento de tarefas, permitindo aos usuários:  Criar e listar tarefas; Atualizar o status das tarefas conforme elas são concluídas ou alteradas; Filtrar e pesquisar tarefas. 

# Tecnologias Utilizadas

O projeto faz uso de diversas tecnologias para proporcionar uma solução robusta e eficiente para o gerenciamento de tarefas. Abaixo estão as principais tecnologias utilizadas:

## MongoDB

O MongoDB é utilizado como banco de dados NoSQL para armazenar e gerenciar os dados das tarefas. Sua flexibilidade e escalabilidade o tornam uma escolha popular para aplicativos modernos.

## Node.js e Fastify

O projeto é construído com Node.js, um ambiente de execução JavaScript do lado do servidor, conhecido por sua eficiência e escalabilidade. O Fastify é um framework web leve e rápido para Node.js, utilizado para criar rotas e manipular requisições HTTP de forma eficiente.

## TypeScript

TypeScript é uma linguagem de programação baseada em JavaScript que adiciona tipagem estática opcional ao código. Ela é utilizada neste projeto para melhorar a robustez, legibilidade e manutenibilidade do código, além de proporcionar ferramentas avançadas de desenvolvimento.

## Prisma ORM

Prisma é um ORM (Object-Relational Mapping) de banco de dados moderno e poderoso para Node.js e TypeScript. Ele simplifica a interação com o banco de dados MongoDB, fornecendo uma interface fácil de usar para realizar operações de consulta, atualização e exclusão de dados, além de facilitar a migração e o gerenciamento do esquema do banco de dados.

Essas tecnologias são escolhidas devido à sua eficiência, robustez e facilidade de uso, proporcionando uma base sólida para o desenvolvimento do projeto de gerenciamento de tarefas.


## Introdução

Esta documentação descreve a API de Tarefas, que permite gerenciar tarefas em um sistema.

## Base URL

```
https://task-api-8cl9.onrender.com
```

## Endpoints

### Listar Tarefas

Retorna uma lista de todas as tarefas.

- **URL:** `/tasks`
- **Método:** `GET`
- **Parâmetros de Consulta:**
  - `status` (opcional): Filtra as tarefas pelo seu status (por exemplo, "pendente", "concluída").
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 1,
      "titulo": "Completar relatório",
      "descricao": "Escrever relatório mensal de desempenho",
      "status": "pendente"
    },
    {
      "id": 2,
      "titulo": "Revisar código",
      "descricao": "Revisar o código antes de enviar para produção",
      "status": "concluída"
    }
  ]
  ```

### Criar Tarefa

Cria uma nova tarefa.

- **URL:** `/tasks`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "titulo": "Nova Tarefa",
    "descricao": "Descrição da nova tarefa"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": 3,
    "titulo": "Nova Tarefa",
    "descricao": "Descrição da nova tarefa",
    "status": "pendente"
  }
  ```

### Obter Tarefa por ID

Retorna uma tarefa específica com base no ID fornecido.

- **URL:** `/tasks/{id}`
- **Método:** `GET`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa desejada.
- **Exemplo de Resposta:**
  ```json
  {
    "id": 1,
    "titulo": "Completar relatório",
    "descricao": "Escrever relatório mensal de desempenho",
    "status": "pendente"
  }
  ```

### Atualizar Tarefa

Atualiza uma tarefa existente com base no ID fornecido.

- **URL:** `/tasks/{id}`
- **Método:** `PUT`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa a ser atualizada.
- **Corpo da Requisição:**
  ```json
  {
    "titulo": "Tarefa Atualizada",
    "descricao": "Nova descrição da tarefa",
    "status": "concluída"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": 1,
    "titulo": "Tarefa Atualizada",
    "descricao": "Nova descrição da tarefa",
    "status": "concluída"
  }
  ```

### Excluir Tarefa

Exclui uma tarefa existente com base no ID fornecido.

- **URL:** `/tasks/{id}`
- **Método:** `DELETE`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa a ser excluída.
- **Exemplo de Resposta:** `204 No Content`

## Códigos de Status

- `200 OK`: Requisição bem sucedida.
- `201 Created`: Tarefa criada com sucesso.
- `204 No Content`: Tarefa excluída com sucesso.
- `400 Bad Request`: Requisição inválida ou mal formada.
- `401 Unauthorized`: Não autorizado, token de acesso inválido ou ausente.
- `404 Not Found`: Recurso não encontrado.
- `500 Internal Server Error`: Erro interno do servidor.

# Créditos
 [Como sair do ZERO em Node.js em apenas UMA aula](https://www.youtube.com/watch?v=hHM-hr9q4mo&t=4302s&ab_channel=Rocketseat)

 [Criando API completa com NODEJS + TypeScript e MongoDB #backaofront 01](https://www.youtube.com/watch?v=XuTfN_84rcU&t=2231s&ab_channel=Sujeitoprogramador)

 # Licença

Este projeto é licenciado sob os termos da Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

