import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "@tanstack/react-router";

const OptionItem = ({ option, user }) => {
  return (
    <tr>
      <td>{option?.id}</td>
      <td>{option?.option}</td>
      <td>
        {user.role_id === 1 && (
          <>
            <Button
              as={Link}
              href={`/options/edit/${option?.id}`}
              variant="warning"
              className="me-2"
            >
              Edit
            </Button>
            <Button as={Link} href={`/options/${option?.id}`} variant="danger">
              Delete
            </Button>
          </>
        )}
        {user.role_id !== 1 && <></>}
      </td>
    </tr>
  );
};

OptionItem.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionItem;
