import fastify from "fastify";


const server = fastify({
    // logger: true
})

server.get('/', (request, response) => {
    return  {
        mensagem: 'Ola Mundo!'
    }
})

server.listen({
    port: 3333
})