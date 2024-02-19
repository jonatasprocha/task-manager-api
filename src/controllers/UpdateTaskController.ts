import { FastifyRequest, FastifyReply } from "fastify"
import { UpdateTaskModel } from "../models/UpdateTaskModel"

class UpadateTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const updateTaskModel = new UpdateTaskModel()

        const task = await updateTaskModel.execute(request)

        reply.status(task.status).send(task.message)
    }
}

export { UpadateTaskController }