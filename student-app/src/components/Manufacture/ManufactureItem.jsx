import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "@tanstack/react-router";

const ManufactureItem = ({ manufacture }) => {
  return (
    <tr>
      <td>{manufacture?.id}</td>
      <td>{manufacture?.name}</td>
      <td>
        <Button
          as={Link}
          href={`/manufactures/edit/${manufacture?.id}`}
          variant="warning"
          className="me-2"
        >
          Edit
        </Button>
        <Button
          as={Link}
          href={`/manufactures/${manufacture?.id}`}
          variant="danger"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

ManufactureItem.propTypes = {
  manufacture: PropTypes.object.isRequired,
};

export default ManufactureItem;
