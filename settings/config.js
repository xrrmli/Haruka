const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = true //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="ram"
global.ownernumber = "6287822886876, 6289668185374"
global.botname = "🙀🙀🙀"
global.thumbnail = fs.readFileSync("./settings/Rpic.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/66d073f377502048c702d.jpg"
global.lolkey = 'e966d3aac613b61dabd35cc6' //register lolhuman.xyz klo mau apikey
global.zenzkey = '8423e19c13' //register zenzapi.xyz klo mau apikey
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
