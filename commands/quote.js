const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
// List
const Config = require('../config')
const QUOTE_DESC = "It Sends Random Quote"
const NEED_LOCATIONA = "*Invalid Request*"
const QUOTE = "Quote :"
const AUTHOR = "Author :"
const NOT_FOUNDA = "```Sorry,I could not find a quote. 😖```"
let RS = Config.WORKTYPE == 'public' ? false : true

QueenSew.newcmdaddtosew({pattern: 'quote ?(.*)', fromMe: RS, desc: QUOTE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.quotable.io/random`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + QUOTE +'* ```' + json.content + '```\n\n' +
		'*✒️' + AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text);
	}
});

