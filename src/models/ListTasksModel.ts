import prisma from "../prisma"

class ListTasksModel {

    async execute() {

        const tasks = await prisma.tasks.findMany()

        if(tasks.length == 0) {
            return { message: "Table empty" as string, status: 200 as number }
        }

        return {tasks, status: 200 as number}
    }
}

export { ListTasksModel }