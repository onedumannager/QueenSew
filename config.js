/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './sewqueen.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'lovelysew 1.0.0 - Full Control',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env._SEW_QUEEN_SESSION === undefined ? '' : process.env._SEW_QUEEN_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    Bad_Word: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.VOICE_REPLY === undefined ? false : convertToBool(process.env.VOICE_REPLY),
    CPK: process.env.CAPTION_NAME === undefined ? 'Coded By t.me/RavinduManoj' : process.env.CAPTION_NAME,
    MCMD: process.env.MAIN_COMMAND === undefined ? 'SEW' : process.env.MAIN_COMMAND,
    ALIMG: process.env.SYSTEM_IMAGE === undefined ? 'https://i.ibb.co/RzSZW8F/IMG-20210810-WA0005.jpg' : process.env.SYSTEM_IMAGE,
    GRPNAMEA: process.env.Z_GROUP_NAME_A === undefined ? '' : process.env.Z_GROUP_NAME_A,
    GRPNAMEB: process.env.Z_GROUP_NAME_B === undefined ? '' : process.env.Z_GROUP_NAME_B,
    GRPNAMEA: process.env.Z_GROUP_NAME_C === undefined ? '' : process.env.Z_GROUP_NAME_C,
    GRPLINKA: process.env.Z_GROUP_LINK_A === undefined ? '' : process.env.Z_GROUP_LINK_A,
    GRPLINKB: process.env.Z_GROUP_LINK_B === undefined ? '' : process.env.Z_GROUP_LINK_B,
    GRPLINKC: process.env.Z_GROUP_LINK_C === undefined ? '' : process.env.Z_GROUP_LINK_C,
    GIFORPP: process.env.Y__GREETING_TYPE === undefined ? 'pp' : process.env.Y__GREETING_TYPE,
    WLP: process.env.Y_WELLCOME === undefined ? 'https://i.ibb.co/TwDZC28/Welcome-poster-with-spectrum-brush-strokes-on-white-background-Colorful-gradient-brush-design-Vector.jpg' : process.env.Y_WELLCOME,
    GDB: process.env.Y_GOODBYE === undefined ? 'https://i.ibb.co/Scj56Wd/Good-Bye-neon-text-vector-design-template-Good-Bye-neon-logo-light-banner-design-element-colorful-mo.jpg' : process.env.Y_GOODBYE,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    OWNERSHIP: process.env.OWNER_SHIP === undefined ? 'RAVINDU MANOJ' : process.env.OWNER_SHIP,
    BOTNAME: process.env.YOUR_BOT_NAME === undefined ? '❄💘sew💓❄bot(💗සූටික්කි💗)R💌S' : process.env.YOUR_BOT_NAME,
    FULLSEW: process.env.FULL_SEW === undefined ? 'false' : process.env.FULL_SEW,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? false : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './sewqueen.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "94785435462-1627812354",
    SUPPORT2: "94785435462-1627812354",
    SUPPORT3: "94785435462-1627812354"
};
