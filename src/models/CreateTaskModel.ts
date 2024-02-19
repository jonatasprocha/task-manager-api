import prisma from "../prisma"

interface CreateTaskProps {
    title: string
    description: string
}

class CreateTaskModel {

    async execute({title, description}: CreateTaskProps) {

        if( title == null || title === undefined || title.trim() === "" && description == null || description === undefined || description.trim() === "" ) {
            return { message: "empty field" as string, status: 400 as number }
        }

        await prisma.tasks.create({
            data: {
                title,
                description,
                completed: false
            }
        })

        return { message: "task created successfully" as string, status: 201 as number}
    }
}

export { CreateTaskModel }