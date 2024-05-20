import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { buttons } from "../../messages/constants";
import "./style.css";

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
    <div>
      {name === buttons.previousButton ||
      name === buttons.gobackButton ||
      name === buttons.cancel ? (
        <Button
          type={type}
          className={`button ${classname}`}
          onClick={onClick}
          disabled={disabled}
          variant={variant}
          style={{ width: "12vw" }}
        >
          {component}
          {name}
        </Button>
      ) : (
        <Button
          type={type}
          className={`button ${classname}`}
          onClick={onClick}
          disabled={disabled}
          variant={variant}
          style={{ width: "12vw" }}
        >
          {name}
          {component}
        </Button>
      )}
    </div>
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
