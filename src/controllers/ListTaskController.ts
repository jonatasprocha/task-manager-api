import { FastifyRequest, FastifyReply } from "fastify"
import { ListTaskModel } from "../models/ListTaskModel";

class ListTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string}

        const listTaskModel = new ListTaskModel()

        const task = await listTaskModel.execute({ id })

        reply.status(task.status).send(task.message || task.listTask)
    }
}

export { ListTaskController }