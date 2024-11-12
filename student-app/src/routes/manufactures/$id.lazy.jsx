import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  deleteManufacture,
  getDetailManufacture,
} from "../../service/manufactures";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

export const Route = createLazyFileRoute("/manufactures/$id")({
  component: ManufactureDetail,
});

function ManufactureDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [manufacture, setManufacture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailManufactureData = async (id) => {
      setIsLoading(true);
      const result = await getDetailManufacture(id);
      if (result?.success) {
        setManufacture(result.data);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    if (id) {
      getDetailManufactureData(id);
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
          <h1 className="text-center">Manufacture is not found!</h1>
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
            const result = await deleteManufacture(id);
            if (result?.success) {
              navigate({ to: "/manufactures" });
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
            <Card.Title>{manufacture?.name}</Card.Title>
            <Card.Text>{manufacture?.description}</Card.Text>
            <div className="d-grid gap-2">
              <Button
                as={Link}
                href={`/manufactures/edit/${id}`}
                variant="primary"
              >
                Edit Manufactures
              </Button>
            </div>
            <div className="d-grid gap-2">
              <Button onClick={onDelete} variant="danger">
                Delete Manufactures
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
