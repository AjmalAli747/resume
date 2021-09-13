const form_section = document.getElementById("form_section");
let userIcon = document.querySelectorAll(".input_filed_icon i");
let inputBorder = document.querySelectorAll(".input_filed_icon input");
// icon this side here 

let submit = document.getElementById("submitBtn");
const form = document.querySelector(".form_container");
// function with submit 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // input function 
    inputFunction();
})

// input function this side here
const inputFunction = () => {
    let name = document.getElementById("yourName").value;
    let number = document.getElementById("youNumber").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;
    let checkbox = document.getElementById("checkbox").value;

    // resume container
    const resume_file = document.getElementById("resume_file");

    inputSubmitFunction(name, number, email, password, country, checkbox);
    // email and password virification with firebase this side here
    
}

// this is logic and pop function this side here 
const inputSubmitFunction = (name, number, email, password, country, checkbox) => {

    if(name == ""){
        swal("Please Enter Your Name");
        userIcon[0].classList.add("nameThis");
        inputBorder[0].classList.add("borderLine");
    }else if(number == ""){
        swal("Please Enter Your Number");
        userIcon[1].classList.add("nameThis");
        inputBorder[1].classList.add("borderLine");
    }else if(email == ""){
        swal("Please Enter Your Email");
        userIcon[2].classList.add("nameThis");
        inputBorder[2].classList.add("borderLine");
    }else if(password == ""){
        swal("Please Enter Your Pasword");
        userIcon[3].classList.add("nameThis");
        inputBorder[3].classList.add("borderLine");
    }else if(country == ""){
        swal("Please Enter Your Country");
        userIcon[4].classList.add("nameThis");
        inputBorder[4].classList.add("borderLine");
    }else{
        swal("Good!", "Congratulations", "success");
        setTimeout(function(){
            form_section.style.display = "none";
            resume_file.style.display = "block";
        },2000);
    }

    // input border remove with click here 
    inputBorder.forEach(element_input => {
        element_input.addEventListener("keydown", function(e){
            element_input.classList.remove("borderLine");
            
            for(let i = 0; i < userIcon.length; i++){
                userIcon[i].classList.remove("nameThis");
            }
        })
    })

}

// country name this side here with API
const countryAPIFunction = () => {
    const API_URL = "https://restcountries.eu/rest/v2/all";
    let country_API = document.getElementById("country");

    fetch(API_URL, {
        method : "GET"
    })
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        let data_Show;
        for(let countryName in data){
            // console.log(data[countryName].name);
            data_Show += `<option>${data[countryName].name}</option>`
        }
        country_API.innerHTML = data_Show;
    }).catch( (error) => {
        console.log(error);
    })
}

countryAPIFunction();

// *********************** secound form submit *******************************************
const form_Submit_resume = document.getElementById("form_Submit_resume");
// input type name show pop box 
form_Submit_resume.addEventListener("submit", function(e){
    e.preventDefault();
})


const saveButton = document.getElementById("saveButton");
const sunmiyButton = document.getElementById("sunmiyButton");
const previewButton = document.getElementById("previewButton");

previewButton.addEventListener("click", () => {
    document.getElementById("close_POP_Container").style.display = "block";
    
    let resume_name = document.getElementById("resume_name").value;
    let resume_email = document.getElementById("resume_email").value;
    let resume_Number = document.getElementById("resume_Number").value;
    let resume_password = document.getElementById("resume_password").value;
    let resume_Languages = document.getElementById("resume_Languages").value;
    let resume_Projects = document.getElementById("resume_Projects").value;
    let profile = document.getElementById("profile").value;

    // pop box show text 
    let name_text = document.querySelector(".name_text");
    let email_text = document.querySelector(".email_text");
    let phone_text = document.querySelector(".phone_text");
    let password_text = document.querySelector(".password_text");
    let languages_text = document.querySelector(".languages_text");
    let project_link = document.querySelector(".project_link");
    let bioData_text = document.querySelector(".bioData_text");
    // end 

    name_text.innerHTML = resume_name;
    email_text.innerHTML = resume_email;
    phone_text.innerHTML = resume_Number;
    password_text.innerHTML = resume_password;
    languages_text.innerHTML = resume_Languages;
    project_link.innerHTML = resume_Projects;
    bioData_text.innerHTML = profile;
})








// ********************** pop *****************************
const close_POP_Container = document.getElementById("close_POP_Container");
const times_close = document.getElementById("times_close");
const donwload = document.getElementById("donwload");
const donwload_container = document.getElementById("donwload_container");

times_close.addEventListener("click", function(){
    close_POP_Container.style.display = "none";
})



// donwload pdf web page this side here 
donwload.addEventListener("click", function(){
    console.log(donwload_container);
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    html2pdf().from(donwload_container).set(opt).save();
})









  





