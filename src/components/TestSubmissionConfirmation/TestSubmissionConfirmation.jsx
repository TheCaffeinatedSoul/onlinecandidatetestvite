import {
  buttons,
  confirmationMessages,
  headers,
} from "../../messages/constants";
import "./styles.css";
import Lottie from "react-lottie";
import warningAnimation from "../../assets/Lottie/Warning.json";
import logo from "../../assets/Resources/4i_Blue Logo with GPTW-01-01.svg";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import PropTypes from "prop-types";

export const TestSubmissionConfirmation = ({ cancel, submit }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: warningAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  return (
    <div className="overlay-container-new">
      <div className="overlap-group-new">
        <div className="header">
          <img className="logo" alt="4i Logo" src={logo} />
          <p className="p-new">{headers.mainHeader}</p>
        </div>
        <div className="rectangle-new">
          <Lottie options={defaultOptions} height={160} width={160} />
        </div>
        <div className="div-new">{confirmationMessages.testSubmission}</div>
        <div className="text-wrapper-2-new">
          <ButtonComponent
            onClick={() => cancel()}
            name={buttons.cancel}
            variant={"outline-danger"}
          />
          <ButtonComponent
            variant={"outline-primary"}
            onClick={() => submit()}
            name={buttons.confirm}
          />
        </div>
      </div>
    </div>
  );
};

TestSubmissionConfirmation.propTypes = {
  cancel: PropTypes.func,
  submit: PropTypes.func,
};
