import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "@tanstack/react-router";

const SpecItem = ({ spec }) => {
  return (
    <tr>
      <td>{spec?.id }</td>
      <td>{spec?.spec }</td>
      <td>
        <Button
          as={Link}
          href={`/specs/edit/${spec?.id}`}
          variant="warning"
          className="me-2"
        >
          Edit
        </Button>
        <Button as={Link} href={`/specs/${spec?.id}`} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

SpecItem.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default SpecItem;
