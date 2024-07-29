function CommonInput({label,type, onChange, name, id, value, placeholder}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                id={id} 
                type={type || 'text'}
                placeholder={placeholder || 'Enter Value Here'} 
                value={value} onChange={onChange}
            />
        </div>
    )
}

export default CommonInput;