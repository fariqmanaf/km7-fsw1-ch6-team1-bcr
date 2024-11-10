import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { getCars } from "../../service/cars";
import { IoCarSharp } from "react-icons/io5";

export const Route = createLazyFileRoute("/cars/")({
    component: Cars,
});

function Cars() {
    const token = useSelector((state) => state.auth.token);

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);
    const [selectedTransmission, setSelectedTransmission] = useState("all");

    useEffect(() => {
        const getCarsData = async () => {
            setIsLoading(true);
            const result = await getCars();
            if (result.success) {
                setCars(result.data);
                setFilteredCars(result.data);
            }
            setIsLoading(false);
        };

        if (token) {
            getCarsData();
        }
    }, [token]);

    useEffect(() => {
        if (selectedTransmission === "all") {
            setFilteredCars(cars);
        } else {
            const filtered = cars.filter(
                (car) =>
                    car.car_details[0].transmission === selectedTransmission
            );
            setFilteredCars(filtered);
        }
    }, [selectedTransmission, cars]);

    if (!token) {
        return (
            <Row className="mt-4">
                <Col>
                    <h1 className="text-center">
                        Please login first to get cars data!
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

    function onClickTransmission(transmission) {
        return () => {
            setSelectedTransmission(transmission);
        };
    }

    return (
        <Row className="mt-5">
            <Row>
                <Col className="d-flex justify-content-between px-5 mb-4">
                    <Row>
                        <h3>List Cars</h3>
                    </Row>
                    {user.role_id === 1 && (
                        <Button
                            as={Link}
                            href={`/cars/create`}
                            style={{
                                transition: "all 0.3s",
                                backgroundColor: "#0d6efd",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "transparent")(
                                    (e.currentTarget.style.color = "#0d6efd")
                                )
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#0d6efd")(
                                    (e.currentTarget.style.color = "white")
                                )
                            }
                        >
                            + Add Cars
                        </Button>
                    )}
                </Col>
            </Row>
            <Col className="d-flex flex-row px-5 mb-4 gap-2">
                <Button
                    onClick={onClickTransmission("all")}
                    className="border border-primary"
                    style={{
                        transition: "all 0.3s",
                        backgroundColor:
                            selectedTransmission === "all"
                                ? "#0d6efd"
                                : "transparent",
                        color:
                            selectedTransmission === "all"
                                ? "#FFFFFF"
                                : "#0d6efd",
                    }}
                >
                    All
                </Button>
                <Button
                    onClick={onClickTransmission("Manual")}
                    className="border border-primary"
                    style={{
                        transition: "all 0.3s",
                        backgroundColor:
                            selectedTransmission === "Manual"
                                ? "#0d6efd"
                                : "transparent",
                        color:
                            selectedTransmission === "Manual"
                                ? "#FFFFFF"
                                : "#0d6efd",
                    }}
                >
                    Manual
                </Button>
                <Button
                    onClick={onClickTransmission("Automatic")}
                    className="border border-primary"
                    style={{
                        transition: "all 0.3s",
                        backgroundColor:
                            selectedTransmission === "Automatic"
                                ? "#0d6efd"
                                : "transparent",
                        color:
                            selectedTransmission === "Automatic"
                                ? "#FFFFFF"
                                : "#0d6efd",
                    }}
                >
                    Automatic
                </Button>
            </Col>
            <Row className="px-5">
                <Col>
                    <Row>
                        {filteredCars.length !== 0 &&
                            filteredCars.map((car) => (
                                <Col key={car.id} md={4}>
                                    <Card role="button">
                                        <Card.Body
                                            className="d-flex flex-column p-4"
                                            style={{ fontSize: "0.9rem" }}
                                        >
                                            <div className="ratio ratio-1x1 mb-3">
                                                <Image
                                                    src={
                                                        car?.car_details[0]
                                                            ?.image
                                                    }
                                                    alt={car.name}
                                                    fluid
                                                    className="align-self-center object-fit-cover"
                                                />
                                            </div>
                                            <Card.Text className="fw-bold fs-6">
                                                {car?.manufactures?.name}{" "}
                                                {car?.models?.model}
                                            </Card.Text>
                                            <Card.Text>
                                                <span className="fw-semibold">
                                                    Rp.{" "}
                                                    {
                                                        car.availability
                                                            ?.rent_perday
                                                    }{" "}
                                                    / hari
                                                </span>
                                            </Card.Text>
                                            <Card.Text>
                                                Transmission :{" "}
                                                <span className="fw-semibold">
                                                    {
                                                        car?.car_details[0]
                                                            ?.transmission
                                                    }
                                                </span>
                                            </Card.Text>
                                            <Card.Text>
                                                <span>Capacity: {"  "}</span>
                                                <span className="fw-semibold">
                                                    {
                                                        car.car_details[0]
                                                            ?.capacity
                                                    }{" "}
                                                    Person
                                                </span>
                                            </Card.Text>
                                            <Col className="d-flex gap-2">
                                                {user.role_id === 1 && (
                                                    <Button
                                                        as={Link}
                                                        href={`/cars/${car.id}`}
                                                        className="bg-transparent text-danger border border-danger fw-semibold d-flex justify-content-center align-content-center"
                                                        style={{
                                                            height: "2.5rem",
                                                            transition:
                                                                "all 0.3s",
                                                            width: "50%",
                                                        }}
                                                        onMouseEnter={(e) =>
                                                            (e.currentTarget.style.transform =
                                                                "scale(1.03)")
                                                        }
                                                        onMouseLeave={(e) =>
                                                            (e.currentTarget.style.transform =
                                                                "scale(1)")
                                                        }
                                                    >
                                                        <span>
                                                            <Image
                                                                src="/icons/trash.svg"
                                                                alt="trash--v1"
                                                                style={{
                                                                    height: "1rem",
                                                                    width: "1rem",
                                                                }}
                                                                className="me-1"
                                                            />
                                                        </span>
                                                        <p>Delete</p>
                                                    </Button>
                                                )}
                                                <Button
                                                    as={Link}
                                                    href={`/cars/${car.id}`}
                                                    className="text-white bg-success border border-success fw-semibold d-flex justify-content-center align-content-center"
                                                    style={{
                                                        height: "2.5rem",
                                                        transition: "all 0.3s",
                                                        width:
                                                            user.role_id === 1
                                                                ? "50%"
                                                                : "100%",
                                                    }}
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget.style.transform =
                                                            "scale(1.03)")
                                                    }
                                                    onMouseLeave={(e) =>
                                                        (e.currentTarget.style.transform =
                                                            "scale(1)")
                                                    }
                                                >
                                                    <span className="me-1">
                                                        <IoCarSharp className="" />
                                                    </span>
                                                    <p>Detail</p>
                                                </Button>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        {filteredCars.length === 0 && (
                            <Col className="align-self-center">
                                <h3>No Cars Available</h3>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Row>
    );
}
