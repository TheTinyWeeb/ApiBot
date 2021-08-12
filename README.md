# ApiBot
Source code of the API bot at my server
## What the heck does the bot do
The bot allows you to interact with your guild on Discord via a Websocket, or an API if you prefer
## Requirements
- Node v16 or above
- Discord Bot token
## Getting the bot up and running
- Clone the repo (pretty much everyone knows that, if you dont search YouTube)
- Locate to `src/index.ts` and replace the 'TOKEN' with your bot token
- Run `npm run start` in your Powershell (or any other thing)
## Obtaining a Guild Key
A guild key is obtained by inviting the bot at **my server** to yours or you could just replace the `sample data` in `src/index.ts` to your guild ID and private key.
Remember to keep the key super secret and safe, it i the last thing you need to pretect your guild messages and interactions to going to hackers.<br><br>
**I am not responsible if your guild data gets stolen, you have a key to secure!**
## Connecting to the Websocket
- Locate to `src/example/index.ts` and copy past the code, it the most basic example
- Set the URL of the WS client `ws://yourhost.domain/{GUILDKEY}`<br>

Thats it, it works fine with both browser (good luck parsing buffer arrays) and your client file