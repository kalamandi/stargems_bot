const { Telegraf } = require('telegraf');
const fs = require('fs');

const options = require('./src/options');
const config = require('./config.json');
const bot = new Telegraf(config.token);

const src = {
    cmds: [],
    callback: []
};

fs.readdir("./src/cmds", function(err, files) {
    files.forEach(f => {
        src.cmds.push(require(`./src/cmds/${f}`));
    });
});

fs.readdir("./src/callback", function(err, files) {
    files.forEach(f => {
        src.callback.push(require(`./src/callback/${f}`));
    });
});


const start = async () => { 
    bot.on('message', async (ctx) => { 
        const user = true;

        if (!user) { 
            const welcomeMessage = src.cmds.find(x => x.info.text === '/start');
            return welcomeMessage.execute(ctx, options);
        };

        const text = ctx.message.text;

        if (text) { 
            const cmd = src.cmds.find(x => x.info.text === text);
            if (cmd) {
                await cmd.execute(ctx, options);
            } else return ctx.reply('Я тебя не понимаю 🤖')
        } else { 
            return ctx.reply('Пока что я понимаю только буквы 🤖')
        }
    });

    bot.launch()
};

start();


 