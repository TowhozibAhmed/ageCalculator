
const checkAge = document.querySelector('#checkAge');
const ageMessage = document.querySelector('.age__message');

let date = new Date();
let currentYear = date.getFullYear();


let namevalidate = /^[a-zA-Z0-9\.@#$!-_ ]{2,30}$/; // Name Validation Expression
let birthYearValidate = /^[0-9]{4}$/; // Birth Year Validation Expression
 

checkAge.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const birthYear = document.querySelector('#birthYear');
    let currentAge = currentYear - birthYear.value;

    if (name.value.match(namevalidate) && birthYear.value.match(birthYearValidate)) {

        ageMessage.innerHTML = `
    
          <p class="alert alert-success">
             Hi ${name.value}. You are ${currentAge} years old. ${ageStatus(currentAge)}
          </p>
    
        `
    } else if (name.value === '' || birthYear === '') {

        ageMessage.innerHTML = `
    
             <p class="alert alert-danger">
                One or More fields are empty.
             </p>
    
        `
    } else {

        ageMessage.innerHTML = `
    
             <p class="alert alert-danger">
                Enter Valid Information.
             </p>
    
        `
    }

    name.value = '';
    birthYear.value = '';


});

function ageStatus(currentAge) {
    if (currentAge < 0) {
        return 'You have not been born yet. Please wait.....';
    } else if (currentAge < 10) {
        return 'You are a Baby';
    } else if (currentAge < 18) {
        return 'You are a Child';
    } else if (currentAge < 24) {
        return 'You are a Teenager';
    } else if (currentAge <= 35) {
        return 'You are a Jubok';
    } else if (currentAge > 35) {
        return 'You are an Adult';
    } else if (currentAge >= 50) {
        return 'You are a Bridhdho';
    } else if (currentAge >= 110) {
        return 'You are a Bhoot';
    }
}

