import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { getOptions } from "../../service/options";
import OptionItem from "../../components/Option/OptionItem";

export const Route = createLazyFileRoute("/options/")({
  component: Option,
});

function Option() {
  const { token, user } = useSelector((state) => state.auth);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getOptionData = async () => {
      setIsLoading(true);
      const result = await getOptions();
      if (result.success && result.data) {
        setOptions(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getOptionData();
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
        <Col className="d-flex justify-content-end mb-3 me-5">
          <Button as={Link} href={`/options/create`} variant="primary">
            Create Option
          </Button>
        </Col>
      </Row>
      {options.length === 0 ? (
        <h1>Spec data is not found!</h1>
      ) : (
        <Col md={5} lg={11} className="mx-auto">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Manufacture</th>
                <th className="text-center">Options</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {options.map((option) => (
                <OptionItem user={user} option={option} key={option?.id} />
              ))}
            </tbody>
          </Table>
        </Col>
      )}
    </Row>
  );
}

export default Option;
