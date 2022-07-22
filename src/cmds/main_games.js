const games = [
    {title: 'Brawl Stars', id: 0}, 
    {title: 'Standoff 2', id: 1}, 
    {title: 'Clash Royale', id: 2}, 
    {title: 'Clash of Clans', id: 3}, 
    {title: 'Genshin Impact', id: 4}, 
    {title: 'Steam', id: 5}, 
    {title: 'Roblox', id: 6}
]

exports.execute = async (ctx, options) => { 
    const keyboard = [];

    for (let i = 0; i < games.length; i++) {
        if (i === 0 || i % 2 || games[i].title.length >= 14) { 
            keyboard.push([{
                text: games[i].title, 
                callback_data: JSON.stringify({
                    command: 'select_game',
                    gameId: games[i].id
                })
            }])
            if (games[i].title.length >= 14) {
                keyboard.push([]);
            }; 
        } else { 
            keyboard[keyboard.length - 1].push({
                text: games[i].title, 
                callback_data: JSON.stringify({
                    command: 'select_game',
                    gameId: games[i].id
                })
            })
        }
    };

    return ctx.reply('Выбери нужную игру', {
        reply_markup: JSON.stringify({
                inline_keyboard: keyboard
        })
    })
};

exports.info = { 
    text: '🗄 Каталог игр'
}