// step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit button is clicked');
    // step-2: get the email address inside the email 
    // always remember to use .value to get text from a input field
    const emailField= document.getElementById('user-email');
    const email=emailField.value;
    
    // step-3: get password
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // console.log(email,password);

    // Do not verify email password on the clien side
    // step-4 :varify email and password
    if(email==='mababa123@gmail.com' && password==='bangladesh'){
        window.location.href='bank.html';
    }else{
        alert("Pleas Enter Valied password");
    }
})