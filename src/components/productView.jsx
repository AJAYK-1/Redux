import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/product/productSllice'


function ProductView() {

    const product = useSelector((state) => state.product)
    console.log(product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <h1> All Products </h1>
            {product.loading && <h2> Loading... </h2>}
            {product.error && <h2> Error... </h2>}
            {product.products && <p> {product.products.map(pro =>
                <span> {pro} </span>
            )} </p>}
        </div>
    )
}

export default ProductView