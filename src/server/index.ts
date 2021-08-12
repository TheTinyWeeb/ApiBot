import Fastify from 'fastify';
import FastifyCors from 'fastify-cors';
import FastifyWs from 'fastify-websocket';
import Interactor from '../client/index';
import Database from '../client/manager';

const Application = Fastify();

Application.register(FastifyCors);
Application.register(FastifyWs, {
    options: {
        maxPayload: 1048576
    }
});

Application.ready(() => {
    console.log('Application Ready!')
});


Application.get('/', async (request, result) => (await (await import('./providers/main')).default(request, result, Interactor)));

Application.get('/:guildID', { websocket: true }, async (remote, request) => {
    //@ts-ignore
    const guild = Interactor.guilds.cache.get(await Database.get(request.params.guildID));
    if (guild) {
        remote.socket.send(JSON.stringify({message: 'Hello from the server!'}));
        remote.socket.on('message', message => {
            //@ts-ignore these are some server commands
            let string: string = new Buffer.from(message).toString();
            if (string.toLowerCase() == 'test') return remote.socket.send(JSON.stringify({message: 'Test message recieved!'}));
            if (string.toLowerCase() == 'quit') return remote.socket.close(0, JSON.stringify({message: 'Closing connection'}));
            if (string.toLowerCase() == 'ping') return remote.socket.send(JSON.stringify({message: 'Pong! Got an instant response'}));
            else return remote.socket.send(JSON.stringify({message: 'Error: Could not find any function for the message sent!'}));
        });

        Interactor.on('messageCreate', message => {if (message.guild.id == guild.id) return remote.socket.send(JSON.stringify(message))});
        Interactor.on('interactionCreate', interaction => {if (interaction.guild.id == guild.id) return remote.socket.send(JSON.stringify(interaction))});
    } else return remote.socket.close(0, JSON.stringify({message: 'Error: Could not find the guild for the parameter!'}))
});

export default Application;