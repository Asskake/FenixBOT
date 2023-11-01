import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `Anda sudah terdaftar\n\nIngin Mendaftarkan Kembali?\n\nGunakan Command ini untuk menghapus registrasi Anda\n*${usedPrefix}unreg* <Nomor Series>`;
  if (!Reg.test(text)) throw `*Format Salah!*\n\n*Gunakan Command : ${usedPrefix + command} Nama.Usia*\n*Example: ${usedPrefix + command} Mika.17*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*ANDA HARUS MENCANTUMKAN NAMA*';
  if (!age) throw '*USIA TIDAK BOLEH KOSONG*';
  if (name.length >= 30) throw 'Nama lu Kepanjangan Tod!!';
  age = parseInt(age);
  if (age > 100) throw '*Lu Tolol ya, Mana ada umur lu segitu tod Tua!*';
  if (age < 5) throw '*Ngotak Dikit Lah!!, Mana ada bayi main Whatsapp!*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `
┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 *INFORMASI* 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *Nama:* ${name}
┃ *Umur:* ${age} Tahun
┃ *Nomor Series:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ Jangan Lupa No.Series Anda
┃ Jika Anda Ingin Menghapus Reg
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
