const request =require('request-promise');
require('dotenv').config()

function addCalendar(auth){
    let options = {
        method: 'POST',
        uri: `https://www.googleapis.com/calendar/v3/users/me/calendarList?key=${process.env.API_KEY}`,
        header: {
            'Authorization': `Bearer ${auth}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            "id": ""
          }
    }
    request(options)
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            console.log(err)
        })
}
