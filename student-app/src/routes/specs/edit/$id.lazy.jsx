import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailSpec, updateSpec } from "../../../service/spec";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/specs/edit/$id")({
  component: EditSpec,
});

function EditSpec() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [spec, setSpec] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailSpecData = async (id) => {
      const result = await getDetailSpec(id);
      if (result?.success) {
        setSpec(result.data?.spec);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    };

    if (id) {
      getDetailSpecData(id);
    }
  }, [id]);

  if (isNotFound) {
    navigate({ to: "/specs" });
    return;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = { spec };
    const result = await updateSpec(id, request);
    if (result?.success) {
      toast.success("Spec updated successfully!");
      navigate({ to: "/specs" });
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="text-center">Edit Spec</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="spec">
                <Form.Label column sm={3}>
                  Spec
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Spec"
                    required
                    value={spec}
                    onChange={(event) => setSpec(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Update Spec
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
