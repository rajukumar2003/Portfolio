require('dotenv').config();
const express = require('express');
const WebSocket = require('ws');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = 3000;
const wss = new WebSocket.Server({ noServer: true });

// Initialize Discord bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

wss.on('connection', ws => {
    console.log('Client connected');

    const handlePresenceUpdate = (oldPresence, newPresence) => {
        const spotifyActivity = newPresence.activities.find(activity => activity.name === 'Spotify');
        if (spotifyActivity) {
            ws.send(JSON.stringify({
                username: newPresence.user.tag,
                status: newPresence.status,
                activity: spotifyActivity.name,
                image: spotifyActivity.assets.largeImageURL(),
                songUrl: `https://open.spotify.com/track/${spotifyActivity.syncId}`,
                songName: spotifyActivity.details,
                artistName: spotifyActivity.state,
                startTime: spotifyActivity.timestamps.start,
                endTime: spotifyActivity.timestamps.end,
                elapsed: Date.now() - spotifyActivity.timestamps.start
            }));
        } else {
            // Send offline status if not playing Spotify
            ws.send(JSON.stringify({
                username: newPresence.user.tag,
                status: 'offline',
                activity: null,
                image: null,
                songUrl: null,
                songName: null,
                artistName: null,
                startTime: null,
                endTime: null,
                elapsed: null
            }));
        }
    };

    // Remove existing listeners to prevent duplication
    client.off('presenceUpdate', handlePresenceUpdate);
    client.on('presenceUpdate', handlePresenceUpdate);

    ws.on('close', () => {
        console.log('Client disconnected');
        client.off('presenceUpdate', handlePresenceUpdate); // Clean up listener
    });
});

const server = app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, ws => {
        wss.emit('connection', ws, request);
    });
});
