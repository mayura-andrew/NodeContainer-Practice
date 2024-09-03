const fastify = require("fastify")({ logger: true})

// declare routes
fastify.get("/", function handler(request, reply) {
    reply.send({ hello: "world"})
})

// run the server 
fastify.listen({ port: 8080, host: '0.0.0.0' }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
