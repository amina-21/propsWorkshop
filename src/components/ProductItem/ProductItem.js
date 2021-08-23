import React from 'react'
import PropTypes from 'prop-types';

function ProductItem({product,showProduct}) {
    
    return (
        
            <tr>
                <td><button className="btn sm btn-danger" onClick={() => showProduct(product.name)}>click me !</button></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.imgSrc} alt={product.name} /></td>
            </tr>
        
    )
}

ProductItem.propTypes = {
    product:PropTypes.object,
    showProduct : PropTypes.func
}

export default ProductItem
