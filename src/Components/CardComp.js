import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default function CardComp(props) {
  let { confirm, death, recover } = props.data;

  return (
    <>
      <Row>
        <Col sm={3}>
          <Card>
            <CardTitle style={{ color: "red", fontSize: "1.5rem" }}>
              deaths
            </CardTitle>

            <CardText style={{ fontSize: "2rem" }}>{death}</CardText>
          </Card>
        </Col>

        <Col sm={6}>
          <Card>
            <CardTitle style={{ color: "blue", fontSize: "1.5rem" }}>
              Confirmed
            </CardTitle>

            <CardText style={{ fontSize: "2rem" }}>{confirm}</CardText>
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <CardTitle style={{ color: "green", fontSize: "1.5rem" }}>
              recovered
            </CardTitle>

            <CardText style={{ fontSize: "2rem" }}>{recover}</CardText>
          </Card>
        </Col>
      </Row>
    </>
  );
}
