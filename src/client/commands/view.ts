import Discord from 'discord.js';
import Database from '../manager';
import Crypto from 'crypto';

export default async (interaction: Discord.CommandInteraction) => {
    await interaction.deferReply({
        ephemeral: true
    });

    if (interaction.guild.ownerId == interaction.member.user.id) return interaction.editReply({
        content: 'Only **Guild owners** can use this Interaction Command'
    });

    else {
        await Database.set(interaction.guild.id, Crypto.randomBytes(25).toString('hex'));
        interaction.editReply({
            content: `Guild Key: \`${await Database.get(interaction.guild.id)}\``
        });
    }
};