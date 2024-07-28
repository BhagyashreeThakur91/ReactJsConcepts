import ClassBasedComponent from "./components/class-based-component"
import ContextButtonComponent from "./components/context-concepts/button";
import ContextTextComponent from "./components/context-concepts/text";
import FunctionalComponent from "./components/functionalComponent"
import ProductList from "./components/products"
import UseReducerExample from "./components/useReducer-example";
import Users from "./components/users";

const dummyProductData = ['product 1','product 2', 'product 3'];

function App() {
  return (
    <>
    <h1>Learning React JS Concepts..</h1>
     {/* <ClassBasedComponent/> */}
    {/* <FunctionalComponent/> */}
    {/* <ProductList listOfProducts={dummyProductData} name="bhagyashree" city="XYZ"/> */}
    {/* <Users/> */}
    {/* <ContextButtonComponent />
    <ContextTextComponent /> */}
    <UseReducerExample />
    </>
  )
}

export default App
