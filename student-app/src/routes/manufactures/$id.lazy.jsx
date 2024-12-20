import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
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
import ReactLoading from "react-loading";
import { IoArrowBackCircle } from "react-icons/io5";
import Protected from "../../components/Auth/Protected";

export const Route = createLazyFileRoute("/manufactures/$id")({
  component: () => (
    <Protected roles={[1]}>
      <ManufactureDetail />
    </Protected>
  ),
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
      <div
        style={{ height: "90vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <ReactLoading
          type={"spin"}
          color={"#0d6efd"}
          height={"5%"}
          width={"5%"}
        />
      </div>
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

  function onClickBack() {
    navigate({ to: "/specs" });
  }

  return (
    <Row
      className="d-flex flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <IoArrowBackCircle
        className="position-absolute"
        role="button"
        onClick={onClickBack}
        style={{
          color: "#0d6efd",
          width: "7vw",
          height: "7vh",
          top: "6rem",
          left: "7rem",
        }}
      />
      <Row className="mt-5">
        <Col className="offset-md-3">
          <Card>
            <Card.Body>
              <h4 className="mb-4 text-center fw-bold">Delete Manufactures</h4>
              <Card.Title>Detail</Card.Title>
              <Card.Text>Manufacture : {manufacture?.name}</Card.Text>
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
    </Row>
  );
}
