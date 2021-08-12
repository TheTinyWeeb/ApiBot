//Now we will import "Websocket" library
import Websocket from 'ws';

//Client is an instace of the "Websocket" class
//adding the ws url for the socket, change the port if you want to
const Client = new Websocket('ws://localhost:2000/magicalKey');

Client.on('open', () => {
    Client.send('test');
    console.log('Client was connected to the Websocket');
});

//we are going to make the ts compiler ignore one types error below
//we will also be starting the main message loops before
Client.on('message', message => {
    //@ts-ignore
    let ParsedMessage = JSON.parse(new Buffer.from(message).toString());
    if (ParsedMessage) return console.log(ParsedMessage);
});

export default Client;