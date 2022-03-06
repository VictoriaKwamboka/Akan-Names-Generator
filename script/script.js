// defining variables

// let yearOfBirth = document.querySelector('.nativeDatePicker')

// console.log(typeof(yearOfBirth))

$('.datepicker').pickadate()
let yearOfBirth = new Date(date)
const birthday = yearOfBirth.getDay();





//define arrays with days of the week
let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// create arrays with female and male Akan names
let maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

let femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
]