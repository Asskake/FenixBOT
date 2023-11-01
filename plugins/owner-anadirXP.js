import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*Tag Orangnya @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*Masukkan jumlah XP yang ingin Anda tambahkan*';
  if (isNaN(txt)) throw '*Simbol tidak di dukung, hanya angka*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*Jumlam Minimum adalah 1 XP*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *𝚇𝙿 Ditambahkan*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
