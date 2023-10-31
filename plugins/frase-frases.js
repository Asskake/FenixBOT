import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  if (command === 'consejo') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀🌟 *Kiat hari ini* 🌟\n\n❥ ${consejo}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command === 'fraseromantica') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀💖 *Ungkapan romantis* 💖\n\n❥ ${frase_romantica}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command == 'historiaromantica') {
    try {
      const cerpe = await cerpen(`cinta romantis`);
      const storytime = await translate(cerpe.cerita, {to: 'es', autoCorrect: true}).catch((_) => null);
      const titletime = await translate(cerpe.title, {to: 'es', autoCorrect: true}).catch((_) => null);
      conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${cerpe.author}
────────────────
${storytime.text}`, m);
    } catch {
      const err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabora%20una%20historia%20romantica%20que%20use%20el%20siguiente%20formato:%20%E1%AD%A5%F0%9F%AB%90%E1%AD%A2%20T%C3%ADtulo:%20%E1%AD%A5%F0%9F%8D%83%E1%AD%A2%20Autor:%20%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%20hsitoria...%20adalah&user=user-unique-id`);
      const json = await err.json();
      const fraseChat = json.result;
      conn.reply(m.chat, fraseChat, m);
    }
  }
};
handler.tags = ['frases'];
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica'];
export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
          const $ = cheerio.load(get.data);
          const link = [];
          $('article.post').each(function(a, b) {
            link.push($(b).find('a').attr('href'));
          });
          const random = link[Math.floor(Math.random() * link.length)];
          axios.get(random).then((res) => {
            const $$ = cheerio.load(res.data);
            const hasil = {
              title: $$('#content > article > h1').text(),
              author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
              kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
              lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
              cerita: $$('#content > article > p').text(),
            };
            resolve(hasil);
          });
        });
  });
}

global.frasesromanticas = [
   'Kamu adalah cahaya yang menerangi hidupku dalam kegelapan.',
   'Bersamamu, setiap hari adalah petualangan baru yang penuh cinta.',
   'Matamu adalah pantulan langit tempat aku ingin tersesat.',
   'Setiap detak jantungku bertuliskan namamu.',
   'Dalam pelukanmu aku menemukan rumah yang selalu aku cari.',
   'Kamu adalah mimpi yang tak pernah ingin aku bangunkan.',
   'Cinta sejati adalah kebersamaan dalam suka dan duka.',
   'Tidak ada jarak ketika dua hati bersatu.',
   'Ciumanmu adalah melodi yang membuat jantungku berdebar kencang.',
   'Cinta adalah melihat dalam dirimu apa yang tidak bisa dilihat orang lain.',
   'Dalam setiap detak jantung, aku membawamu kemana saja.',
   'Cinta yang aku rasakan padamu adalah kekuatan dan inspirasiku.',
   'Kata-kata manismu adalah makanan emosionalku sehari-hari.',
   'Kamu adalah hadiah paling berharga yang diberikan kehidupan kepadaku.',
   'Waktu berhenti ketika aku berada di sampingmu.',
   'Dalam senyumanmu aku menemukan kebahagiaan yang aku cari.',
   'Setiap hari di sisimu adalah kisah cinta yang tak ada habisnya.',
   'Cinta kami seperti dongeng yang menjadi kenyataan.',
   'Pelukanmu adalah perlindunganku di dunia yang kacau ini.',
   'Kaulah alasanku percaya pada takdir.',
   'Cinta adalah menemukan sesuatu yang baru setiap hari yang aku kagumi dalam dirimu.',
   'Cintamu adalah kanvas kosong tempat aku melukis kebahagiaanku.',
   'Bersamamu, masa depan adalah jalan yang penuh janji dan impian.',
   'Kamu adalah mercusuar yang membimbing hatiku dalam kegelapan.',
   'Keajaiban cinta ditemukan dalam setiap gerakan yang kita lakukan.',
   'Cinta kami adalah tarian gairah dan kelembutan abadi.',
   'Dalam pelukanmu, seluruh dunia lenyap dan hanya kamu dan aku yang ada.',
   'Cinta adalah bahasa yang digunakan hati kita untuk berkomunikasi.',
   'Kamu adalah bagian kecil yang kurindukan untuk melengkapi jiwaku.',
   'Cinta menemukan dalam dirimu semua yang aku tidak pernah tahu aku butuhkan.',
];

