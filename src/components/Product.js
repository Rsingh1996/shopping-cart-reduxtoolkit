import React from "react";
import { Card, Button } from "react-bootstrap";
import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispacth = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    // dispacth an action to fetch product
    dispacth(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispacth an add action
    dispacth(add(product));
  };

  const Cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ width: "287px", height: "190px" }}
        />
        <Card.Body>
          <Card.Title style={{ height: 40 }}>{product.title}</Card.Title>
          <Card.Text>USD : {product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 style={{ color: "Red", marginBottom: "20px" }}>Product Dashboard</h1>
      <div className="row">{Cards}</div>
    </>
  );
};

export default Product;
