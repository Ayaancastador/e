const {Client, Intents, MessageEmbed} = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
});
require("dotenv").config();

const prefix = "_";
const help = "help";
const kick = "kick";
const ban = "ban";
const mute = "mute";
const unmute = "unmute";
const gif = "gif";
const poll = "poll";
const channel = "channel";
const emotes = "emotes";
const pog = "pog";
const monkas = "monkas";
const kappa = "kappa";
const lul = "lul";
const pogchamp = "pogchamp";
const compliment = "compliment";
const ping = "ping";
const image = "image";

const compliments = [
    "Your positivity is infectious.",
    "You should be so proud of yourself, You're amazing!",
    "You're a true gift to the people in your life.",
    "You're an incredible friend.",
    "I really appreciate everything that you do.",
    "You inspire me to be a better person.",
    "Your passion always motivates me.",
    "Your smile makes me smile.",
    "Thank you for being such a great person.",
    "The way you carry yourself is truly admirable.",
    "You are such a good listener.",
    "You have a remarkable sense of humor.",
    "Thanks for being you!",
    "You set a great example for everyone around you.",
    "I love your perspective on life.",
    "Being around you makes everything better.",
    "You always know the right thing to say.",
    "The world would be a better place if more people were like you!",
    "You are one of a kind.",
    "You make me want to be the best version of myself.",
    "You always have the best ideas.",
    "I'm so lucky to have you in my life.",
    "Your capacity for generosity knows no bounds.",
    "I wish I were more like you.",
    "You are so strong.",
    "I've never met someone as kind as you are.",
    "You have such a great heart.",
    "Simply knowing you has made me a better person.",
    "You are beautiful inside and out.",
    "You are so special to everyone you know.",
    "Your mere presence is reassuring to me.",
    "Your heart must be 10 times the average size.",
    "You are my favorite person to talk to.",
    "You've accomplished so many incredible things.",
    "I appreciate your friendship more than you can know.",
    "I love how you never compromise on being yourself.",
    "I tell other friends how wonderful you are.",
    "You helped me realize my own worth.",
    "Your point of view is so refreshing.",
    "You always make me feel welcome.",
    "You deserve everything you've achieved.",
    "I am so proud of your progress.",
    "I'm lucky just to know you.",
    "You are so down to earth.",
    "You know just how to make my day!",
    "You spark so much joy in my life.",
    "Your potential is limitless.",
    "You have a good head on your shoulders.",
    "You are making a real difference in the world.",
    "You're so unique.",
    "You are wise beyond your years.",
    "You're worthy of all the good things that come to you.",
    "Your parents must be so proud.",
    "How did you learn to be so great?",
    "Never stop being you!",
    "No one makes me laugh harder than you do.",
    "You inspire me in so many different ways.",
    "You continue to impress me.",
    "You make the small things count.",
    "You're a constant reminder that people can be good.",
    "I admire the way that you challenge me.",
    "You make me see things in an entirely new way.",
    "Thanks for always being there for me.",
    "You are a ray of sunshine.",
    "You have the courage of your convictions.",
    "On a scale of one to ten, you're an eleven.",
    "You're incredibly thoughtful.",
    "You have the best ideas.",
    "You're the most perfect 'you' there is.",
    "You are the epitome of a good person.",
    "You always know how to find the silver lining.",
    "You're the person that everyone wants on their team.",
    "I always learn so much when I'm around you.",
    "Is there anything you can't do!?",
];

