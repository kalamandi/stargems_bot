const orders = [
    {
    sum: 123,
    status: 1,
    item_id: 12,
    item_title: '170 гемов',
    game_title: 'Brawl Stars',
    datems: 20002301020014,
    date: '20.07.2022 | 17:13',
    game_status: 1,
    game_id: 1
},
{
    sum: 123,
    status: 1,
    item_id: 12,
    item_title: '170 гемов',
    game_title: 'Brawl Stars',
    datems: 20002301020014,
    date: '20.07.2022 | 17:13',
    game_status: 1,
    game_id: 1
},  {
    sum: 123,
    status: 1,
    item_id: 12,
    item_title: '170 гемов',
    game_title: 'Brawl Stars',
    datems: 20002301020014,
    date: '20.07.2022 | 17:13',
    game_status: 1,
    game_id: 1
},
];

/* 
JSON ex: 

{
    sum: 123, // sum in RUB
    status: 1,
    item_id: 12,
    item_title: '170 гемов',
    game_title: 'Brawl Stars',
    datems: 20002301020014,
    date: '20.07.2022 в 17:13',
    game_status: 1,
    game_id: 1,
    customer_id: 1241, // in-bot ID
    doer_id: 1344 // in-bot ID
}

statuses: 
1 in progress
0 canceled
2 completed
*/

exports.execute = async (ctx, options) => { 
    if (!orders[0]) return ctx.reply('🙁 Вы ещё не сделали ни одного заказа');

    let text;
    const keyboard = [];
    const hasInProgress = orders.filter(x => x.status === 1)[0];

    if (hasInProgress) { 
        keyboard.push([{
            text: '🔄 Все заказы',
            callback_data: JSON.stringify({
                command: 'orders_all'
            })
        }], []);
        text = '<b>👨‍💻 Список заказов в работе:</b>\n\n';
    } else { 
        text = '<b>📃 Список всех заказов (стр. 1):</b>\n\n';
    };

    let count = 0;
    orders.map(order => { 
        if (hasInProgress) { 
            if (order.status === 1) {
                count++;
                text += `🔹 ${count}. <code>${order.game_title} - ${order.item_title}</code>\n || Сумма: <code>${order.sum} ₽</code>\n || Дата и время: <code>${order.date}</code>\n`
                keyboard[1].push({
                    text: count,
                    callback_data: JSON.stringify({
                        command: 'orders_selectOrder',
                        item: count
                    })        
                })
            } 
        } else {
            text += `🔸 <code>${order.game_title} - ${order.item_title}</code>\n || Сумма: <code>${order.sum} ₽</code>\n || Дата и время: <code>${order.date}</code>\n || Статус: <code>${order.status}</code>\n`
        }
    });

    if (hasInProgress) { 
        text += '\nℹ️ для перехода к конкретному заказу нажмите на кнопку с номером';
    };

    return ctx.reply(text, {reply_markup: JSON.stringify({inline_keyboard: keyboard}), parse_mode: "HTML"});
};

exports.info = { 
    text: '📲 Заказы'
}