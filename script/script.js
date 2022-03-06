

function generateAkanName() {
    
    birthDay = document.getElementById("date").value
    gender = document.getElementsById("gender").value
    
    birthDay = new Date(birthDay);

    // defining variables
    let dayOfBirth = birthDay.getDay();

    // create arrays with female and male Akan names
    maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    let akanName;
    let dayBorn;


    //define the control flows to be satisfied for the action to be taken

    if (dayOfBirth == 0 && gender == "female") {
        dayBorn = "Sunday";
        akanName = femaleNames[0];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 0 && gender == "male") {
        dayBorn = "Sunday";
        akanName = maleNames[0];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;


    } else if (dayOfBirth == 1 && gender == "female") {
        dayBorn = "Monday";
        akanName = femaleNames[1];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfTheWeek == 1 && gender == "male") {
        dayBorn = "Monday";
        akanName = maleNames[1];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;


    } else if (dayOfBirth == 2 && gender == "female") {
        dayBorn = "Tuesday";
        akanName = femaleNames[2];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 2 && gender == "male") {
        dayBorn = "Tuesday";
        akanName = maleNames[2];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;

    } else if (dayOfBirth == 3 && gender == "female") {
        dayBorn = "Wednesday";
        akanName = femaleNames[3];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 3 && gender == "male") {
        dayBorn = "Wednesday";
        akanName = maleNames[3];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;


    } else if (dayOfBirth == 4 && gender == "female") {
        bornDay = "Thursday";
        akanName = femaleNames[4];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 4 && gender == "male") {
        dayBorn = "Thursday";
        akanName = maleNames[4];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;


    } else if (dayOfBirth == 5 && gender == "female") {
        dayBorn = "Friday";
        akanName = femaleNames[5];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 5 && gender == "male") {
        dayBorn = "Friday";
        akanName = maleNames[5];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;


    } else if (dayOfBirth == 6 && gender == "female") {
        dayBorn = "Saturday";
        akanName = femaleNames[6];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    } else if (dayOfBirth == 6 && gender == "male") {
        dayBorn = "Saturday";
        akanName = maleNames[6];
        document.getElementById('result').textContent = "You were born on a " + dayBorn + " , your Akan name is " + akanName;
    }else{
        alert('Please enter a valid date!')
    }
    
}