const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhpVlhyNUltZi9OQXFaK2xxcGUvdlkzTkRiOXhsZXF2VmtESE9pMjhsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHJFWHRxRDJpcGJnQUFNS1N3cXVzdit0dmtUVEl0Z3ZURjB4Q0RZbDVWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TFdRbU5nVmRiYnV2L0ZDVDI3Z0JlTjNuRmtFU0gyMU1VNnR0b3dUajMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJheUI4czIwYXFWcFRmMFlBVWRKWWd1d3l0VjlkenFoeDUzUU01eFIySERrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BcGQyb0N3UWJRNU1iSXVjU1dmUk44SUxnR1RqckhMa3gxbkh6VzgyV3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOaXBhT0wrRHZsM2h0RWQvNEErKy9venpJeEpOcDlqUysxS2krbWUvVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtNMEYxc2FtUUNXQzNvNEE3VUpvNC9COTllbC9Lb3pzNWVtVVdCcDdscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnA1YWZoU2RGbThpTTR3SUJuaUhVQmZaWTBjZzczUVUxbFo3UDd4VjRIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9hbnZGVkhqV1pvQXNsL1FpZFNtZjZFeVNNQ3FzY1JCUTR5dzJzMDJMRDllZ1NiTkNZMVlmeXZ2am9kaDhBdVJOVkhINXBqVXEzT1VqV2ptSHB2TWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJ4WC9ybW1Xb20yQkhNSlo3NnNTdFo5RDNNQ0YyOTkrS0N6NFhJNytEOGt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIVzhZNUFGWCIsIm1lIjp7ImlkIjoiOTE5OTMyNTk5MzE4OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJHhtJzhtJjhtIDwnZCMIOGatyDwnZCH4bSA4bSE4bSL4bSH8J2QkSIsImxpZCI6IjI3MDY2MDg2OTgyODc3NDoxOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xSnBlY0tFSzNUNnNVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxDcDBYYmM3Mk50TE92aWt3T3U4YlFtcVFjWHRyOEtyOEtLZGRwVnl4bjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVIVm9HNHZBOGhPdWVYU21FdTZjRkdnd2VIRjIwVWV5ZUVuMkwveE9LS0RzamlYeDNUN1BzSEo4VXQyY0NKakdjQW4zRWorY08ycHhCYzNRdXFINkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2V01iSEFnTkYwOWsvTVRoMWNWb2FhQUtOUk5saWpyQmlIS3lyZzF3VnFPRWo5UHhmcXpVZ2UwSXZPc0JlNUdxZUI1YWVGOFdKeW4vbGg3THpURnVpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTkzMjU5OTMxODoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaUXFkRjIzTzlqYlN6cjRwTURydkcwSnFrSEY3YS9DcS9DaW5YYVZjc1ovIn19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTcwNjM1OTksImxhc3RQcm9wSGFzaCI6IjRaUlA2UyIsIm15QXBwU3RhdGVLZXlJZCI6IkFCRUFBTThGIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "false",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".,R,!",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/pj7bw5.jpeg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "𝐑ᴜᴘᴀ𝐌 ᚷ 𝐇ᴀᴄᴋᴇ𝐑",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐑ᴜᴘᴀ𝐌 ᚷ 𝐇ᴀᴄᴋᴇ𝐑",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "9932599318",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐑ᴜᴘᴀ𝐌 ᚷ 𝐇ᴀᴄᴋᴇ𝐑",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐑ᴜᴘᴀ𝐌 ᚷ 𝐇ᴀᴄᴋᴇ𝐑",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/pj7bw5.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝐑ᴜᴘᴀ𝐌 ᚷ 𝐇ᴀᴄᴋᴇ𝐑*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "919932599318",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
