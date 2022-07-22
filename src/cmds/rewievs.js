exports.execute = async (ctx, options) => {  
    return ctx.reply('Посмотри наши отзывы нажав на кнопку', options.rewievs)
};

exports.info = { 
    text: '✅ Отзывы'
};