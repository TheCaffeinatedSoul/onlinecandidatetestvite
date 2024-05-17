import { Dropdown, DropdownToggle } from "react-bootstrap";
import { LANGUAGE_NAMES, LANGUAGE_VERSIONS } from "../../messages/constants";
import { useSelector } from "react-redux";
import { responseSelector } from "../../redux/features/response/responseSlice";

const languages = Object.entries(LANGUAGE_VERSIONS);
const languageNames = LANGUAGE_NAMES;

export const LanguageSelector = ({ language, onSelect, questionId }) => {
  const response = useSelector(responseSelector);
  const codeLang = response.find((r) => r.queryId === questionId)
    ?.programmingAnswer?.PROGRAMMING_LANGUAGE;

  return (
    <div className="language-selector-block">
      <p>Language: </p>
      <Dropdown>
        <DropdownToggle variant="outline-primary">
          {codeLang ? languageNames[codeLang] : languageNames[language]}
        </DropdownToggle>
        <Dropdown.Menu>
          {languages.map(([lang, version]) => (
            <Dropdown.Item onClick={() => onSelect(lang)}>
              {languageNames[lang]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
