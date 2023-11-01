export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *Anda Berhenti *AFK*${user.afkReason ? '\nSetelah (𝙰𝙵𝙺) Dengan Alasan: ' + user.afkReason : ''}*
  
  *Waktu AFK : ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*JANGAN LABELKANNYA*

*Jangan Tag Dia! Dia sedang AFK*      
*${reason ? 'Dengan Alasan : ' + reason : 'Dengan Alasan : Gak Ada Alasan'}*
*Waktu AFK : ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
