import prisma from "../prisma"

interface DeleteTaskProps {
    id: string
}

class DeleteTaskModel {
    async execute({ id }: DeleteTaskProps) {

        const regex = /^[0-9a-fA-F]{24}$/

        if(typeof id !== 'string') {
            return { message: "Invalid ID" as string, status: 400 as number }
        }
        
        if(regex.test(id) === false) {
            return { message: "Invalid ID" as string, status: 400 as number }
        }

        const findTask =  await prisma.tasks.findFirst({
            where: {
                id: id
            }
        })

        if(findTask == null || undefined) {
            return { message: "Id not found" as string, status: 404 as number }
        }

        await prisma.tasks.delete({
            where: {
                id: findTask.id
            }
        })

        return { message: "Task deleted successfully" as string, status: 204 as number }
    }
}

export { DeleteTaskModel }