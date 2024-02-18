import prisma from "../prisma"

interface CreateTaskProps {
    title: string
    description: string
}

class CreateTaskModel {

    async execute({title, description}: CreateTaskProps) {

        const task = await prisma.tasks.create({
            data: {
                title,
                description,
                completed: false
            }
        })

        return task
    }
}

export { CreateTaskModel }