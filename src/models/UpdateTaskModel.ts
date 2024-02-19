import { FastifyRequest } from "fastify"
import prisma from "../prisma"

class UpdateTaskModel {

    async execute(request: FastifyRequest) {

        const { id } = request.query as { id: string }

        const { title, description, completed } = request.body as { title: string, description: string, completed: boolean }

        const regex = /^[0-9a-fA-F]{24}$/

        if(typeof id !== 'string') {
            return { message: "Invalid id" as string, status: 400 as number }
        }
        
        if(regex.test(id) === false) {
            return { message: "Invalid ID" as string, status: 400 as number }
        }

        await prisma.tasks.update({
            where: { id: id },
            data: {
                title: title,
                description: description,
                completed: completed
            },
        })

        return { message: "task updated successfully" as string, status: 200 as number}
    }
}

export { UpdateTaskModel }