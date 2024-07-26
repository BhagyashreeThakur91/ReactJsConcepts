import ClassBasedComponent from "./components/class-based-component"
import FunctionalComponent from "./components/functionalComponent"
import ProductList from "./components/products"

const dummyProductData = ['product 1','product 2', 'product 3'];

function App() {
  return (
    <>
    <h1>Learning React JS Concepts..</h1>
     <ClassBasedComponent/>
    {/* <FunctionalComponent/> */}
    {/* <ProductList listOfProducts={dummyProductData} name="bhagyashree" city="XYZ"/> */}
    </>
  )
}

export default App
