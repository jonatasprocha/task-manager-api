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
- **Exemplo de Resposta:**
  ```json
  [
	{
		"id": "65d2e82210b24cd360d23874",
		"title": "Terminar trabalho final de web",
		"description": "75% do trabalho já está encaminhado, mas restam muito pela frente.",
		"completed": false,
		"created_at": "2024-02-19T05:33:19.691Z",
		"updated_at": "2024-02-19T05:33:19.691Z"
	},
	{
		"id": "65d2e94d10b24cd360d23877",
		"title": "Estudar React.js",
		"description": "Estudar React.js, aprendendo a criar componentes reutilizáveis e gerenciar o estado da aplicação.",
		"completed": false,
		"created_at": "2024-02-19T05:38:19.407Z",
		"updated_at": "2024-02-19T05:38:19.407Z"
	}
  ]
  ```

### Criar Tarefa

Cria uma nova tarefa.

- **URL:** `/task`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Nova Tarefa",
    "description": "Descrição da nova tarefa"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  	{
		"id": "65d2ea5810b24cd360d2387a",
		"title": "Ir na aula de violão.",
		"description": "Encontar amigos no centro da cidade para ir em um lugar reservado para treinar habilidades.",
		"completed": true,
		"created_at": "2024-02-19T05:42:48.558Z",
		"updated_at": "2024-02-19T05:42:48.558Z"
	}
  ```

### Obter Tarefa por ID

Retorna uma tarefa específica com base no ID fornecido.

- **URL:** `/task/{id}`
- **Método:** `GET`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa desejada.
- **Exemplo de Resposta:**
  ```json
  {
		"id": "65d2e94d10b24cd360d23877",
		"title": "Estudar React.js",
		"description": "Estudar React.js, aprendendo a criar componentes reutilizáveis e gerenciar o estado da aplicação.",
		"completed": false,
		"created_at": "2024-02-19T05:38:19.407Z",
		"updated_at": "2024-02-19T05:38:19.407Z"
	},
  ```

### Atualizar Tarefa

Atualiza uma tarefa existente com base no ID fornecido.

- **URL:** `/task/{id}`
- **Método:** `PUT`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa a ser atualizada.
- **Corpo da Requisição:**
  ```json
  {
    "title": "Tarefa Atualizada",
    "description": "Nova descrição da tarefa",
    "completed": true
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
		"id": "65d2e82210b24cd360d23874",
		"title": "Terminar trabalho final de web",
		"description": "75% do trabalho já está encaminhado, mas restam muito pela frente.",
		"completed": false,
		"created_at": "2024-02-19T05:33:19.691Z",
		"updated_at": "2024-02-19T05:33:19.691Z"
	},
  ```

### Excluir Tarefa

Exclui uma tarefa existente com base no ID fornecido.

- **URL:** `/task/{id}`
- **Método:** `DELETE`
- **Parâmetros de Caminho:**
  - `id`: O ID da tarefa a ser excluída.
- **Exemplo de Resposta:** `204 No Content`

## Códigos de Status

- `200 OK`: Requisição bem sucedida.
- `201 Created`: Tarefa criada com sucesso.
- `204 No Content`: Tarefa excluída com sucesso.
- `400 Bad Request`: Requisição inválida ou mal formada.
- `404 Not Found`: Recurso não encontrado.
- `500 Internal Server Error`: Erro interno do servidor.

# Créditos
 [Como sair do ZERO em Node.js em apenas UMA aula](https://www.youtube.com/watch?v=hHM-hr9q4mo&t=4302s&ab_channel=Rocketseat)

 [Criando API completa com NODEJS + TypeScript e MongoDB #backaofront 01](https://www.youtube.com/watch?v=XuTfN_84rcU&t=2231s&ab_channel=Sujeitoprogramador)

 # Licença

Este projeto é licenciado sob os termos da Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

