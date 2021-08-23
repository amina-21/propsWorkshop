import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";
import PropTypes from 'prop-types';

const ProductList = ({products}) => {
    const showProduct = (p) => {
        alert("the product's name is " + p)
      }
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {

          products.map((product,index) => <ProductItem product={product} key={index} showProduct={showProduct}/> )

          }
        </tbody>
      </Table>
    </div>
  );
};

ProductList.propTypes = {
    products: PropTypes.array
}

export default ProductList;
