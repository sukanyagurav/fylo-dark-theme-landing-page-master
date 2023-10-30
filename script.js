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