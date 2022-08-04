import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const ProductComponent = (props) => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`}>
        <div key={id}>
          <h2>{title}</h2>

          <p>{price}</p>
          <p>{category}</p>
          <img src={image} alt={title} />
        </div>
      </Link>
    );
  });
  // const { id, title } = products[0];
  return <div>{renderList}</div>;
};

export default ProductComponent;
