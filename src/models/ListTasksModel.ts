import prisma from "../prisma"

class ListTasksModel {

    async execute() {

        const tasks = await prisma.tasks.findMany()

        if(tasks.length == 0) {
            return { message: "Table empty" }
        }

        return tasks
    }
}

export { ListTasksModel }