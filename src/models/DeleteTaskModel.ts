import prisma from "../prisma"

interface DeleteTaskProps {
    id: string
}

class DeleteTaskModel {
    async execute({ id }: DeleteTaskProps) {

        if(!id) {
            return { massage: "Id is required" }
        }

        const findTask = await prisma.tasks.findFirst({
            where: { 
                id: id
            }
        })

        if(!findTask) {
            throw new Error("CLiente não existe")
        }

        await prisma.tasks.delete({
            where: {
                id: findTask.id
            }
        })

        return { message: "Task deleted successfully"}
    }
}

export { DeleteTaskModel }