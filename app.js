const os = require('os');

//info abou cuurent user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)
