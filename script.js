
// let userNameInput = document.getElementById('user-name');
// let emailInput = document.getElementById('email');
// let emailRepeatInput = document.getElementById('email-repeat');
// let passwordInput = document.getElementById('password');
// let passwordRepeatInput = document.getElementById('password-repeat');
let loginLink = document.getElementById("login-link")
let signupLink = document.getElementById("signup-link")
let usernameButton = document.getElementById("username-button")
let logoutButton = document.getElementById("logout")


signupLink.addEventListener("click",createSignUpSection)
loginLink.addEventListener("click", createLoginSection)
logoutButton.addEventListener("click", createLoginSection)



logoutButton.addEventListener("click",createLoginSection)


function createLoginSection(){
    
    loginLink.classList.remove("display-invis")  
    signupLink .classList.remove("display-invis") 
    usernameButton.classList.add("display-invis") 
    logoutButton .classList.add("display-invis")


    let container = document.getElementById('container');
    container.innerHTML=""
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let wraper = document.createElement('div');
    let title = document.createElement('h5');
    let userNameInput = document.createElement('input');
    let passwordInput = document.createElement('input');
    let signUpButton = document.createElement('a');

    //styles
    card.classList.add('card', 'text-center', 'bg-black', 'col-5');
    cardBody.classList.add('card-body', 'col-12', 'justify-content-center');
    title.classList.add('card-title', 'h2');
    userNameInput.classList.add('col-9', 'mt-5');
    passwordInput.classList.add('col-9', 'mt-2');
    signUpButton.classList.add('btn', 'btn-outline-warning', 'col-5', 'mt-3');

    title.textContent = 'Log in: ';
    userNameInput.id = 'user-name';
    userNameInput.type = 'text';
    userNameInput.placeholder = 'User name';

    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';

   
    signUpButton.id = 'sign-up-btn';
    signUpButton.href = '#';
    signUpButton.textContent = 'Log-in';
  
    //append children
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(wraper);
    wraper.appendChild(title);
    wraper.appendChild(userNameInput);
    wraper.appendChild(passwordInput);
    wraper.appendChild(signUpButton);

    signUpButton.addEventListener("click", (e)=>{

        fetch(`https://66e8028eb17821a9d9daf072.mockapi.io/users/?username=${userNameInput.value}&password=${passwordInput.value}`)
        .then(res =>res.json())
        .then (data =>{
    
        console.log(data)
        if(data==="Not found"){  
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: " probably due to incorrect login info",
            });
            return
         }

       

        loginLink.classList.add("display-invis")  
        signupLink .classList.add("display-invis") 
        usernameButton.classList.remove("display-invis") 
        logoutButton .classList.remove("display-invis")

        createUserPage(container, userNameInput, data[0].username)

      
        })
        .catch(err =>{
            Swal.fire({
                icon: "error",
                title: "Unknown error",
                text: err,
            });
        })
    })



    //Error checking.............................
    return container;

}
function createUserPage(container, userNameInput ,userName) {
    container.innerHTML = ""
    let img = document.createElement("img")
    let name = document.createElement("h1")
    let h3 = document.createElement("h3")

    img.style.color = "white"
    name.style.color = "white"
    h3.style.color = "white"
    h3.classList.add("text-center")
    name.classList.add("text-center")

    name.textContent = "Welcome, " + userNameInput.value
    h3.textContent = "here is a cool cat"
    img.setAttribute("src", "https://img.freepik.com/premium-photo/cat-wearing-sunglasses-with-orange-lenses-pair-orange-sunglasses_867452-8549.jpg")
  
    loginLink.classList.add("display-invis")  
    signupLink .classList.add("display-invis") 
    usernameButton.classList.remove("display-invis") 
    logoutButton .classList.remove("display-invis")

    usernameButton.textContent = userName


    container.appendChild(name)
    container.appendChild(h3)
    container.appendChild(img)
}

