const handler = async (m, {command, text}) => m.reply(`
*[PERTANYAAN]*
  
*BERTANYA:* ${text}
*MENJAWAB:* ${['Ya', 'Mungkin', 'Mungkin iya', 'Mungkin tidak', 'Tidak', 'Mustahil'].getRandom()}
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
handler.help = ['apakah <texto>?'];
handler.tags = ['kerang'];
handler.command = /^pregunta|preguntas|apakah$/i;
export default handler;
