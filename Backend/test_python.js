// test_python.js
const { spawn } = require("child_process");

// Replace 'python' with the path to your Python executable if necessary
// e.g., 'C:/Python39/python.exe' or 'python3'
const pythonProcess = spawn("C:Python312python.exe", ["test_script.py"]);

pythonProcess.stdout.on("data", (data) => {
  console.log(data.toString());
});

pythonProcess.stderr.on("data", (data) => {
  console.error("Error:", data.toString());
});

pythonProcess.on("close", (code) => {
  console.log(`Python script exited with code ${code}`);
});
