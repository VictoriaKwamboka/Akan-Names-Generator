

function generateAkanName() {
    
    birthDay = document.getElementById('date').value
    gender = document.getElementsById("gender").value
    
    birthDay = new Date(birthDay)

    // defining variables
    let dayOfBirth = birthDay.getDay();
    let monthOfBirth = birthDay.getMonth() + 1;



  



    //define arrays with days of the week
    daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // create arrays with female and male Akan names
    maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    let akanName;

    if (daysOfWeek == 0 && gender == "female") {
        bornDay = "Saturday";
        akanName = femaleNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        bornDay = "Saturday";
        akanName = maleNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        bornDay = "Sunday";
        akanName = femaleNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        bornDay = "Sunday";
        akanName = maleNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        bornDay = "Monday";
        akanName = femaleNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        bornDay = "Monday";
        akanName = maleNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        bornDay = "Tuesday";
        akanName = femaleNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        bornDay = "Tuesday";
        akanName = maleNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        bornDay = "Wednesday";
        akanName = femaleNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        bornDay = "Wednesday";
        akanName = maleNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        bornDay = "Thursday";
        akanName = femaleNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        bornDay = "Thursday";
        akanName = maleNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        bornDay = "Friday";
        akanName = femaleNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        bornDay = "Friday";
        akanName = maleAkanNames[6];
    }else{
        alert('Please enter a valid date!')
    }






}