// defining variables


var nativePicker = document.querySelector('.nativeDatePicker')
let yearOfBirth = document.querySelector('.nativeDatePicker')


const birthday = new Date(yearOfBirth)
const day = birthday.getDay()


alert(day)

