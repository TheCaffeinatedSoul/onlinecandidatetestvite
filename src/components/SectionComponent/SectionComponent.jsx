import "./SectionComponent.css";
import PropTypes from "prop-types";

export const SectionComponent = ({
  sectionName,
  topicName,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`section-component ${isActive ? "clicked" : ""}`}
      onClick={onClick}
    >
      <h6>{sectionName}</h6>
      <h6 className="topic-name">{topicName}</h6>
    </div>
  );
};

SectionComponent.propTypes = {
  sectionName: PropTypes.string,
  topicName: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
