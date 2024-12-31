
//typer h1
var typed = new Typed('#typer',{
    strings:['FullStack Devloper ','Frontend Devloper','Backend Devloper','MernStack Devloper', 'Software Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true
    
});



 const loginForm = document.querySelector("#loginForm");
 const contectForm = (e)=>{
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phoneNumber = document.querySelector("#mobile").value;
    let massege = document.querySelector("#text-area").value;
    // console.log(name, email, phoneNumber, massege);
    if(name === '' && email === "" && phoneNumber === ''){
        alert("please enter a  name , email, and phone number ");
    }
    else{
        // alert("form has been submited after some time call you back in 24 hourd");
        let massegeSubmit = document.querySelector(".submit-massege");
        massegeSubmit.innerHTML = "Form submit"
        name.value = '';
        phoneNumber = '';
    
        email = '';
        massege = '';
        
    }

    // event.preventDefault();


 }
 loginForm.addEventListener('submit',contectForm);

