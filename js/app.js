  
  //  Form Validation

let input = document.querySelector(`.input`);
let input1 = document.querySelector(`.input1`);
let input2 = document.querySelector(`.input2`);
let input3 = document.querySelector(`.input3`);
let submit = document.querySelector(`.btn`);
let nameInvalid1 = document.querySelector(`.nameInvalid1`);

submit.addEventListener(`click` , function(){
    if(input.value == "" && " "){
        alert(`Empty Form is Not Submited Yet`);
    }
    else
    {
        alert(`Your Form is Succesfully Submited`);
    }
})
input1.addEventListener(`keyup`,function(e){
        e.preventDefault();
let rejexMethode = /^([^0-9\W]*)$/;
    if(rejexMethode.test(input1.value)){
       nameInvalid1.innerHTML = ` `;
    }

    else if(!(rejexMethode.test(input1.value))){
       nameInvalid1.innerHTML = `Numbers are Not Allowed`;
    }

});

let formHolder =document.querySelector(`.form-holder`);
let a2 = document.querySelector(`#a2`);


// a2.addEventListener(`click`,function newFormFunction(e){
//         e.preventDefault();


// let newForm = document.createElement(`form`)
// let col12 = document.querySelector(`.form`);

//          //  create label for name
// let newLabelForName = document.createElement(`label`)
// let newLabelForNameText = document.createTextNode(`Name :`)
// newLabelForName.append(newLabelForNameText);

//          //  create label for email
// let newLabelForEmail = document.createElement(`label`)
// let newLabelForEmailText = document.createTextNode(`Email :`)
// newLabelForEmail.append(newLabelForEmailText);

//           //  create label for password
// let newLabelForPassword = document.createElement(`label`)
// let newLabelForPasswordText = document.createTextNode(`Password :`)
// newLabelForPassword.append(newLabelForPasswordText);

//           //  create label for Conform password
// let newLabelForConformPassword = document.createElement(`label`)
// let newLabelForConformPasswordText = document.createTextNode(`Conform :`)
// newLabelForConformPassword.append(newLabelForConformPasswordText);

//          //  create input for Contain Name of user
// let newInputForName = document.createElement(`input`)
// newInputForName.setAttribute(`style`,`placeholder:Enter Your Name;`);

//         //  create input for Contain Email of user
// let newInputForEmail = document.createElement(`input`)
// newInputForEmail.setAttribute(`style`,`placeholder:Enter Your Email;`);

//         //  create input for Contain Password of user
// let newInputForPassword = document.createElement(`input`)
// newInputForPassword.setAttribute(`style`,`placeholder:Create your Password`);

//         //  create input for Contain Conform Password of user
// let newInputForConformPassword = document.createElement(`input`)
// newInputForConformPassword.setAttribute(`style`,`placeholder:Enter New Password Again`);

//         //  create submit button
// let newButton = document.createElement(`button`)
// let newButtonText = document.createTextNode(`Create`)
// newButton.append(newButtonText);
         
//         //  Appending all Elements in new Form
// newForm.appendChild(newLabelForName);
// newForm.appendChild(newInputForName);
// newForm.appendChild(newLabelForEmail);
// newForm.appendChild(newInputForEmail);
// newForm.appendChild(newLabelForPassword);
// newForm.appendChild(newInputForPassword);
// newForm.appendChild(newLabelForConformPassword);
// newForm.appendChild(newInputForConformPassword);
// newForm.appendChild(newButton);

// col12.appendChild(newForm);
// newForm.setAttribute(`style`,`margin-left:2rem;`)
// newButton.setAttribute(`style`,`position:relative; left:30%; padding : 8px  5rem; background-color: rgba(179, 35, 48, 0.8); color:honeydew;  border:none; bottom:1rem; border-radius:5px`)
// formHolder.setAttribute(`style`,`display:none`);

// console.log(col12)
 
// formHolder.innerHTML = col12;
// });

 



let checkbox = document.querySelector(`.checkbox`);
checkbox.addEventListener(`click`, (e)=>{

    alert(`Cekcbox is Clicked`);

});

let tdForName = document.querySelector(`.tdForName`);
let tdForEmail = document.querySelector(`.tdForEmail`);
let tdForPassword = document.querySelector(`.tdForPassword`);


input1.addEventListener(`keyup`,(e)=>{
         e.preventDefault()
    tdForName.innerHTML= input1.value;

})

input2.addEventListener(`keyup`,(e)=>{
    e.preventDefault()
tdForEmail.innerHTML= input2.value;

})

input3.addEventListener(`keyup`,(e)=>{
    e.preventDefault()
tdForPassword.innerHTML= input3.value;

})


//      Gallary 

let current = document.querySelector(`.current`);
let img = document.querySelectorAll(`.img`);
let opacity = 0.4;

//   set first img opacity
img[0].style.opacity = opacity;

img.forEach(imgs => imgs.addEventListener(`click`, imgClick));

function imgClick(e){

    //  reset opacity
    img.forEach(imgs => (imgs.style.opacity = 1));

    //  change source of img
    current.src = e.target.src;

    //   Add Fade Animaation Class
    current.classList.add(`fade-in`);

    //  Remove Fade In Class

    setTimeout(() => current.classList.remove(`fade-in`), 500);

    //  giving style like opacity
    e.target.style.opacity = opacity;

}



//        Calculator

function getNumber(num){    
    // let result  = input.value + num
    // console.log(result);
let inputOut = document.querySelector(`.inputOut`);
 let output =    document.querySelector(`.btn1`);
    inputOut.value = output.value + num ;
    // document.inputOut.value  =  document.output.value  + num;
}
function conpuets(){

}










