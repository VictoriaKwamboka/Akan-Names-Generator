// defining variables

// let yearOfBirth = document.querySelector('.nativeDatePicker')

// console.log(typeof(yearOfBirth))

$('.datepicker').pickadate()
let yearOfBirth = new Date(date)
const birthday = yearOfBirth.getDay();
alert(birthday)


