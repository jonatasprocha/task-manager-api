import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const server = fastify({ logger: true })

const start = async () => {

    await server.register(cors)
    await server.register(routes)

    try {
        await server.listen({ port: 3333 ?? process.env.PORT })
    } catch (err) {
        process.exit(1)
    }
}

start()