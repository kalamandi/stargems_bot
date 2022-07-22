module.exports = { 
    main: { 
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: '🗄 Каталог игр'}, {text: '📲 Заказы'}],
                [{text: '💳 Баланс'}, {text: '🔰 Гарантии'}],
                [{text: '✅ Отзывы'}, {text: '👨‍💻 Поддержка'}]
            ],        
            resize_keyboard: true
        })
    },
    balance_main: { 
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '📥 Пополнить', callback_data: JSON.stringify({command: 'balance_add'})}],
                [{text: '🔑 Активировать промокод', callback_data: JSON.stringify({command: 'balance_promo'})}],
                [{text: '📑 История платежей', callback_data: JSON.stringify({command: 'balance_history'})}],
                [{text: '✅ Отзывы', url: 'https://t.me/stargems_rewievs'}]
            ]
        })
    },
    rewievs: { 
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '✅ Отзывы', url: 'https://t.me/stargems_rewievs'}],
            ]
        })
    },
    manager: { 
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '👨‍💻 Менеджер', url: 'https://t.me/donat_manager'}],
            ]
        })
    }
}