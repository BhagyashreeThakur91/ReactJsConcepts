import { useContext } from "react";
import { GlobalContext } from "../../context";



function ContextTextComponent(){
    const {theme} = useContext(GlobalContext);
    return <h2 
    style = {{
        fontSize : theme === 'light' ? '50px' : '100px',
        backgroundColor : theme === 'light' ? '#fff' : '#000',
        color : theme === 'light' ? 'blue' : 'yellow' 
    }}>
        Bhagyashree Thakur
    </h2>
}
export default ContextTextComponent;