exports.execute = async (ctx, options) => { 
    return ctx.reply('По каким-либо вопросам обращайтесь к нашему менеджеру. Например: не пришел платёж, заказ не выполнен и т.п.', options.manager)
}

exports.info = { 
    text: '👨‍💻 Поддержка'
}