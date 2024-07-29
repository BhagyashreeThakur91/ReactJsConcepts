import CommonInput from "../common-input";

const formTypes = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea',
}
function CommonForm({formControls = [], formData,onHandleSubmit ,setFormData, buttonText}){
    
    function renderFormElement(getCurrentElemet) {
        let content = null;
        switch (getCurrentElemet?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput 
                label={getCurrentElemet.label}
                name={ getCurrentElemet.name}
                type={ getCurrentElemet.type}
                id={ getCurrentElemet.id}
                placeholder={ getCurrentElemet.placeholder}
                value={formData[getCurrentElemet.name]}
                onChange={(event)=> setFormData({
                    ...formData,
                    [event.target.name] : event.target.value
                })}
                />
                break;
        
            default:
                content = <CommonInput 
                label={getCurrentElemet.label}
                name={ getCurrentElemet.name}
                type={ getCurrentElemet.type}
                id={ getCurrentElemet.id}
                placeholder={ getCurrentElemet.placeholder}
                value={formData[getCurrentElemet.name]}
                onChange={(event)=> setFormData({
                    ...formData,
                    [event.target.name] : event.target.value
                })}
                />
                break;
        }
        return content;
    }

    return (
        <form onSubmit={onHandleSubmit}>
            { formControls?.length ? 
            formControls.map(singleFormElementItem=> renderFormElement(singleFormElementItem)
            ) : null
            }
            <div style={{marginTop: '20px'}}>
                <button type="submit">{buttonText || 'Submit'}</button>
            </div>
        </form>
    )
}

export default CommonForm;