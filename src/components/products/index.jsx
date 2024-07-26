import ProductItem from "./components/productItem";
import "./style.css";

function ProductList(props) {
    const {name,city, listOfProducts} = props;
    const flag = true;

    //way to writing ternary operator
    // function renderTextBlock(getFlag) {
    //     return getFlag ? (
    //     <h4>Name is {name} and she is belongs to {city}</h4>
    //     ) : (
    //         <h4>Hellow World!</h4>
    //     )
    // }

    const renderTextBlock = flag ? <h4>Name is {name} and she is belongs to {city}</h4>
    : <h4>Hellow World</h4>

    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            { renderTextBlock }
            <ul>
                { listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem = {item} key={index}/>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;