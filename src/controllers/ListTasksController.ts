import { FastifyRequest, FastifyReply } from "fastify"
import { ListTasksModel } from "../models/ListTasksModel"

class ListTasksController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listTasksModel = new ListTasksModel()

        const tasks = await listTasksModel.execute()

        reply.status(tasks.status).send(tasks.tasks || tasks.message)
    }
}

export { ListTasksController }