import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*Tag orangnya @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*Masukan jumlah diamond yang ingin ditambahkan*';
  if (isNaN(txt)) throw '*Simbol tidak didukung, hanya angka!*';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '*Jumlam Minimum 1*';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`≡ *💎 Ditambahkan*
┌──────────────
▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
└──────────────`);
};
handler.command = ['añadirdiamantes', 'addd', 'dard', 'dardiamantes'];
handler.rowner = true;
export default handler;
