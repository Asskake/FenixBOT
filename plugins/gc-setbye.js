const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*Setbye sudah di set untuk grup ini*');
  } else throw `*Masukan Teks Setbye yang ingin di set, Example:*\n*- @user (Dadah Kambing)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
