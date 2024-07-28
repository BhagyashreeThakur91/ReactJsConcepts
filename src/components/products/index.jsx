import { useEffect, useState } from "react";
import ProductItem from "./components/productItem";
import "./style.css";



function ProductList({name,city, listOfProducts}) {
    const [ flag, setFlag ] = useState(true);
    const [ count, setCount ] = useState(0);
    const [ changeStyle, setChangeStyle ] = useState(false);
    
    function handleToggleText() {
        setFlag(!flag)
    }

    function handleCount(){
        setCount(count + 1)
    }

    useEffect(()=>{
        setFlag(!flag)
        return ()=> {
            console.log("Component is unmounted -> some side effects here also");
        }
    },[]) //this will only run on page load once
    
    useEffect(()=>{
        if(count === 10){
            setChangeStyle(true);
        }
    },[count])
    console.log(changeStyle);

    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            { flag ? <h4>{name} and {city} </h4> : <h4>Hellow</h4> }

            <div>
                <p>Count is {count}</p>
                <button style={{backgroundColor: changeStyle ? "black" :  "white", color : changeStyle ? 'white' : 'black' }} onClick={handleCount}>Increase Count</button>
            </div>
            <ul>
                { listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem = {item} key={index}/>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;