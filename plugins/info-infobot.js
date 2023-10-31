import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╠═〘 *INFO BOT* 〙 ═
╠
╠➥ [✨] CREATOR : Mika
╠➥ [#️⃣] NOMOR : *+62 881-0242-33402*
╠➥ [🎳] PREFIX : *${usedPrefix}*
╠➥ [🔐] CHAT PRIBADI : *${chats.length - groups.length}*
╠➥ [🦜] CHAT GROUP : *${groups.length}* 
╠➥ [💡] TOTAL CHAT : *${chats.length}* 
╠➥ [🚀] RUNTIME : *${uptime}*
╠➥ [🎩] USER : *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [☑️] 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 : ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [❗] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃 : ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
╠➥ [💬] 𝙿𝙲𝙾𝙽𝙻𝚈 : ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [🏢] 𝙶𝙲𝙾𝙽𝙻𝚈 : ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [🌎] MODE : ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
╠➥ [💬] ANTIPRIVASI : ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [🤖] 𝙼𝙾𝙳𝙴𝙹𝙰𝙳𝙸𝙱𝙾𝚃 : ${modejadibot ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [📵] ANTICALL : ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠➥ [👨‍🦯] SPEED: 
╠  *${speed} ms* 
╠
╠═〘 CLARA-AI 〙 ═
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/BrunoSobrino/TheMystic-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
