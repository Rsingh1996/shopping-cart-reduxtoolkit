import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProduct] = useState([]);
  const url = `https://dummyjson.com/products`;
  useEffect(() => {
    // Api call
    fetch(url)
      .then((data) => data.json())
      .then((result) => setProduct(result.products))
      .catch((e) => console.log(e));
  }, []);

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
          <Button variant="primary">Add to Cart</Button>
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
