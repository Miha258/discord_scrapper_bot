const TelegramBot = require('node-telegram-bot-api')

const token = '6801366589:AAF9fQyqEI05OUs_LjeTb19vM4MwX8ViRG4'
const bot = new TelegramBot(token, { polling: true })
const channels = {
    "Raiel": -1002011489877,
    "Ulix": -1002123646640,
    "Adil": -1002097260979,
    "Indijac": -1002000641131
}

const sendMessage = (username, message, immage) => {
    try {
    const channelId = channels[username]
    bot.sendPhoto(channelId, immage, {
        caption: message
    })
    } catch (e) {
        console.log('An error occurend, while sending message:', e)
    }
}

module.exports = sendMessage