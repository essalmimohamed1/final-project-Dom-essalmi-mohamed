
//& Header
//* sideBar
let body = document.body
let navbarBtn = document.querySelector('.navbar-toggler')
let navElements = document.querySelector('.navigation')

navbarBtn.addEventListener("click", ()=> {
    if(navElements.classList.contains('nav-hide')){
        navElements.classList.remove('nav-hide');
        navElements.classList.add('nav-elements');
    }else if(navElements.classList.contains('nav-elements')){
        navElements.classList.remove('nav-elements');
        navElements.classList.add('nav-hide');
    }else{
        console.log("check your js code")
    }
})

//* modale

let connexion = document.querySelector('.connexion');
let modale  = document.querySelector('.modale');
let signinDiv = document.querySelector('.signin')
let signupDiv = document.querySelector('.signup')
let signin = document.querySelector('.signinbtn')
let signup = document.querySelector('.signupbtn')
let clear = document.querySelector('.clear')
let signin2 = document.querySelector('.signinbtn2')
let signup2 = document.querySelector('.signupbtn2')

modale.addEventListener("click", (event) => {
    event.stopPropagation();
});
connexion.addEventListener("click", ()=> {
    event.stopPropagation();
    if(navElements.classList.contains('nav-elements')){
        navElements.classList.remove('nav-elements');
        navElements.classList.add('nav-hide');
        
    }
    modale.classList.toggle('d-none');
    if (!modale.classList.contains('d-none')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }

    signin.addEventListener("click", () => {
        event.stopPropagation();
        if(signinDiv.classList.contains('d-none')){
            signinDiv.classList.remove('d-none');
            signupDiv.classList.add('d-none');
        }
    })
    signup.addEventListener("click", () => {
        event.stopPropagation();
        if(signupDiv.classList.contains('d-none')){
            signupDiv.classList.toggle('d-none');
            signinDiv.classList.add('d-none');
        }
    })
    signin2.addEventListener("click", () => {
        event.stopPropagation();
        if(signinDiv.classList.contains('d-none')){
            signinDiv.classList.remove('d-none');
            signupDiv.classList.add('d-none');
        }
    })
    signup2.addEventListener("click", () => {
        event.stopPropagation();
        if(signupDiv.classList.contains('d-none')){
            signupDiv.classList.toggle('d-none');
            signinDiv.classList.add('d-none');
        }
    })
    clear.addEventListener("click", () =>{
        modale.classList.add('d-none');
    })
})
// * caroussel 2

