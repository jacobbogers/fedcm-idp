import { createServer } from 'node:http';






function start() {
    const server = createServer({
        joinDuplicateHeaders: true,
        keepAlive: true,
    }, (req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        // you can use a callback here, but you can also just add a "drain" listener if shouldDrain is true 

        const shouldDrain = !res.write("Hello, world!");
        res.end();
    });

    server.keepAliveTimeout = 1E9;
    server.listen({ port: 8081, host: 'localhost' }, () => {
        console.log('server listening on 8081');
    });

    server.on('error', (err) => {
        console.log('server encountered an error', err)
    });


}

start();