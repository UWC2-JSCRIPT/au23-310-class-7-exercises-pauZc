// TODO
const $name = $('#name')
const $email = $('#email')
const $message = $('#message')
const $companyWebSite =$('#company-website')
const $jobTitle= $('#job-title')
const $codingLanguages = $('#coding-language')

const $form = $('#contact-form')
const $reasonForContacting = $('#reason-for-contacting')

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.val()
    if(selectedValue === 'jobOpportunity'){
       /*
        * IF "Job opportunity" is selected, should show the following additional items:
        * Job title (text type)
        * Company website (url type)
        */
       $jobTitle.parent().removeClass('hidden')
       $companyWebSite.parent().removeClass('hidden')
       $codingLanguages.parent().addClass('hidden')
    }else if(selectedValue === 'talkCode'){
       /*
       *    IF "Talk code" is selected, should show the following item:
       *    Coding language (type text or select, your choice)
       */
       $jobTitle.parent().addClass('hidden')
       $companyWebSite.parent().addClass('hidden')
       $codingLanguages.parent().removeClass('hidden')
    }
    
}
$reasonForContacting.on('change', () => handleSelect($reasonForContacting))

/*
 * 2. Should contain validation for the following items.  A message should appear for each invalid item (after submit):
 *  Name: is required, must be 3 or more characters
 *  Email: is required, must by in format (regex) /\w+@\w+\.\w+/ (or use constraint validation api)
 *  Message: is required, must be 10 or more characters
 */

//check if inputs meet a length requirement
const validLength = (input, min) => {
    if(input.val().trim().length > min){
        input.parent().removeClass('invalid')
        return true
    }
    else
    {
        input.parent().addClass('invalid')
        return false
    }
}
const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/
    if(re.test(emailField.val().trim())){
        emailField.parent().removeClass('invalid')
        return true
    } else {
        emailField.parent().addClass('invalid')
        return false
    }
}
$form.on('submit', (e) =>{
    handleSelect($reasonForContacting)
    e.preventDefault()
    if(!validLength($name, 3)){
        $name.parent().before(`<span>Name: is required, must be 3 or more characters</span`)
    }
    if(!validateEmail($email)){
        $email.parent().before(`<span>Email: is required, Invalid Format!</span`)
    }
    if(!validLength($message, 10)){
        $message.parent().before(`<span>Message: is required, must be 10 or more characters</span`)
    }
   
})