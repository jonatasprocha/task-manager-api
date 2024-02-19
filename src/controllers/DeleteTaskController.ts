import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteTaskModel } from "../models/DeleteTaskModel"

class DeleteTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        const deleteTaskModel = new DeleteTaskModel()

        let deleteTask = await deleteTaskModel.execute({ id })

        reply.status(deleteTask.status).send(deleteTask.message)
    }
}

export { DeleteTaskController }