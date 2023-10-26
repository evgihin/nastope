const  { Markup } = require("telegraf")
const  { Context } = require("telegraf")
const { Telegraf } = require("telegraf")
const { message } = require("telegraf/filters")
const bot = new Telegraf('6605104019:AAGHhNo6JLx0VLazcPr6vJRIfsq0jWuvNcQ')
/*
var options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: 'Some button text 1', callback_data: '1' }],
          [{ text: 'Some button text 2', callback_data: '2' }],
          [{ text: 'Some button text 3', callback_data: '3' }]
        ]
      })
    };
bot.sendMessage("answer.", options);
*/
let msg = "Как это работает?:\n 1.жму start\n 2.выбираю\n 3.оплачиваю\n4..\n"
let sum = 0
let menu = "0.сбросить\n1.шаурма - 280\n2.пита - 200\n3.бульон - 150\n4.оплатить"
let button = new Markup.button.text('Сбросить')
Markup.keyboard(button);
bot.start((ctx) => {
	ctx.sendMessage("Меню:", {
    reply_markup: {
        inline_keyboard: [
            [   
                {
                    text: "Шаурма",
                    callback_data: '1'
                },
                {
                    text: "Пита",
                    callback_data: '2'
                },
               
            ]
        ]
    }
	})
});
bot.on('callback_query', function onCallbackQuery(ctx) {
	console.log(ctx.update.callback_query.data);
});

bot.hears('0', (ctx) => {
	sum = 0
	ctx.reply('Корзина: ' + sum.toString()) 
})
bot.hears('1', (ctx) => {
	sum += 280
	ctx.reply('Корзина: ' + sum.toString())
})
	
bot.hears('2', (ctx) => {
	sum += 200
	ctx.reply('Корзина: ' + sum.toString())
})
bot.hears('3', (ctx) => {
	sum += 150
	ctx.reply('Корзина: ' + sum.toString())
})
bot.hears('4', (ctx) => {
	ctx.reply('К оплате: ' + sum + '\n' + 'Перевод на номер: +79502871153 (Сбербанк)')

})

bot.on(message('text'), (ctx) => {
	ctx.reply(msg)
})
//bot.command('shaurma', (ctx) => {
//	sum += 280
//	ctx.reply('Корзина: ' + sum.toString())
//})
bot.command('reset', (ctx) => {
	sum = 0
	ctx.reply('Корзина: ' + sum.toString()) 
})
bot.command('americano', (ctx) => {
	sum += 100
	ctx.reply('Корзина: ' + sum.toString()) 
})
bot.command('payment', (ctx) => {
	ctx.reply('К оплате: ' + sum + '\n' + 'Перевод на номер: +79502871153 (Сбербанк)')

})
//bot.start((ctx) => ctx.reply('Welcome!'))
//bot.help((ctx) => ctx.reply('Say hello'))
//bot.on(message('text'), (ctx) => ctx.reply('OK'))
bot.launch()
