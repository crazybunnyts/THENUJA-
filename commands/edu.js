/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
const { thumbnail } = require('../media/thumbnail');
const imgthumb = await thumbnail()
thumbnail: imgthumb, quoted: message.data 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('eddu');
let RS = Config.WORKTYPE == 'public' ? false : true
      QueenSew.newcmdaddtosew({pattern: 'edu', fromMe: false, desc: Lang.ADU}, (async (message, match) => {
const imgthumb = await thumbnail()
    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/N6XtRj0/depositphotos-75811621-stock-photo-students-outside-sitting-on-steps.jpg";
    r_text[1] = "https://i.ibb.co/z2bGpp3/college-life-group-students-walking-university-hall-chatting-138545920.jpg";
    r_text[2] = "https://i.ibb.co/PGgBJy0/images-1.jpg";
    r_text[3] = "https://i.ibb.co/DYFjXcJ/unnamed.jpg";
    r_text[4] = "https://i.ibb.co/vQLYfWq/edupaper590.jpg";
    r_text[5] = "https://i.ibb.co/KzCdHpf/q63YzR.jpg";
    r_text[6] = "https://i.ibb.co/6vcWvr4/education-wallpaper-1796152.jpg";
    r_text[7] = "https://i.ibb.co/qg31zV0/photo-1503676260728-1c00da094a0b.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '' + Config.BOTNAME + '\n???????????? ???????????????????????? ?????????????????? ?????????????????? ????????????????????? ????????????...\n\n????????? ?????????????????? ????????? ?????????\n\n       ????????????????????????\nhttps://t.me/SL_EDU_A_L_BOT\n       ??????????????????\n???????????? ?????????????????? ?????? ????????? ???????????????????????? ????????? ????????????????????????????????? ???????????? ?????????????????????????????? ???????????? ?????????????????? ????????? ????????????????????? ????????? ?????????\n\n?????????? ???????????? ??????????????? ????????? ??????????????? ???????????????????????????....\n\n       ????past paper\n       ???????????????? ????????? ?????????????????? ???????????? ??????????????????\n       ?????????????????????? Notes\n       ????resources book\n       ????????????????????????? ??????????????? ????????????????????? ???????????????\n???\n??????????????????????????? ???????????????.... ????????????????????? Bio/Maths ?????????????????? ???????????? ??????????????? ??????????????????????????? ????????? ?????? ?????????\n\n\n*????????An Educational Group????????*\n\nhttps://chat.whatsapp.com/CJCHUpyFJOm3nmYbWeksQE\n\n*????????An Educational Group 02????????*\n\nhttps://chat.whatsapp.com/KDrvMTJGAQQC7KuBGUcGYJ\n\n*????????An Educational Group 03????????*\n\nhttps://chat.whatsapp.com/F4fPZbUCZ7P69s1FB4hI6F\n\n\n*????????? ?????????????????? papers, Short Notes, Free Zoom Class link ?????? ???????????? ?????????????????????????????? ??????????????? ????????????????????? ????????? ???????????? 3?????? ????????? ?????? ?????????...*', thumbnail: imgthumb, quoted: message.data })

    }));