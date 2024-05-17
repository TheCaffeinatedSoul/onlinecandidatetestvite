import "./QuestionsComponent.css";
import PropTypes from "prop-types";

export const QuestionComponent = ({
  questionNumber,
  isActive,
  isAnswered,
  isFlagged,
  onClick,
}) => {
  return (
    <div
      className={`question-component ${isActive ? "clicked" : ""} 
      ${isAnswered ? "answered" : ""} ${isFlagged ? "flagged" : ""}
      `}
    >
      <div
        className={`question-component-content ${isActive ? "clicked" : ""} ${
          isAnswered ? "answered" : ""
        } ${isFlagged ? "flagged" : ""}`}
        onClick={onClick}
      >
        <h6>{questionNumber}</h6>
      </div>
    </div>
  );
};

QuestionComponent.propTypes = {
  questionNumber: PropTypes.number,
  isActive: PropTypes.bool,
  isAnswered: PropTypes.bool,
  isFlagged: PropTypes.bool,
  onClick: PropTypes.func,
};
