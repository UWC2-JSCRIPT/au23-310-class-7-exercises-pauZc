// TODO
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const os = document.getElementById('operating-system')
const employees = document.getElementById('no-of-employees')

const form = document.getElementById('connect-form')
const select = document.getElementById('contact-kind')
let valid = false

//check if inputs meet a length requirement
const validLength = (input, min) => {
    if(input.value.trim().length > min){
        input.parentElement.classList.remove('invalid')
        return true
    }
    else
    {
        input.parentElement.classList.add('invalid')
        return false
    }
}

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/
    if(re.test(emailField.value.trim())){
        email.parentElement.classList.remove('invalid')
        return true
    } else {
        email.parentElement.classList.add('invalid')
        return false
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value
    if(selectedValue === 'business'){
        employees.parentElement.classList.remove('hidden')
        os.parentElement.classList.add('hidden')
        //build and append to the DOM an input field for Number of Employees
    }else if(selectedValue === 'technical'){
        employees.parentElement.classList.add('hidden')
        os.parentElement.classList.remove('hidden')
    }
    
}
select.addEventListener('change', () => handleSelect(select))
form.addEventListener('submit', (e) =>{
    handleSelect(select)
    e.preventDefault()
    if( validLength(firstName, 3) &&
        validLength(lastName, 3) &&
        validateEmail(email))
        valid = true
    else
        valid = false
   
})