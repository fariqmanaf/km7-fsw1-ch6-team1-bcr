import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { getDetailCar } from "../../service/cars";
//import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import {
    setDetailsCar,
    setAvailabilityState,
} from "../../redux/slices/car_details";
import gsap from "gsap";
import { getManufactures } from "../../service/manufactures";
import { setSuccess } from "../../redux/slices/success";

export const Route = createLazyFileRoute("/cars/$id")({
  component: DetailsCar,
});

function DetailsCar() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const formRef = useRef(null);

    const { id } = Route.useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const year = new Date().getFullYear();

    const user = useSelector((state) => state.auth.user);
    const success = useSelector((state) => state.success.success);

    const token = useSelector((state) => state.auth.token);

    const previousDetails = useSelector(
        (state) => state.car_details.carDetails
    );
    const previousAvailability = useSelector(
        (state) => state.car_details.availability
    );

    const [isLoading, setIsLoading] = useState(false);
    const [manufactures, setManufactures] = useState([]);
    const [currentManufacture, setCurrentManufacture] = useState(
        previousDetails === null ? "" : previousDetails.manufacture_name
    );
    const [isNotFound, setIsNotFound] = useState(false);
    const [availability, setAvailability] = useState(
        previousAvailability === null ? [] : previousAvailability
    );
    const [carDetails, setCarDetails] = useState(
        previousDetails === null ? [] : previousDetails
    );
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        const getManufactureData = async () => {
            const result = await getManufactures();
            if (result.success) {
                setManufactures(result.data);
            }
        };
        if (token) {
            getManufactureData();
        }
    }, [token]);

    useEffect(() => {
        const getDetailCarData = async (id) => {
            setIsLoading(true);
            const result = await getDetailCar(id);
            if (result?.success) {
                {
                    previousAvailability === null &&
                        setAvailability({
                            id: result.data?.availability?.id,
                            available: result.data?.availability?.available,
                            rent_perday: result.data?.availability?.rent_perday,
                            available_at:
                                result.data?.availability?.available_at,
                        });
                }
                {
                    previousDetails === null &&
                        setCarDetails({
                            id: result.data?.car_details[0]?.id,
                            transmission:
                                result.data?.car_details[0]?.transmission,
                            capacity: result.data?.car_details[0]?.capacity,
                            description:
                                result.data?.car_details[0]?.description,
                            image: result.data?.car_details[0]?.image,
                            plate: result.data?.car_details[0]?.plate,
                            year: result.data?.car_details[0]?.year,
                            cars_id: result.data?.car_details[0]?.cars_id,
                            manufacture_id: result.data?.manufactures?.id,
                            manufacture_name: result.data?.manufactures?.name,
                        });
                }
                {
                    previousDetails === null &&
                        setCurrentManufacture(result.data?.manufactures?.name);
                }
                setImageURL(result.data?.car_details[0]?.image);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
            setIsLoading(false);
        };

        if (id) {
            getDetailCarData(id);
        }
    }, [id]);

    useLayoutEffect(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
        });
        gsap.from(imageRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.inOut",
        });
        gsap.from(formRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.inOut",
        });
    }, [isLoading]);

    if(success) {
        dispatch(setSuccess(false));
    };

    if (!token) {
        return (
            <Row
                style={{ height: "90vh" }}
                className="d-flex justify-content-center align-items-center"
            >
                <Col>
                    <h4 className="text-center">
                        Please login first to get cars data!
                    </h4>
                </Col>
            </Row>
        );
    }

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
            <Row
                style={{ height: "90vh" }}
                className="d-flex justify-content-center align-items-center"
            >
                <Col>
                    <h4 className="text-center">Car Is Not Found!</h4>
                </Col>
            </Row>
        );
    }

    function onClickForm(e) {
        e.preventDefault();

        dispatch(setDetailsCar(carDetails));
        dispatch(setAvailabilityState(availability));

        localStorage.setItem("carId", id);

        navigate({ to: `/cars/next-form` });
    }

    function onClickBack() {
        dispatch(setDetailsCar(null));
        dispatch(setAvailabilityState(null));
        localStorage.removeItem("carId");
        navigate({ to: "/cars" });
    }

    return (
        <Row
            className="d-flex flex justify-content-center align-items-center"
            style={{ height: "90vh" }}
            ref={containerRef}
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
            <Col
                md={5}
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    height: "100%",
                    padding: "1rem",
                }}
            >
                <div
                    ref={imageRef}
                    className="ratio ratio-1x1"
                    style={{
                        maxWidth: "25rem",
                        width: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "1rem",
                    }}
                >
                    <Image
                        src={imageURL}
                        fluid
                        className="object-fit-cover"
                        alt="Car Image"
                        style={{ borderRadius: "1rem" }}
                    />
                </div>
            </Col>

            <Col
                md={5}
                className="d-flex justify-content-center align-items-center"
            >
                <Form
                    style={{ width: "100%", maxWidth: "400px" }}
                    className="d-flex gap-2 flex-column"
                    ref={formRef}
                >
                    <h3 className="mb-4 text-center fw-bold">Car Details</h3>

                    <Form.Group
                        controlId="availability"
                        className="d-flex gap-2"
                    >
                        <div style={{ width: "40%" }}>
                            <Form.Label>Available</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                disabled={user?.role_id === 2}
                                onChange={(event) =>
                                    setAvailability({
                                        ...availability,
                                        available: event.target.value,
                                    })
                                }
                            >
                                <option id={1} disabled selected>
                                    {(availability.available === true ||
                                        availability.available === "true") &&
                                        "Available"}
                                    {(availability.available === false ||
                                        availability.available === "false") &&
                                        "Not Available"}
                                    {!availability.available &&
                                        "Select Availability"}
                                </option>
                                <option value={true}>Available</option>
                                <option value={false}>Not Available</option>
                            </Form.Select>
                        </div>
                        <div style={{ width: "35%" }}>
                            <Form.Label className="">Available At</Form.Label>
                            <Form.Control
                                type="date"
                                defaultValue={availability?.available_at || ""}
                                disabled={user?.role_id === 2}
                                onChange={(event) =>
                                    setAvailability({
                                        ...availability,
                                        available_at: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div style={{ width: "25%" }}>
                            <Form.Label className="">Rent / Day</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={availability.rent_perday || ""}
                                disabled={user?.role_id === 2}
                                onChange={(event) =>
                                    setAvailability({
                                        ...availability,
                                        rent_perday: event.target.value,
                                    })
                                }
                            />
                        </div>
                    </Form.Group>

                    <Form.Group
                        controlId="carDetails1"
                        className="d-flex gap-3"
                    >
                        <div style={{ width: "25%" }}>
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                disabled={user?.role_id === 2}
                                defaultValue={carDetails.capacity || 0}
                                onChange={(event) =>
                                    setCarDetails({
                                        ...carDetails,
                                        capacity: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div style={{ width: "35%" }}>
                            <Form.Label className="">Plate</Form.Label>
                            <Form.Control
                                type="text"
                                disabled={user?.role_id === 2}
                                defaultValue={carDetails.plate || "Your Plate"}
                                onChange={(event) =>
                                    setCarDetails({
                                        ...carDetails,
                                        plate: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div style={{ width: "40%" }}>
                            <Form.Label className="">Transmission</Form.Label>
                            <Form.Select
                                disabled={user?.role_id === 2}
                                onChange={(event) =>
                                    setCarDetails({
                                        ...carDetails,
                                        transmission: event.target.value,
                                    })
                                }
                            >
                                <option disabled selected>
                                    {carDetails.transmission || "Select Transmission"}
                                </option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group
                        controlId="carDetails2"
                        className="d-flex gap-3"
                    >
                        <div style={{ width: "30%" }}>
                            <Form.Label>Year</Form.Label>
                            <Form.Select
                                disabled={user?.role_id === 2}
                                onChange={(event) => {
                                    setCarDetails({
                                        ...carDetails,
                                        year: event.target.value,
                                    });
                                }}
                            >
                                <option disabled selected>
                                    {carDetails.year || "Select Year"}
                                </option>
                                {[...Array(5)].map((_, i) => (
                                    <option key={year - i} value={year - i}>
                                        {year - i}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <div style={{ width: "70%" }}>
                            <Form.Label>Manufactures</Form.Label>
                            <Form.Select
                                disabled={user?.role_id === 2}
                                onChange={(event) => {
                                    setCarDetails({
                                        ...carDetails,
                                        manufacture_id: event.target.value,
                                        manufacture_name:
                                            event.target.options[
                                                event.target.selectedIndex
                                            ].text,
                                    });
                                }}
                            >
                                <option disabled selected>
                                    {currentManufacture || "Select Manufacture"}
                                </option>
                                {manufactures.map((manufacture) => (
                                    <option
                                        key={manufacture.id}
                                        value={manufacture.id}
                                    >
                                        {manufacture.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="description" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            disabled={user?.role_id === 2}
                            style={{ fontSize: "0.9rem" }}
                            defaultValue={carDetails.description || ""}
                            placeholder="Enter a detailed description here"
                            onChange={(event) => {
                                setCarDetails({
                                    ...carDetails,
                                    description: event.target.value,
                                });
                            }}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        className="w-100"
                        onMouseEnter={() => {
                            gsap.to("#arrow-right", {
                                duration: 0.5,
                                x: 10,
                                ease: "power3.inOut",
                            });
                        }}
                        onMouseLeave={() => {
                            gsap.to("#arrow-right", {
                                duration: 0.5,
                                x: 0,
                                ease: "power3.inOut",
                            });
                        }}
                        onClick={onClickForm}
                    >
                        Next <FaArrowRight className="ms-2" id="arrow-right" />
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
