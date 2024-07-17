const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="danitlp8062@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaU50kzFy72DqI8zsv34";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaU50kzFy72DqI8zsv34" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923266688062" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923266688062";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,9232666688062";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEQjRkZ2QzcVIvUklzZzZIamE0RGpVcXR0bmlFQ3M1R3VxOGw1Z09KbUhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBWmRZLS1HV1IwcXUwcEpodVBCczZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4YzlmYjM2LTk5N2UtNDJmOC05YTFkLWQ1NmNiMGY4Njg4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDU3LFxuICAgICAgMTExLFxuICAgICAgMTQ0LFxuICAgICAgMjIxLFxuICAgICAgMTE0LFxuICAgICAgMjQwLFxuICAgICAgODEsXG4gICAgICAxMCxcbiAgICAgIDIwNixcbiAgICAgIDExLFxuICAgICAgMTg2LFxuICAgICAgMTE1LFxuICAgICAgMTU2LFxuICAgICAgNTgsXG4gICAgICAyOSxcbiAgICAgIDI1NSxcbiAgICAgIDEzMCxcbiAgICAgIDE0NCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDEyMixcbiAgICAgIDE1OSxcbiAgICAgIDczLFxuICAgICAgNTcsXG4gICAgICAyMDQsXG4gICAgICA2NyxcbiAgICAgIDE1MyxcbiAgICAgIDE3MixcbiAgICAgIDIwMSxcbiAgICAgIDE5MixcbiAgICAgIDExNixcbiAgICAgIDE5MyxcbiAgICAgIDI1MixcbiAgICAgIDIzLFxuICAgICAgMjA3LFxuICAgICAgNTMsXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUFWTUw4MjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2NjY4ODA2MjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAlM2ezZ/Nns2fVExQw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbsOXXFxuw5dcXG7Dl1xcbldBTFnigKJcIixcbiAgICBcImxpZFwiOiBcIjEwODAwMTY4Mzg2OTg0MjoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZkIrN3dERU5qVzNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhLOU52cjZHM3FIT0V5bUY2TlFxdFA0T01KRE01TitkazhtbHpESEg0MTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkdyWkFSV3I0OEx0NHNZd25BRXduQWFsVGt0aVpBd28wR2xmcnlJV3RhNk03WitOSnpScGowNXM5UHNheC9sMUxTRklOTHJ2Njc4ekZOMnRXcDlFQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTVhLWmlucTJkY29KU0RIcTNTOW9obHIxSWZkUktidE1rcnVJd2gvMWxZT2hIRUhkNGc5RWp5QTY2ZVkzbTVoandid1RFWGUzdFlJU2lCQXowSDR3REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjY2Njg4MDYyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIxNTgzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
