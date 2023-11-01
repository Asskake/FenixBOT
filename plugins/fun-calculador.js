const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗] Debes mencionar a alguien para el cálculo*`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-❥ Itu rendah... Kamu bukan Gay! 😄*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-❥ Bahkan lebih gay dari yang kita duga! 💃*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-❥ Kamu!, Kamu!, Fakta bahwa kamu adalah gay sejati!*`;
      }
      break;
    case 'lesbi':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mungkin Anda membutuhkan lebih banyak film romantis dalam hidup Anda. 🎬*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Itu cinta yang ekstrim untuk perempuan! 👩‍❤️‍👩*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Jagalah agar cinta tetap mekar! 🌸*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mungkin Anda membutuhkan lebih banyak hobi! 🎨*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Itu adalah perlawanan yang mengagumkan! 💪*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Pertahankan kerja bagus (solo). 🙌*`;
      }
      break;
    case 'sialan':
    case 'jalang':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Semoga beruntung dalam penaklukan Anda berikutnya! 💔*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Anda bersemangat! 🚒*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Pertahankan pesona berapi-api itu! 🔥*`;
      }
      break;
    case 'bertangansatu':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Anda bukan satu-satunya di klub itu! 😅*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Anda memiliki bakat yang sangat istimewa! 🙈*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Pertahankan sikap berani itu! 🤙*`;
      }
      break;
    case 'tikus':
      emoji = '🐁';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Tak ada salahnya menikmati keju! 🧀*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Tikus yang benar-benar mewah! 🏰*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Makan keju secara bertanggung jawab! 🧀*`;
      }
      break;
    case 'pelacur':
    case 'lacur':
      emoji = '🫦👅';
      if (percentages < 50) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Pasar sedang booming! 💼*`;
      } else if (percentages > 100) {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Seorang profesional sejati! 💰*`;
      } else {
        description = `*Perhitungan telah menunjukkan hal itu ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Ini selalu waktu bisnis! 💼*`;
      }
      break;
      default:
      throw `*Command Tidak Valid!.*`;
  }
  const responses = [
    "Alam semesta telah berbicara.",
    "Para ilmuwan mengkonfirmasi hal itu."
    "Kejutan! 🎉"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `『 *MENGHITUNG* 』

—◉ ${description}

*"${response}"*

『 *MENGHITUNG* 』`.trim()  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*Menghitung Persentase!*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['gay2', 'lesbi', 'pajero', 'pajera', 'sialan', 'jalang', 'bertangansatu', 'manca', 'tikus', 'pelacur', 'lacur'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbi|pajero|pajera|sialan|jalang|bertangansatu|manca|tikus|pelacur|lacur)$/i;
export default handler;
