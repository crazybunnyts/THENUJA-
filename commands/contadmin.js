/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
let RS = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('admincont');
if (Config.WORKTYPE == 'private') {
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: true, desc: Lang.CONTADMİN}, (async (message, match) => {
        var nwjson = await message.client.groupMetadata(message.jid) 
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'${nwjson.subject}\n◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: false, desc: Lang.CONTADMİN}, (async (message, match) => {
    var nwjson = await message.client.groupMetadata(message.jid) 
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: true, desc: Lang.CONTADMİN, dontAdCommandList: true}, (async (message, match) => {
    var nwjson = await message.client.groupMetadata(message.jid) 
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}