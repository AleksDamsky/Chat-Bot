const TelegramApi = require('node-telegram-bot-api');

const token = '5851867997:AAHHk1nuV5amA9KLNvOmIXbSy5qPhTEKJxw';

let bot = new TelegramApi(token, {polling: true});

bot.on('message', async msg => { // обработчик, принимает сообщение и создает функцию
    const text = msg.text;
    const chatId = msg.chat.id;
    // console.log(msg);

if(text === '/start'){
    await bot.sendMessage(chatId, `Привет, ${msg.from.username}`);
    await bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/43e/041/43e041ad-afbb-34c9-8e62-222f29474c0e/192/22.webp`);
}

if(text === '/info'){
    await bot.sendMessage(chatId,`Тебя зовут ${msg.from.first_name} ${msg.from.last_name}.
Давай дружить!`);
}
});
