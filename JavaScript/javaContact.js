
//takes form element from contact form and stores it in form
const form = document.getElementById("contact-form");

//defines an email format
const emailCheck = /^\S+@\S+\.\S+$/

//event listener waits for the user to submit their form
form.addEventListener("submit", (event) => {

    //grabs email from user input
    const emailInput = form.elements["your_email"].value;

    //checks if email is not in the correct format
    if(!emailCheck.test(emailInput)){
        alert("Invalid email address\nPlease input the correct email")
        }
    else{
        alert("Your message has been sent");

        //This resets the form inputs
        form.reset();
        }
    }
)
