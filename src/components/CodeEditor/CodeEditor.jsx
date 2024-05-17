import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { Output } from "./Output";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  responseSelector,
  setResponse,
} from "../../redux/features/response/responseSlice";
import { LANGUAGE_NAMES } from "../../messages/constants";

export const CodeEditor = ({ questionId, section }) => {
  const editorRef = useRef();

  const dispatch = useDispatch();

  const response = useSelector(responseSelector);

  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    setValue(
      response.find((r) => r.queryId === questionId)?.programmingAnswer?.ANSWER
    );
    setLanguage(
      response.find((r) => r.queryId === questionId)?.programmingAnswer
        ?.PROGRAMMING_LANGUAGE || "java"
    );
  };

  const languageNames = LANGUAGE_NAMES;

  const onSelect = (language) => {
    setLanguage(language);
    dispatch(
      setResponse({
        queryId: questionId,
        sectionId: section,
        programmingAnswer: {
          PROGRAMMING_LANGUAGE: language,
          ANSWER: value,
        },
      })
    );
  };

  const handleChange = (value) => {
    setValue(value);
    dispatch(
      setResponse({
        queryId: questionId,
        sectionId: section,
        programmingAnswer: { PROGRAMMING_LANGUAGE: language, ANSWER: value },
      })
    );
  };

  return (
    <div className="code-editor">
      <div className="code-editor-block">
        <LanguageSelector
          language={language}
          onSelect={onSelect}
          questionId={questionId}
        />
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="75vh"
          width="50vw"
          theme="vs-dark"
          language={language}
          defaultValue={`Type ${languageNames[language]} program here`}
          onMount={onMount}
          value={
            response.find((r) => r.queryId === questionId)?.programmingAnswer
              ?.ANSWER || value
          }
          onChange={(value) => handleChange(value)}
        />
      </div>
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};
