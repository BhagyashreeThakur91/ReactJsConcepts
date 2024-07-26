import styles from "./productItem.module.css";
function ButtonComponent() {
return (
    <div>
        <button className={styles.buttonStyle}>Click</button>
    </div>
)
}

function ProductItem({singleProductItem}){
    return (
        <div style={{padding: '20px', border:'2px solid red', marginBottom:'10px'}}>
            <p className={styles.prouctItitle}>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    )
}
export default ProductItem;