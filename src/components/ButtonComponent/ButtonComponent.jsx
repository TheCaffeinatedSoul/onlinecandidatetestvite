import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const ButtonComponent = ({
  type,
  classname,
  onClick,
  disabled,
  variant,
  name,
  component,
}) => {
  return (
    <Button
      type={type}
      className={classname}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      style={{ width: "12vw" }}
    >
      {name} {component}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.node,
};
