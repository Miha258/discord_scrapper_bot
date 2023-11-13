const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

const { RichPresence } = require('discord.js-selfbot-rpc')
const sendMessage = require('./telegram')

client.on('ready', () => {
    const presence = new RichPresence()
      .setStatus('dnd') 
      .setName('Discord')
      .setTimestamp()

    client.user.setPresence(presence.toData())
    console.log('Rich Presence has running...')
    console.log(`Login as ${client.user.tag}`)
})


client.on('messageCreate', async (message) => {
  const author = message.author.id
  const channel = message.channel.id
  let username = 'Raiel';
  if (author === '835128051280904222' && channel in ['968209376911433748', '953426224993153047', '985845508192993330']) {
    username = 'Raiel'
  } else if (author === '454264326254100481' && channel in ['1156258048248119416', '953426224993153047', '985845508192993330']) {
    username = 'Ulix'
  } else if (author === '859002167452631061' && channel in ['953426224993153047',  '985845508192993330']) {
    username = 'Adil'
  } else if (author === '507292423106592769' && channel in ['953426224993153047',  '985845508192993330']) {
    username = 'Indijac'
  }

  if (message.attachments) {
    const attachment = message.attachments.at(0)
    if (attachment){
      if (attachment.contentType.includes('image')){
        console.log(message.url, attachment.attachment)
        sendMessage(username, message.url, attachment.attachment)
      }
    }
  }
})

client.login('Mzk2MDQzNDY3ODAzMDY2MzY4.GpNeqO.s0lzdD0B4xIXv6HsPf6R_mu_NWgQGwjG-d_2WU')