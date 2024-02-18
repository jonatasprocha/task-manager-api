import { FastifyRequest, FastifyReply } from "fastify"
import { CreateTaskModel } from "../models/CreateTaskModel"

class CreateTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { title, description } = request.body as { title: string, description: string }

        const createTaskModel = new CreateTaskModel()

        const task = await createTaskModel.execute({title, description})

        reply.send(task)
    }
}

export { CreateTaskController }