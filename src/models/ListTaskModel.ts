import prisma from "../prisma"

interface ListTaskProps {
    id: string
}

class ListTaskModel {

    async execute({ id }: ListTaskProps) {

        const regex = /^[0-9a-fA-F]{24}$/

        if(typeof id !== 'string') {
            return { message: "Invalid id" as string, status: 400 as number }
        }

        if(regex.test(id) === false) {
            return { message: "Invalid id" as string, status: 400 as number }
        }

        const listTask = await prisma.tasks.findFirst({
            where: {
                id: id
            }
        })

        if(listTask == null) {
            return { message: "Id not find" as string, status: 404 as number }
        }

        return { listTask, status: 200 as number }
    }
}

export { ListTaskModel }