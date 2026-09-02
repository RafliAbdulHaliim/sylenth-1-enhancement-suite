// build 2dcd8141ed
// (bot) 991afb
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => console.log('ready'));
client.login(process.env.DISCORD_TOKEN);
