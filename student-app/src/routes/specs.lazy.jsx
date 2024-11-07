import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { getSpecs } from "../service/spec";
import SpecItem from "../components/Spec/specItem";

export const Route = createLazyFileRoute("/specs")({
  component: Spec,
});

function Spec() {
  const { token } = useSelector((state) => state.auth);
  const [specs, setSpecs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSpecData = async () => {
      setIsLoading(true);
      const result = await getSpecs();
      console.log("API Result:", result); // Log response to see data
      if (result.success && result.data) {
        setSpecs(result.data); // Set specs if data is received
      } else {
        console.error("Failed to fetch specs data:", result.message);
      }
      setIsLoading(false);
    };

    if (token) {
      getSpecData();
    } else {
      console.warn("Token not found, please log in."); // Log if no token is found
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Please login first to get spec data!</h1>
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
          <Button as={Link} href={`/specs/create`} variant="primary">
            Create Spec
          </Button>
        </Col>
      </Row>
      {specs.length === 0 ? (
        <h1>Spec data is not found!</h1>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number</th>
              <th>Spec</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec) => (
              <SpecItem spec={spec} key={spec?.id} />
            ))}
          </tbody>
        </Table>
      )}
    </Row>
  );
}

export default Spec;
