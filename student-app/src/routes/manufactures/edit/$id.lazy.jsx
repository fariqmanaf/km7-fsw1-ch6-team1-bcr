import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  getDetailManufacture,
  updateManufacture,
} from "../../../service/manufactures";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/manufactures/edit/$id")({
  component: EditManufacture,
});

function EditManufacture() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [manufacture, setManufacture] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailManufactureData = async (id) => {
      const result = await getDetailManufacture(id);
      if (result?.success) {
        setManufacture(result.data?.name);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    };

    if (id) {
      getDetailManufactureData(id);
    }
  }, [id]);

  if (isNotFound) {
    navigate({ to: "/manufactures" });
    return;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = { manufacture };
    const result = await updateManufacture(id, request);
    if (result?.success) {
      toast.success("Manufacture updated successfully!");
      navigate({ to: "/manufactures" });
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="text-center">Edit Manufacture</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="spec">
                <Form.Label column sm={3}>
                  Manufacture
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Manufacture"
                    required
                    value={manufacture}
                    onChange={(event) => setManufacture(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Update Manufacture
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