function createSignUpSection() {
    
    // Tag creation

    let container = document.getElementById('container');
    container.innerHTML=""
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let wraper = document.createElement('div');
    let title = document.createElement('h5');
    let userNameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let emailRepeatInput = document.createElement('input');
    let passwordInput = document.createElement('input');
    let passwordRepeatInput = document.createElement('input');
    let alreadyMemberText = document.createElement('h6');
    let signUpButton = document.createElement('a');
    let span = document.createElement('span');


    //styles
    card.classList.add('card', 'text-center', 'bg-black', 'col-5');
    cardBody.classList.add('card-body', 'col-12', 'justify-content-center');
    title.classList.add('card-title', 'h2');
    userNameInput.classList.add('col-9', 'mt-5');
    emailInput.classList.add('col-9', 'mt-2');
    emailRepeatInput.classList.add('col-9', 'mt-2');
    passwordInput.classList.add('col-9', 'mt-2');
    passwordRepeatInput.classList.add('col-9', 'mt-2');
    alreadyMemberText.classList.add('mt-3');
    signUpButton.classList.add('btn', 'btn-outline-warning', 'col-5', 'mt-3');


    title.textContent = 'Sign Up';

    userNameInput.id = 'user-name';
    userNameInput.type = 'text';
    userNameInput.placeholder = 'User name';
  
    emailInput.id = 'email';
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
  
    emailRepeatInput.id = 'email-repeat';
    emailRepeatInput.type = 'email';
    emailRepeatInput.placeholder = 'Re-type Email';
  
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
  
    passwordRepeatInput.id = 'password-repeat';
    passwordRepeatInput.type = 'password';
    passwordRepeatInput.placeholder = 'Re-type Password';
  

    alreadyMemberText.textContent = 'Already A member?';

   
    span.classList.add('underline-orange');
    span.textContent = 'Log in';
  
   
   
    signUpButton.id = 'sign-up-btn';
    signUpButton.href = '#';
    signUpButton.textContent = 'Sign Up';
  
    //append children
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(wraper);
    wraper.appendChild(title);
    wraper.appendChild(userNameInput);
    wraper.appendChild(emailInput);
    wraper.appendChild(emailRepeatInput);
    wraper.appendChild(passwordInput);
    wraper.appendChild(passwordRepeatInput);
    wraper.appendChild(alreadyMemberText);
    wraper.appendChild(signUpButton);
  
    alreadyMemberText.appendChild(span)
    
    signUpButton.addEventListener("click", (e)=>{
        let isPasswordTooShort = !(passwordInput.value.length > 8) || !(passwordRepeatInput.value.length > 8)
        let isUsernameTooShort = !(userNameInput.value.length > 5)
        let allfieldsFull = userNameInput.value === "" || emailInput.value === "" || emailRepeatInput.value === ""
            || passwordInput.value === "" || passwordRepeatInput.value === ""
        if (allfieldsFull) {
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "make sure all fields are filled",
            });
            return
        }
    
    
        if (isUsernameTooShort) {
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "Username Must be longer than 5 letters",
            });
            return
        }
    
        if (isUsernameTooShort) {
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "Username Must be longer than 5 letters",
            });
            return
        }
        if (isPasswordTooShort) {
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "Your password must be atleast 9 numbers",
            });
            return
    
        }
    
        if (passwordInput.value !== passwordRepeatInput.value) {
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "passwords don't match",
            });
            return 
    
        }
    
    
        // email validation regex i found online
        let isValidEmail = String(emailInput.value).toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    
        if(!isValidEmail){
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "invalid email. Make sure your email is valid",
            });
            return 
    
        }
       
        if(emailInput.value!== emailRepeatInput.value){
            Swal.fire({
                icon: "error",
                title: "Sign Up failed!",
                text: "emails don't match",
            });
            return 
        }
        //Error checking.............................
    
        fetch("https://66e8028eb17821a9d9daf072.mockapi.io/users",{
            method:"POST",
            body:JSON.stringify({
                username: userNameInput.value,
                password: passwordInput.value,
                email:emailInput.value
    
            })
            ,
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res =>res.json())
        .then (data =>{
    
        console.log(data)

        
        createUserPage(container, userNameInput,data.username)

        
        })
    })
    //Error checking.............................
  

    return container;
  }

 
  createSignUpSection()

