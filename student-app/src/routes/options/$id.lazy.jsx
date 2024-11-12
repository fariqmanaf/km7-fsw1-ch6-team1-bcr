import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteoption, getDetailOption } from "../../service/options";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

export const Route = createLazyFileRoute("/options/$id")({
  component: OptionDetail,
});

function OptionDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [option, setOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailOptionData = async (id) => {
      setIsLoading(true);
      const result = await getDetailOption(id);
      if (result?.success) {
        setOption(result.data);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    if (id) {
      getDetailOptionData(id);
    }
  }, [id]);

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Loading...</h1>
        </Col>
      </Row>
    );
  }

  if (isNotFound) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Option is not found!</h1>
        </Col>
      </Row>
    );
  }

  const onDelete = async (event) => {
    event.preventDefault();

    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this data?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const result = await deleteoption(id);
            if (result?.success) {
              navigate({ to: "/options" });
              return;
            }

            toast.error(result?.message);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Body>
            <Card.Title>Detail </Card.Title>
            <Card.Text>Option: {option?.option}</Card.Text>
            <div className="d-grid gap-2">
              <Button as={Link} href={`/options/edit/${id}`} variant="primary">
                Edit Option
              </Button>
            </div>
            <div className="d-grid gap-2">
              <Button onClick={onDelete} variant="danger">
                Delete Option
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
