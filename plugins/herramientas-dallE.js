import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*Masukan Text untuk membuat gambar menggunakan DALL-E*\n\n*Example :*\n*${usedPrefix + command} Manusia*\n*◉ ${usedPrefix + command} Hatsune Miku*`;
    await conn.sendMessage(m.chat, {text: '*Sedang Dibuat Tunggu Sebentar.*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('Kesalahan pada dall-e api nomor 1.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('Kesalahan pada dall-e api nomor 2.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('Kesalahan pada dall-e api nomor 3');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('Kesalahan, tidak ada api yang berfungsi.');
    throw `*Kesalahan, tidak ada hasil yang diperoleh.*`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;
