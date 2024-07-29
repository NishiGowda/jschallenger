import React, { useState } from 'react';

const CodeRunner = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    let capturedOutput = '';
    const originalConsoleLog = console.log;
    
    console.log = (message) => {
      capturedOutput += message + '\n';
    };

    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      if (capturedOutput === '') {
        capturedOutput = result !== undefined ? result.toString() : 'No output';
      }
    } catch (error) {
      capturedOutput = `Error: ${error.message}`;
    }

    setOutput(capturedOutput);
    console.log = originalConsoleLog;
  };

  return (
    <div className="code-runner">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Type your JavaScript code here..."
        rows={10}
        cols={50}
        className="code-input"
      />
      <button onClick={runCode} className="run-button">
        Run
      </button>
      <div className="output-container">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeRunner;
