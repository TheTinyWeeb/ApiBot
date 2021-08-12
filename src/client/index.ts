//importing discord.js
import Discord from 'discord.js';
import Database from './manager';

//creating a simple client with the "GUILD_MESSAGES" intent
const Interactor = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES'
    ]
});

//listening for the ready event
Interactor.on('ready', () => {
    console.log('Client Ready!')
});

Interactor.on('interactionCreate', async interaction => {
    if (interaction.isCommand() && interaction.inGuild()) {
        if (interaction.commandName == 'view') return
    }
});

export default Interactor;
//exporting the client to other files
//you can add your own commands and events, since this is an open sourced client
//it may be dangerous to send "all" the interactions and messages, you may need to filter them according the preferred guild of the user