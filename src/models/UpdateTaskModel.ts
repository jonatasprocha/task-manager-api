import prisma from "../prisma"

interface UpdateTaskProps {
    id: string
}

class UpdateTaskModel {

    async execute({ id }: UpdateTaskProps) {

        const updateTask = await prisma.tasks.findFirst({
            where: { 
                id: id
            }
        })

    }
}