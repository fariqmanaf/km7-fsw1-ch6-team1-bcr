import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createManufacture } from "../../service/manufactures";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/manufactures/create")({
  component: CreateManufacture,
});

function CreateManufacture() {
  const navigate = useNavigate();
  const [manufacture, setManufacture] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = { manufacture };

    const result = await createManufacture(request);
    if (result?.success) {
      toast.success("Manufacture created successfully!");
      navigate({ to: "/manufactures" });
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="text-center">Create Manufacture</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="manufactures">
                <Form.Label column sm={3}>
                  Manufacture
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Manufacture Name"
                    required
                    value={manufacture}
                    onChange={(event) => setManufacture(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Create Manufacture
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
