import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateTaskController } from "./controllers/CreateTaskController"
import { ListTasksController } from "./controllers/ListTasksController"
import { ListTaskController } from "./controllers/ListTaskController"
import { UpadateTaskController } from "./controllers/UpdateTaskController"
import { DeleteTaskController } from "./controllers/DeleteTaskController"

export async function routes(fastify: FastifyInstance, options:  FastifyPluginOptions) {

    fastify.get('/tasks', (request: FastifyRequest, reply: FastifyReply) => { 
        new ListTasksController().handle(request, reply)
    })

    fastify.get('/task:id', (request: FastifyRequest, reply: FastifyReply) => { 
        new ListTaskController().handle(request, reply)
    })

    fastify.post('/task', async (request: FastifyRequest, reply: FastifyReply) => {
        new CreateTaskController().handle(request, reply)
    })

    fastify.put('/task:id', async (request: FastifyRequest, reply: FastifyReply) => {
        new UpadateTaskController().handle(request, reply)
    })

    fastify.delete('/task:id', async (request: FastifyRequest, reply: FastifyReply) => {
        new DeleteTaskController().handle(request, reply)
    })

}