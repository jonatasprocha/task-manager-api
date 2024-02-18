import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteTaskModel } from "../models/DeleteTaskModel"

class DeleteTaskController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        const deleteTaskModel = new DeleteTaskModel()

        const deleteTask = await deleteTaskModel.execute({ id })

        reply.send(deleteTask)
    }
}

export { DeleteTaskController }