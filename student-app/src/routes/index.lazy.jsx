import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNavigationBar from "../components/SideNav";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { token } = useSelector((state) => state.auth);

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getStudentData = async () => {
      setIsLoading(true);
      const result = await getStudents();
      if (result.success) {
        setStudents(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getStudentData();
    }
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [token, navigate]);

  if (isLoading) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <Row>
      <Col>
        <SideNavigationBar />
      </Col>

      <Col className="d-flex ">
        {students.length === 0 ? (
          <h1>Student data is not found!</h1>
        ) : (
          students.map((student) => (
            <StudentItem student={student} key={student?.id} />
          ))
        )}
      </Col>
    </Row>
  );
}