global.consejos = [
   'Terimalah bahwa perubahan adalah bagian alami dari kehidupan, dan belajarlah untuk beradaptasi dengannya.',
   'Jangan berhenti belajar; Pengetahuan adalah alat yang ampuh.',
   'Jaga kesehatan fisik dan mental Anda, itu penting untuk kehidupan yang utuh.',
   'Nikmati hal-hal kecil, karena itulah yang memberi makna pada hidup.',
   'Belajar memaafkan, baik orang lain maupun diri sendiri, untuk memerdekakan hati.',
   'Hargai waktu yang Anda habiskan bersama orang yang Anda cintai, itu adalah hadiah paling berharga yang dapat Anda berikan dan terima.',
   'Bersikap baik dan penuh kasih sayang kepada orang lain, setiap tindakan kebaikan dapat membuat perbedaan dalam hidup mereka.',
   'Belajarlah untuk mengatakan "tidak" bila perlu, dan tetapkan batasan yang sehat.',
   'Cari waktu untuk melakukan apa yang Anda sukai, karena itu menyehatkan jiwa Anda dan membuat Anda merasa hidup.',
   'Jangan bandingkan dirimu dengan orang lain, setiap orang punya jalan dan ritme hidupnya masing-masing.',
   'Dengarkan pasanganmu dengan empati dan pengertian, komunikasi adalah dasar dari hubungan yang solid.',
   'Jangan takut untuk mengungkapkan perasaanmu, kejujuran itu penting dalam cinta.',
   'Belajar mengalah dan berkompromi, cinta butuh pengorbanan dan usaha bersama.',
   'Kejutkan pasanganmu dari waktu ke waktu, jagalah percikan romansa tetap hidup.',
   'Hormati individualitas pasangan Anda dan biarkan mereka tumbuh sebagai pribadi.',
   'Mencintai diri sendiri sama pentingnya dengan mencintai orang lain; jaga dirimu dan hargai dirimu sendiri.',
   'Ingatlah bahwa hubungan yang sehat didasarkan pada rasa saling percaya dan menghormati.',
   'Pilihlah seseorang yang melengkapi Anda dan menjadikan Anda versi diri Anda yang lebih baik.',
   'Cinta sejati tidak membuatmu merasa berkurang, itu membuatmu merasa lebih.',
   'Cinta adalah kata kerja, itu adalah pilihan sehari-hari yang dipupuk dengan tindakan dan perkataan.',
   'Temukan pekerjaan yang Anda sukai, dan Anda tidak akan pernah merasa seperti sedang bekerja.',
   'Bersikaplah proaktif dan ambil inisiatif dalam pekerjaan Anda, itu akan dihargai oleh atasan Anda.',
   'Belajarlah dari kesalahan dan kegagalan Anda, itu adalah peluang untuk tumbuh dan berkembang.',
   'Pertahankan sikap positif dan cari solusi terhadap tantangan pekerjaan.',
   'Jalin hubungan baik dengan rekan kerja, kerjasama tim adalah kunci kesuksesan.',
   'Tetapkan tujuan yang jelas dan realistis, dan bekerjalah dengan tekad untuk mencapainya.',
   'Jangan takut untuk meminta bantuan atau mencari bimbingan, selalu ada hal baru untuk dipelajari.',
   'Kenali dan hargai pencapaian Anda, rayakan kesuksesan Anda sekecil apa pun itu.',
   'Carilah keseimbangan antara pekerjaan dan kehidupan pribadi, kedua aspek itu penting.',
   'Pekerjaan adalah bagian penting dalam hidup Anda, tetapi itu bukan satu-satunya hal yang menentukan siapa Anda.',
   'Percaya pada diri sendiri dan kemampuan Anda untuk mencapai apa yang ingin Anda lakukan.',
   'Visualisasikan tujuan dan impian Anda, bayangkan bagaimana perasaan Anda ketika mencapainya.',
   'Temukan inspirasi dari mereka yang telah mengatasi hambatan serupa dengan Anda.',
   'Terimalah kegagalan sebagai bagian dari proses, itu adalah kesempatan untuk belajar dan berkembang.',
   'Kelilingi diri Anda dengan orang-orang positif yang mendorong Anda maju.',
   'Tetaplah berpikiran terbuka dan kemauan untuk mempelajari hal-hal baru.',
   'Ingat mengapa Anda memulai ketika Anda merasa tidak termotivasi; terhubung kembali dengan tujuan Anda.',
   'Bagilah tujuan Anda menjadi langkah-langkah kecil, yang akan membuat jalannya lebih mudah dicapai dan tidak membebani.',
   'Jangan takut untuk mengejar impianmu, hidup ini terlalu singkat untuk dijalani dengan penyesalan.',
   'Percayalah bahwa, dengan usaha dan ketekunan, Anda dapat mencapai semua yang Anda inginkan.',
];
