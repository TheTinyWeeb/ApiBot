import Discord from 'discord.js';
import Database from '../manager';

export default async (interaction: Discord.CommandInteraction) => {
    await interaction.deferReply({
        ephemeral: true
    });

    if (interaction.guild.ownerId == interaction.member.user.id) return interaction.editReply({
        content: 'Only **Guild owners** can use this Interaction Command'
    });

    else return interaction.editReply({
        content: `Guild Key: \`${await Database.get(interaction.guild.id)}\``
    });
};