import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { items } from "./../data";

const ItemList = ({ itemData }) => {
  return (
    <Row>
      {itemData.length >= 1 ? (
        itemData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <Card className="d-flex flex-row">
                <Card.Img className="img-item" variant="top" src="food1.PNG" />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="item-description">
                      This is a longer card with supporting
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3>There Is No Category</h3>
      )}
    </Row>
  );
};

export default ItemList;
