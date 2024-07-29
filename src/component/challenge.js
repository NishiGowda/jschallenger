// import React, { useState } from 'react';

// const Challenge = () => {
//   const [code, setCode] = useState(`// Write your function here
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Test your function
// console.log(reverseString('hello')); // Expected output: 'olleh'`);
//   const [output, setOutput] = useState('');

//   const runCode = () => {
//     try {
//       // eslint-disable-next-line no-new-func
//       const userFunction = new Function(code + '; return reverseString;');
//       const reverseString = userFunction();

//       const testCases = ['hello', 'world', 'JavaScript', 'OpenAI'];
//       let result = '';
//       testCases.forEach(testCase => {
//         const res = reverseString(testCase);
//         const expectedResult = testCase.split('').reverse().join('');
//         result += `reverseString('${testCase}') = '${res}' (Expected: '${expectedResult}')\n`;
//       });
//       setOutput(result);
//     } catch (error) {
//       setOutput('Error: ' + error.message);
//     }
//   };

//   return (
//     <div className="challenge">
//       <h2>Challenge 1</h2>
//       <p>Write a function that takes a string and returns it reversed.</p>
//       <textarea
//         rows="10"
//         cols="50"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       ></textarea>
//       <br />
//       <button onClick={runCode}>Run Code</button>
//       <pre className="output">{output}</pre>
//     </div>
//   );
// };

// export default Challenge;


// import React, { useState } from 'react';

// const CodeRunner = () => {
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');

//   const runCode = () => {
//     try {
//       // eslint-disable-next-line no-eval
//       const result = eval(code);
//       setOutput(result !== undefined ? result.toString() : 'No output');
//     } catch (error) {
//       setOutput(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="code-runner">
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         placeholder="Type your JavaScript code here..."
//         rows={10}
//         cols={50}
//         className="code-input"
//       />
//       <button onClick={runCode} className="run-button">
//         Run
//       </button>
//       <div className="output-container">
//         <h3>Output:</h3>
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// };

// export default CodeRunner;



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
