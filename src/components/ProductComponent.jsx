import React, { useEffect } from 'react'
import { fetchProducts } from './Redux/Products/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'


function ProductComponent() {

    const productData = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            {productData.loading && <h1> Loading... </h1>}
            {productData.error && <h1> {productData.error} </h1>}
            {productData.product && <p> {productData.product.map(title => <p> {title} </p>)} </p>}
        </div>
    )
}

export default ProductComponent


// function ProductComponent({ productData, fetchProducts }) {

//     useEffect(() => {
//         fetchProducts()
//     }, [])
//     console.log(productData.product);

//     return (
//         <div>
//             {productData.loading && <h1> Loading... </h1>}
//             {productData.error && <h1> {productData.error} </h1>}
//             {productData.product && <p> {productData.product.map(title => <p> {title} </p>)} </p>}
//         </div>
//     )
// }


// const mapStateToProps = state => ({
//     productData: state.product
// })

// const mapDispatchToProps = dispatch => ({
//     fetchProducts: () => dispatch(fetchProducts())
// })


// export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)