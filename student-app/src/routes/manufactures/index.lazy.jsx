import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getManufactures } from "../../service/manufactures";
import ManufactureItem from "../../components/Manufacture/ManufactureItem";

export const Route = createLazyFileRoute("/manufactures/")({
  component: Manufacture,
});

function Manufacture() {
  const { token } = useSelector((state) => state.auth);

  const [manufactures, setManufactures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getManufactureData = async () => {
      setIsLoading(true);
      const result = await getManufactures();
      if (result.success) {
        setManufactures(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getManufactureData();
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">
            Please login first to get manufacture data!
          </h1>
        </Col>
      </Row>
    );
  }

  if (isLoading) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <Row className="mt-4">
      <Row>
        <Col className="d-flex justify-content-end mb-3">
          <Button as={Link} href={`/manufactures/create`} variant="primary">
            Create Manufacture
          </Button>
        </Col>
      </Row>
      {manufactures.length === 0 ? (
        <h1>Manufacture data is not found!</h1>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number</th>
              <th>Manufacture</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {manufactures.map((manufacture) => (
              <ManufactureItem
                manufacture={manufacture}
                key={manufacture?.id}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Row>
  );
}
