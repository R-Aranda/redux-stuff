import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProduct();
  }, [productId]);
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>${price}</p>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
