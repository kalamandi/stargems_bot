exports.execute = async (ctx, options) => { 
    return ctx.reply('🔹 Ваш баланс: <code>${user.balance}</code> ₽', options.balance_main)
};

exports.info = { 
    text: '💳 Баланс'
}