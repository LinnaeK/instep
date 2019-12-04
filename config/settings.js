var passport = require('passport');
require('dotenv').config()

SERVICE_ACCT_ID='722284653261-fvto07ff2p08op6t6ni30c1c30cl2lva.apps.googleusercontent.com'
KEY = process.env.API_KEY
TIMEZONE = 'UTC+08:00'
CALENDAR_ID = {
    'primary':'linnaekraemer@gmail.com'
}

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.key = KEY;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;

// Example for using json keys
// var key = require('./googleapi-key.json').private_key;
// module.exports.key = key;

