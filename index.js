function createEmployeeRecord(employee) {

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour : employee[3],
        timeInEvents : [],
        timeOutEvents : []
    }

}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))

}

function createTimeInEvent(event) {
   console.log('event',event)
    // let [date, hour] = event.toString().split(" ")
    // let eventObj = {
    //     type: 'TimeIn',
    //     hour: parseInt(hour, 10),
    //     date
    // };
    
    // this.timeInEvents.push(eventObj)
}

function createTimeOutEvent(event) {
    let [date, hour] = event.toString().split(" ")
    let eventObj = {
        type: 'TimeOut',
        hour: (hour, 10),
        date
    };
    
    this.timeOutEvents.push(eventObj)
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour = timeIn.hour)/100
}