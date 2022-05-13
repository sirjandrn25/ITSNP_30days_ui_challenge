
const small_letters = 'abcdefghijklmnopqrstuvwxyz'
const capital_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '@#$%&^!-,.'

const getCharectors = (label)=>{
    switch(label){
        case "small":
            return small_letters
        case "capital":
            return capital_letters
        case "symbol":
            return symbols
        case "number":
            return numbers
    }
}
const check_boxes = document.getElementsByClassName('form-check-input');

const generate_password_form = document.getElementById('generate_password');
generate_password_form.addEventListener('submit',e=>{
    e.preventDefault();
    const password_length = parseInt(e.target.length.value);
    let charset = '';
    
    for(let check_box of check_boxes){
        if(check_box.checked){
            charset += getCharectors(check_box.value);
        }
    }
    if(charset){
        let generate_pass = '';
        for(let i=0; i<password_length; i++){
            const index = Math.floor(Math.random()*charset.length);
            generate_pass+=charset[index];
        }
        e.target.password.value = generate_pass;
        document.getElementById('error_msg').innerHTML = '';
    }else{
        document.getElementById('error_msg').innerHTML = `<h4 class="text-danger text-center">please at least 1 preferences selecte</h4>`
    }
    
    
    
    
})
const copy_password = ()=>{
    const password = document.getElementById('id_password').value;
    navigator.clipboard.writeText(password);
}