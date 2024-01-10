import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const dispacth = useDispatch();

  const [products, setProduct] = useState([]);
  const url = `https://dummyjson.com/products`;
  useEffect(() => {
    // Api call
    fetch(url)
      .then((data) => data.json())
      .then((result) => setProduct(result.products))
      .catch((e) => console.log(e));
  }, []);

  const addToCart = (product) => {
    //dispacth an add action
    dispacth(add(product));
  };

  const Cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "20px" }}>
      <Card key={product.id} style={{ width: "18rem" }}>
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
      <h1>Product Dashboard</h1>
      <div className="row">{Cards}</div>
    </>
  );
};

export default Product;
