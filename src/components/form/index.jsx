import { useState } from "react";

function FormComponent() {

    const [ nameValue, setNameValue ] = useState("");
    const [ emailValue, setEmailValue ] = useState("");
    const [ formData, setFormData ] = useState({
        name : '',
        email : ''
    })

    function handleInputChange(event) {
        const {value} = event.target;
        //setNameValue(event.target.value);
        setNameValue(value);
    }

    function handleEmailChange(event) {
        const { value } = event.target;
        setEmailValue(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //call the api and pass the name value
        console.log(nameValue, emailValue,"nameValue");
    }

    function handleOnChange(event){
        console.log(event.target.name);
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    
    console.log(formData);
return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <input
         name="name" 
         id="name" 
         placeholder="Enter your Name"
         value={formData.name}
         onChange={handleOnChange}
         />

         <input
         type="email"
         name="email"
         id="email"
         placeholder="Enter your Email"
         value={formData.email}
         onChange={handleOnChange}
         />
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default FormComponent;