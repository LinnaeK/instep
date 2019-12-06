// lets move this to a utils file 

module.exports = {
    createCalendar,
    manageEvent,
    isBusy, 
    viewDay,
    dropDownTime
}
/**
 * 
 * @param {number} days number of days
 * @param {number} hours number of hours
 * @return a calendar like array
 */
function createCalendar(days, hours){ // think of using the Array constructor instead of two for loops
    let calendar = []
    for(let i = 0; i < days; i++){ //this could be a forEach 
        let day = []
        for(let i = 0; i< hours*4; i++){
            day.push(null)
        }
        calendar.push(day)
    }
    return calendar
}

// Adds event into array... time must be a string in army time, with all 4 digits present (0800 or 1945)
function manageEvent(id, calendar, day, time, length){
    let unitLength = length/15
    let unitHour = parseInt(time[0] + time[1])*4
    let unitMin = parseInt(time[2] + time[3])/15
    let unitTime = unitHour + unitMin
    for(let i = 0; i < unitLength; i++){
        calendar[day][unitTime + i] = id
    }
    return calendar
}

function isBusy(calendar, day, time, length){
    let unitLength = length/15
    let unitHour = parseInt(time[0] + time[1])*4
    let unitMin = parseInt(time[2] + time[3])/15
    let unitTime = unitHour + unitMin
    let busy
    for(let i = 0; i < unitLength; i++){
        busy = calendar[day][unitTime + i]
        if(busy) return true
    }
    return !!busy
}

function viewDay(calendar, day){
    return calendar[day]
}


function dropDownTime(){
    let dropdownTime = []
    
    let hour = 8
    let min = 0 
    
    while(min < 60 && hour < 22){
      let newEntry = {
        value: "",
        text: ""
      }
      if(hour<10){
        if(min===0){
          newEntry.value = '0'+hour+'0'+min
        }else{
          newEntry.value = '0'+hour+min
        }
      }else{
        if(min===0){
          newEntry.value = hour + '0'+min
        }else{
          newEntry.value = hour + '' + min
        }
      }
      if(hour > 12){
        if(min ===0){
        newEntry.text = hour-12 + ':' + min + '0'+' PM'
        }else{
        newEntry.text = hour-12 + ':' + min + ' PM'
        }
      }else{
        if(min === 0){
        newEntry.text = hour + ':' + min + '0' + ' AM'
        }else{
        newEntry.text = hour + ':' + min + ' AM'
        }
      }
      dropdownTime.push(newEntry)
      min += 15
      if (min === 60){
        hour += 1
        min = 0
      }
    }
    return(dropdownTime)
    }
    
