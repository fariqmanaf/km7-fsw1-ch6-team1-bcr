import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailOption, updateOption } from "../../../service/options";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/options/edit/$id")({
  component: EditOption,
});

function EditOption() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailOptionData = async (id) => {
      const result = await getDetailOption(id);
      if (result?.success) {
        setOption(result.data?.option);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    };

    if (id) {
      getDetailOptionData(id);
    }
  }, [id]);

  if (isNotFound) {
    navigate({ to: "/options" });
    return;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = { option };
    const result = await updateOption(id, request);
    if (result?.success) {
      toast.success("Option updated successfully!");
      navigate({ to: "/options" });
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header className="text-center">Edit option</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="option">
                <Form.Label column sm={3}>
                  option
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="option"
                    required
                    value={option}
                    onChange={(event) => setOption(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Update option
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
