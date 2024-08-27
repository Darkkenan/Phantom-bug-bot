//base by DGXeon x Phantom
//YouTube: @phantom-hacks01
//Instagram: kenan.96_
//Telegram: t.me/243972681974
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@phantom-hacks01

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "243972681974"
global.ownername = "KËNÄN"
global.ytname = "YT: KËNÄN"
global.socialm = "kenan.96_"
global.location = "Arabie Saoudite, Riyadh, Asia"

global.ownernumber = '243972681974'  //creator number
global.ownername = 'KENAN' //owner name
global.botname = 'OBSCIRITE' //name of the bot

//sticker details
global.packname = 'Sticker By KËNÄN'
global.author = 'Hallo\n\nContact: 243972681974'

//console view/theme
global.themeemoji = '✏️'
global.wm = "KËNÄN"

//theme link
global.link = 'https://wa.me/243972681974'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by KËNÄN only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by KËNÄN only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
