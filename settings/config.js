const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="ram"
global.ownernumber = "6285892793169"
global.botname = "R-Bot"
global.thumbnail = fs.readFileSync("./settings/Rpic.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/ec68173a36faa3f70632e.jpg"
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
