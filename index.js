// Your code here

function createEmployeeRecord(array) {
return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],

    }
}

// createEmployeeRecord is the function
// takes as argument 4 element *array*, String, string, string, and number corresponding to 
// first name, family name, title, and pay rate per hour
//expecting it to return an Object with keys

//first name, family name, title, pay perhour, time in events, time out events

//loads Array elements into corresponding object properties. Initialize
//empty arrays on the timeInEvents and timeOutEvents.

function 
createEmployeeRecords(arrayOfArrays) {
    let employeeRecords = []

    for (let i=0; i < arrayOfArrays.length; i++){
     
        employeeRecords.push(createEmployeeRecord(arrayOfArrays[i]))
    }

    return employeeRecords
}

function createTimeInEvent(empRecordObj, dateStamp){
    let obj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    }
    empRecordObj.timeInEvents.push(obj)

    return empRecordObj;
}

function createTimeOutEvent(empRecordObj, dateStamp){
    let obj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice (-4)),
        date: dateStamp.slice(0,10),
    }

    empRecordObj.timeOutEvents.push(obj)

    return empRecordObj;
}

function hoursWorkedOnDate(empRecordObj, date){
    let hours;

    for (let i=0; i< empRecordObj.timeInEvents.length; i++){
        if (empRecordObj.timeInEvents[i].date === date){
            
        if (empRecordObj.timeOutEvents[i].date === date){

            hours = empRecordObj.timeOutEvents[i].hour -
            empRecordObj.timeInEvents[i].hour
        }
        }
    }
            return hours/100
}

function wagesEarnedOnDate(empRecordObj, date){
    return (hoursWorkedOnDate(empRecordObj, date)) * empRecordObj.payPerHour
}



function allWagesFor(empRecordObj){
    let allPay = [];
    let allDates = [];

    for (let i=0; i< empRecordObj.timeInEvents.length; i++){

    allDates.push(empRecordObj.timeInEvents[i].date)   
    }

    allDates.forEach(date => {

        allPay.push(wagesEarnedOnDate(empRecordObj, date))
    });

    return allPay.reduce((
    previousValue, currentValue) => 
    previousValue + currentValue)
}

    function calculatePayroll(){
        
    }