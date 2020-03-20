import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default function CardComp(props) {
  let { confirm, death, recover } = props.data;

  return (
    <>
      <Row>
        <Col sm={3}>
          <Card className="shadow-sm rounded border-top border-danger">
            <CardTitle style={{ color: "red", fontSize: "1.2rem" }}>
              deaths
            </CardTitle>

            <CardText className="badge badge-danger text-wrap" style={{ fontSize: "1.8rem" }}>{death}</CardText>
          </Card>
        </Col>

        <Col sm={6}>
          <Card className="shadow-sm rounded border-top border-primary">
            <CardTitle style={{ color: "blue", fontSize: "1.5rem" }}>
              Confirmed
            </CardTitle>

            <CardText className="badge badge-primary text-wrap" style={{ fontSize: "1.8rem" }}>{confirm}</CardText>
          </Card>
        </Col>

        <Col sm={3}>
          <Card className="border border-top border-success">
            <CardTitle style={{ color: "green", fontSize: "1.2rem" }}>
              recovered
            </CardTitle>

            <CardText className="badge badge-success text-wrap" style={{ fontSize: "1.8rem" }}>{recover}</CardText>
          </Card>
        </Col>
      </Row>
    </>
  );
}
