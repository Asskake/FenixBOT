const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*PESAN SELAMAT DATANG TELAH DISETTING UNTUK GRUP INI*');
  } else throw `*MASUKKAN PESAN SELAMAT DATANG YANG INGIN ANDA TAMBAHKAN, Example:*\n*- @user (Orang)*\n*- @group (nama grup)*\n*- @desc (deskripsi grup)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
