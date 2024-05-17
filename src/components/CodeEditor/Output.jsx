import { useState } from "react";
import { executeCode } from "../../api/api";
import { toast } from "sonner";
import { Button } from "react-bootstrap";
import { CgSpinner } from "react-icons/cg";

export const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log("Error in running code: ", error);
      toast.error({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-block">
      <p>Output</p>
      <Button
        variant={`${isError ? "outline-danger" : "outline-success"}`}
        onClick={runCode}
        disabled={isLoading}
        style={{ width: "8vw" }}
      >
        {isLoading ? <CgSpinner className="spinner-code-run" /> : "Run Code"}
      </Button>

      <div className={`output-container ${isError ? "error" : ""}`}>
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : "Click 'Run Code' to see the output"}
      </div>
    </div>
  );
};
