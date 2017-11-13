let rules = {
    name: 'required',
    email: 'required|email', 
    message: 'required'
};

function validate() {

    document.querySelector('#input2 ~ .messagejs').classList.remove('add-error');
    document.querySelector('#input3 ~ .messagejs').classList.remove('add-error');
    document.querySelector('#input ~ .messagejs').classList.remove('add-error');
    document.querySelector('button ~ .messagejs--success').classList.remove('add-error');

    let name = document.getElementById("input2").value;
    let email = document.getElementById("input3").value;
    let message = document.getElementById("input").value;

    let data = {
        name: name,
        email: email, 
        message: message
    };
    
    let validation = new Validator(data, rules);
    
    if(validation.passes() == true) {
        document.querySelector('button ~ .messagejs--success').classList.add('add-error');
    }
    
    if(validation.errors.first('name')) {
        document.querySelector('#input2 ~ .messagejs').classList.add('add-error');
        document.querySelector('#input2 ~ .messagejs').innerHTML = validation.errors.first('name');
    } 
    
    if (validation.errors.first('email')) {
        document.querySelector('#input3 ~ .messagejs').classList.add('add-error');
        document.querySelector('#input3 ~ .messagejs').innerHTML = validation.errors.first('email');
    } 
    
    if (validation.errors.first('message')) {
        document.querySelector('#input ~ .messagejs').classList.add('add-error');
        document.querySelector('#input ~ .messagejs').innerHTML = validation.errors.first('message');
    }
}
