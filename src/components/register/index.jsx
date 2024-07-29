import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialState = {
    name : '',
    email : '',
    password : ''
}

function RegisterComponent(){
    const [registerFormData, setRegisterFormData]  = useState(initialState);
 
    function handleRegisterOnSubmit(event) {
        event.preventDefault();
        console.log(registerFormData);
        setRegisterFormData(initialState);
    }
    return (
    <div>
        <h1>Register Component</h1>
        <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={ setRegisterFormData}
        buttonText={'Register'}
        onHandleSubmit={handleRegisterOnSubmit}
        />

    </div>
 )
}

export default RegisterComponent;