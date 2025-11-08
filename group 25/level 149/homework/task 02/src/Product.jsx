function Product({ price, inStock}) {
    return (
        <div>
            <h1>ფასი: {price}</h1>
            <p>{inStock ? 'მარაგშია' : 'აღარ არის'}</p>
        </div>
    )
}
export default Product