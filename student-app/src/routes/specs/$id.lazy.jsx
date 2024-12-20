import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteSpec, getDetailSpec } from "../../service/spec";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import ReactLoading from "react-loading";
import { IoArrowBackCircle } from "react-icons/io5";
import Protected from "../../components/Auth/Protected";

export const Route = createLazyFileRoute("/specs/$id")({
  component: () => (
    <Protected roles={[1]}>
      <SpecDetail />
    </Protected>
  ),
});

function SpecDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [spec, setSpec] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailSpecData = async (id) => {
      setIsLoading(true);
      const result = await getDetailSpec(id);
      if (result?.success) {
        setSpec(result.data);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    if (id) {
      getDetailSpecData(id);
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
          <h1 className="text-center">Spec is not found!</h1>
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
            const result = await deleteSpec(id);
            if (result?.success) {
              navigate({ to: "/specs" });
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
              <h4 className="mb-4 text-center fw-bold">Delete Specs</h4>
              <Card.Title>Detail</Card.Title>
              <Card.Text>Spec : {spec?.spec}</Card.Text>
              <div className="d-grid gap-2">
                <Button onClick={onDelete} variant="danger">
                  Delete Spec
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
