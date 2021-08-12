//importing discord.js
import Discord from 'discord.js';
import Database from './manager';
import Crypto from 'crypto';

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
    console.log('Client Ready!');
    Interactor.application.commands.create({
        name: 'view',
        description: 'View the Guild Key to access the API'
    });

    Interactor.application.commands.create({
        name: 'reset',
        description: 'Reset the Guild Key'
    });
});

//@ts-expect-error
Interactor.on('interactionCreate', async interaction => {
    if (interaction.isCommand() && interaction.inGuild()) {
        if (interaction.commandName == 'view') return (await import('./commands/view')).default(interaction);
        if (interaction.commandName == 'reset') return (await import('./commands/reset')).default(interaction);
    }
});

Interactor.on('guildCreate', async guild => {
    await Database.set(guild.id, Crypto.randomBytes(25).toString('hex'));
});

Interactor.on('guildDelete', guild => {
    Database.delete(guild.id);
});

export default Interactor;
//exporting the client to other files
//you can add your own commands and events, since this is an open sourced client
//it may be dangerous to send "all" the interactions and messages, you may need to filter them according the preferred guild of the user