import Utils from '../util';
import Discord from 'discord.js';
import type { FastifyRequest, FastifyReply } from 'fastify';

export default async (request: FastifyRequest, result: FastifyReply, client: Discord.Client) => {
    if (Utils.Keys.includes(request.headers.authorization)) {
        result.status(Utils.SuccessCodes.OK).send({
            'type': 'SUCCESS',
            'client': client.user.tag,
            'message': 'The client you are dealing with'
        });
    } else return result.status(Utils.FailiureCodes.BAD_REQUEST).send({
        'type': 'BAD REQUEST',
        'reason': 'An invalid auth key was provided'
    });
};