client.on("ready", () => {
    console.log("Logged in");
    client.user.setPresence({
        activities: [{name: `${prefix}${help}`}],
        status: "online",
    });
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === `${prefix}${help}`) {
        const msg = new MessageEmbed();
        msg.setColor("#fc0303");
        msg.setTitle("Help");
        msg.setAuthor({name: `${message.author.username}`});
        msg.addFields(
            {name: "Commands", value: `(prefix is ${prefix})`},
            {name: "\u200B", value: "\u200B"},
            {
                name: `${help}`,
                value: "Returns all of the commands that the bot can execute. \n`_help`",
                inline: true,
            },
            {
                name: `${kick}`,
                value: "NOTE: is a moderator/admin command. \nKicks a user\n`_kick @user`",
                inline: true,
            },
            {
                name: `${ban}`,
                value: "NOTE: is a moderator/admin command. \nBans a user\n`_ban @user`",
                inline: true,
            },
            {
                name: `${mute}`,
                value: "NOTE: is a moderator/admin command. \nMutes a user\n`_mute @user`",
                inline: true,
            },
            {
                name: `${unmute}`,
                value: "NOTE: is a moderator/admin command. \nUnmutes a user\n`_unmute @user`",
                inline: true,
            },
            {
                name: `${gif}`,
                value: "Sends 10 gifs of a gif that you specify. Specify a gif with the URL of the gif (giphy or tenor)\n`_gif https://tenor.com/view/baiano-gamer-feijoada-discord-kinemaster-when-the-gif-22812930`",
                inline: true,
            },
            {
                name: `${poll}`,
                value: "Sends an embed with a poll and reacts with it with the two options you specify\n`_poll-Cake or Cookie-Do you like cakes or cookies more?-Cake-:cake:-Cookie-:cookie:`",
                inline: true,
            },
            {
                name: `${channel}`,
                value: "Sends Ayaancast's YouTube channel\n`_channel`",
                inline: true,
            },
            {
                name: `${emotes}`,
                value: "Sends an embed listing all the available emotes for the bot.\n`_emotes`",
                inline: true,
            },
            {
                name: `${compliment}`,
                value: "Sends a random compliment to the user.\n`_compliment`",
                inline: true,
            },
            {
                name: `${ping}`,
                value: "OWNER ONLY (BE CAREFUL): pings everyone 300 times...\n`_ping`",
                inline: true,
            }
        );
        msg.setFooter({
            text: "If you want more commands, please DM Ayaancast or Surf Chungus",
        });
        msg.setTimestamp();

        await message.reply("Here is your help");
        await message.channel.send({embeds: [msg]});
    } else if (message.content.includes(`${prefix}${kick}`)) {
        const user = message.mentions.users.first();
        if (user === undefined) {
            return message.reply("specify a user");
        }
        const userMember = await message.guild.members.fetch(user);
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (userMember.permissions.has("KICK_MEMBERS")) {
                await message.reply("I cant kick that member.");
            } else {
                var userTargeter = message.guild.members.cache.get(user.id);
                userTargeter.kick().catch(console.error);
                await message.reply(`${userTargeter} has been kicked`);
            }
        } else {
            await message.reply("You cant kick that member.");
        }
    } else if (message.content.includes(`${prefix}${ban}`)) {
        const user = message.mentions.users.first();
        if (user === undefined) {
            return message.reply("specify a user");
        }
        const userMember = await message.guild.members.fetch(user);
        if (message.member.permissions.has("BAN_MEMBERS")) {
            if (userMember.permissions.has("BAN_MEMBERS")) {
                await message.reply("I cant ban that member.");
            } else {
                var userTargeter = message.guild.members.cache.get(user.id);
                userTargeter.ban().catch(console.error);
                await message.reply(`${userTargeter} has been banned`);
            }
        } else {
            await message.reply("You cant ban that member.");
        }
    } else if (message.content.includes(`${prefix}${mute}`)) {
        const user = message.mentions.users.first();
        if (user === undefined) {
            return message.reply("specify a user");
        } else if (message.member.permissions.has("KICK_MEMBERS")) {
            let userTarget = message.guild.members.cache.get(user.id);
            let mainRole = message.guild.roles.cache.find(
                (role) => role.name === "member"
            );
            let muteRole = message.guild.roles.cache.find(
                (role) => role.name === "muted"
            );
            userTarget.roles.remove(mainRole);
            userTarget.roles.add(muteRole);
            message.reply(`${userTarget} has been muted`);
        } else {
            await message.reply("You cant mute that member.");
        }
    } else if (message.content.includes(`${prefix}${unmute}`)) {
        const user = message.mentions.users.first();
        if (user === undefined) {
            return message.reply("specify a user");
        } else if (message.member.permissions.has("KICK_MEMBERS")) {
            let mainRole = message.guild.roles.cache.find(
                (role) => role.name === "member"
            );
            let muteRole = message.guild.roles.cache.find(
                (role) => role.name === "muted"
            );
            let userTarget = message.guild.members.cache.get(user.id);

            userTarget.roles.remove(muteRole);
            userTarget.roles.add(mainRole);
            message.reply(`${userTarget} has been unmuted`);
        } else {
            await message.reply("You cant unmute that member.");
        }
    } else if (message.content.includes(`${prefix}${gif}`)) {
        var msg = message.content.split(" ")[1];
        if (msg === undefined) {
            await message.channel.send("Bruh. Enter a gif next time.");
        } else if (msg.includes("tenor") || msg.includes("giphy")) {
            for (var i = 0; i < 10; i++) {
                await message.channel.send(msg);
            }
        } else {
            await message.channel.send("Bruh. Enter a gif next time.");
        }
        msg = undefined;
    } else if (message.content.includes(`${prefix}${poll}`)) {
        msgSplit = message.content.split("-");
        const title = msgSplit[1];
        const question = msgSplit[2];
        const optionOne = msgSplit[3];
        const emojiOne = msgSplit[4];
        const optionTwo = msgSplit[5];
        const emojiTwo = msgSplit[6];

        if (
            title === undefined ||
            question === undefined ||
            optionOne === undefined ||
            emojiOne === undefined ||
            optionTwo === undefined ||
            emojiTwo === undefined
        ) {
            message.reply(
                "You need to go like this: \n`!poll-'title'-'question'-'option 1'-'emoji 1'-'option 2'-'emoji 2'`"
            );
        } else {
            const msg = new MessageEmbed();
            msg.setColor("#fc0303");
            msg.setTitle(`${title}`);
            msg.setAuthor({name: `${message.author.username}`});
            msg.addFields(
                {name: "Vote", value: `${question}`},
                {name: "\u200B", value: "\u200B"},
                {
                    name: "Option 1",
                    value: `${emojiOne} ${optionOne}`,
                    inline: true,
                },
                {
                    name: "Option 2",
                    value: `${emojiTwo} ${optionTwo}`,
                    inline: true,
                }
            );
            msg.setTimestamp();

            message.channel.send({embeds: [msg]}).then((embedMessage) => {
                embedMessage.react(emojiOne);
                embedMessage.react(emojiTwo);
            });
        }
    } else if (message.content === `${prefix}${channel}`) {
        message.reply(
            ":) \nhttps://www.youtube.com/channel/UCIGNL3ce9QHcw7_MlU5sZwA/featured"
        );
    } else if (message.content === `${prefix}${emotes}`) {
        const msg = new MessageEmbed();
        msg.setColor("#fc0303");
        msg.setTitle("Emotes");
        msg.setAuthor({name: `${message.author.username}`});
        msg.addFields(
            {name: "Emotes:", value: "(Click on the links to view them.)"},
            {name: "\u200B", value: "\u200B"},
            {
                name: "_pog",
                value: "https://www.streamscheme.com/wp-content/uploads/2020/04/poggers.png",
                inline: true,
            },
            {
                name: "_monkas",
                value: "https://www.streamscheme.com/wp-content/uploads/2020/04/Monkas.png",
                inline: true,
            },
            {
                name: "_kappa",
                value: "https://www.streamscheme.com/wp-content/uploads/2020/04/kappa.png",
                inline: true,
            },
            {
                name: "_lul",
                value: "https://www.streamscheme.com/wp-content/uploads/2020/04/Lul.png",
                inline: true,
            },
            {
                name: "_pogchamp",
                value: "https://www.streamscheme.com/wp-content/uploads/2020/04/Pogchamp.png",
                inline: true,
            }
        );
        msg.setThumbnail(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/poggers.png"
        );
        msg.setTimestamp();
        msg.setFooter({
            text: "If you want more emotes, please DM Ayaancast or Surf Chungus",
            iconURL:
                "https://www.streamscheme.com/wp-content/uploads/2020/04/Pogchamp.png",
        });

        message.channel.send({embeds: [msg]});
    } else if (message.content === `${prefix}${pog}`) {
        await message.channel.send(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/poggers.png"
        );
    } else if (message.content === `${prefix}${monkas}`) {
        await message.channel.send(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/Monkas.png"
        );
    } else if (message.content === `${prefix}${kappa}`) {
        await message.channel.send(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/kappa.png"
        );
    } else if (message.content === `${prefix}${lul}`) {
        await message.channel.send(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/Lul.png"
        );
    } else if (message.content === `${prefix}${pogchamp}`) {
        await message.channel.send(
            "https://www.streamscheme.com/wp-content/uploads/2020/04/Pogchamp.png"
        );
    } else if (message.content === `${prefix}${compliment}`) {
        var num = Math.floor(Math.random() * 75);
        message.reply(`${compliments[num]}`);
    } else if (message.content === `${prefix}${ping}`) {
        if (message.member.roles.cache.find((role) => role.name === "owner")) {
            for (var i = 0; i < 10; i++) {
                await message.channel.send(
                    "@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone"
                );
            }
        } else {
            await message.channel.send("You can't do that");
        }
    } else if (message.content === "ayaan is pog" || message.content === "ayaancast is pog" || message.content === "Ayaancast is pog" || message.content === "Ayaan is pog") {
        await message.react("👍");
        await message.reply("POG");
    } else if (message.content === `${prefix}${image}`) {
        
    }
});

client.on("guildMemberAdd", async (serverUser) => {
    let role = serverUser.guild.roles.cache.find(
        (role) => role.name === "member"
    );

    serverUser.roles.add(role);
    serverUser.guild.channels.cache
        .find((channel) => channel.name === "welcome")
        .send(`Hello ${serverUser}, hope you enjoy your stay!`);
});

client.on("guildMemberRemove", async (serverUser) => {
    serverUser.guild.channels.cache
        .find((channel) => channel.name === "leaving")
        .send(`Goodbye ${serverUser}, hope you enjoyed your stay!`);
});

client.login(process.env.BOT_TOKEN);
