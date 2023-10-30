const email=document.querySelector('#email')
const label=document.querySelector('.msg')
const btn=document.querySelector('.btn')
const form =document.querySelector('.form')

console.log()
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('clicked')
    const regex=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,5})?$/
    let emailValue=email.value
    if(emailValue ==='' || !emailValue.match(regex)){
        printMessage('Please enter valid email address',false)
    }else{
        printMessage('Email sent!',true)
    }
})
function printMessage(msg,isValid){
    if(!isValid){
        form.classList.remove('success')
        form.classList.add('error')
        label.innerHTML=msg
    }
    else{
        form.classList.remove('error')
        form.classList.add('success')
        label.innerHTML=msg
        setTimeout(()=>{
            label.innerHTML='';
            email.value='';
            error.classList.remove('succes')
        },2500)
    }
}

// toggle
const themeToggleBtn = document.getElementById('theme-toggle')
themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode(){
   
    document.body.classList.toggle('light')
}
const sr = ScrollReveal({
    origin:'top',
    distance:'50px',
    duration:1300,
    delay:100
})
sr.reveal('.hero-section-container img')
sr.reveal('.hero-section-container h1')
sr.reveal('.hero-section-container p')
sr.reveal('.hero-section-container a')

sr.reveal('.features-container .feature:nth-child(1)',{origin:'bottom',opacity:1})
sr.reveal('.features-container .feature:nth-child(2)',{origin:'bottom',opacity:1})
sr.reveal('.features-container .feature:nth-child(3)',{origin:'bottom',opacity:1})
sr.reveal('.features-container .feature:nth-child(4)',{origin:'bottom',opacity:1})

sr.reveal('.productive-container img',{origin:'bottom',opacity:1})
sr.reveal('.productive-container .container',{origin:'bottom',opacity:1})

sr.reveal('.reviews .review:nth-child(1)',{origin:'bottom',opacity:1})
sr.reveal('.reviews .review:nth-child(2)',{origin:'bottom',opacity:1,delay:200})
sr.reveal('.reviews .review:nth-child(3)',{origin:'bottom',opacity:1,delay:200})
