const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveMessages = [
     "Itu cinta yang panas dan penuh gairah! Beritahu dia sekarang juga!"
     "Sepertinya ada percikan di antara kalian berdua. Cobalah!"
     "Mungkin ada sesuatu yang istimewa di sini. Berikan kesempatan!"
     "Hmm, cinta sedang mengudara. Mungkin sudah waktunya ngopi bersama!"
     "Bintang-bintang menunjukkan potensi romantis. Bergeraklah!"
     "Kisah cinta yang luar biasa mungkin menunggu untuk ditulis oleh Anda.",
     "Jangan meremehkan kekuatan waktu dan kesabaran dalam cinta. Hal-hal besar bisa terjadi.",
     "Ingatlah bahwa cinta adalah sebuah perjalanan, dan setiap langkah berharga, berapapun jaraknya.",
     "Hubungan yang kuat bisa menjadi hubungan yang indah. Teruslah menjelajah!"
     "Cinta sejati seringkali membutuhkan waktu dan usaha. Jangan menyerah!"
  ];
  const notSoHighLoveMessages = [
    "Terkadang persahabatan adalah awal dari sesuatu yang indah, namun tidak selalu berubah menjadi cinta.",
    "Cinta bukanlah segalanya, persahabatan juga bagus! Jagalah persahabatanmu tetap spesial.",
    "Ingatlah bahwa hubungan terbaik dimulai dengan persahabatan yang baik. Jangan meremehkan ikatan kalian!"
    "Terkadang cinta bisa tumbuh seiring berjalannya waktu. Terus perkuat koneksi anda!",
    "Hidup itu kejutan, entah apa yang akan terjadi di masa depan! Jangan putus asa.",
    "Bahkan jika cinta tidak berkembang seperti yang diharapkan, koneksi kalian tetap berharga.",
    "Hati mungkin memerlukan waktu untuk disinkronkan, tapi itu tidak mengurangi betapa istimewanya kalian bersama.",
    "Meski ada tantangan cinta, persahabatanmu adalah anugerah yang pantas untuk dirayakan.",
    "Waktu bisa mengungkap hal-hal mengejutkan. Mari kita terus menjelajah bersama!"
    "Hidup ini penuh dengan perubahan yang tidak terduga. Tetaplah terbuka terhadap segala kemungkinan!"
  ];
  const loveDescription = isHighLove ? "Mereka memiliki hubungan dan cinta yang mendalam" : "Mereka memiliki hubungan khusus, meskipun dalam cinta persentasenya tinggi";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  const response =
    `━━━━━━━⬣ *LOVE* ⬣━━━━━━━\n` +
    `*❥ Di alam semesta cinta, ${text} y @${m.sender.split('@')[0]} ${loveDescription} dari ${lovePercentage}% 100%*\n\n` +
    `*❥ ${loveMessage}*\n` +
    `━━━━━━━⬣ *LOVE* ⬣━━━━━━━`    
  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*💞 Menghitung Persentase! 💞*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(love|amor)$/i;
export default handler;
