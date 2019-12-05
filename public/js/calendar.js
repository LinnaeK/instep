module.exports = {
    createCalendar,
    manageEvent,
    isBusy, 
    viewDay
}

function createCalendar(days, hours){
    let calendar = []
    for(let i = 0; i < days; i++){
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
