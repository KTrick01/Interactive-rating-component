const selectedNumber = document.querySelectorAll(".ratingNumber");
const submit = document.querySelector(".submitBtn")
const thanksScreen = document.querySelector(".thanksScreen")
const ratingScreen = document.querySelector(".ratingScreen")
const thanks = document.querySelector(".ratingScore__txt")




for(let i = 0 ; i < selectedNumber.length ; i++){
    
    submit.setAttribute("disabled","true")

    selectedNumber[i].addEventListener('click',(e)=> {

        selectedNumber.forEach((el) => el.classList.remove("ratingNumberSelected"));
        selectedNumber[i].classList.toggle('ratingNumberSelected');
        submit.removeAttribute("disabled")
        
    })

};


submit.addEventListener('click',function() {
    
    let ratingNumber = document.querySelector(".ratingNumberSelected");
    let rating = ratingNumber.textContent
    
    let thanksTxt = document.createTextNode(`You selected ${rating} out of 5`);
    thanks.appendChild(thanksTxt);   
    thanksScreen.classList.remove('none');
    ratingScreen.classList.add('none');

});

