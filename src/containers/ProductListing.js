import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = (props) => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;