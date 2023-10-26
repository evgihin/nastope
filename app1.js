const TOKEN = '6605104019:AAGHhNo6JLx0VLazcPr6vJRIfsq0jWuvNcQ';
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const options = {
  polling: true
};
const bot = new TelegramBot(TOKEN, options);


// Matches /menu
bot.onText(/\/menu/, function onMenuText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: 'Шаурма', callback_data: '1'}],
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Меню:', opts);
	console.log(callBackQuery.data)
});
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === '1') {
    text = 'You hit button 1';
  }

  bot.editMessageText(text, opts);
});
