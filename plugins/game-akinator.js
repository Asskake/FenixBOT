import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('*[❗] Saat ini Anda tidak berada dalam sesi akinator*');
    aki.sesi = false;
    aki.soal = null;
    m.reply('*[❗] Sesi akinator (permainan) berhasil dihapus*');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '*[❗] Anda masih dalam sesi akinator (permainan)*', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '*[❗] Error, Coba Lagi Nanti*';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'es', autoCorrect: false});
      let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*Pemain: @${m.sender.split('@')[0]}*\n*Bertanya: ${resultes2.text}*\n\n`;
      txt += '*0 - Iya*\n';
      txt += '*1 - Tidak*\n';
      txt += '*2 - Saya tidak tahu*\n';
      txt += '*3 - Mungkin iya*\n';
      txt += '*4 - Mungkin tidak*\n\n';
      txt += `*Gunakan command ${usedPrefix + command} akhir untuk keluar dari sesi permainan*`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('*[❗] Error, Coba Lagi Nanti*');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['game'];
handler.command = /^(akinator)$/i;
export default handler;
