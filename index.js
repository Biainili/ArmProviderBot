const { Telegraf, Markup } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();
const text = require("./const");
const forwardChatId = process.env.CHAT_ID;

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(async (ctx) => {
  try {
    await ctx.reply(
      ctx.message.from.first_name
        ? `Привет, ${ctx.message.from.first_name} ! Добро пожаловать в наш бот-помощник! Здесь ты найдешь ответы на свои вопросы и сможешь оставить заявку. 👋😊 #ботприветствует`
        : `Привет, Дорогов Посититель ! Добро пожаловать в наш бот-помощник! Здесь ты найдешь ответы на свои вопросы и сможешь оставить 
        заявку. 👋😊 #ботприветствует`
    );
    await ctx.replyWithHTML(
      `<b>🔷 ----------  🔻Наши Услуги🔻   ----------  🔷</b>
▪️<i> Для подписчиков канала https://t.me/armprovider действует 20 % от объявленной цены</i>▪️`,
      Markup.inlineKeyboard([
        [Markup.button.callback("Ⓜ️ Миграция в Армении ▫️", "btn_1")],
        [Markup.button.callback("📕 Открытие фирмы в Армении ▪️", "btn_2")],
        [Markup.button.callback("💳 Счет в банках Армении ▫️", "btn_3")],
        [Markup.button.callback("👤 ВНЖ в Армении ▪️", "btn_4")],
        [Markup.button.callback(" 🇦🇲 Гражданство в Армении ▫️", "btn_5")],
        [Markup.button.callback("📄 Подача на ВИЗ -у ▪️", "btn_6")],
        [
          Markup.button.callback(
            "📊 Менеджмент бизнеса в Армении + (Бух.) ▫️",
            "btn_7"
          ),
        ],
        [Markup.button.callback("📰 Регистрация в Ереване ▪️", "btn_8")],
      ])
    );
  } catch (error) {
    console.log(error);
  }
});
bot.help((ctx) => ctx.reply(text.commands));
bot.command("admin", async (ctx) => {
  try {
    await ctx.replyWithHTML(`🔗 Click on link - https://t.me/DevBoT_Biainili`, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.log(error);
  }
});
const codingcasePhoto = "./imgForBot/CodInfo.png";
bot.command("info", async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: codingcasePhoto });
    await ctx.replyWithHTML(text.textforInfo, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.log(error);
  }
});
let cout = 0;
function nextBuuton(btn) {
  bot.action(btn, async (ctx) => {
    try {
      ctx.answerCbQuery();
      switch (btn) {
        case "btn_1":
          cout = 1;
          break;
        case "btn_2":
          cout = 2;
          break;
        case "btn_3":
          cout = 3;
          break;
        case "btn_4":
          cout = 4;
          break;
        case "btn_5":
          cout = 5;
          break;
        case "btn_6":
          cout = 6;
          break;
        case "btn_7":
          cout = 7;
          break;
        case "btn_8":
          cout = 8;
          break;
        default:
          break;
      }

      await ctx.replyWithHTML(
        (btn === "btn_1" && text.textForBnt_1) ||
          (btn === "btn_2" && text.textForBnt_2) ||
          (btn === "btn_3" && text.textForBnt_3) ||
          (btn === "btn_4" && text.textForBnt_4) ||
          (btn === "btn_5" && text.textForBnt_5) ||
          (btn === "btn_6" && text.textForBnt_6) ||
          (btn === "btn_7" && text.textForBnt_7) ||
          (btn === "btn_8" && text.textForBnt_8),
        Markup.inlineKeyboard([
          [
            Markup.button.callback("✅ Оставить Запрос ", "btn_9"),
            Markup.button.callback("ℹ️ Информация про раздел", "btn_10"),
          ],
        ])
      );
    } catch (error) {
      console.log(error);
    }
  });
}

// Zaptos

let switchE = false;
try {
  bot.action("btn_9", async (ctx) => {
    ctx.answerCbQuery();
    await ctx.replyWithHTML(
      (cout === 1 && "<b>Ⓜ️ Миграция в Армении ▫️</b>") ||
        (cout === 2 && "<b>📕 Открытие фирмы в Армении ▪️</b>") ||
        (cout === 3 && "<b>💳 Счет в банках Армении ▫️</b>") ||
        (cout === 4 && "<b>👤 ВНЖ в Армении ▪️</b>") ||
        (cout === 5 && "<b>🇦🇲 Гражданство в Армении ▫️</b>") ||
        (cout === 6 && "<b>📄 Подача на ВИЗ -у ▪️</b>") ||
        (cout === 7 && "<b>📊 Менеджмент бизнеса в Армении + (Бух.) ▫️</b>") ||
        (cout === 8 && "<b>📰 Регистрация в Ереване ▪️</b>")
    );
    ctx.replyWithHTML(text.textforReqfect, {
      disable_web_page_preview: true,
    });
    switchE = true;

    bot.on("text", async (ctx) => {
      const chatId = ctx.chat.id;
      const message = ctx.message.text;
      switch (cout) {
        case 1:
          cout = "Ⓜ️ Миграция в Армении ▫️";
          break;
        case 2:
          cout = "📕 Открытие фирмы в Армении ▪️";
          break;
        case 3:
          cout = "💳 Счет в банках Армении ▫️";
          break;
        case 4:
          cout = "👤 ВНЖ в Армении ▪️";
          break;
        case 5:
          cout = "🇦🇲 Гражданство в Армении ▫️";
          break;
        case 6:
          cout = "📄 Подача на ВИЗ -у ▪️";
          break;
        case 7:
          cout = "📊 Менеджмент бизнеса в Армении + (Бух.) ▫️";
          break;
        case 8:
          cout = "📰 Регистрация в Ереване ▪️";
          break;
        default:
          "";
          break;
      }
      if (ctx.chat.type === "private" && switchE === true) {
        await bot.telegram.forwardMessage(
          forwardChatId,
          chatId,
          ctx.message.message_id
        );
        await bot.telegram.sendMessage(
          forwardChatId,
          `Send Catygory: ${cout} by @${ctx.message.chat.username}`
        );
        (await ctx.message.message_id) &&
          ctx.replyWithHTML(text.textForFormget);

        message !== undefined ? (switchE = false) : (switchE = true);
      }
    });
  });
} catch (error) {
  console.log(error);
}

bot.action("btn_10", async (ctx) => {
  ctx.answerCbQuery();
  try {
    await ctx.replyWithHTML(
      (cout === 1 && text.textBtn_1Info) ||
        (cout === 2 && text.textBtn_2Info) ||
        (cout === 3 && text.textBtn_3Info) ||
        (cout === 4 && text.textBtn_4Info) ||
        (cout === 5 && text.textBtn_5Info) ||
        (cout === 6 && text.textBtn_6Info) ||
        (cout === 7 && text.textBtn_7Info) ||
        (cout === 8 && text.textBtn_8Info)
    );
  } catch (error) {
    console.log(error);
  }
});

nextBuuton("btn_1");
nextBuuton("btn_2");
nextBuuton("btn_3");
nextBuuton("btn_4");
nextBuuton("btn_5");
nextBuuton("btn_6");
nextBuuton("btn_7");
nextBuuton("btn_8");

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
