import prisma from "../prisma"

interface ListTaskProps {
    id: string
}

class ListTaskModel {

    async execute({ id }: ListTaskProps) {

        const listTask = await prisma.tasks.findFirst({
            where: {
                id: id
            }
        })

        if(listTask == null) {
            return { message: "No find"}
        }

        return listTask
    }
}

export { ListTaskModel }