function handle() {
    const keycode = window.event.keyCode;
    if (keycode === 13) {
        validate();
    }
}

const rules = {
    name: 'required',
    email: 'required|email',
    message: 'required'
};

function validate() {

    document.querySelector('#form-name ~ .messagejs').classList.remove('add-error');
    document.querySelector('#form-email ~ .messagejs').classList.remove('add-error');
    document.querySelector('#form-message ~ .messagejs').classList.remove('add-error');
    document.querySelector('button ~ .messagejs--success').classList.remove('add-error');

    const name = document.querySelector("#form-name").value
        , email = document.querySelector("#form-email").value
        , message = document.querySelector("#form-message").value
        , data = { name, email, message };
    
    const validation = new Validator(data, rules);

    if (validation.passes()) {
        document.querySelector('button ~ .messagejs--success').classList.add('add-error');
        return true;
    }

    const errors = validation.errors.all()
        , errorsKeys = Object.keys(errors);

    errorsKeys.forEach(function (key) {
        document.querySelector(`#form-${key} ~ .messagejs`).classList.add('add-error');
        document.querySelector(`#form-${key} ~ .messagejs`).innerHTML = errors[key][0];
    });

    // if (validation.errors.first('name')) {
    //     document.querySelector('#input2 ~ .messagejs').classList.add('add-error');
    //     document.querySelector('#input2 ~ .messagejs').innerHTML = errors.name[0];
    // } 
    
    // if (validation.errors.first('email')) {
    //     document.querySelector('#input3 ~ .messagejs').classList.add('add-error');
    //     document.querySelector('#input3 ~ .messagejs').innerHTML = errors.email[0];
    // } 
    
    // if (validation.errors.first('message')) {
    //     document.querySelector('#input ~ .messagejs').classList.add('add-error');
    //     document.querySelector('#input ~ .messagejs').innerHTML = errors.message[0];
    // }
}
