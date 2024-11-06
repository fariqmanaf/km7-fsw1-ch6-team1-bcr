import { createLazyFileRoute } from "@tanstack/react-router";
import Row from "react-bootstrap/Row";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <Row className="mt-4">
            <h1>HELLO WORLD</h1>
        </Row>
    );
}
