import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `Loading... ▰▰²⁵ %`, edit: key})
  await conn.sendMessage(m.chat, {text: `Loading...▰▰▰²⁰ %`, edit: key})
await conn.sendMessage(m.chat, {text: `Loading...▰▰▰▰▰ ⁴⁰ %`, edit: key})                                               
await conn.sendMessage(m.chat, {text: `Loading...▰▰▰▰▰▰▰▰▰ ⁸⁰ %`, edit: key})
await conn.sendMessage(m.chat, {text: `Loading...▰▰▰▰▰▰▰▰▰▰ ¹⁰⁰ %`, edit: key})
await conn.sendMessage(m.chat, {text: `Complete!`, edit: key})
    const str =
`
ʜᴀʟᴏ ᴘᴇᴍᴜʟᴀ! ${taguser}*✌️, ꜱᴀʏᴀ ᴄʟᴀʀᴀ - ᴀɪ, ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪ ᴍᴏᴅɪꜰɪᴋᴀꜱɪ ᴏʟᴇʜ ᴍɪᴋᴀ ᴅᴀɴ ꜱᴀʏᴀ ʙᴇʀᴛᴜɢᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇɴᴇᴍᴀɴɪ ᴡᴀᴋᴛᴜ ʟᴜᴀɴɢ ᴀɴᴅᴀ,
ᴛᴇʀᴅᴀᴘᴀᴛ ʙᴀɴʏᴀᴋ ꜰɪᴛᴜʀ ᴍᴇɴᴀʀɪᴋ ᴅɪ ꜱᴀʏᴀ ꜱᴇᴘᴇʀᴛɪ ɢᴀᴍᴇ, ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ, ᴍᴇɴᴅᴇɴɢᴀʀ ᴍᴜꜱɪᴋ ᴅᴀʀɪ ʏᴏᴜᴛᴜʙᴇ ᴅʟʟ.
~ᴅᴇᴄᴏᴅᴇʀ = ᴍɪᴋᴀ
~ᴏᴡɴᴇʀ = ᴀɴɴᴀ

╔═══════ *⌈ BOT INFO ⌋* ═══════✧
║ ❐ *ᴅᴀᴛᴀ:* ${date} 
║ ❐ *ʙᴏᴛ ᴀᴋᴛɪꜰ:* ${uptime}
║ ❐ *ᴜꜱᴇʀ ʀᴇɢɪꜱᴛʀᴀꜱɪ:* ${rtotalreg}
║ ❐ *ᴜꜱᴇʀ:* ${rtotal}
╚══════════════════════✧

╔═══════ *⌈ INFO USER ⌋* ═══════✧
║ ʟᴇᴠᴇʟ : ${level}
║ ᴇxᴘ : ${exp}
║ ʀᴏʟᴇ : ${role}
║ ʟɪᴍɪᴛ : ${limit}
║ ᴍᴏɴᴇʏ : ${money}
║ ᴛᴏᴋᴇɴ : ${joincount}
║ ᴘʀᴇᴍɪᴜᴍ : ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╚══════════════════════✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╔═══════ *⌈ MENU ⌋* ═══════✧
║ ❐ ${usedPrefix}terminosycondiciones
║ ❐ ${usedPrefix}grupos
║ ❐ ${usedPrefix}estado
║ ❐ ${usedPrefix}infobot
║ ❐ ${usedPrefix}speedtest
║ ❐ ${usedPrefix}donar
║ ❐ ${usedPrefix}owner
║ ❐ ${usedPrefix}script
║ ❐ ${usedPrefix}join *<enlace>
╚══════════════════════✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

╔═══════ *⌈ JADI BOT ⌋* ═══════✧
║ ❐ ${usedPrefix}serbot --code
║ ❐ ${usedPrefix}serbot
║ ❐ ${usedPrefix}deletebot
║ ❐ ${usedPrefix}token
║ ❐ ${usedPrefix}stop
║ ❐ ${usedPrefix}bots
╚══════════════════════✧

╔═══════ *⌈ FUN ⌋* ═══════✧
║ ❐ ${usedPrefix}mates *<noob/easy/medium/hard/extreme/impossible/impossible2>*
║ ❐ ${usedPrefix}fake *<texto1> <@tag> <texto2>*
║ ❐ ${usedPrefix}ppt *<kertas/gunting/batu>*
║ ❐ ${usedPrefix}pelacur *<nama / @tag>*
║ ❐ ${usedPrefix}lacur *<nama / @tag>*
║ ❐ ${usedPrefix}gay2 *<nama / @tag>*
║ ❐ ${usedPrefix}lesbi *<nama / @tag>*
║ ❐ ${usedPrefix}pajero *<nama / @tag>*
║ ❐ ${usedPrefix}pajera *<nama / @tag>*
║ ❐ ${usedPrefix}sialan *<nama / @tag>*
║ ❐ ${usedPrefix}jalang *<nama / @tag>*
║ ❐ ${usedPrefix}bertangansatu *<nama / @tag>*
║ ❐ ${usedPrefix}manca *<nama / @tag>*
║ ❐ ${usedPrefix}tikus *<nama / @tag>*
║ ❐ ${usedPrefix}love *<nama / @tag>*
║ ❐ ${usedPrefix}doxear *<nama / @tag>*
║ ❐ ${usedPrefix}apakah *<text>*
║ ❐ ${usedPrefix}suitpvp *<@tag>*
║ ❐ ${usedPrefix}slot *<jumlah>*
║ ❐ ${usedPrefix}ttt *<nama ruangan>*
║ ❐ ${usedPrefix}delttt
║ ❐ ${usedPrefix}acertijo
║ ❐ ${usedPrefix}simi *<text>*
║ ❐ ${usedPrefix}top *<text>*
║ ❐ ${usedPrefix}topgays
║ ❐ ${usedPrefix}topotakus
║ ❐ ${usedPrefix}formarpareja
║ ❐ ${usedPrefix}verdad
║ ❐ ${usedPrefix}reto
║ ❐ ${usedPrefix}cancion
║ ❐ ${usedPrefix}pista
║ ❐ ${usedPrefix}akinator
║ ❐ ${usedPrefix}wordfind
╚══════════════════════✧

╔═══════ *⌈ OWNER ⌋* ═══════✧
║ ❐ ${usedPrefix}enable *welcome*
║ ❐ ${usedPrefix}disable *welcome*
║ ❐ ${usedPrefix}enable *antilink*
║ ❐ ${usedPrefix}disable *antilink*
║ ❐ ${usedPrefix}enable *antilink2*
║ ❐ ${usedPrefix}disable *antilink2*
║ ❐ ${usedPrefix}enable *detect*
║ ❐ ${usedPrefix}disable *detect*
║ ❐ ${usedPrefix}enable *autosticker*
║ ❐ ${usedPrefix}disable *autosticker*
║ ❐ ${usedPrefix}enable *antiviewonce*
║ ❐ ${usedPrefix}disable *antiviewonce*
║ ❐ ${usedPrefix}disable *antitoxic*
║ ❐ ${usedPrefix}nable *antitraba*
║ ❐ ${usedPrefix}disable *antitraba*
║ ❐ ${usedPrefix}enable *antiarabes*
║ ❐ ${usedPrefix}disable *antiarabes*
║ ❐ ${usedPrefix}enable *modoadmin*
║ ❐ ${usedPrefix}disable *modoadmin*
║ ❐ ${usedPrefix}enable *antidelete*
║ ❐ ${usedPrefix}disable *antidelete*
╚══════════════════════✧

╔═══════ *⌈ REPORT ERROR ⌋* ═══════✧
║ ❐ ${usedPrefix}reporte *<commandnya>*
╚══════════════════════✧

╔═══════ *⌈ DOWNLOADER ⌋* ═══════✧
║ ❐ ${usedPrefix}instagram *<link>*
║ ❐ ${usedPrefix}mediafire *<link>*
║ ❐ ${usedPrefix}gitclone *<link>*
║ ❐ ${usedPrefix}gdrive *<link>*
║ ❐ ${usedPrefix}tiktok *<link>*
║ ❐ ${usedPrefix}tiktokimg *<link>*
║ ❐ ${usedPrefix}twitter *<link>*
║ ❐ ${usedPrefix}fb *<link>*
║ ❐ ${usedPrefix}ytshort *<link>*
║ ❐ ${usedPrefix}ytmp3 *<link>*
║ ❐ ${usedPrefix}ytmp4 *<link>*
║ ❐ ${usedPrefix}ytmp3doc *<link>*
║ ❐ ${usedPrefix}ytmp4doc *<link>*
║ ❐ ${usedPrefix}videodoc *<link>*
║ ❐ ${usedPrefix}dapk2 *<link>*
║ ❐ ${usedPrefix}stickerpack *<link>*
║ ❐ ${usedPrefix}play *<text>*
║ ❐ ${usedPrefix}play2 *<text>*
║ ❐ ${usedPrefix}playdoc *<text>*
║ ❐ ${usedPrefix}playdoc2 *<text>*
║ ❐ ${usedPrefix}playlist *<text>*
║ ❐ ${usedPrefix}spotify *<text>*
║ ❐ ${usedPrefix}pinterest *<text>*
║ ❐ ${usedPrefix}wallpaper *<text>*
║ ❐ ${usedPrefix}pptiktok *<Nama belakang>*
║ ❐ ${usedPrefix}tiktokstalk *<username>*
╚══════════════════════✧

╔═══════ *⌈ INTERNET ⌋* ═══════✧
║ ❐ ${usedPrefix}githubsearch *<text>*
║ ❐ ${usedPrefix}pelisplus *<text>*
║ ❐ ${usedPrefix}modapk *<text>*
║ ❐ ${usedPrefix}stickersearch *<text>*
║ ❐ ${usedPrefix}stickersearch2 *<text>*
║ ❐ ${usedPrefix}animeinfo *<text>*
║ ❐ ${usedPrefix}google *<text>*
║ ❐ ${usedPrefix}letra *<text>*
║ ❐ ${usedPrefix}wikipedia *<text>*
║ ❐ ${usedPrefix}ytsearch *<text>*
║ ❐ ${usedPrefix}playstore *<text>*
╚══════════════════════✧

╔═══════ *⌈ GROUP ⌋* ═══════✧
║ ❐ ${usedPrefix}kick *<@tag>*
║ ❐ ${usedPrefix}kick2 *<@tag>*
║ ❐ ${usedPrefix}listanum *<text>*
║ ❐ ${usedPrefix}kicknum *<text>*
║ ❐ ${usedPrefix}grupo *<abrir / cerrar>*
║ ❐ ${usedPrefix}grouptime *<pilihan> <waktu>*
║ ❐ ${usedPrefix}promote *<@tag>*
║ ❐ ${usedPrefix}demote *<@tag>*
║ ❐ ${usedPrefix}admins *<text>* (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║ ❐ ${usedPrefix}demote *<@tag>*
║ ❐ ${usedPrefix}infogroup
║ ❐ ${usedPrefix}resetlink
║ ❐ ${usedPrefix}link
║ ❐ ${usedPrefix}setname *<text>*
║ ❐ ${usedPrefix}setdesc *<text>*
║ ❐ ${usedPrefix}invocar *<text>*
║ ❐ ${usedPrefix}hidetag *<text>*
║ ❐ ${usedPrefix}warn *<@tag>*
║ ❐ ${usedPrefix}unwarn *<@tag>*
║ ❐ ${usedPrefix}listwarn
║ ❐ ${usedPrefix}fantasmas
║ ❐ ${usedPrefix}destraba
║ ❐ ${usedPrefix}setpp *<image>*
╚══════════════════════✧

╔═══════ *⌈ CONVERT ⌋* ═══════✧
║ ❐ ${usedPrefix}toanime *<image>*
║ ❐ ${usedPrefix}togifaud *<video>*
║ ❐ ${usedPrefix}toimg *<sticker>*
║ ❐ ${usedPrefix}tomp3 *<video>*
║ ❐ ${usedPrefix}tomp3 *<vn>*
║ ❐ ${usedPrefix}toptt *<video / audio>*
║ ❐ ${usedPrefix}tovideo *<sticker>*
║ ❐ ${usedPrefix}tourl *<video / image / audio>*
║ ❐ ${usedPrefix}tts *<bahasa> <text>*
║ ❐ ${usedPrefix}tts *<efek> <text>*
╚══════════════════════✧

╔═══════ *⌈ RANDOM ⌋* ═══════✧
║ ❐ ${usedPrefix}pujian
║ ❐ ${usedPrefix}nasihat
║ ❐ ${usedPrefix}ungkapanromantis
║ ❐ ${usedPrefix}sejarahromantis
╚══════════════════════✧

╔═══════ *⌈ ANIME ⌋* ═══════✧
║ ❐ ${usedPrefix}menuanimes
╚══════════════════════✧

╔═══════ *⌈ RANDOM ⌋* ═══════✧
║ ❐ ${usedPrefix}kpop *<blackpink>
║ ❐ ${usedPrefix}cat
║ ❐ ${usedPrefix}dog
║ ❐ ${usedPrefix}meme
║ ❐ ${usedPrefix}itzy
║ ❐ ${usedPrefix}blackpink
║ ❐ ${usedPrefix}navidad
║ ❐ ${usedPrefix}wpmontaña
║ ❐ ${usedPrefix}pubg
║ ❐ ${usedPrefix}wpgaming
║ ❐ ${usedPrefix}wpaesthetic
║ ❐ ${usedPrefix}wpaesthetic2
║ ❐ ${usedPrefix}wprandom
║ ❐ ${usedPrefix}wallhp
║ ❐ ${usedPrefix}wpvehiculo
║ ❐ ${usedPrefix}wpmoto
║ ❐ ${usedPrefix}coffee
║ ❐ ${usedPrefix}pentol
║ ❐ ${usedPrefix}caricatura
║ ❐ ${usedPrefix}ciberespacio
║ ❐ ${usedPrefix}technology
║ ❐ ${usedPrefix}doraemon
║ ❐ ${usedPrefix}hacker
║ ❐ ${usedPrefix}planeta
║ ❐ ${usedPrefix}randomprofile
╚══════════════════════✧

╔═══════ *⌈ JANGAN PAKAI! ⌋* ═══════✧
║ ❐ ${usedPrefix}labiblia
╚══════════════════════✧

╔═══════ *⌈ SUARA ⌋* ═══════✧
║ _${usedPrefix}bass_
║ _${usedPrefix}blown_
║ _${usedPrefix}deep_
║ _${usedPrefix}earrape_
║ _${usedPrefix}fast_
║ _${usedPrefix}fat_
║ _${usedPrefix}nightcore_
║ _${usedPrefix}reverse_
║ _${usedPrefix}robot_
║ _${usedPrefix}slow_
║ _${usedPrefix}smooth_
║ _${usedPrefix}tupai_
╚══════════════════════✧

╔═══════ *⌈ ANONYMOUS ⌋* ═══════✧
║ _${usedPrefix}start_
║ _${usedPrefix}next_
║ _${usedPrefix}leave_
╚══════════════════════✧

╔═══════ *⌈ AUDIO ⌋* ═══════✧
║ _${usedPrefix}menuaudios_
╚══════════════════════✧

╔═══════ *⌈ PERALATAN ⌋* ═══════✧
║ _${usedPrefix}inspect *<link wa_gc>*_
║ _${usedPrefix}chatgpt *<texto>*_
║ _${usedPrefix}delchatgpt
║ _${usedPrefix}gptvoz *<texto>*_
║ _${usedPrefix}dall-e *<texto>*_
║ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
║ _${usedPrefix}readviewonce *<imagen / video>*_
║ _${usedPrefix}clima *<país> <ciudad>*_
║ _${usedPrefix}encuesta *<texto1|texto2...>*_
║ _${usedPrefix}afk *<motivo>*_
║ _${usedPrefix}ocr *<responde a imagen>*_
║ _${usedPrefix}hd *<responde a imagen>*_
║ _${usedPrefix}acortar *<enlace / link / url>*_
║ _${usedPrefix}calc *<operacion math>*_
║ _${usedPrefix}del *<mensaje>*_
║ _${usedPrefix}whatmusic *<audio>*_
║ _${usedPrefix}readqr *<imagen (QR)>*_
║ _${usedPrefix}qrcode *<texto>*_
║ _${usedPrefix}readmore *<texto1| texto2>*_
║ _${usedPrefix}styletext *<texto>*_
║ _${usedPrefix}traducir *<texto>*_
║ _${usedPrefix}nowa *<numero>*_
║ _${usedPrefix}covid *<pais>*_
║ _${usedPrefix}horario_
║ _${usedPrefix}dropmail_
╚══════════════════════✧

╔═══════ *⌈ RPG ⌋* ═══════✧
║ _${usedPrefix}adventure_
║ _${usedPrefix}cazar_
║ _${usedPrefix}cofre_
║ _${usedPrefix}balance_
║ _${usedPrefix}claim_
║ _${usedPrefix}heal_
║ _${usedPrefix}lb_
║ _${usedPrefix}levelup_
║ _${usedPrefix}myns_
║ _${usedPrefix}perfil_
║ _${usedPrefix}work_
║ _${usedPrefix}minar_
║ _${usedPrefix}minar2_
║ _${usedPrefix}buy_
║ _${usedPrefix}buyall_
║ _${usedPrefix}verificar_
║ _${usedPrefix}robar *<cantidad> <@tag>*_
║ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
║ _${usedPrefix}unreg *<numero de serie>*_
╚══════════════════════✧


╔═══════ *⌈ STICKER ⌋* ═══════✧
║ _${usedPrefix}sticker *<responder a imagen o video>*_
║ _${usedPrefix}sticker *<enlace / link / url>*_
║ _${usedPrefix}s *<responder a imagen o video>*_
║ _${usedPrefix}s *<enlace / link / url>*_
║ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║ _${usedPrefix}scircle *<imagen>*_
║ _${usedPrefix}sremovebg *<imagen>*_
║ _${usedPrefix}semoji *<tipo> <emoji>*_
║ _${usedPrefix}qc *<texto>*_
║ _${usedPrefix}attp *<texto>*_
║ _${usedPrefix}attp2 *<texto>*_
║ _${usedPrefix}attp3 *<texto>*_
║ _${usedPrefix}ttp *<texto>*_
║ _${usedPrefix}ttp2 *<texto>*_
║ _${usedPrefix}ttp3 *<texto>*_
║ _${usedPrefix}ttp4 *<texto>*_
║ _${usedPrefix}ttp5 *<texto>*_
║ _${usedPrefix}pat *<@tag>*_
║ _${usedPrefix}slap *<@tag>*_
║ _${usedPrefix}kiss *<@tag>*_
║ _${usedPrefix}dado_
║ _${usedPrefix}wm *<packname> <author>*_
║ _${usedPrefix}stickermarker *<efecto> <imagen>*_
║ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╚══════════════════════✧

╔═══════ *⌈ MODERATOR ⌋* ═══════✧
║ _${usedPrefix}autoadmin_
║ _${usedPrefix}grouplist_
║ _${usedPrefix}chetar_
║ _${usedPrefix}leavegc_
║ _${usedPrefix}cajafuerte_
║ _${usedPrefix}blocklist_
║ _${usedPrefix}addowner *<@tag>*_
║ _${usedPrefix}delowner *<@tag*_
║ _${usedPrefix}block *<@tag*_
║ _${usedPrefix}unblock *<@tag*_
║ _${usedPrefix}msg *<texto>*_
║ _${usedPrefix}banchat_
║ _${usedPrefix}unbanchat_
║ _${usedPrefix}resetuser *<@tag>*_
║ _${usedPrefix}banuser *<@tag>*_
║ _${usedPrefix}unbanuser *_@tag_*
║ _${usedPrefix}dardiamantes *<@tag>*_
║ _${usedPrefix}añadirxp *<@tag>_
║ _${usedPrefix}banuser *<@tag>*_
║ _${usedPrefix}bc *<texto>*_
║ _${usedPrefix}bcchats *<texto>*_
║ _${usedPrefix}bcgc *<texto>*_
║ _${usedPrefix}bcgc2 *<audio>*_
║ _${usedPrefix}bcgc2 *<video>*_
║ _${usedPrefix}bcgc2 *<imagen>*_
║ _${usedPrefix}bcbot *<texto>*_
║ _${usedPrefix}cleartpm_
║ _${usedPrefix}restart_
║ _${usedPrefix}update_
║ _${usedPrefix}banlist_
║ _${usedPrefix}addprem *<@tag>_
║ _${usedPrefix}addprem2 *<@tag>*_
║ _${usedPrefix}addprem3 *<@tag>*_
║ _${usedPrefix}addprem4 *<@tag>*_
║ _${usedPrefix}delprem *<@tag>*_
║ _${usedPrefix}listcmd_
║ _*${usedPrefix}setppbot*_
║ _${usedPrefix}addcmd *<texto>_ 
║ _${usedPrefix}delcmd_
║ _${usedPrefix}saveimage_
║ _${usedPrefix}viewimage_
╚══════════════════════✧`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Menu error dan tidak bisa dikirim, laporkan ke pemilik bot*', m);
  }
};
/*╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pareja />*
├┈・─・﹕₊˚ ✦・୨୧・
┣'pareja' ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯*/

handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
