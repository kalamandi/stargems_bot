exports.execute = async (ctx, options) => { 
    await ctx.reply(`🔹 Добро пожаловать, <b>${ctx.message.from.first_name}</b>!\n\nЭто бот от <i>StarGems</i> ⭐️, в нём ты можешь купить донат в любимую игру по <b>самым низким ценам</b>, а главное <b>безопасно 🔰</b>`, options.main);
    return ctx.reply('Посмотри наши отзывы нажав на кнопку', options.rewievs)
};

exports.info = { 
    text: '/start'
};