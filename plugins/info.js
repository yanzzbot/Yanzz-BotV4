let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Yanzz Offiicial
Script: @Nurotomo
Github: 
https://github.com/yanzzbot/Yanzz-BotV4

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @_zxuan54
➥ YouTube:
youtube.com/YanzzOfficial

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ XL: 0882-3543-5804
╠➥ Dana: 0818-0352-2862
╠➥ Indosat: 0856-9174-8501
║>Request? Wa.me/6281803522862
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

