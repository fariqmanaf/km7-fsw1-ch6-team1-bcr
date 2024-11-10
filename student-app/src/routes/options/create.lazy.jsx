import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createOption } from "../../service/options";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/options/create")({
  component: CreateOption,
});

function CreateOption() {
  const navigate = useNavigate();
  const [option, setOption] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = { option };
    const result = await createOption(request);
    if (result?.success) {
      toast.success("Option created successfully!");
      navigate({ to: "/options" });
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="text-center">Create Option</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="option">
                <Form.Label column sm={3}>
                  Option
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Option"
                    required
                    value={option}
                    onChange={(event) => setOption(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Create Option
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
