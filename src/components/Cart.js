import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispacth = useDispatch();

  const removeToCart = (id) => {
    //dispacth a remove action
    dispacth(remove(id));
  };

  const Cards = products.map((product) => (
    <div className="col-md-6" style={{ marginBottom: "20px" }}>
      <Card key={product.id} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ width: "287px", height: "190px" }}
        />
        <Card.Body>
          <Card.Title style={{ height: 40 }}>{product.title}</Card.Title>
          <Card.Text>USD : {product.price}</Card.Text>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 style={{ color: "Red", marginBottom: "20px" }}>Cart Items</h1>
      <div className="row">{Cards}</div>
    </>
  );
};
